// ---------------------------------------------------------------------------
// SRS planlayıcı — SM-2-nin sadələşdirilmiş variantı. TAM SAF funksiyalar
// (React/localStorage-dan asılı deyil), ona görə asan test olunur və UI-dan
// ayrıdır (Single Responsibility).
// ---------------------------------------------------------------------------
import type { SrsCardState } from "../store/progress";

/** İstifadəçinin kartı necə xatırladığı. */
export type Grade = "again" | "hard" | "good" | "easy";

const MIN_EASE = 1.3;
const clampEase = (e: number) => Math.max(MIN_EASE, Math.round(e * 100) / 100);

/** "YYYY-MM-DD" tarixinə gün əlavə et (yerli). */
export function addDays(dateKey: string, days: number): string {
  const d = new Date(`${dateKey}T00:00:00`);
  d.setDate(d.getDate() + days);
  return d.toLocaleDateString("en-CA");
}

/** Yeni (heç görülməmiş) kartın başlanğıc vəziyyəti. */
export function newCard(today: string): SrsCardState {
  return { ease: 2.5, intervalDays: 0, reps: 0, due: today, lapses: 0 };
}

/** Kart bu gün (və ya əvvəl) təkrara hazırdırmı? */
export function isDue(card: SrsCardState, today: string): boolean {
  return card.due <= today;
}

/** Qiymətə görə kartın növbəti vəziyyətini hesabla (saf). */
export function schedule(card: SrsCardState, grade: Grade, today: string): SrsCardState {
  if (grade === "again") {
    // Səhv: intervalı sıfırla, asanlığı azalt, bu gün yenidən gəlsin.
    return {
      ease: clampEase(card.ease - 0.2),
      intervalDays: 0,
      reps: 0,
      due: today,
      lapses: card.lapses + 1,
    };
  }

  let ease = card.ease;
  let interval: number;

  if (grade === "hard") {
    ease = clampEase(card.ease - 0.15);
    interval = Math.max(1, Math.round((card.intervalDays || 1) * 1.2));
  } else {
    if (grade === "easy") ease = clampEase(card.ease + 0.15);
    if (card.reps === 0) interval = grade === "easy" ? 2 : 1;
    else if (card.reps === 1) interval = grade === "easy" ? 4 : 3;
    else interval = Math.round(card.intervalDays * ease * (grade === "easy" ? 1.3 : 1));
  }

  interval = Math.max(1, interval);
  return {
    ease,
    intervalDays: interval,
    reps: card.reps + 1,
    due: addDays(today, interval),
    lapses: card.lapses,
  };
}

/** Qiymət düymələri üçün metadata (UI). */
export const GRADES: { grade: Grade; label: string; className: string }[] = [
  { grade: "again", label: "Yenidən", className: "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-300" },
  { grade: "hard", label: "Çətin", className: "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300" },
  { grade: "good", label: "Yaxşı", className: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300" },
  { grade: "easy", label: "Asan", className: "bg-brand-100 text-brand-700 dark:bg-brand-500/15 dark:text-brand-300" },
];
