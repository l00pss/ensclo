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

// ---------------------------------------------------------------------------
// Connectors / linking words (Bağlayıcılar)
//
// Topic-lərdən FƏRQLİ olaraq bunlar bir mövzuya bağlı deyil — bütün mətnlərin
// içindən keçən, FUNKSİYAYA görə qruplanmış istinad qaynağıdır (addition,
// contrast, ...). Data azdır və sərhədlidir, ona görə lazy-load/manifest YOX —
// `connectors.ts` barrel-i hamısını birbaşa (eager) idxal edir.
// ---------------------------------------------------------------------------

/** Bağlayıcının funksiyası — qruplaşmanın açarı. */
export type ConnectorFunction =
  | "addition"
  | "contrast"
  | "cause"
  | "result"
  | "purpose"
  | "sequence"
  | "example"
  | "comparison"
  | "clarification"
  | "conclusion"
  | "opinion"
  | "emphasis"
  | "attribution"
  | "condition";

/** Üslub registri — B2/C1-də "what's more" (informal) ≠ "furthermore" (academic). */
export type Register = "neutral" | "formal" | "informal" | "academic";

/** Bir bağlayıcı ifadə. */
export interface Connector {
  /** İfadənin özü, məs. "in addition". */
  phrase: string;
  level: Level;
  /** İngiliscə qısa məna/izah. */
  meaning: string;
  /** İfadənin qısa Azərbaycanca TƏRCÜMƏSİ, məs. "üstəlik, əlavə olaraq". */
  azMeaning: string;
  /** Təbii nümunə cümlə — `phrase` cümlənin içində GERÇƏK işlənməlidir. */
  example: string;
  register?: Register;
  /** Qrammatik mövqe, məs. "Cümlə başı, sonra vergül". */
  position?: string;
  /** Yaxın mənalı alternativlər (söz ailəsi). */
  synonyms?: string[];
  /** Tez-tez edilən səhv, məs. "despite ≠ although". */
  pitfall?: string;
  /** Əlavə Azərbaycanca İSTİFADƏ qeydi (tərcümə yox — o, `azMeaning`-dədir). */
  azNote?: string;
}

/** Bir funksiya qrupu (= addition, contrast, ...). Bir fayl = bir qrup. */
export interface ConnectorGroup {
  id: ConnectorFunction;
  /** İngiliscə: bu funksiya nə vaxt işlənir. */
  description: string;
  /** Azərbaycanca qısa izah. */
  azDescription: string;
  connectors: Connector[];
  /** Qrup üzrə tapşırıq (mövcud `Quiz` komponenti ilə işlənir). */
  practice: QuizQuestion[];
}

// ---------------------------------------------------------------------------
// Grammar (Qrammatika) — müstəqil arayış bölməsi.
//
// Connectors kimi: data sərhədlidir və mövzuya bağlı deyil, ona görə eager
// idxal — `grammar.ts` barrel-i bütün kateqoriyaları birbaşa gətirir. Topic-in
// içindəki `GrammarFocus` bir dərsə bağlıdır; bu isə kateqoriyalara bölünmüş,
// axtarıla bilən tam arayışdır. Bir fayl = bir kateqoriya.
// ---------------------------------------------------------------------------

/** Qrammatika kateqoriyası — qruplaşmanın açarı (bir fayl = bir kateqoriya). */
export type GrammarCategory =
  | "tenses"
  | "articles"
  | "quantifiers"
  | "comparatives"
  | "adjectives-adverbs"
  | "questions"
  | "modals"
  | "habits"
  | "gerund-infinitive"
  | "passive"
  | "causative"
  | "conditionals"
  | "wishes"
  | "relative-clauses"
  | "reported-speech"
  | "prepositions"
  | "phrasal-verbs"
  | "advanced";

/** Bir qrammatika qaydası (kateqoriya daxilində bir nöqtə). */
export interface GrammarRule {
  /** Qaydanın adı, məs. "Present Perfect". */
  title: string;
  level: Level;
  /** İngiliscə izah — nə vaxt və niyə işlənir. */
  explanation: string;
  /** Azərbaycanca qısa izah (qrammatikada AZ qeyd çox faydalıdır). */
  azNote: string;
  /** Struktur/düstur, məs. "subject + have/has + past participle". */
  form?: string;
  /** Təbii nümunə cümlələr (lazım olsa qısa qeydlə). */
  examples: { en: string; note?: string }[];
  /** Tez-tez edilən səhv. */
  pitfall?: string;
}

/** Bir qrammatika kateqoriyası. Bir fayl = bir kateqoriya. */
export interface GrammarGroup {
  id: GrammarCategory;
  /** İngiliscə: bu kateqoriya nəyi əhatə edir. */
  description: string;
  /** Azərbaycanca qısa izah. */
  azDescription: string;
  rules: GrammarRule[];
  /** Kateqoriya üzrə tapşırıq (mövcud `Quiz` komponenti ilə işlənir). */
  practice: QuizQuestion[];
}
