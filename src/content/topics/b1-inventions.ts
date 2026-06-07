import type { Topic } from "../types";

export const b1Inventions: Topic = {
  id: "b1-inventions",
  level: "B1",
  title: "Inventions That Changed the World",
  theme: "History",
  summary:
    "Learn about the inventions that shaped modern life, and practise the passive voice to say what was made, when and by whom.",
  leadIn: [
    "Which invention do you think is the most important in history? Why?",
    "What is one thing you could not live without today?",
    "Do you know who invented the telephone or the light bulb?",
  ],
  vocabulary: [
    {
      word: "to invent",
      definition: "to create or design something completely new",
      example: "The telephone was invented in the 19th century.",
      collocations: ["invent a machine", "newly invented"],
      azNote: "ixtira etmək / kəşf etmək",
    },
    {
      word: "discovery",
      definition: "the act of finding something that already existed but was unknown",
      example: "The discovery of electricity changed everything.",
      collocations: ["a great discovery", "make a discovery"],
      azNote: "kəşf (mövcud olan, amma bilinməyən şeyin tapılması)",
    },
    {
      word: "device",
      definition: "a small machine or tool made for a particular purpose",
      example: "Modern phones are powerful devices that do many jobs.",
      collocations: ["a useful device", "an electronic device"],
      azNote: "qurğu / cihaz",
    },
    {
      word: "to develop",
      definition: "to make something grow or become better over time",
      example: "The first computers were slowly developed over many years.",
      collocations: ["develop a product", "develop quickly"],
      azNote: "inkişaf etdirmək",
    },
    {
      word: "spread",
      definition: "to move or be passed to more people or places",
      example: "After printing was invented, books spread across the world.",
      collocations: ["spread quickly", "spread information"],
      azNote: "yayılmaq (spread–spread–spread)",
    },
    {
      word: "modern",
      definition: "belonging to the present time, using the newest ideas",
      example: "Many modern machines are powered by electricity.",
      collocations: ["modern technology", "the modern world"],
      azNote: "müasir",
    },
  ],
  grammar: {
    point: "The passive voice (present & past simple)",
    explanation:
      "We use the passive when the action is more important than the person who does it, or when we don't know who did it. Form it with the correct tense of 'to be' + past participle (V3): 'The phone was invented in 1876.' To say who did the action, use 'by': 'It was invented by Bell.' Present: 'Phones are made in many countries.' Past: 'The first phone was made in the USA.'",
    azNote:
      "Passive = hərəkəti edən yox, hərəkətin özü vacibdir. Quruluş: be (am/is/are/was/were) + V3. Aktiv: 'Bell invented the phone.' → Passive: 'The phone was invented by Bell.' Kimin etdiyini demək üçün 'by' işlədilir.",
    examples: [
      { en: "The light bulb was invented in 1879.", note: "past passive: was + invented" },
      { en: "Millions of phones are made every year.", note: "present passive: are + made" },
      { en: "America was discovered in 1492.", note: "we focus on the event, not the person" },
      {
        en: "Paper was first developed by the Chinese.",
        note: "'by' shows who did the action",
      },
    ],
  },
  reading: {
    title: "The ideas that built our world",
    text: `Look around you. Almost everything you can see was invented by someone, at some point in history. Some inventions were created by famous scientists, while others were discovered completely by accident. Together, they changed the way humans live forever.

One of the most important inventions was the printing press, which was developed in Germany in the 15th century. Before this, books were written slowly by hand, so only rich people owned them. After the printing press was built, books were produced quickly and cheaply, and knowledge spread across the world.

The discovery of electricity was another huge step. The electric light bulb was improved in the 19th century, and suddenly homes and streets could be lit at night. Soon, many other devices were powered by electricity, from radios to washing machines.

Perhaps the invention that changed daily life the most is the telephone. It was invented in 1876, and for the first time people could talk to each other across long distances. Today, this simple idea has been developed into the modern smartphone, a tiny computer that is carried by billions of people.

These inventions remind us of something important: the modern world was not built in a single day. It was created, step by step, by the curiosity and hard work of millions of people.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "Why were books expensive before the printing press?",
        options: [
          "They were made of gold.",
          "They were written slowly by hand.",
          "They were printed too quickly.",
          "They were imported from China.",
        ],
        answer: 1,
        explanation: "'books were written slowly by hand, so only rich people owned them'.",
      },
      {
        type: "multiple-choice",
        prompt: "What changed when the light bulb was improved?",
        options: [
          "People stopped using electricity.",
          "Homes and streets could be lit at night.",
          "Books disappeared.",
          "Telephones were banned.",
        ],
        answer: 1,
        explanation: "'homes and streets could be lit at night'.",
      },
      {
        type: "multiple-choice",
        prompt: "What is the main message at the end of the text?",
        options: [
          "Only famous scientists make inventions.",
          "The modern world was built step by step by many people.",
          "Inventions are not important.",
          "Nothing has changed in history.",
        ],
        answer: 1,
        explanation: "'It was created, step by step, by the curiosity and hard work of millions of people.'",
      },
    ],
  },
  speaking: [
    "Choose an invention and explain how it has changed people's lives.",
    "Which is more important: a great invention or a great discovery? Explain the difference.",
    "What new invention would you like to see in the next 20 years?",
  ],
  writing: {
    task: "Write a short paragraph about an important invention. Say when it was invented, who it was invented by, and how it is used today. Use at least four passive sentences.",
    minWords: 90,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt: "The telephone ___ (invent) in 1876. (past passive)",
      answer: "was invented",
      accept: ["was invented"],
      explanation: "Past passive: was/were + past participle → 'was invented'.",
    },
    {
      type: "gap-fill",
      prompt: "Millions of phones ___ (make) every year. (present passive)",
      answer: "are made",
      accept: ["are made"],
      explanation: "Present passive: am/is/are + past participle → 'are made'.",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the correct passive sentence:",
      options: [
        "The bulb was invent by Edison.",
        "The bulb invented by Edison.",
        "The bulb was invented by Edison.",
        "The bulb is invent by Edison.",
      ],
      answer: 2,
      explanation: "Passive = be + past participle: 'was invented by Edison'.",
    },
    {
      type: "multiple-choice",
      prompt: "What is the difference between 'invent' and 'discover'?",
      options: [
        "There is no difference.",
        "You invent something new; you discover something that already existed.",
        "You discover machines; you invent countries.",
        "Invent is in the past, discover is in the present.",
      ],
      answer: 1,
      explanation: "We invent new things; we discover things that already existed but were unknown.",
    },
    {
      type: "multiple-choice",
      prompt: "'a device' is:",
      options: [
        "a large building",
        "a small machine made for a purpose",
        "a kind of book",
        "a famous scientist",
      ],
      answer: 1,
      explanation: "'a device' = a small machine or tool made for a particular purpose.",
    },
  ],
};
