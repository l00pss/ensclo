// ---------------------------------------------------------------------------
// App-ın content üçün YEGANƏ giriş nöqtəsi.
//
// Vacib: bütün topic-ləri statik idxal edən `index.ts` barrel-ini DEYİL, bunu
// idxal et. Bu modul yalnız yüngül metadata (`manifest.generated`) + lazy
// loader gətirir, ona görə ana bundle dərs məzmunu ilə şişmir.
// ---------------------------------------------------------------------------
import type { Level, TopicMeta } from "./types";
import { topicMeta } from "./manifest.generated";

export type { TopicMeta };
export { topicMeta };
export { loadTopic, hasTopic } from "./loader";

export const LEVELS: Level[] = ["B1", "B2", "C1"];

/** id → metadata, O(1) axtarış (siyahıda `.find` əvəzinə). */
export const metaById: Map<string, TopicMeta> = new Map(
  topicMeta.map((m) => [m.id, m]),
);

/** Filtr üçün unikal mövzu (theme) siyahısı — metadatadan törənir. */
export function getThemes(): string[] {
  return Array.from(new Set(topicMeta.map((m) => m.theme))).sort();
}
