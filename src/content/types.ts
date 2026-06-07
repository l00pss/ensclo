// ---------------------------------------------------------------------------
// Content data model for Ensclo
//
// Hər topic strukturlaşdırılmış data-dır ki, app onu avtomatik UI-yə,
// flashcard-a və quiz-ə çevirə bilsin. Yeni topic əlavə etmək üçün sadəcə
// bu tipə uyğun bir obyekt yaradıb content/index.ts-də siyahıya əlavə et.
// ---------------------------------------------------------------------------

export type Level = "B1" | "B2" | "C1";

/** Bir lüğət vahidi: söz + İNGİLİSCƏ tərif + nümunə + AZ qeyd. */
export interface VocabItem {
  word: string;
  /** Tərif HƏMİŞƏ İngiliscə — ingiliscə düşünməyə kömək edir. */
  definition: string;
  /** Sözün təbii işləndiyi nümunə cümlə. */
  example: string;
  /** Tez-tez birlikdə işlənən sözlər (collocations), məs. "make a decision". */
  collocations?: string[];
  /** Yalnız çətin/qarışıq sözlər üçün qısa Azərbaycanca qeyd. */
  azNote?: string;
}

/** Səviyyəyə uyğun bir qrammatika nöqtəsi. */
export interface GrammarFocus {
  /** Qaydanın adı, məs. "Present Perfect vs Past Simple". */
  point: string;
  /** İngiliscə izah. */
  explanation: string;
  /** Azərbaycanca qısa izah (qrammatikada AZ qeyd çox faydalıdır). */
  azNote: string;
  /** Doğru/səhv nümunələr. */
  examples: { en: string; note?: string }[];
}

/** Oxu mətni + anlama sualları. */
export interface ReadingSection {
  title: string;
  text: string;
  questions: QuizQuestion[];
}

/** İnteraktiv tapşırıq tipləri. */
export type QuizQuestion =
  | {
      type: "multiple-choice";
      prompt: string;
      options: string[];
      /** Düzgün cavabın `options`-dakı indeksi. */
      answer: number;
      explanation?: string;
    }
  | {
      type: "gap-fill";
      /** "I ___ to London last year." kimi — ___ boşluqdur. */
      prompt: string;
      answer: string;
      /** Qəbul edilən alternativ cavablar (kiçik hərflə müqayisə olunur). */
      accept?: string[];
      explanation?: string;
    };

/** Bütöv bir dərs (topic). */
export interface Topic {
  id: string;
  level: Level;
  /** Başlıq, məs. "Travel & Tourism". */
  title: string;
  /** Mövzu kateqoriyası (filter üçün), məs. "Travel", "Work". */
  theme: string;
  /** Qısa təsvir / nə öyrənəcəyik. */
  summary: string;
  /** Mövzuya giriş sualları (lead-in, danışıq üçün). */
  leadIn: string[];
  vocabulary: VocabItem[];
  grammar: GrammarFocus;
  reading: ReadingSection;
  /** Danışıq tapşırıqları. */
  speaking: string[];
  /** Yazı tapşırığı. */
  writing: { task: string; minWords?: number };
  /** Lüğət + qrammatika üzrə qarışıq quiz. */
  quiz: QuizQuestion[];
}
