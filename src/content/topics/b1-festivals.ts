import type { Topic } from "../types";

export const b1Festivals: Topic = {
  id: "b1-festivals",
  level: "B1",
  title: "Festivals Around the World",
  theme: "Culture",
  summary:
    "Travel the world through its most colourful festivals, and learn the difference between the Present Simple and the Present Continuous.",
  leadIn: [
    "What is the most important festival in your country? How do people celebrate it?",
    "Do you prefer big public celebrations or quiet family ones?",
    "Is there a festival from another country you would like to experience?",
  ],
  vocabulary: [
    {
      word: "to celebrate",
      definition: "to do something special because of an important day or event",
      example: "Every year, millions of people celebrate the New Year together.",
      collocations: ["celebrate a birthday", "celebrate a victory"],
      azNote: "qeyd etmək / bayram etmək",
    },
    {
      word: "tradition",
      definition: "a custom or belief passed from parents to children over many years",
      example: "Lighting candles is an old tradition in many cultures.",
      collocations: ["an old tradition", "keep a tradition"],
      azNote: "ənənə",
    },
    {
      word: "costume",
      definition: "special clothes worn for a celebration or to look like someone else",
      example: "During the carnival, people wear bright, colourful costumes.",
      collocations: ["wear a costume", "a colourful costume"],
      azNote: "kostyum / xüsusi geyim",
    },
    {
      word: "crowd",
      definition: "a large number of people in one place",
      example: "A huge crowd is gathering in the main square right now.",
      collocations: ["a huge crowd", "a crowd gathers"],
      azNote: "izdiham / kütlə",
    },
    {
      word: "fireworks",
      definition: "objects that explode in the sky with bright colours and loud noise",
      example: "At midnight, fireworks light up the whole city.",
      collocations: ["set off fireworks", "a fireworks display"],
      azNote: "fişəng / atəşfəşanlıq",
    },
    {
      word: "to take place",
      definition: "to happen (used for organised events)",
      example: "The festival takes place in the same town every summer.",
      collocations: ["take place in", "take place every year"],
      azNote: "baş tutmaq / keçirilmək",
    },
  ],
  grammar: {
    point: "Present Simple vs Present Continuous",
    explanation:
      "Use the Present Simple for things that are generally true, repeated, or happen every year: 'The festival takes place in June.' Use the Present Continuous (am/is/are + -ing) for things happening now or around now: 'People are dancing in the street right now.' Time words help: every year, usually, always → Simple; now, at the moment, right now → Continuous.",
    azNote:
      "Present Simple = ümumi həqiqət, vərdiş, hər il olan ('It happens every year'). Present Continuous = indi/bu ərəfədə baş verən ('It is happening now'). 'every year, usually' → Simple; 'now, at the moment' → Continuous.",
    examples: [
      { en: "Brazil celebrates Carnival every February.", note: "regular event → Simple" },
      { en: "Right now, thousands of people are dancing in Rio.", note: "happening now → Continuous" },
      { en: "The festival usually lasts five days.", note: "general fact → Simple" },
      {
        en: "Look! The crowd is lighting candles.",
        note: "'Look!' signals an action happening now → Continuous",
      },
    ],
  },
  reading: {
    title: "A world of celebration",
    text: `All over the world, people celebrate festivals, and each one has its own special traditions. Some festivals are quiet and religious, while others are loud, colourful and full of energy. Although they are very different, they all bring people together.

In Brazil, the most famous festival is Carnival, which takes place every February. People prepare their costumes for months, and during the festival huge crowds dance through the streets to the sound of drums. Imagine the scene right now: the music is playing, dancers are moving in bright costumes, and the whole city is celebrating.

In India, the festival of Holi happens every spring. Normally, people throw coloured powder and water at each other, so everyone ends the day covered in pink, blue and yellow. It is a way of saying that winter is over and a new season is beginning.

In Spain, the small town of Buñol holds a very unusual festival called La Tomatina. Once a year, thousands of people meet in the streets and throw tomatoes at each other for fun. By the end, the streets are completely red.

Right now, somewhere in the world, a festival is taking place. People are wearing costumes, lighting fireworks or sharing food with friends. Festivals remind us that, although our cultures are different, we all love to celebrate together.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "When does Carnival take place in Brazil?",
        options: ["Every spring", "Every February", "Every summer", "Every December"],
        answer: 1,
        explanation: "'Carnival, which takes place every February'.",
      },
      {
        type: "multiple-choice",
        prompt: "What do people throw at each other during Holi?",
        options: ["Tomatoes", "Coloured powder and water", "Flowers", "Rice"],
        answer: 1,
        explanation: "'people throw coloured powder and water at each other'.",
      },
      {
        type: "multiple-choice",
        prompt: "What is the main message at the end of the text?",
        options: [
          "Festivals are a waste of time.",
          "Only Brazil has good festivals.",
          "Different cultures all love to celebrate together.",
          "Festivals are always religious.",
        ],
        answer: 2,
        explanation: "'although our cultures are different, we all love to celebrate together'.",
      },
    ],
  },
  speaking: [
    "Describe what people usually do during your favourite festival (use the Present Simple).",
    "Imagine you are at a festival right now. Describe what is happening around you (use the Present Continuous).",
    "Do you think traditional festivals are losing their importance today? Why / why not?",
  ],
  writing: {
    task: "Write two short paragraphs about a festival: one describing what people usually do there (Present Simple), and one describing a photo of the festival as if it is happening now (Present Continuous). Use three words from this topic.",
    minWords: 90,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt: "Brazil ___ (celebrate) Carnival every year.",
      answer: "celebrates",
      explanation: "Regular, yearly event → Present Simple (celebrates).",
    },
    {
      type: "gap-fill",
      prompt: "Listen! The crowd ___ (sing) in the square.",
      answer: "is singing",
      accept: ["is singing"],
      explanation: "'Listen!' signals something happening now → Present Continuous.",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the correct sentence:",
      options: [
        "Right now, people are dance in the street.",
        "Right now, people dancing in the street.",
        "Right now, people are dancing in the street.",
        "Right now, people dances in the street.",
      ],
      answer: 2,
      explanation: "Present Continuous = are + verb-ing → 'are dancing'.",
    },
    {
      type: "gap-fill",
      prompt: "The festival ___ ___ in the same town every summer. (happen — phrasal)",
      answer: "takes place",
      explanation: "'take place' = to happen (organised event); Present Simple → 'takes place'.",
    },
    {
      type: "multiple-choice",
      prompt: "'a crowd' means:",
      options: [
        "a quiet, empty place",
        "a large number of people",
        "a kind of music",
        "a type of food",
      ],
      answer: 1,
      explanation: "'a crowd' = a large number of people in one place.",
    },
  ],
};
