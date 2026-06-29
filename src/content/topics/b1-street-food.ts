import type { Topic } from "../types";
export const b1StreetFood: Topic = {
  id: "b1-street-food",
  level: "B1",
  title: "Street Food Around the World",
  theme: "Food",
  summary: "Explore street food in different countries and learn to use quantifiers with countable and uncountable nouns.",
  leadIn: [
    "What is your favourite street food?",
    "Is street food popular in your city?",
    "Do you prefer eating in a restaurant or buying food from a stall?",
  ],
  vocabulary: [
    {
      word: "stall",
      definition: "a small open shop or table where someone sells food in the street",
      example: "We bought noodles from a busy stall near the market.",
      collocations: ["food stall", "set up a stall"],
      azNote: "küçə satış yeri, piştaxta",
    },
    {
      word: "vendor",
      definition: "a person who sells things, especially food, in a public place",
      example: "The vendor cooked our kebabs right in front of us.",
      collocations: ["street vendor", "food vendor"],
      azNote: "satıcı (küçə satıcısı)",
    },
    {
      word: "snack",
      definition: "a small amount of food that you eat between meals",
      example: "A warm snack is perfect on a cold evening.",
      collocations: ["quick snack", "healthy snack"],
      azNote: "yüngül qəlyanaltı, snack",
    },
    {
      word: "flavour",
      definition: "the particular taste of a food or drink",
      example: "This sauce has a strong, spicy flavour.",
      collocations: ["rich flavour", "add flavour"],
      azNote: "dad, ləzzət",
    },
    {
      word: "spicy",
      definition: "having a strong, hot taste because of spices like chilli",
      example: "The soup was too spicy for the children.",
      collocations: ["spicy food", "very spicy"],
      azNote: "acılı, ədviyyatlı",
    },
    {
      word: "affordable",
      definition: "cheap enough that most people can pay for it",
      example: "Street food is affordable, so students love it.",
      collocations: ["affordable price", "affordable meal"],
      azNote: "münasib qiymətli, sərfəli",
    },
  ],
  grammar: {
    point: "Quantifiers: countable/uncountable, some/any, much/many, a few/a little",
    explanation: "Countable nouns (a stall, two snacks) can be counted, while uncountable nouns (rice, food, advice) cannot. Use 'some' in positive sentences and 'any' in questions and negatives. Use 'many' and 'a few' with countable nouns, and 'much' and 'a little' with uncountable nouns.",
    azNote: "Sayıla bilən isimlərlə 'many' və 'a few', sayıla bilməyən isimlərlə 'much' və 'a little' işlənir. 'some' təsdiq cümlələrində, 'any' isə sual və inkar cümlələrində istifadə olunur. Məsələn: 'a few stalls' (bir neçə piştaxta), 'a little rice' (bir az düyü).",
    examples: [
      { en: "There are many food stalls in the night market.", note: "many + countable plural" },
      { en: "We didn't have much money, so we shared one plate.", note: "much + uncountable in a negative" },
      { en: "I bought a few snacks for the journey.", note: "a few + countable" },
      { en: "Is there any sauce left?", note: "any in a question" },
    ],
  },
  reading: {
    title: "A Taste of the Streets",
    text: `Street food is one of the best ways to understand a country. In almost every big city, you can find a busy stall on the corner where a vendor cooks fresh food in front of you. There are many different dishes, from grilled meat to sweet pancakes, and most of them are cheap. Because the food is so affordable, both local people and tourists stop to eat a quick snack while they walk around.

In Thailand, night markets are full of colour and noise. You only need a little money to try several plates. There are many stalls selling spicy noodles, and the strong flavour of chilli and lime fills the air. If you cannot eat very spicy food, you can ask the vendor for a milder version. Most cooks are happy to change a few things for their customers.

In Mexico, tacos are the most famous street snack. A good vendor uses fresh meat, a little cheese and some fresh herbs to create a rich flavour. You will not find much space to sit down, so people usually eat standing next to the stall. The price is so affordable that you can try three or four different tacos without spending much money.

Around the world, street food brings people together. It does not cost much, it tastes wonderful, and every stall tells a small story about its city. Next time you travel, skip the expensive restaurant. Find a local vendor, order a spicy snack, and enjoy the real flavour of the place.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "Why do both locals and tourists eat street food?",
        options: ["It is very expensive", "It is affordable and quick", "It is only sold at night", "It is always mild"],
        answer: 1,
        explanation: "The text says the food is affordable and people stop for a quick snack.",
      },
      {
        type: "multiple-choice",
        prompt: "What can you do if Thai food is too spicy for you?",
        options: ["Eat it standing up", "Ask the vendor for a milder version", "Buy tacos instead", "Pay more money"],
        answer: 1,
        explanation: "The text says you can ask the vendor for a milder version.",
      },
      {
        type: "multiple-choice",
        prompt: "Where do people usually eat tacos in Mexico?",
        options: ["In an expensive restaurant", "At home", "Standing next to the stall", "In a night market in Thailand"],
        answer: 2,
        explanation: "There is not much space to sit down, so people eat standing next to the stall.",
      },
    ],
  },
  speaking: [
    "Describe a street food dish you have tried or would like to try.",
    "Talk about the differences between street food and restaurant food in your country.",
    "How much money do you usually spend on snacks each week?",
  ],
  writing: {
    task: "Write about a street food market you have visited or imagined. Use quantifiers (some, any, much, many, a few, a little) and 3 topic words.",
    minWords: 80,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt: "There are ___ stalls in the market, but only two sell desserts.",
      answer: "many",
      accept: ["a few"],
      explanation: "'stalls' is a countable plural noun, so we use 'many'.",
    },
    {
      type: "gap-fill",
      prompt: "We didn't have ___ money, so we shared one plate of noodles.",
      answer: "much",
      explanation: "'money' is uncountable and the sentence is negative, so we use 'much'.",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the correct quantifier: 'The vendor added ___ cheese to the taco.'",
      options: ["a few", "many", "a little", "several"],
      answer: 2,
      explanation: "'cheese' is uncountable, so 'a little' is correct.",
    },
    {
      type: "multiple-choice",
      prompt: "Which sentence is correct?",
      options: ["Is there some sauce left?", "Is there any sauce left?", "There aren't some snacks.", "I bought any snacks."],
      answer: 1,
      explanation: "We use 'any' in questions and negatives; 'some' is used in positive sentences.",
    },
    {
      type: "multiple-choice",
      prompt: "Which word means 'cheap enough for most people to pay'?",
      options: ["spicy", "affordable", "flavour", "vendor"],
      answer: 1,
      explanation: "'affordable' means cheap enough that most people can pay for it.",
    },
  ],
};
