import type { GrammarGroup } from "../types";

export const relativeClauses: GrammarGroup = {
  id: "relative-clauses",
  description:
    "Relative clauses add information about a noun using who, which, that, whose, where and when. They let you combine two ideas into one smooth sentence.",
  azDescription:
    "Nisbi budaq cümlələr (relative clauses) bir isim haqqında əlavə məlumat vermək üçün who, which, that, whose, where və when sözlərindən istifadə edir. Onların köməyi ilə iki ayrı fikri təkrarçılıq olmadan bir səlis cümlədə birləşdirə bilərsiniz. Məsələn, 'I know a man. He speaks five languages.' əvəzinə 'I know a man who speaks five languages.' deyirik.",
  rules: [
    {
      title: "Defining relative clauses",
      level: "B1",
      explanation:
        "Give essential information that identifies the noun. Without it, the sentence loses its meaning. No commas. Use who (people), which (things), that (both).",
      azNote:
        "Defining (müəyyənləşdirici) budaq cümlə ismin hansı olduğunu dəqiqləşdirən VACİB məlumat verir. Bu məlumat olmasa, cümlənin mənası tam olmur, ona görə də onu çıxarmaq olmaz. Bu cümlələrdə vergül İŞLƏNMİR. İnsanlar üçün 'who', əşyalar üçün 'which', hər ikisi üçün isə 'that' işlədilir: 'The man who lives next door is a doctor.'",
      form: "noun + who/which/that + clause (no commas)",
      examples: [
        { en: "The man who lives next door is a doctor." },
        { en: "This is the book that changed my life." },
      ],
      pitfall: "Defining clause-da vergül qoyulmur.",
    },
    {
      title: "Non-defining relative clauses",
      level: "B2",
      explanation:
        "Add extra, non-essential information. The sentence still makes sense without it. Always use commas, and NEVER use 'that' — use who/which.",
      azNote:
        "Non-defining (qeyri-müəyyənləşdirici) budaq cümlə yalnız ƏLAVƏ, o qədər də vacib olmayan məlumat verir. Bu məlumatı çıxarsanız belə, cümlə yenə də tam və başa düşülən qalır. Belə cümlələrdə bu hissə həmişə vergüllə ayrılır və burada 'that' HEÇ VAXT İŞLƏNMİR — yalnız insanlar üçün 'who', əşyalar üçün 'which' işlədilir: 'My brother, who lives in Paris, is a chef.'",
      form: "noun, who/which + clause, …",
      examples: [
        { en: "My brother, who lives in Paris, is a chef." },
        { en: "The Louvre, which is in Paris, is huge." },
      ],
      pitfall: "Non-defining-də 'that' olmaz və vergül mütləqdir.",
    },
    {
      title: "Omitting the relative pronoun",
      level: "B2",
      explanation:
        "In a defining clause, you can drop who/which/that when it is the OBJECT of the clause (not the subject).",
      azNote:
        "Defining (müəyyənləşdirici) budaq cümlədə nisbi əvəzlik (who/which/that) budaq cümlənin OBYEKTİdirsə, yəni hərəkəti edən deyil, hərəkətin yönəldiyi söz isə, onu tamamilə atmaq olar: 'The film (that) we saw' — burada 'that' düşə bilər. Amma əvəzlik MÜBTƏDAdırsa, yəni özü hərəkəti edirsə, onu atmaq olmaz: 'The man who called you' cümləsində 'who' mütləq qalmalıdır.",
      examples: [
        { en: "The film (that) we saw was great.", note: "object → can omit" },
        { en: "The man who called you is here.", note: "subject → cannot omit" },
      ],
      pitfall: "Mübtəda olan əvəzliyi atma: 'The man called you is here' səhvdir.",
    },
    {
      title: "whose / where / when",
      level: "B2",
      explanation:
        "'whose' shows possession; 'where' refers to a place; 'when' refers to a time.",
      azNote:
        "Bu üç söz fərqli məlumatları bildirir: 'whose' sahibliyi göstərir, yəni nəyinsə kiməsə aid olduğunu bildirir (kimin) — 'the writer whose book won'. 'where' bir yerə işarə edir (harada) — 'the café where we met'. 'when' isə bir vaxta, zamana işarə edir (nə vaxt) — 'the day when we moved here'.",
      examples: [
        { en: "That's the writer whose book won the prize." },
        { en: "This is the café where we first met." },
        { en: "I'll never forget the day when we moved here." },
      ],
      pitfall: "'whose' (kimin) ≠ 'who's' (= who is). Qarışdırma.",
    },
    {
      title: "Prepositions in relative clauses",
      level: "C1",
      explanation:
        "In formal English the preposition can go before the pronoun ('the person to whom I spoke'). In everyday English it usually goes at the end ('the person I spoke to').",
      azNote:
        "İngiliscədə ön söz (preposition) budaq cümlədə iki cür yerləşə bilər. Rəsmi, kitab dilində ön söz əvəzlikdən ƏVVƏL gəlir və bu zaman 'whom' işlədilir: 'the person to whom I spoke'. Gündəlik, danışıq dilində isə ön söz adətən cümlənin SONUNA atılır: 'the person I spoke to'. Hər ikisi düzgündür, sadəcə üslub fərqlidir.",
      examples: [
        { en: "The colleague with whom I work is retiring.", note: "formal" },
        { en: "The colleague I work with is retiring.", note: "everyday" },
      ],
      pitfall: "'with whom' düzgündür, amma 'with who' səhvdir — formal halda 'whom'.",
    },
  ],
  practice: [
    {
      type: "multiple-choice",
      prompt: "The woman ___ won the race is my neighbour.",
      options: ["which", "who", "where", "whose"],
      answer: 1,
      explanation: "A person as subject → 'who'.",
    },
    {
      type: "multiple-choice",
      prompt: "My car, ___ is only a year old, has broken down again.",
      options: ["that", "which", "who", "what"],
      answer: 1,
      explanation: "Non-defining clause about a thing → 'which' (never 'that').",
    },
    {
      type: "multiple-choice",
      prompt: "In which sentence can you DROP the relative pronoun?",
      options: [
        "The man who phoned was rude.",
        "The book that I read was boring.",
        "The people who live here are kind.",
        "The dog which bit me ran off.",
      ],
      answer: 1,
      explanation: "The pronoun is the object ('I read the book') → it can be omitted.",
    },
    {
      type: "gap-fill",
      prompt: "That's the boy ___ bike was stolen. (possession)",
      answer: "whose",
      explanation: "Possession → 'whose'.",
    },
    {
      type: "gap-fill",
      prompt: "This is the town ___ I grew up. (place)",
      answer: "where",
      explanation: "Reference to a place → 'where'.",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the correct non-defining clause:",
      options: [
        "Paris which is the capital of France is beautiful.",
        "Paris, that is the capital of France, is beautiful.",
        "Paris, which is the capital of France, is beautiful.",
        "Paris where is the capital of France is beautiful.",
      ],
      answer: 2,
      explanation: "Extra info → commas + 'which' (not 'that').",
    },
  ],
};
