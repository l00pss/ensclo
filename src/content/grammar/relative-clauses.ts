import type { GrammarGroup } from "../types";

export const relativeClauses: GrammarGroup = {
  id: "relative-clauses",
  description:
    "Relative clauses add information about a noun using who, which, that, whose, where and when. They let you combine two ideas into one smooth sentence.",
  azDescription:
    "Nisbi budaq cümlələr who, which, that, whose, where, when ilə bir ismə əlavə məlumat verir. İki fikri bir hamar cümlədə birləşdirməyə imkan verir.",
  rules: [
    {
      title: "Defining relative clauses",
      level: "B1",
      explanation:
        "Give essential information that identifies the noun. Without it, the sentence loses its meaning. No commas. Use who (people), which (things), that (both).",
      azNote:
        "İsmi MÜƏYYƏNLƏŞDİRƏN vacib məlumat. Onsuz cümlə mənasını itirir. Vergül YOX. who (insan), which (əşya), that (hər ikisi).",
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
        "ƏLAVƏ, vacib olmayan məlumat. Onsuz da cümlə tamdır. Həmişə vergül; 'that' İŞLƏNMİR — who/which.",
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
        "Defining clause-da əgər nisbi əvəzlik OBYEKTdirsə, onu atmaq olar (mübtədadırsa atmaq olmaz).",
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
        "'whose' — sahiblik; 'where' — yer; 'when' — vaxt.",
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
        "Rəsmi dildə ön söz əvəzlikdən əvvəl ('to whom'), gündəlik dildə cümlə sonunda gəlir.",
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
