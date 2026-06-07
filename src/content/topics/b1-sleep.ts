import type { Topic } from "../types";

export const b1Sleep: Topic = {
  id: "b1-sleep",
  level: "B1",
  title: "A Good Night's Sleep",
  theme: "Health",
  summary:
    "Find out what really happens when you sleep, and learn to give advice and talk about rules with 'should', 'must' and 'have to'.",
  leadIn: [
    "How many hours do you usually sleep? Is it enough?",
    "What do you do if you can't fall asleep?",
    "Do you think people should use their phones in bed?",
  ],
  vocabulary: [
    {
      word: "to rest",
      definition: "to stop activity in order to relax and get your energy back",
      example: "Your body needs to rest after a long, busy day.",
      collocations: ["rest well", "get some rest"],
      azNote: "dincəlmək / istirahət etmək",
    },
    {
      word: "tired",
      definition: "needing sleep or rest; feeling without energy",
      example: "If you don't sleep enough, you will feel tired all day.",
      collocations: ["feel tired", "extremely tired"],
      azNote: "yorğun",
    },
    {
      word: "habit",
      definition: "something you do regularly, often without thinking",
      example: "Going to bed at the same time is a healthy habit.",
      collocations: ["a good habit", "a bad habit"],
      azNote: "vərdiş",
    },
    {
      word: "to relax",
      definition: "to become calm and free from worry or stress",
      example: "Reading a book before bed helps you relax.",
      collocations: ["relax completely", "help you relax"],
      azNote: "rahatlamaq / sakitləşmək",
    },
    {
      word: "energy",
      definition: "the strength and power you need to be active",
      example: "After a good night's sleep, you wake up full of energy.",
      collocations: ["full of energy", "lack of energy"],
      azNote: "enerji",
    },
    {
      word: "to concentrate",
      definition: "to give all your attention to one thing",
      example: "It is hard to concentrate at work when you are tired.",
      collocations: ["concentrate on", "hard to concentrate"],
      azNote: "diqqəti cəmləmək",
    },
  ],
  grammar: {
    point: "should, must & have to (advice and obligation)",
    explanation:
      "Use 'should / shouldn't' to give advice or say what is a good idea: 'You should sleep eight hours.' Use 'must' for strong personal advice or rules you feel are very important: 'You must not look at your phone in bed.' Use 'have to / has to' for rules and obligations that come from outside (laws, jobs, situations): 'Doctors have to work at night.' All are followed by the infinitive without 'to' (except 'have to').",
    azNote:
      "'should' = məsləhət, yaxşı fikir ('You should rest'). 'must' = güclü, şəxsi məsləhət/qayda ('You must stop'). 'have to / has to' = kənardan gələn məcburiyyət (qanun, iş) ('I have to work'). 'should/must' + sadə feil; 'have to' + sadə feil.",
    examples: [
      { en: "You should turn off your phone before bed.", note: "advice → should" },
      { en: "You shouldn't drink coffee late at night.", note: "negative advice → shouldn't" },
      { en: "You must not ignore your body's need for sleep.", note: "strong advice → must not" },
      {
        en: "Nurses have to work some nights.",
        note: "outside obligation (the job) → have to",
      },
    ],
  },
  reading: {
    title: "What happens while you sleep",
    text: `Many people think that sleep is a waste of time. They believe they should work more and rest less. In fact, the opposite is true: sleep is one of the most important things you do, and your body has to have it to stay healthy.

While you sleep, your brain does not switch off. Instead, it gets busy. It organises the things you learned during the day and helps you remember them, so students really should get enough sleep before an exam. At the same time, your body repairs itself and saves energy for the next day.

What happens if you don't sleep enough? You feel tired, of course, but there is more. You find it harder to concentrate, you get ill more easily, and you may feel sad or angry. Doctors say that most adults must aim for seven to nine hours a night.

So what should you do to sleep better? First, you should go to bed at the same time every day, because your body loves a regular habit. You shouldn't look at bright screens just before bed, and you should try to relax with a book or some quiet music. You don't have to do anything difficult — small changes can make a big difference. Treat sleep as a friend, not an enemy, and you will feel the benefits every day.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "What does the brain do while you sleep?",
        options: [
          "It switches off completely.",
          "It organises and stores what you learned.",
          "It stops working until morning.",
          "It uses more energy than in the day.",
        ],
        answer: 1,
        explanation: "'It organises the things you learned during the day and helps you remember them'.",
      },
      {
        type: "multiple-choice",
        prompt: "How many hours should most adults sleep?",
        options: ["3 to 4 hours", "5 to 6 hours", "7 to 9 hours", "10 to 12 hours"],
        answer: 2,
        explanation: "'most adults must aim for seven to nine hours a night'.",
      },
      {
        type: "multiple-choice",
        prompt: "What advice does the text give for sleeping better?",
        options: [
          "Look at bright screens before bed.",
          "Go to bed at a different time every day.",
          "Go to bed at the same time every day.",
          "Drink coffee at night.",
        ],
        answer: 2,
        explanation: "'you should go to bed at the same time every day'.",
      },
    ],
  },
  speaking: [
    "Give three pieces of advice to someone who can't sleep well. Use 'should' and 'shouldn't'.",
    "Talk about the rules you have to follow in your daily life (at work, school or home). Use 'have to'.",
    "Do you think schools should start later so students can sleep more? Why / why not?",
  ],
  writing: {
    task: "Write a short 'healthy sleep guide' with advice. Use 'should', 'shouldn't', 'must' and 'have to' at least once each, plus three words from this topic.",
    minWords: 90,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt: "You ___ (advice: positive) go to bed earlier.",
      answer: "should",
      explanation: "Advice / good idea → 'should' + infinitive.",
    },
    {
      type: "gap-fill",
      prompt: "You ___ (advice: negative) drink coffee at night.",
      answer: "shouldn't",
      accept: ["should not", "shouldnt"],
      explanation: "Negative advice → 'shouldn't' + infinitive.",
    },
    {
      type: "multiple-choice",
      prompt: "Which sentence shows an obligation from outside (a job rule)?",
      options: [
        "You should relax before bed.",
        "Nurses have to work some nights.",
        "You shouldn't use your phone in bed.",
        "You should read a book.",
      ],
      answer: 1,
      explanation: "'have to' = an obligation that comes from outside (here, the job).",
    },
    {
      type: "gap-fill",
      prompt: "When you are tired, it is hard to ___ at work. (give all your attention)",
      answer: "concentrate",
      explanation: "'concentrate' = to give all your attention to one thing.",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the correct sentence:",
      options: [
        "You should to sleep more.",
        "You should sleep more.",
        "You should sleeping more.",
        "You shoulds sleep more.",
      ],
      answer: 1,
      explanation: "After 'should' use the infinitive without 'to': 'should sleep'.",
    },
  ],
};
