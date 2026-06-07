import type { Topic } from "../types";

export const b1Travel: Topic = {
  id: "b1-travel",
  level: "B1",
  title: "Travel & Tourism",
  theme: "Travel",
  summary:
    "Talk about trips and holidays, and learn to describe past travel experiences using the Present Perfect vs Past Simple.",
  leadIn: [
    "What is the best place you have ever visited?",
    "Do you prefer travelling alone or with other people? Why?",
    "What do you usually pack for a long trip?",
  ],
  vocabulary: [
    {
      word: "destination",
      definition: "the place where someone or something is going",
      example: "Paris is a popular destination for young travellers.",
      collocations: ["popular destination", "final destination"],
      azNote: "təyinat yeri / gedilən yer",
    },
    {
      word: "to book",
      definition: "to arrange to have a room, ticket, etc. at a later time",
      example: "We booked our flights three months in advance.",
      collocations: ["book a flight", "book a hotel", "book in advance"],
      azNote: "rezerv etmək / sifariş vermək",
    },
    {
      word: "accommodation",
      definition: "a place where you stay, such as a hotel or apartment",
      example: "The price includes flights and accommodation.",
      collocations: ["find accommodation", "budget accommodation"],
      azNote: "qalmaq üçün yer (uncountable — 's' almır)",
    },
    {
      word: "sightseeing",
      definition: "the activity of visiting interesting places as a tourist",
      example: "We spent the whole morning sightseeing in the old town.",
      collocations: ["go sightseeing", "do some sightseeing"],
      azNote: "gəzməli yerləri gəzmək",
    },
    {
      word: "journey",
      definition: "an act of travelling from one place to another",
      example: "The journey from the airport to the hotel took an hour.",
      collocations: ["a long journey", "break the journey"],
      azNote: "səfər (bir yerdən digərinə gediş — 'trip'-dən fərqli, yola fokus)",
    },
    {
      word: "abroad",
      definition: "in or to a foreign country",
      example: "She has never travelled abroad before.",
      collocations: ["go abroad", "live abroad", "study abroad"],
      azNote: "xaricdə / xaricə (artikl almır: 'go abroad', NOT 'go to abroad')",
    },
  ],
  grammar: {
    point: "Present Perfect vs Past Simple",
    explanation:
      "Use the Present Perfect (have/has + past participle) for experiences in your life when the exact time is not important: 'I have been to Italy.' Use the Past Simple for finished actions at a specific time in the past: 'I went to Italy in 2019.' If you say or ask WHEN, use the Past Simple.",
    azNote:
      "Present Perfect = həyat təcrübəsi, vaxt önəmli deyil ('I have visited Rome'). Past Simple = konkret keçmiş vaxt ('I visited Rome last year'). Cümlədə dəqiq vaxt (yesterday, in 2020, last week) varsa → Past Simple.",
    examples: [
      { en: "I have visited many countries.", note: "experience, no time → Present Perfect" },
      { en: "I visited Spain last summer.", note: "specific time → Past Simple" },
      {
        en: "Have you ever flown business class?",
        note: "'ever' = at any time in your life → Present Perfect",
      },
      {
        en: "✗ I have been to Greece in 2018. → ✓ I went to Greece in 2018.",
        note: "with a specific year you MUST use Past Simple",
      },
    ],
  },
  reading: {
    title: "A trip to remember",
    text: `Two years ago, Maria and her three best friends decided to travel around Southeast Asia together. None of them had ever travelled abroad before, so the trip felt like a huge adventure. They spent weeks planning it: they compared prices online, booked their flights early to save money, and chose cheap but comfortable accommodation in each city.

Their first destination was Thailand. They spent five days in Bangkok, where they went sightseeing every morning and tried delicious street food in the evenings. The journey to the southern islands was long and tiring — almost twelve hours by bus and boat — but the quiet beaches at the end were definitely worth it.

After Thailand, they visited Vietnam and Cambodia. Maria kept a small diary and wrote something in it every night. "I have learned so much about other cultures on this trip," she wrote. "I have tasted food I had never heard of, and I have met wonderful people from all over the world."

When she finally got home, her family asked her hundreds of questions. Maria just smiled and said it was the best decision she has ever made. In fact, she has already started saving for her next adventure, because now she knows one thing for certain: she loves travelling, and there is still so much of the world she wants to see.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "Why did the friends book their flights early?",
        options: [
          "To travel alone",
          "To save money",
          "To avoid sightseeing",
          "To stay in luxury hotels",
        ],
        answer: 1,
        explanation: "The text says they 'booked their flights early to save money'.",
      },
      {
        type: "multiple-choice",
        prompt: "Which sentence is true about Maria?",
        options: [
          "She had travelled abroad many times before.",
          "She did not enjoy the trip.",
          "It was her first time travelling abroad.",
          "She travelled completely alone.",
        ],
        answer: 2,
        explanation: "'None of them had ever travelled abroad before.'",
      },
      {
        type: "multiple-choice",
        prompt: "What does Maria plan to do now?",
        options: [
          "Never travel again",
          "Move to Thailand",
          "Save money for another trip",
          "Stop keeping a diary",
        ],
        answer: 2,
        explanation: "'she has already started saving for her next adventure'.",
      },
    ],
  },
  speaking: [
    "Describe a memorable journey you have made. Where did you go and what did you do?",
    "Compare a beach holiday and a city break. Which do you prefer and why?",
    "Talk about a country you have never visited but would like to. Explain why.",
  ],
  writing: {
    task: "Write a short email to a friend describing a trip you took recently. Use at least three travel words from this topic and both the Present Perfect and the Past Simple.",
    minWords: 80,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt: "I ___ (visit) my grandparents last weekend.",
      answer: "visited",
      explanation: "'last weekend' = specific past time → Past Simple.",
    },
    {
      type: "gap-fill",
      prompt: "She ___ (never / be) to Japan.",
      answer: "has never been",
      accept: ["has never been"],
      explanation: "Life experience, no specific time → Present Perfect (has + been).",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the correct sentence:",
      options: [
        "I have gone to the museum yesterday.",
        "I went to the museum yesterday.",
        "I have went to the museum yesterday.",
        "I did went to the museum yesterday.",
      ],
      answer: 1,
      explanation: "'yesterday' requires the Past Simple: 'went'.",
    },
    {
      type: "gap-fill",
      prompt: "We need to find cheap ___ for our holiday. (a place to stay)",
      answer: "accommodation",
      explanation: "'accommodation' is uncountable — no plural 's'.",
    },
    {
      type: "multiple-choice",
      prompt: "Which collocation is correct?",
      options: ["do a flight", "make a flight", "book a flight", "take a booking"],
      answer: 2,
      explanation: "We 'book' a flight, a hotel, or a ticket.",
    },
  ],
};
