import type { Topic } from "../types";

export const b1Languages: Topic = {
  id: "b1-languages",
  level: "B1",
  title: "Languages of the World",
  theme: "Language",
  summary:
    "Discover the amazing variety of human languages, and learn to join ideas with relative clauses (who, which, that, where).",
  leadIn: [
    "How many languages can you speak or understand a little?",
    "Why do you think some languages disappear?",
    "What is the hardest thing about learning English for you?",
  ],
  vocabulary: [
    {
      word: "native speaker",
      definition: "a person who learned a language as a child, as their first language",
      example: "A native speaker who grew up in London speaks English naturally.",
      collocations: ["a native speaker of", "native language"],
      azNote: "ana dili daşıyıcısı",
    },
    {
      word: "alphabet",
      definition: "the set of letters used to write a language",
      example: "The language, which uses a different alphabet, looks difficult at first.",
      collocations: ["the Latin alphabet", "learn the alphabet"],
      azNote: "əlifba",
    },
    {
      word: "to communicate",
      definition: "to share information or feelings with other people",
      example: "Languages are the main way that humans communicate.",
      collocations: ["communicate with", "communicate clearly"],
      azNote: "ünsiyyət qurmaq",
    },
    {
      word: "to disappear",
      definition: "to stop existing",
      example: "A language disappears when its last speaker dies.",
      collocations: ["disappear completely", "slowly disappear"],
      azNote: "yox olmaq / itmək",
    },
    {
      word: "common",
      definition: "happening often or shared by many people",
      example: "English is a common language that people use around the world.",
      collocations: ["very common", "a common word"],
      azNote: "geniş yayılmış / ümumi",
    },
    {
      word: "fluent",
      definition: "able to speak a language easily and well",
      example: "After living in France for years, she became fluent in French.",
      collocations: ["fluent in", "become fluent"],
      azNote: "səlis (dili rahat danışan)",
    },
  ],
  grammar: {
    point: "Relative clauses (who, which, that, where)",
    explanation:
      "Relative clauses give more information about a noun. Use 'who' for people, 'which' for things, and 'that' for both: 'a person who speaks five languages', 'a language which is very old'. Use 'where' for places: 'the country where I was born'. The relative pronoun usually comes right after the noun it describes.",
    azNote:
      "Relative clause = isim haqqında əlavə məlumat. 'who' (insanlar), 'which' (əşyalar), 'that' (hər ikisi), 'where' (yerlər). Məs: 'the man WHO lives next door', 'a book WHICH is interesting', 'the city WHERE I grew up'. Əvəzlik təsvir etdiyi isimdən sonra gəlir.",
    examples: [
      { en: "A polyglot is a person who speaks many languages.", note: "who → for people" },
      { en: "Mandarin is a language which has over a billion speakers.", note: "which → for things" },
      { en: "This is the school that teaches twelve languages.", note: "that → people or things" },
      {
        en: "Iceland is the country where this old language is still spoken.",
        note: "where → for places",
      },
    ],
  },
  reading: {
    title: "A world of words",
    text: `There are about seven thousand languages in the world today — a number that surprises most people. Each one is a different way of seeing life, and each was created by a community that needed to communicate.

Some languages are spoken by huge numbers of people. Mandarin Chinese, which has more than a billion native speakers, is the language that the largest number of people speak as a first language. English, which is used all over the world for business and travel, is the most common second language. A person who speaks English today can travel to almost any country and find someone to talk to.

But other languages are in danger. Experts say that a language disappears about every two weeks. This usually happens in small communities where young people decide to speak a bigger, more useful language instead. When the last person who knows a language dies, that language is gone forever, together with the stories and ideas it carried.

Learning a new language is not always easy. Some use an alphabet that looks completely strange, while others have sounds that are hard to copy. But the reward is huge. People who become fluent in another language can make new friends, understand another culture, and see the world through different eyes. Every language you learn is a new window onto the world.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "Roughly how many languages are there in the world today?",
        options: ["About 700", "About 7,000", "About 70,000", "About 70"],
        answer: 1,
        explanation: "'There are about seven thousand languages in the world today'.",
      },
      {
        type: "multiple-choice",
        prompt: "Which language has the most native speakers?",
        options: ["English", "Spanish", "Mandarin Chinese", "Arabic"],
        answer: 2,
        explanation: "'Mandarin Chinese, which has more than a billion native speakers'.",
      },
      {
        type: "multiple-choice",
        prompt: "Why do some languages disappear?",
        options: [
          "Because they are too easy.",
          "Because young people start speaking a bigger language instead.",
          "Because they have no alphabet.",
          "Because they are used for business.",
        ],
        answer: 1,
        explanation: "'young people decide to speak a bigger, more useful language instead'.",
      },
    ],
  },
  speaking: [
    "Describe a person who speaks several languages. Use relative clauses (who / which / that).",
    "Talk about a country where you would like to learn a new language, and say why.",
    "Do you think everyone should learn English, or should we protect smaller languages? Why?",
  ],
  writing: {
    task: "Write a short paragraph about a language you would like to learn and why. Use at least three relative clauses (with who, which, that or where) and three words from this topic.",
    minWords: 90,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt: "A polyglot is a person ___ speaks many languages.",
      answer: "who",
      accept: ["that"],
      explanation: "Use 'who' (or 'that') for people.",
    },
    {
      type: "gap-fill",
      prompt: "Mandarin is a language ___ has over a billion speakers.",
      answer: "which",
      accept: ["that"],
      explanation: "Use 'which' (or 'that') for things.",
    },
    {
      type: "gap-fill",
      prompt: "Iceland is the country ___ this old language is still spoken. (place)",
      answer: "where",
      explanation: "Use 'where' for places.",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the correct sentence:",
      options: [
        "I know a man who speak six languages.",
        "I know a man which speaks six languages.",
        "I know a man who speaks six languages.",
        "I know a man where speaks six languages.",
      ],
      answer: 2,
      explanation: "Use 'who' for a person, and the verb agrees: 'who speaks'.",
    },
    {
      type: "multiple-choice",
      prompt: "'fluent' means:",
      options: [
        "able to speak a language easily and well",
        "unable to speak at all",
        "a kind of alphabet",
        "a native country",
      ],
      answer: 0,
      explanation: "'fluent' = able to speak a language easily and well.",
    },
  ],
};
