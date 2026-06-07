import { useState } from "react";
import { Check, ChevronLeft, ChevronRight, RotateCw } from "lucide-react";
import type { VocabItem } from "../content/types";

interface Props {
  items: VocabItem[];
  learned: Set<string>;
  onToggleLearned: (word: string) => void;
}

export default function Flashcards({ items, learned, onToggleLearned }: Props) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = items[index];
  const isLearned = learned.has(card.word);

  const go = (delta: number) => {
    setFlipped(false);
    setIndex((i) => (i + delta + items.length) % items.length);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-3 h-1.5 w-full max-w-md overflow-hidden rounded-full bg-surface-2">
        <div
          className="h-full rounded-full bg-brand-600 transition-all"
          style={{ width: `${((index + 1) / items.length) * 100}%` }}
        />
      </div>

      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        aria-label={flipped ? "Sözü göstər" : "Tərifi göstər"}
        className="flex min-h-[230px] w-full max-w-md flex-col items-center justify-center rounded-2xl border border-line bg-surface p-8 text-center shadow-card transition hover:shadow-card-hover"
      >
        {!flipped ? (
          <div className="animate-pop">
            <span className="font-display text-3xl font-bold text-fg">{card.word}</span>
            <span className="mt-3 flex items-center justify-center gap-1.5 text-xs text-faint">
              <RotateCw size={13} /> klik et — çevir
            </span>
          </div>
        ) : (
          <div className="animate-pop space-y-2.5">
            <p className="text-fg/90">{card.definition}</p>
            <p className="text-sm italic text-muted">"{card.example}"</p>
            {card.azNote && (
              <p className="text-sm font-medium text-brand-600 dark:text-brand-400">
                🇦🇿 {card.azNote}
              </p>
            )}
            {card.collocations && (
              <p className="text-xs text-faint">{card.collocations.join(" · ")}</p>
            )}
          </div>
        )}
      </button>

      <div className="mt-4 flex w-full max-w-md items-center justify-between gap-3">
        <NavBtn onClick={() => go(-1)} aria="Əvvəlki">
          <ChevronLeft size={20} />
        </NavBtn>

        <button
          type="button"
          onClick={() => onToggleLearned(card.word)}
          aria-pressed={isLearned}
          className={`flex flex-1 items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
            isLearned
              ? "bg-emerald-100 text-emerald-700 ring-1 ring-inset ring-emerald-600/20 dark:bg-emerald-500/15 dark:text-emerald-300"
              : "bg-surface-2 text-muted hover:brightness-95"
          }`}
        >
          {isLearned ? (
            <>
              <Check size={16} /> Öyrənildi
            </>
          ) : (
            "Öyrəndim kimi işarələ"
          )}
        </button>

        <NavBtn onClick={() => go(1)} aria="Növbəti">
          <ChevronRight size={20} />
        </NavBtn>
      </div>

      <p className="mt-3 text-sm text-faint tnum">
        {index + 1} / {items.length} · {learned.size} öyrənildi
      </p>
    </div>
  );
}

function NavBtn({
  onClick,
  children,
  aria,
}: {
  onClick: () => void;
  children: React.ReactNode;
  aria: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={aria}
      className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-surface text-muted shadow-sm transition hover:bg-surface-2"
    >
      {children}
    </button>
  );
}
