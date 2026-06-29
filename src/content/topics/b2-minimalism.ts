import type { Topic } from "../types";

export const b2Minimalism: Topic = {
  id: "b2-minimalism",
  level: "B2",
  title: "Consumerism and Minimalism",
  theme: "Society",
  summary:
    "Explore why modern societies buy so much and how minimalism offers an alternative, while practising the first and second conditionals to talk about real and imagined consequences.",
  leadIn: [
    "How easy is it to resist buying things you do not really need?",
    "Do you think owning fewer things could make people happier?",
    "If you had to give away half of your belongings, what would you keep?",
  ],
  vocabulary: [
    {
      word: "consumerism",
      definition: "a way of life in which buying and owning goods is seen as very important",
      example: "Critics argue that consumerism pushes us to value possessions over relationships.",
      collocations: ["modern consumerism", "a culture of consumerism"],
      azNote: "istehlakçılıq, yəni mal almağı və sahib olmağı həddən artıq önəmli sayan həyat tərzi",
    },
    {
      word: "possessions",
      definition: "the things that a person owns",
      example: "When she moved abroad, she sold most of her possessions.",
      collocations: ["personal possessions", "valuable possessions"],
      azNote: "şəxsi əşyalar, insanın sahib olduğu şeylər",
    },
    {
      word: "to declutter",
      definition: "to remove things you do not need in order to make a space tidier",
      example: "Every spring they declutter the house and donate what they no longer use.",
      collocations: ["declutter a room", "declutter your home"],
      azNote: "lazımsız əşyaları atıb sahəni səliqəyə salmaq, yığışdırmaq",
    },
    {
      word: "impulse purchase",
      definition: "something you buy suddenly, without planning, because you want it at that moment",
      example: "The chocolate bars near the till are designed to encourage an impulse purchase.",
      collocations: ["make an impulse purchase", "a regrettable impulse purchase"],
      azNote: "anlıq, planlaşdırılmamış alış, yəni o anda istədiyin üçün birdən aldığın şey",
    },
    {
      word: "materialistic",
      definition: "caring too much about money and possessions rather than other values",
      example: "He worried that his children were becoming increasingly materialistic.",
      collocations: ["a materialistic society", "overly materialistic"],
      azNote: "materialist, yəni pula və əşyalara digər dəyərlərdən artıq önəm verən",
    },
    {
      word: "sustainable",
      definition: "able to continue for a long time without harming the environment or using up resources",
      example: "Buying fewer but better products is a more sustainable habit.",
      collocations: ["a sustainable lifestyle", "environmentally sustainable"],
      azNote: "davamlı, yəni ətraf mühitə ziyan vurmadan və ehtiyatları tükətmədən uzun müddət davam edə bilən",
    },
  ],
  grammar: {
    point: "First and second conditionals",
    explanation:
      "The first conditional describes a real or likely future situation and its result: 'If + present simple, ... will + infinitive'. The second conditional describes an unreal, imaginary or unlikely situation: 'If + past simple, ... would + infinitive'. Use the first conditional for things that can genuinely happen, and the second for hypothetical situations or advice.",
    azNote:
      "Birinci şərt cümləsi real, ehtimallı gələcəyi bildirir: 'If + present simple, will + infinitive'. İkinci şərt cümləsi isə xəyali, qeyri-real və ya az ehtimallı vəziyyəti göstərir: 'If + past simple, would + infinitive'. Real hallar üçün birinci, fərziyyə və məsləhət üçün isə ikinci formanı işlət.",
    examples: [
      { en: "If you make a shopping list, you will buy less on impulse.", note: "first conditional, real future" },
      { en: "If everyone bought less, the planet would be healthier.", note: "second conditional, hypothetical" },
      { en: "If they declutter the flat this weekend, they will feel calmer.", note: "first conditional, likely result" },
      { en: "If I had a smaller home, I would own far fewer possessions.", note: "second conditional, imaginary situation" },
    ],
  },
  reading: {
    title: "Less is more",
    text: `For most of the last century, advertising taught us a simple lesson: the more we own, the happier we will be. This belief lies at the heart of modern consumerism, a culture in which success is measured by the size of our homes and the brands on our shelves. Yet a growing number of people are beginning to question it. They notice that their cupboards are full, their credit cards are stretched, and their lives feel strangely empty. If buying things really made us happy, they ask, why do so many of us still feel dissatisfied?

Minimalism offers a different answer. Its supporters argue that we own far too many possessions, most of which we rarely use. They suggest that if you declutter your home and keep only what you truly need, you will gain space, time and peace of mind. The idea is not to live with nothing, but to be deliberate. If you stop and think before every purchase, you will make fewer mistakes and waste less money on each impulse purchase that you later regret.

The benefits go beyond the individual. A less materialistic way of living is usually a more sustainable one, because every product we do not buy is one that does not have to be manufactured, shipped and eventually thrown away. If we consumed less as a society, we would put far less pressure on the environment. If factories produced only what people genuinely needed, there would be less waste and pollution.

Of course, nobody is suggesting that we abandon shopping completely. Critics point out that consumer spending supports millions of jobs, and that a sudden change would be painful. Still, the core message is worth remembering. If we all bought a little more thoughtfully, both our homes and our planet would feel lighter.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "What belief does the text say lies at the heart of modern consumerism?",
        options: [
          "That owning more things makes us happier",
          "That advertising should be banned",
          "That minimalism is the only solution",
          "That credit cards are dangerous",
        ],
        answer: 0,
        explanation: "The text says advertising taught us that 'the more we own, the happier we will be', the basis of consumerism.",
      },
      {
        type: "multiple-choice",
        prompt: "According to minimalists, what will happen if you declutter your home and keep only what you need?",
        options: [
          "You will have to live with nothing",
          "You will gain space, time and peace of mind",
          "You will earn more money at work",
          "You will buy more on impulse",
        ],
        answer: 1,
        explanation: "The text states you will 'gain space, time and peace of mind'.",
      },
      {
        type: "multiple-choice",
        prompt: "Why does the writer say a less materialistic lifestyle is usually more sustainable?",
        options: [
          "Because minimalist products are cheaper",
          "Because shopping creates millions of jobs",
          "Because goods we do not buy do not have to be manufactured and shipped",
          "Because the government rewards people who buy less",
        ],
        answer: 2,
        explanation: "The text explains that every product we do not buy is one that does not have to be manufactured, shipped and thrown away.",
      },
    ],
  },
  speaking: [
    "If you decided to declutter your room this weekend, what would you keep and what would you throw away?",
    "Do you agree that a more minimalist, less materialistic life is also more sustainable? Explain why.",
    "If advertising suddenly disappeared, how do you think people's shopping habits would change?",
  ],
  writing: {
    task: "Write about whether modern consumerism makes people happier. Include at least one first conditional and one second conditional sentence, and use at least three words from this topic.",
    minWords: 120,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt: "First conditional: If you make a shopping list, you ___ (buy) less on impulse.",
      answer: "will buy",
      explanation: "First conditional for a real future result: 'if + present simple, will + infinitive'.",
    },
    {
      type: "gap-fill",
      prompt: "Second conditional: If everyone ___ (buy) less, the planet would be healthier.",
      answer: "bought",
      explanation: "Second conditional uses the past simple in the 'if' clause for an unreal situation: 'buy' becomes 'bought'.",
    },
    {
      type: "multiple-choice",
      prompt: "Which sentence is a correct second conditional?",
      options: [
        "If I have a smaller home, I will own fewer things.",
        "If I had a smaller home, I would own fewer things.",
        "If I had a smaller home, I will own fewer things.",
        "If I have a smaller home, I would own fewer things.",
      ],
      answer: 1,
      explanation: "The second conditional pattern is 'if + past simple, would + infinitive'.",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the correct first conditional for a likely future result.",
      options: [
        "If they declutter the flat, they would feel calmer.",
        "If they decluttered the flat, they will feel calmer.",
        "If they declutter the flat, they will feel calmer.",
        "If they would declutter the flat, they feel calmer.",
      ],
      answer: 2,
      explanation: "First conditional: 'if + present simple (declutter), will + infinitive (will feel)'.",
    },
    {
      type: "gap-fill",
      prompt: "Something you buy suddenly without planning is called an ___.",
      answer: "impulse purchase",
      explanation: "An 'impulse purchase' is an unplanned, spur-of-the-moment buy.",
    },
  ],
};
