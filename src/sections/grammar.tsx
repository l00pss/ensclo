import { AlertTriangle, GraduationCap, Workflow } from "lucide-react";
import { grammarGroups, GRAMMAR_META } from "../content/grammar";
import type { GrammarRule } from "../content/types";
import LevelBadge from "../components/LevelBadge";
import { createSection, type ReferenceGroup } from "./types";

function RuleCard({ item: r }: { item: GrammarRule }) {
  return (
    <div className="card flex flex-col p-4">
      <div className="flex items-start justify-between gap-2">
        <p className="font-display text-lg font-semibold text-fg">{r.title}</p>
        <LevelBadge level={r.level} />
      </div>
      {r.form && (
        <p className="mt-2 flex items-start gap-1.5 rounded-xl bg-surface-2 px-2.5 py-2 font-mono text-xs text-muted">
          <Workflow size={13} className="mt-0.5 shrink-0 text-faint" />
          {r.form}
        </p>
      )}
      <p className="mt-2 text-sm text-muted">{r.explanation}</p>
      <p className="mt-1.5 text-sm font-semibold text-brand-600 dark:text-brand-400">
        🇦🇿 {r.azNote}
      </p>
      <ul className="mt-2 space-y-1.5">
        {r.examples.map((ex) => (
          <li key={ex.en} className="text-sm">
            <span className="italic text-faint">"{ex.en}"</span>
            {ex.note && <span className="ml-1 text-xs text-muted">— {ex.note}</span>}
          </li>
        ))}
      </ul>
      {r.pitfall && (
        <p className="mt-2 flex items-start gap-1.5 rounded-xl bg-amber-50 px-2.5 py-2 text-xs text-amber-800 dark:bg-amber-500/10 dark:text-amber-200">
          <AlertTriangle size={13} className="mt-0.5 shrink-0" />
          {r.pitfall}
        </p>
      )}
    </div>
  );
}

// Adapter: mövcud `grammarGroups` + `GRAMMAR_META` → generik ReferenceGroup.
const groups: ReferenceGroup<GrammarRule>[] = grammarGroups.map((g) => {
  const meta = GRAMMAR_META[g.id];
  return {
    id: g.id,
    label: meta.label,
    azLabel: meta.azLabel,
    icon: meta.icon,
    description: g.description,
    azDescription: g.azDescription,
    items: g.rules,
    practice: g.practice,
  };
});

export const grammarSection = createSection<GrammarRule>({
  key: "grammar",
  nav: { label: "Grammar", icon: GraduationCap },
  hero: {
    kicker: "Grammar · Qrammatika",
    title: "Qaydaları bir yerdə öyrən",
    subtitle:
      "Əsas qrammatika kateqoriyaya görə qruplanıb. Hər qrupda qaydanın strukturu, səviyyə (B1–C1), nümunələr, tez-tez edilən səhvlər (pitfall) və practice var.",
  },
  unitAz: "qayda",
  groups,
  ItemCard: RuleCard,
  itemKey: (r) => r.title,
});
