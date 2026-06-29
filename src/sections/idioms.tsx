import { Quote } from "lucide-react";
import { idiomGroups } from "../content/idioms";
import type { Idiom, Register } from "../content/types";
import LevelBadge from "../components/LevelBadge";
import { createSection } from "./types";

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

function IdiomCard({ item: idiom }: { item: Idiom }) {
  const reg = idiom.register ? REGISTER_META[idiom.register] : null;
  return (
    <div className="card flex flex-col p-4">
      <div className="flex items-start justify-between gap-2">
        <p className="font-display text-lg font-semibold text-fg">{idiom.idiom}</p>
        <LevelBadge level={idiom.level} />
      </div>
      <p className="mt-1 text-sm font-semibold text-brand-600 dark:text-brand-400">
        🇦🇿 {idiom.azMeaning}
      </p>
      {reg && (
        <span className={`mt-1.5 inline-flex w-fit rounded-md px-1.5 py-0.5 text-xs font-medium ${reg.className}`}>
          {reg.label}
        </span>
      )}
      <p className="mt-2 text-sm text-muted">{idiom.meaning}</p>
      <p className="mt-1.5 text-sm italic text-faint">"{idiom.example}"</p>
      {idiom.azNote && (
        <p className="mt-2 text-xs font-medium text-brand-600 dark:text-brand-400">🇦🇿 {idiom.azNote}</p>
      )}
    </div>
  );
}

export const idiomsSection = createSection<Idiom>({
  key: "idioms",
  nav: { label: "Idioms", icon: Quote },
  hero: {
    kicker: "Idioms · İdiomlar",
    title: "Təbii danışığın açarı",
    subtitle:
      "Sabit ifadələr və idiomlar mövzuya görə qruplanıb. Hər birində İngiliscə məna, ƏTRAFLI Azərbaycanca izah, təbii nümunə və üslub (formal/informal) var.",
  },
  unitAz: "idiom",
  groups: idiomGroups,
  ItemCard: IdiomCard,
  itemKey: (idiom) => idiom.idiom,
});
