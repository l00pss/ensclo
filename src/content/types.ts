// ---------------------------------------------------------------------------
// Content data model for Ensclo
//
// Hər topic strukturlaşdırılmış data-dır ki, app onu avtomatik UI-yə,
// flashcard-a və quiz-ə çevirə bilsin.
//
// Yeni topic əlavə etmək (3 addım):
//   1. topics/ altında bu tipə uyğun fayl yarat (id = fayl adı).
//   2. content/index.ts barrel-inə idxal et və siyahıya əlavə et.
//   3. `npm run manifest` çağır (yüngül siyahını yenilə) — `npm run build`
//      bunu onsuz da avtomatik edir.
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

/**
 * Yüngül topic metadatası — siyahı, filtr və statistikalar üçün.
 * Tam `Topic`-i (oxu mətni, quiz, lüğət…) yükləmədən minlərlə topic-i
 * göstərə bilmək üçün `scripts/generate-manifest.ts` build vaxtı yaradır.
 */
export interface TopicMeta {
  id: string;
  level: Level;
  title: string;
  theme: string;
  summary: string;
  /** `vocabulary.length` — kartda "N words" göstərmək üçün. */
  vocabCount: number;
  /** `quiz.length` — kartda "N quiz" göstərmək üçün. */
  quizCount: number;
}
