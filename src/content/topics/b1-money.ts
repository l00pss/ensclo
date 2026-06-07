import type { Topic } from "../types";

export const b1Money: Topic = {
  id: "b1-money",
  level: "B1",
  title: "The Story of Money",
  theme: "Money",
  summary:
    "Follow the history of money from shells to smartphones, and learn to use quantifiers like some, any, much, many and a lot of.",
  leadIn: [
    "Do you usually pay with cash or with a card? Why?",
    "How much money do you think you need to be happy?",
    "What did people use before money was invented?",
  ],
  vocabulary: [
    {
      word: "to trade",
      definition: "to exchange goods or services with someone",
      example: "Long ago, people traded food for clothes.",
      collocations: ["trade goods", "trade with someone"],
      azNote: "ticarət etmək / mübadilə etmək",
    },
    {
      word: "coin",
      definition: "a small, round piece of metal used as money",
      example: "There are a few coins at the bottom of my bag.",
      collocations: ["a gold coin", "a handful of coins"],
      azNote: "sikkə / qəpik",
    },
    {
      word: "worth",
      definition: "having a particular value in money",
      example: "This old coin is worth a lot of money today.",
      collocations: ["worth a lot", "worth nothing"],
      azNote: "dəyərində / dəyər",
    },
    {
      word: "to save",
      definition: "to keep money to use later instead of spending it",
      example: "She doesn't have much money because she saves a little every month.",
      collocations: ["save money", "save up for"],
      azNote: "yığmaq / qənaət etmək",
    },
    {
      word: "to spend",
      definition: "to use money to buy things",
      example: "People spend a lot of money during the holidays.",
      collocations: ["spend money on", "spend too much"],
      azNote: "xərcləmək (spend–spent–spent)",
    },
    {
      word: "wealthy",
      definition: "having a lot of money; rich",
      example: "He became wealthy after his small shop grew into a big company.",
      collocations: ["a wealthy person", "extremely wealthy"],
      azNote: "varlı / zəngin",
    },
  ],
  grammar: {
    point: "Quantifiers: some, any, much, many, a lot of, a few, a little",
    explanation:
      "Use 'some' in positive sentences and 'any' in negatives and questions: 'I have some money / I don't have any money / Do you have any money?'. With countable nouns (coins, banks) use 'many' and 'a few'; with uncountable nouns (money, time) use 'much' and 'a little'. 'A lot of' works with both. We usually use 'much/many' in negatives and questions: 'How much money? How many coins?'.",
    azNote:
      "'some' (müsbət) / 'any' (inkar və sual). Sayıla bilən isimlər (coins): many, a few, How many? Sayıla bilməyən (money): much, a little, How much? 'a lot of' ikisi ilə də işləyir. 'much/many' əsasən inkar və suallarda.",
    examples: [
      { en: "I have some coins, but I don't have any cash.", note: "some (+) / any (−)" },
      { en: "How much money do you have? How many coins?", note: "much (uncountable) / many (countable)" },
      { en: "She saves a little money and a few coins each week.", note: "a little (uncount.) / a few (count.)" },
      {
        en: "They spent a lot of money on the trip.",
        note: "'a lot of' works with both countable and uncountable",
      },
    ],
  },
  reading: {
    title: "From shells to screens",
    text: `Today we pay for things with coins, paper notes, cards and even phones. But money has not always existed. For most of history, people had no money at all, and they still managed to get the things they needed.

In the beginning, people simply traded. If a farmer had a lot of wheat but no shoes, he looked for someone who had some shoes but needed food. This system worked, but it had many problems. What happened if you wanted bread, but the baker didn't want any of your wheat? Trading took a lot of time and didn't always succeed.

To solve this, people began to use special objects as money. In some parts of the world, shells were used; in others, salt or even animals. Later, people made the first coins from metal, because metal was strong, easy to carry and worth a fixed amount. For the first time, you could save a few coins and spend them whenever you wanted, and a person who collected enough of them could become wealthy.

Paper money came much later, followed by banks, cards and digital payments. Now, many people carry very little cash, and some carry none at all. In a few countries, you can live for weeks without touching a single coin. Money has changed enormously — but its purpose is still the same: to make trading between people quick and easy.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "What was the main problem with trading?",
        options: [
          "It was too fast.",
          "People always agreed quickly.",
          "The other person didn't always want what you had.",
          "There were too many coins.",
        ],
        answer: 2,
        explanation: "'What happened if you wanted bread, but the baker didn't want any of your wheat?'",
      },
      {
        type: "multiple-choice",
        prompt: "Why did people start making coins from metal?",
        options: [
          "Metal was cheap and weak.",
          "Metal was strong, easy to carry and worth a fixed amount.",
          "Metal was the same as shells.",
          "Metal could be eaten.",
        ],
        answer: 1,
        explanation: "'metal was strong, easy to carry and worth a fixed amount'.",
      },
      {
        type: "multiple-choice",
        prompt: "What does the text say about money today?",
        options: [
          "Everyone uses only coins.",
          "Some people carry no cash at all.",
          "Paper money has disappeared.",
          "Trading no longer exists.",
        ],
        answer: 1,
        explanation: "'some carry none at all ... you can live for weeks without touching a single coin'.",
      },
    ],
  },
  speaking: [
    "How do most people in your country pay for things — with cash, cards or phones? Use quantifiers.",
    "Do you think cash will disappear completely one day? Why / why not?",
    "Is it better to save money or to spend it and enjoy life? Explain your opinion.",
  ],
  writing: {
    task: "Write a short paragraph about how you spend and save money. Use 'some', 'any', 'much', 'many', 'a lot of', 'a few' and 'a little' where they fit, plus three words from this topic.",
    minWords: 90,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt: "I have ___ coins in my pocket. (positive sentence)",
      answer: "some",
      explanation: "Use 'some' in positive sentences.",
    },
    {
      type: "gap-fill",
      prompt: "I don't have ___ cash with me today. (negative sentence)",
      answer: "any",
      explanation: "Use 'any' in negative sentences and questions.",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the correct question:",
      options: [
        "How much coins do you have?",
        "How many coins do you have?",
        "How many money do you have?",
        "How much coins you have?",
      ],
      answer: 1,
      explanation: "'coins' is countable → 'How many coins?' ('How much money?' is for uncountable).",
    },
    {
      type: "gap-fill",
      prompt: "She saves ___ money every month. (small uncountable amount)",
      answer: "a little",
      explanation: "'money' is uncountable → 'a little' (a few is for countable nouns).",
    },
    {
      type: "multiple-choice",
      prompt: "'wealthy' means:",
      options: ["poor", "rich", "tired", "honest"],
      answer: 1,
      explanation: "'wealthy' = having a lot of money; rich.",
    },
  ],
};
