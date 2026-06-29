import { AlertTriangle, MapPin, Spline } from "lucide-react";
import { connectorGroups, FUNCTION_META } from "../content/connectors";
import type { Connector, Register } from "../content/types";
import LevelBadge from "../components/LevelBadge";
import { createSection, type ReferenceGroup } from "./types";

const REGISTER_META: Record<Register, { label: string; className: string }> = {
  neutral: { label: "neutral", className: "bg-surface-2 text-muted" },
  formal: {
    label: "formal",
    className: "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300",
  },
  informal: {
    label: "informal",
    className: "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
  },
  academic: {
    label: "academic",
    className: "bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300",
  },
};

function ConnectorCard({ item: c }: { item: Connector }) {
  const reg = c.register ? REGISTER_META[c.register] : null;
  return (
    <div className="card flex flex-col p-4">
      <div className="flex items-start justify-between gap-2">
        <p className="font-display text-lg font-semibold text-fg">{c.phrase}</p>
        <LevelBadge level={c.level} />
      </div>
      <p className="mt-1 text-sm font-semibold text-brand-600 dark:text-brand-400">
        🇦🇿 {c.azMeaning}
      </p>
      {reg && (
        <span className={`mt-1.5 inline-flex w-fit rounded-md px-1.5 py-0.5 text-xs font-medium ${reg.className}`}>
          {reg.label}
        </span>
      )}
      <p className="mt-2 text-sm text-muted">{c.meaning}</p>
      <p className="mt-1.5 text-sm italic text-faint">"{c.example}"</p>
      {c.position && (
        <p className="mt-2 flex items-start gap-1.5 text-xs text-muted">
          <MapPin size={13} className="mt-0.5 shrink-0 text-faint" />
          {c.position}
        </p>
      )}
      {c.synonyms && c.synonyms.length > 0 && (
        <p className="mt-2 flex flex-wrap gap-1.5">
          {c.synonyms.map((s) => (
            <span key={s} className="rounded-md bg-surface-2 px-1.5 py-0.5 text-xs text-muted">
              {s}
            </span>
          ))}
        </p>
      )}
      {c.pitfall && (
        <p className="mt-2 flex items-start gap-1.5 rounded-xl bg-amber-50 px-2.5 py-2 text-xs text-amber-800 dark:bg-amber-500/10 dark:text-amber-200">
          <AlertTriangle size={13} className="mt-0.5 shrink-0" />
          {c.pitfall}
        </p>
      )}
      {c.azNote && (
        <p className="mt-2 text-xs font-medium text-brand-600 dark:text-brand-400">🇦🇿 {c.azNote}</p>
      )}
    </div>
  );
}

// Adapter: mövcud `connectorGroups` + `FUNCTION_META` → generik ReferenceGroup.
// Data faylları (connectors/*.ts) dəyişmir; yalnız burada uyğunlaşdırılır.
const groups: ReferenceGroup<Connector>[] = connectorGroups.map((g) => {
  const meta = FUNCTION_META[g.id];
  return {
    id: g.id,
    label: meta.label,
    azLabel: meta.azLabel,
    icon: meta.icon,
    description: g.description,
    azDescription: g.azDescription,
    items: g.connectors,
    practice: g.practice,
  };
});

export const connectorSection = createSection<Connector>({
  key: "connectors",
  nav: { label: "Connectors", icon: Spline },
  hero: {
    kicker: "Connectors · Bağlayıcılar",
    title: "Fikirləri bir-birinə bağla",
    subtitle:
      "Linking words — fikirləri əlavə et, ziddiyyət bildir, nəticə çıxar. Funksiyaya görə qruplanıb; hər qrupda səviyyə (B1–C1), üslub (formal/informal) və sık edilən səhvlər var.",
  },
  unitAz: "ifadə",
  groups,
  ItemCard: ConnectorCard,
  itemKey: (c) => c.phrase,
});
