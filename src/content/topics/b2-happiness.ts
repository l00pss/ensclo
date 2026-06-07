import type { Topic } from "../types";

export const b2Happiness: Topic = {
  id: "b2-happiness",
  level: "B2",
  title: "The Science of Happiness",
  theme: "Health",
  summary:
    "Explore what really makes people happy, and use the second conditional to talk about imaginary situations and their results.",
  leadIn: [
    "What three things make you happiest in everyday life?",
    "Do you think money can buy happiness? Why or why not?",
    "If you could change one thing about your lifestyle, what would it be?",
  ],
  vocabulary: [
    {
      word: "satisfaction",
      definition: "the pleasant feeling you have when you get what you wanted or did something well",
      example: "Many people find more satisfaction in experiences than in possessions.",
      collocations: ["a sense of satisfaction", "job satisfaction"],
      azNote: "məmnunluq / razılıq hissi",
    },
    {
      word: "to appreciate",
      definition: "to recognise the good qualities of something and be grateful for it",
      example: "If we slowed down, we would appreciate the small moments more.",
      collocations: ["really appreciate", "appreciate the value of"],
      azNote: "qiymətləndirmək / dəyər vermək",
    },
    {
      word: "wealth",
      definition: "a large amount of money and possessions",
      example: "Beyond a certain point, extra wealth adds little to our happiness.",
      collocations: ["great wealth", "create wealth"],
      azNote: "var-dövlət / sərvət",
    },
    {
      word: "relationship",
      definition: "the way two or more people are connected and behave towards each other",
      example: "Strong relationships are one of the best predictors of a happy life.",
      collocations: ["a close relationship", "build a relationship"],
      azNote: "münasibət / əlaqə",
    },
    {
      word: "grateful",
      definition: "feeling or showing thanks for something",
      example: "People who keep a diary of things they are grateful for often feel happier.",
      collocations: ["grateful for", "deeply grateful"],
      azNote: "minnətdar / təşəkkürlü",
    },
    {
      word: "to pursue",
      definition: "to try to achieve or follow something over time",
      example: "If you only pursue money, you might miss what matters most.",
      collocations: ["pursue a goal", "pursue happiness"],
      azNote: "ardınca getmək / can atmaq",
    },
  ],
  grammar: {
    point: "The second conditional",
    explanation:
      "Use the second conditional to talk about imaginary, unlikely or impossible situations in the present or future, and their results: 'If I had more free time, I would learn the piano.' The structure is: If + past simple, ... would + infinitive. The past tense here does not mean past time — it shows that the situation is unreal. We often use 'were' for all persons: 'If I were rich...'.",
    azNote:
      "Second conditional = indiki/gələcək XƏYALİ, qeyri-real vəziyyət və nəticəsi. Quruluş: If + past simple, ... would + infinitive. 'If I won the lottery, I would travel.' Buradakı past keçmiş vaxt demək deyil — qeyri-reallığı göstərir. 'I' ilə tez-tez 'were' işlənir: 'If I were you...'.",
    examples: [
      { en: "If I had more money, I would help my family.", note: "imaginary present → would + inf." },
      { en: "If people appreciated small things, they would be happier.", note: "unreal situation" },
      { en: "What would you do if you won a million?", note: "question form" },
      {
        en: "If I were healthier, I would feel calmer.",
        note: "'were' is common for all persons",
      },
    ],
  },
  reading: {
    title: "What really makes us happy",
    text: `If you asked most people what would make them happier, many would give the same answer: more money. It feels obvious. Yet decades of research suggest that the relationship between wealth and happiness is far weaker than we imagine. Money certainly helps when it lifts people out of poverty, but once our basic needs are met, extra income adds surprisingly little. If a millionaire suddenly doubled their fortune, they probably would not feel twice as happy.

So what would make a real difference? According to psychologists, the answer lies in three areas. The first is relationships. People with close friends and strong family ties consistently report more satisfaction with life. If we invested as much energy in our friendships as we do in our careers, many of us would feel far happier.

The second is gratitude. Studies show that people who regularly notice and appreciate the good things in their lives tend to feel more positive. If you wrote down three things you were grateful for each evening, you would probably notice a change within a few weeks.

The third is purpose. Humans need to feel that their actions matter. If someone spent every day only pursuing pleasure, they might soon feel empty; but a person who works towards a meaningful goal usually feels more alive.

None of this means that money is unimportant. It simply means that, if we understood happiness better, we would chase it in smarter ways — spending less on things and more on the experiences and people that truly matter.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "What does research suggest about money and happiness?",
        options: [
          "More money always means more happiness.",
          "After basic needs are met, extra money adds little.",
          "Money has no effect at all.",
          "Only rich people are happy.",
        ],
        answer: 1,
        explanation: "'once our basic needs are met, extra income adds surprisingly little'.",
      },
      {
        type: "multiple-choice",
        prompt: "Which three areas matter most for happiness, according to the text?",
        options: [
          "Money, fame, power",
          "Relationships, gratitude, purpose",
          "Food, sleep, exercise",
          "Travel, shopping, parties",
        ],
        answer: 1,
        explanation: "The text lists relationships, gratitude and purpose.",
      },
      {
        type: "multiple-choice",
        prompt: "What is the main advice at the end of the text?",
        options: [
          "Spend more money on things.",
          "Spend less on things and more on experiences and people.",
          "Stop working completely.",
          "Avoid all relationships.",
        ],
        answer: 1,
        explanation: "'spending less on things and more on the experiences and people that truly matter'.",
      },
    ],
  },
  speaking: [
    "If you had one extra free day every week, what would you do with it, and why?",
    "If you could give one piece of advice about living a happy life, what would it be?",
    "Do you agree that experiences make us happier than possessions? Explain your view.",
  ],
  writing: {
    task: "Write a paragraph describing how your life would change if you had more time or money. Use at least four second-conditional sentences and three words from this topic.",
    minWords: 110,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt: "If I ___ (have) more free time, I would learn to paint.",
      answer: "had",
      explanation: "Second conditional: the if-clause uses the past simple (had).",
    },
    {
      type: "gap-fill",
      prompt: "If people appreciated small things, they ___ (be) happier.",
      answer: "would be",
      accept: ["would be", "'d be"],
      explanation: "The result clause uses 'would' + infinitive.",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the correct second conditional:",
      options: [
        "If I will win the lottery, I would travel.",
        "If I won the lottery, I would travel.",
        "If I won the lottery, I will travel.",
        "If I win the lottery, I travelled.",
      ],
      answer: 1,
      explanation: "Second conditional: If + past simple, ... would + infinitive.",
    },
    {
      type: "gap-fill",
      prompt: "People who keep a diary of good things feel more ___. (thankful)",
      answer: "grateful",
      explanation: "'grateful' = feeling or showing thanks.",
    },
    {
      type: "multiple-choice",
      prompt: "'to pursue' means:",
      options: [
        "to ignore something",
        "to try to achieve or follow something",
        "to forget a goal",
        "to give something away",
      ],
      answer: 1,
      explanation: "'to pursue' = to try to achieve or follow something over time.",
    },
  ],
};
