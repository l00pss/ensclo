import type { GrammarGroup } from "../types";

export const articles: GrammarGroup = {
  id: "articles",
  description:
    "Articles (a, an, the) and the choice of no article tell the listener whether a noun is general or specific, known or new. Small words, but they shape meaning.",
  azDescription:
    "Artikllar (a, an, the) və ya artiklsizlik dinləyiciyə ismin ümumi yoxsa konkret, tanış yoxsa yeni olduğunu bildirir. Kiçik sözlərdir, amma mənanı formalaşdırır.",
  rules: [
    {
      title: "a / an — first mention, one of many",
      level: "B1",
      explanation:
        "Use 'a/an' with singular countable nouns when you mention them for the first time or mean 'one of many / any'. 'an' goes before a vowel SOUND.",
      azNote:
        "Tək, sayıla bilən isim ilk dəfə deyiləndə ya da 'biri/hər hansı' mənasında 'a/an'. Saitlə BAŞLAYAN SƏS-dən əvvəl 'an'.",
      form: "a + consonant sound · an + vowel sound",
      examples: [
        { en: "I saw a dog in the park." },
        { en: "She's an honest person.", note: "'honest' starts with a vowel sound" },
        { en: "He's a university student.", note: "'university' = /j/ consonant sound → 'a'" },
      ],
      pitfall: "Səsə bax, hərfə yox: 'an university' YOX → 'a university'; 'a hour' YOX → 'an hour'.",
    },
    {
      title: "the — specific or already known",
      level: "B1",
      explanation:
        "Use 'the' when the listener knows exactly which one — because it was mentioned before, is unique, or is clear from context.",
      azNote:
        "Dinləyici hansı olduğunu dəqiq biləndə 'the' — əvvəl deyilib, tək/yeganədir ya da kontekstdən aydındır.",
      form: "the + (singular/plural/uncountable noun)",
      examples: [
        { en: "I bought a shirt. The shirt was too small.", note: "2nd mention" },
        { en: "The sun is bright today.", note: "unique" },
        { en: "Could you close the door?", note: "clear which one" },
      ],
      pitfall: "İkinci dəfə deyiləndə 'a' yox 'the': 'I saw a cat. A cat was…' YOX → 'The cat was…'.",
    },
    {
      title: "Zero article — general & uncountable",
      level: "B2",
      explanation:
        "Use no article for plural and uncountable nouns when talking generally, and for most names of meals, languages, and abstract ideas.",
      azNote:
        "Cəm və sayılmayan isimlər ümumi mənada artikl götürmür; yemək adları, dillər, mücərrəd anlayışlar da çox vaxt artiklsiz.",
      form: "(no article) + plural / uncountable noun",
      examples: [
        { en: "Dogs are loyal animals.", note: "dogs in general" },
        { en: "I love music.", note: "uncountable, general" },
        { en: "We have lunch at one." },
      ],
      pitfall: "Ümumi mənada 'the' artıqdır: 'I love the music' (ümumən) YOX → 'I love music'.",
    },
    {
      title: "the with unique & well-known nouns",
      level: "B2",
      explanation:
        "Use 'the' with rivers, seas, oceans, mountain ranges, deserts, and many countries with plural/'state' names (the USA, the Netherlands), plus 'the' + superlative.",
      azNote:
        "Çaylar, dənizlər, okeanlar, dağ silsilələri, səhralar, cəm/dövlət adlı ölkələr (the USA), həmçinin superlativ ilə 'the'.",
      examples: [
        { en: "The Nile is the longest river in Africa." },
        { en: "They sailed across the Atlantic." },
        { en: "It's the best film I've ever seen.", note: "the + superlative" },
      ],
      pitfall: "Tək dağ/göl/ölkə adında 'the' yox: 'the Mount Everest' YOX → 'Mount Everest'.",
    },
    {
      title: "Geographic & institutional 'the'",
      level: "C1",
      explanation:
        "Tricky cases: no 'the' with most single countries, cities, streets, and with institutions used for their purpose ('go to school'); 'the' when you mean the building.",
      azNote:
        "İncə hallar: əksər ölkə/şəhər/küçə adlarında 'the' yox; məqsədə görə müəssisədə yox ('go to school'), bina nəzərdə tutulanda var.",
      examples: [
        { en: "She's in hospital.", note: "as a patient — purpose" },
        { en: "He went to the hospital to visit her.", note: "the building" },
        { en: "We live in France, on Oxford Street." },
      ],
      pitfall: "'go to the school' (məqsəd üçün) çox vaxt artıqdır → 'go to school'.",
    },
  ],
  practice: [
    {
      type: "gap-fill",
      prompt: "It took us ___ hour to get there. (a/an)",
      answer: "an",
      explanation: "'hour' starts with a vowel SOUND → 'an'.",
    },
    {
      type: "multiple-choice",
      prompt: "I read ___ book yesterday. ___ book was excellent.",
      options: ["the / A", "a / The", "a / A", "the / The"],
      answer: 1,
      explanation: "First mention → 'a'; second mention (now known) → 'the'.",
    },
    {
      type: "multiple-choice",
      prompt: "___ are wonderful pets. (general statement)",
      options: ["The dogs", "Dogs", "A dogs", "Dog"],
      answer: 1,
      explanation: "Plural noun in a general sense → no article.",
    },
    {
      type: "gap-fill",
      prompt: "She's ___ university student. (a/an)",
      answer: "a",
      explanation: "'university' begins with a /j/ consonant sound → 'a'.",
    },
    {
      type: "multiple-choice",
      prompt: "Everest is ___ highest mountain in the world.",
      options: ["a", "an", "the", "(no article)"],
      answer: 2,
      explanation: "Superlatives take 'the' → 'the highest'.",
    },
    {
      type: "multiple-choice",
      prompt: "My grandfather is ill, so he's ___ hospital.",
      options: ["in the", "in", "at the", "on"],
      answer: 1,
      explanation: "As a patient (purpose, not the building) → 'in hospital'.",
    },
  ],
};
