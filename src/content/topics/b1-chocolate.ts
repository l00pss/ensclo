import type { Topic } from "../types";

export const b1Chocolate: Topic = {
  id: "b1-chocolate",
  level: "B1",
  title: "The History of Chocolate",
  theme: "Food",
  summary:
    "Discover where chocolate really comes from, and learn to talk about past habits and situations with 'used to'.",
  leadIn: [
    "How often do you eat chocolate? Do you prefer it sweet or bitter?",
    "Where do you think chocolate first came from?",
    "Did you use to eat more sweets when you were a child?",
  ],
  vocabulary: [
    {
      word: "ancient",
      definition: "belonging to a time very long ago in history",
      example: "Ancient people in Mexico made a special drink from cocoa.",
      collocations: ["ancient history", "ancient civilisation"],
      azNote: "qədim",
    },
    {
      word: "bean",
      definition: "a seed, or the seed of certain plants used as food",
      example: "Chocolate is made from the beans of the cacao tree.",
      collocations: ["cocoa bean", "coffee bean"],
      azNote: "dən / paxla (kakao dəni)",
    },
    {
      word: "bitter",
      definition: "having a sharp, unpleasant taste; not sweet",
      example: "The first chocolate drink was very bitter, not sweet at all.",
      collocations: ["bitter taste", "bitter chocolate"],
      azNote: "acı",
    },
    {
      word: "to grind",
      definition: "to crush something into a powder or paste",
      example: "They used to grind the beans between two stones.",
      collocations: ["grind into powder", "grind coffee"],
      azNote: "üyütmək (grind–ground–ground)",
    },
    {
      word: "valuable",
      definition: "worth a lot of money or very useful",
      example: "Cocoa beans were so valuable that people used them as money.",
      collocations: ["very valuable", "a valuable lesson"],
      azNote: "dəyərli / qiymətli",
    },
    {
      word: "treat",
      definition: "something special and enjoyable, often to eat",
      example: "For most people, chocolate is a sweet treat.",
      collocations: ["a special treat", "a sweet treat"],
      azNote: "ləzzət / xüsusi şirinlik (həm də 'qonaq etmək' feili)",
    },
  ],
  grammar: {
    point: "used to (past habits & states)",
    explanation:
      "We use 'used to + infinitive' for things that were true or happened regularly in the past but are not true now: 'People used to use cocoa beans as money.' The negative is 'didn't use to' and the question is 'Did you use to...?'. Note the spelling: after 'did', we write 'use to' (without the final -d).",
    azNote:
      "'used to' = keçmişdə doğru olan, amma indi belə olmayan vərdiş/vəziyyət. 'I used to drink coffee' = əvvəllər içirdim, indi yox. İnkar: 'didn't use to', sual: 'Did you use to...?' (burada 'd' düşür).",
    examples: [
      { en: "Chocolate used to be a drink, not a bar.", note: "past state, not true now" },
      { en: "People didn't use to add sugar to it.", note: "negative: didn't use to" },
      { en: "Did the Aztecs use to drink chocolate?", note: "question: did + use to" },
      {
        en: "✗ I used to didn't like it. → ✓ I didn't use to like it.",
        note: "in negatives the -d disappears",
      },
    ],
  },
  reading: {
    title: "From bitter drink to sweet treat",
    text: `When we think of chocolate today, we imagine a sweet bar or a box of treats. But chocolate did not always look or taste like this. Thousands of years ago, ancient people in Central America were the first to use the cocoa bean, and the chocolate they made was completely different from ours.

The Maya and the Aztecs used to grind cocoa beans into a paste and mix it with water and spices. The result was a thick, bitter drink — there was no sugar in it at all. People used to drink it during special ceremonies, and only the rich and powerful could enjoy it. Cocoa beans were so valuable that people even used to use them as money. You could buy food, or even an animal, with a handful of beans.

When the beans arrived in Europe, everything changed. Europeans did not use to like the bitter taste, so they began adding sugar and milk. Slowly, the drink became sweeter and more popular. Later, factories learned how to make solid chocolate bars, and chocolate stopped being a drink only for the rich.

Today, almost everyone can buy chocolate, and we no longer use beans as money. But the next time you enjoy a sweet bar, remember: it used to be a bitter drink worth a small fortune.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "What was the original chocolate drink like?",
        options: ["Sweet and cold", "Thick and bitter", "Hot and milky", "Light and fizzy"],
        answer: 1,
        explanation: "'The result was a thick, bitter drink — there was no sugar in it at all.'",
      },
      {
        type: "multiple-choice",
        prompt: "How did ancient people sometimes use cocoa beans?",
        options: ["As medicine", "As money", "As seeds for flowers", "As toys"],
        answer: 1,
        explanation: "'people even used to use them as money'.",
      },
      {
        type: "multiple-choice",
        prompt: "Why did Europeans change the drink?",
        options: [
          "They wanted it to be more bitter.",
          "They did not use to like the bitter taste.",
          "They had no water.",
          "They wanted to sell beans.",
        ],
        answer: 1,
        explanation: "'Europeans did not use to like the bitter taste, so they began adding sugar and milk.'",
      },
    ],
  },
  speaking: [
    "Describe a food or drink you used to love as a child but don't eat now.",
    "How have eating habits in your country changed? What did people use to eat?",
    "Some people say chocolate is unhealthy. What do you think — should we eat less of it?",
  ],
  writing: {
    task: "Write a short paragraph about how life used to be different when your grandparents were young. Use 'used to', 'didn't use to' and at least three words from this topic.",
    minWords: 80,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt: "People ___ (use to) drink chocolate, not eat it.",
      answer: "used to",
      explanation: "Affirmative past habit → 'used to' (with -d).",
    },
    {
      type: "gap-fill",
      prompt: "Europeans ___ (not / use to) like the bitter taste.",
      answer: "didn't use to",
      accept: ["did not use to", "didnt use to"],
      explanation: "Negative → 'didn't use to' (no -d on 'use').",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the correct sentence:",
      options: [
        "Did you used to like chocolate?",
        "Did you use to like chocolate?",
        "Do you used to like chocolate?",
        "Did you using to like chocolate?",
      ],
      answer: 1,
      explanation: "In questions: 'Did + you + use to...?' (no -d).",
    },
    {
      type: "gap-fill",
      prompt: "Cocoa beans were so ___ that people used them as money. (worth a lot)",
      answer: "valuable",
      explanation: "'valuable' = worth a lot of money.",
    },
    {
      type: "multiple-choice",
      prompt: "Which word means 'to crush into powder or paste'?",
      options: ["to grind", "to boil", "to freeze", "to pour"],
      answer: 0,
      explanation: "'to grind' (grind–ground–ground) means to crush into powder.",
    },
  ],
};
