import type { Topic } from "../types";

export const b2Cities: Topic = {
  id: "b2-cities",
  level: "B2",
  title: "The Cities of the Future",
  theme: "Society",
  summary:
    "Imagine how we will live as cities grow, and learn to add extra information with non-defining relative clauses.",
  leadIn: [
    "What do you like and dislike most about living in (or visiting) a big city?",
    "What is the biggest problem facing cities today?",
    "Would you prefer to live in a busy city or a quiet town? Why?",
  ],
  vocabulary: [
    {
      word: "population",
      definition: "the number of people living in a particular place",
      example: "The city's population has doubled in just thirty years.",
      collocations: ["a growing population", "the local population"],
      azNote: "əhali",
    },
    {
      word: "sustainable",
      definition: "able to continue for a long time without harming the environment",
      example: "Planners are designing more sustainable neighbourhoods.",
      collocations: ["sustainable transport", "environmentally sustainable"],
      azNote: "dayanıqlı / davamlı (ekoloji)",
    },
    {
      word: "infrastructure",
      definition: "the basic systems a place needs, such as roads, water and power",
      example: "Good public transport is a key part of a city's infrastructure.",
      collocations: ["build infrastructure", "transport infrastructure"],
      azNote: "infrastruktur (yollar, su, enerji və s.)",
    },
    {
      word: "to commute",
      definition: "to travel regularly between home and work",
      example: "Millions of people commute into the centre every morning.",
      collocations: ["commute to work", "a long commute"],
      azNote: "işə gedib-gəlmək (müntəzəm)",
    },
    {
      word: "crowded",
      definition: "full of too many people",
      example: "The old streets become extremely crowded during rush hour.",
      collocations: ["a crowded street", "overcrowded"],
      azNote: "sıx / izdihamlı",
    },
    {
      word: "green space",
      definition: "an area of grass, trees or parks in a town or city",
      example: "Studies show that green spaces improve people's mental health.",
      collocations: ["public green space", "create green spaces"],
      azNote: "yaşıllıq sahəsi / park",
    },
  ],
  grammar: {
    point: "Non-defining relative clauses",
    explanation:
      "A non-defining relative clause adds extra, non-essential information about a noun. It is separated by commas, and the sentence still makes sense without it: 'Tokyo, which has over 30 million people, is the largest city on Earth.' Use 'which' for things, 'who' for people, 'whose' for possession and 'where' for places. Important: you cannot use 'that', and you cannot leave out the relative pronoun.",
    azNote:
      "Non-defining relative clause = isim haqqında ƏLAVƏ, vacib olmayan məlumat; vergüllə ayrılır və olmasa da cümlə tamdır. 'My brother, who lives in Baku, is a doctor.' 'which' (əşya), 'who' (insan), 'whose' (mənsubiyyət), 'where' (yer). DİQQƏT: burada 'that' İŞLƏNMİR və əvəzlik atıla bilməz.",
    examples: [
      { en: "Tokyo, which has over 30 million people, is huge.", note: "extra info about a thing → which + commas" },
      { en: "The mayor, who was elected last year, supports the plan.", note: "extra info about a person → who" },
      { en: "Singapore, where space is limited, builds upwards.", note: "extra info about a place → where" },
      {
        en: "✗ Tokyo, that has 30 million people, ... → ✓ Tokyo, which has 30 million people, ...",
        note: "'that' is NOT used in non-defining clauses",
      },
    ],
  },
  reading: {
    title: "More than half the world",
    text: `For the first time in history, more than half of all human beings live in cities, and the number keeps rising. Experts predict that by 2050, roughly two thirds of the global population will be urban. This rapid growth brings huge challenges, but also exciting opportunities to reinvent the way we live.

The biggest problem is pressure on infrastructure. When millions of people commute into the same area every day, roads become crowded, public transport is overloaded, and pollution rises. Mexico City, which is home to over twenty million people, struggles with traffic that can turn a short trip into a journey of several hours. Planners know that simply building more roads is not the answer.

Instead, the cities of the future are likely to be designed around people rather than cars, making them cleaner and more sustainable. Copenhagen, where nearly half of all journeys are made by bicycle, shows what is possible when a city invests in cycling and walking. Other cities are creating "fifteen-minute neighbourhoods", in which shops, schools and parks are all within a short walk of home.

Technology will play a part too. Smart systems, which can control traffic lights and save energy automatically, are already being tested. But the most important change may be the simplest: bringing nature back into the city. Singapore, whose buildings are often covered in plants, has shown that green spaces can lower temperatures and make people healthier and happier. The successful city of the future, then, will not just be bigger or smarter. It will be greener, cleaner and built, above all, for the people who live in it.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "What do experts predict about cities by 2050?",
        options: [
          "Cities will disappear.",
          "About two thirds of people will live in cities.",
          "Only a tenth of people will be urban.",
          "Everyone will move to the countryside.",
        ],
        answer: 1,
        explanation: "'by 2050, roughly two thirds of the global population will be urban'.",
      },
      {
        type: "multiple-choice",
        prompt: "What does Copenhagen show is possible?",
        options: [
          "Building only motorways",
          "A city designed around cycling and walking",
          "Banning all transport",
          "Removing all parks",
        ],
        answer: 1,
        explanation: "'Copenhagen, where nearly half of all journeys are made by bicycle'.",
      },
      {
        type: "multiple-choice",
        prompt: "According to the text, what may be the most important change?",
        options: [
          "Building taller skyscrapers",
          "Bringing nature back into the city",
          "Adding more cars",
          "Making cities darker",
        ],
        answer: 1,
        explanation: "'the most important change may be the simplest: bringing nature back into the city'.",
      },
    ],
  },
  speaking: [
    "Describe your city or town using non-defining relative clauses (e.g. 'My city, which is by the sea, ...').",
    "What changes would make your city more pleasant and sustainable to live in?",
    "Do you think big cities or small towns offer a better quality of life? Explain.",
  ],
  writing: {
    task: "Describe your ideal city of the future. Use at least four non-defining relative clauses (with which, who, whose or where, separated by commas), plus three words from this topic.",
    minWords: 110,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt: "Tokyo, ___ has over 30 million people, is the largest city on Earth. (thing, extra info)",
      answer: "which",
      explanation: "Non-defining clause about a thing → 'which' (not 'that').",
    },
    {
      type: "gap-fill",
      prompt: "Singapore, ___ buildings are covered in plants, stays cooler. (possession)",
      answer: "whose",
      explanation: "Possession → 'whose' (Singapore's buildings).",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the correct non-defining relative clause:",
      options: [
        "Copenhagen that is in Denmark has many bikes.",
        "Copenhagen, that is in Denmark, has many bikes.",
        "Copenhagen, which is in Denmark, has many bikes.",
        "Copenhagen which is in Denmark, has many bikes.",
      ],
      answer: 2,
      explanation: "Non-defining clauses use commas and 'which' (never 'that').",
    },
    {
      type: "gap-fill",
      prompt: "Roads, water and power are part of a city's ___. (basic systems)",
      answer: "infrastructure",
      explanation: "'infrastructure' = the basic systems a place needs.",
    },
    {
      type: "multiple-choice",
      prompt: "'to commute' means:",
      options: [
        "to travel regularly between home and work",
        "to move to another country",
        "to build a road",
        "to stay at home",
      ],
      answer: 0,
      explanation: "'to commute' = to travel regularly between home and work.",
    },
  ],
};
