import type { Topic } from "./types";
import { topicMeta } from "./manifest.generated";

// ---------------------------------------------------------------------------
// Tam topic məzmununun "lazy" yüklənməsi.
//
// `import.meta.glob` Vite-a hər topic faylını AYRI bir chunk kimi build etməyi
// deyir; fayl yalnız həmin dərs açılanda şəbəkədən gəlir. Beləcə 10 000 dərs
// olsa belə, başlanğıc bundle-a yalnız manifest (yüngül metadata) düşür,
// dərs mətnləri yox.
// ---------------------------------------------------------------------------

// `eager: false` (default) → dəyər: () => Promise<module>. Hər biri öz chunk-ı.
const modules = import.meta.glob("./topics/*.ts");

// id → loader (O(1) axtarış). Açar yolu: "./topics/b1-travel.ts" → "b1-travel".
const loaders = new Map<string, () => Promise<unknown>>();
for (const [path, load] of Object.entries(modules)) {
  const id = path.replace(/^\.\/topics\//, "").replace(/\.ts$/, "");
  loaders.set(id, load);
}

// Bir dəfə yüklənən dərsi yaddaşda saxla — eyni dərsə qayıdışda yenidən fetch yox.
const cache = new Map<string, Topic>();

/** Verilmiş id-li dərsi (tam məzmunu ilə) yüklə. Yoxdursa `undefined`. */
export async function loadTopic(id: string): Promise<Topic | undefined> {
  const cached = cache.get(id);
  if (cached) return cached;

  const load = loaders.get(id);
  if (!load) return undefined;

  const mod = (await load()) as Record<string, Topic>;
  // Hər topic faylı tək bir obyekt export edir (məs. `export const b1Travel`).
  const topic = (mod.default ?? Object.values(mod)[0]) as Topic | undefined;
  if (topic) cache.set(id, topic);
  return topic;
}

/** Bu id üçün dərs faylı varmı? (Tam yükləmədən, sinxron.) */
export function hasTopic(id: string): boolean {
  return loaders.has(id);
}

// DEV-də manifest ↔ fayllar uyğunsuzluğunu erkən tut (məs. fayl əlavə edildi,
// amma `npm run manifest` çağırılmadı — ya da əksinə).
if (import.meta.env.DEV) {
  const fileIds = new Set(loaders.keys());
  const metaIds = new Set(topicMeta.map((m) => m.id));
  for (const id of metaIds)
    if (!fileIds.has(id))
      console.warn(`[content] manifest "${id}" tələb edir, amma topic faylı yoxdur`);
  for (const id of fileIds)
    if (!metaIds.has(id))
      console.warn(`[content] "${id}" faylı manifestdə yoxdur — \`npm run manifest\` çağır`);
}
