import { MessageCircle } from "lucide-react";
import { functionalGroups } from "../content/functional";
import type { FunctionalPhrase, Register } from "../content/types";
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

function FunctionalPhraseCard({ item: p }: { item: FunctionalPhrase }) {
  const reg = p.register ? REGISTER_META[p.register] : null;
  return (
    <div className="card flex flex-col p-4">
      <div className="flex items-start justify-between gap-2">
        <p className="font-display text-base font-semibold text-fg">{p.phrase}</p>
        <LevelBadge level={p.level} />
      </div>
      {reg && (
        <span className={`mt-1.5 inline-flex w-fit rounded-md px-1.5 py-0.5 text-xs font-medium ${reg.className}`}>
          {reg.label}
        </span>
      )}
      <p className="mt-2 text-sm font-semibold text-brand-600 dark:text-brand-400">🇦🇿 {p.azUse}</p>
      <p className="mt-1 text-sm text-muted">{p.use}</p>
      <p className="mt-1.5 text-sm italic text-faint">"{p.example}"</p>
    </div>
  );
}

export const functionalSection = createSection<FunctionalPhrase>({
  key: "functional",
  nav: { label: "Phrases", icon: MessageCircle },
  hero: {
    kicker: "Functional Phrases · Gündəlik ifadələr",
    title: "Hər situasiya üçün hazır ifadələr",
    subtitle:
      "'Language for…' — fikir bildir, razılaş/etiraz et, xahiş et, üzr istə, email yaz. Funksiyaya görə qruplanıb; hər ifadənin ƏTRAFLI Azərbaycanca izahı və üslubu var.",
  },
  unitAz: "ifadə",
  groups: functionalGroups,
  ItemCard: FunctionalPhraseCard,
  itemKey: (p) => p.phrase,
});
