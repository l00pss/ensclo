// Generik "reference" domain tipləri (React-dən asılı DEYİL).
// Connectors/Grammar/Idioms/Functional data-sı bunlara uyğun gəlir.
// Presentation tərəfi (ReferenceSection, kartlar) `src/sections/`-dədir.
import type { LucideIcon } from "lucide-react";
import type { Level, QuizQuestion } from "./types";

/** Hər reference maddəsinin minimal şərti — səviyyə filtri üçün `level`. */
export interface ReferenceItem {
  level: Level;
}

/** Generik qrup (= bir connector funksiyası, bir grammar kateqoriyası, ...). */
export interface ReferenceGroup<TItem extends ReferenceItem> {
  id: string;
  /** İngiliscə başlıq. */
  label: string;
  /** Azərbaycanca başlıq. */
  azLabel: string;
  icon: LucideIcon;
  /** İngiliscə qısa izah. */
  description: string;
  /** Azərbaycanca ƏTRAFLI izah. */
  azDescription: string;
  items: TItem[];
  practice: QuizQuestion[];
}
