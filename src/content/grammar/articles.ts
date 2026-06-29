import type { GrammarGroup } from "../types";

export const articles: GrammarGroup = {
  id: "articles",
  description:
    "Articles (a, an, the) and the choice of no article tell the listener whether a noun is general or specific, known or new. Small words, but they shape meaning.",
  azDescription:
    "Artikllar (a, an, the) və ya artiklın olmaması (artiklsizlik) dinləyiciyə ismin ümumi, yoxsa konkret bir şey olduğunu, dinləyicinin onu tanıyıb-tanımadığını başa salır. Bu sözlər kiçik görünsə də, cümlənin mənasını ciddi şəkildə dəyişir. Bu səbəbdən düzgün artiklı seçmək çox vacibdir.",
  rules: [
    {
      title: "a / an — first mention, one of many",
      level: "B1",
      explanation:
        "Use 'a/an' with singular countable nouns when you mention them for the first time or mean 'one of many / any'. 'an' goes before a vowel SOUND.",
      azNote:
        "'a/an' artiklını tək və sayıla bilən isimlərlə işlədirik. Onu o zaman seçirik ki, isimdən ilk dəfə danışılır, yaxud 'çoxlarından biri / hər hansı bir' mənası verilir. Burada əsas qayda səsdir: saitlə BAŞLAYAN səsdən əvvəl 'an' (an apple), samitlə başlayan səsdən əvvəl isə 'a' (a book) gəlir.",
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
        "'the' artiklını o zaman işlədirik ki, dinləyici söhbətin hansı konkret əşyadan getdiyini dəqiq bilir. Bu, üç səbəbə görə ola bilər: həmin isim əvvəlcədən bir dəfə deyilib, dünyada təkdir və yeganədir (məsələn, günəş), yaxud şəraitdən hansı olduğu aydındır. Yəni 'the' həm danışana, həm dinləyiciyə tanış olan konkret şeyi göstərir.",
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
        "Cəm halda olan isimlər və sayılmayan isimlər ümumi, bütöv bir anlayışdan danışanda heç bir artikl götürmür. Yəni konkret deyil, ümumiyyətlə nəyisə nəzərdə tutanda artikl qoyulmur. Eyni qayda yemək adlarına (breakfast, lunch), dillərə (English) və mücərrəd anlayışlara (love, freedom) da çox vaxt aiddir.",
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
        "Bəzi coğrafi adlarla həmişə 'the' işlədilir: çayların, dənizlərin, okeanların, dağ silsilələrinin (bir-birinə bağlı dağlar qrupu) və səhraların adları ilə. Həmçinin adında cəm və ya 'dövlət/birlik' sözü olan ölkələrlə də 'the' gəlir (the USA, the Netherlands). Bundan başqa, superlativ, yəni ən üstün dərəcə bildirən sözlərdən əvvəl də həmişə 'the' qoyulur (the longest, the best).",
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
        "Bunlar daha incə, çaşdırıcı hallardır. Əksər ayrıca ölkə, şəhər və küçə adları ilə 'the' işlədilmir (France, London, Oxford Street). Müəssisələrdə əsas fərq məna ilə bağlıdır: müəssisədən öz təyinatına görə danışanda 'the' qoyulmur ('go to school' yəni oxumaq üçün, 'in hospital' yəni xəstə kimi), amma sırf binanın özünü nəzərdə tutanda 'the' işlədilir (go to the hospital, yəni binaya getmək).",
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
