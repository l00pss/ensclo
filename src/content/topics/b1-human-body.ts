import type { Topic } from "../types";

export const b1HumanBody: Topic = {
  id: "b1-human-body",
  level: "B1",
  title: "The Human Body and Health",
  theme: "Health",
  summary:
    "Learn how the main parts of the body work, and practise giving advice and stating rules with 'should / shouldn't' and 'must / mustn't'.",
  leadIn: [
    "Which parts of your body do you use most during the day?",
    "What do you do to stay healthy?",
    "Do you think people should exercise every day?",
  ],
  vocabulary: [
    {
      word: "muscle",
      definition: "a part of the body that you use to move and lift things",
      example: "Your heart is a strong muscle that never stops working.",
      collocations: ["build muscle", "strong muscles"],
      azNote: "əzələ",
    },
    {
      word: "to breathe",
      definition: "to take air into your body and let it out again",
      example: "When you run fast, you breathe more quickly.",
      collocations: ["breathe deeply", "breathe in"],
      azNote: "nəfəs almaq",
    },
    {
      word: "brain",
      definition: "the organ inside your head that controls your body and thoughts",
      example: "Your brain sends messages to every part of your body.",
      collocations: ["the human brain", "use your brain"],
      azNote: "beyin",
    },
    {
      word: "to exercise",
      definition: "to move your body actively in order to stay strong and healthy",
      example: "You should exercise for at least thirty minutes a day.",
      collocations: ["exercise regularly", "exercise hard"],
      azNote: "idman etmək / məşq etmək",
    },
    {
      word: "germ",
      definition: "a very small living thing that can make you ill",
      example: "Washing your hands removes germs and keeps you safe.",
      collocations: ["spread germs", "harmful germs"],
      azNote: "mikrob",
    },
    {
      word: "to recover",
      definition: "to become healthy again after an illness or injury",
      example: "Your body needs rest and good food to recover quickly.",
      collocations: ["recover fully", "recover from illness"],
      azNote: "sağalmaq / özünə gəlmək",
    },
  ],
  grammar: {
    point: "should / shouldn't & must / mustn't (advice and rules)",
    explanation:
      "Use 'should / shouldn't' to give advice or say what is a good or bad idea: 'You should drink water.' Use 'must' for strong rules or things that are necessary: 'You must wash your hands.' Use 'mustn't' to say something is forbidden or not allowed: 'You mustn't smoke here.' All of these are followed by the infinitive without 'to'.",
    azNote:
      "'should / shouldn't' məsləhət və ya yaxşı/pis fikri bildirir ('You should rest'). 'must' güclü qaydanı və ya vacib şeyi göstərir ('You must wash your hands'). 'mustn't' isə qadağanı bildirir, yəni nəyəsə icazə yoxdur ('You mustn't smoke'). Bütün bunlardan sonra feil 'to'-suz işlənir.",
    examples: [
      { en: "You should exercise a few times every week.", note: "advice → should" },
      { en: "You shouldn't eat too much sugar.", note: "negative advice → shouldn't" },
      { en: "You must wash your hands before you eat.", note: "necessary rule → must" },
      { en: "You mustn't ignore strong pain in your chest.", note: "forbidden / not allowed → mustn't" },
    ],
  },
  reading: {
    title: "How your body keeps you alive",
    text: `Your body is like an amazing machine that works day and night without stopping. Inside your chest, your heart is a powerful muscle that pumps blood to every part of you. At the same time, your lungs help you breathe, taking in fresh air and pushing out air you do not need. You never have to think about these jobs, because your brain controls them automatically while you eat, walk and even sleep.

To stay strong, this machine needs care. Doctors say you should exercise often, because movement keeps your muscles and your heart healthy. You shouldn't sit all day without moving, and you mustn't forget to drink enough water. A short walk, some sport or a few simple activities at home can make a big difference to how you feel.

Your body also has to fight tiny enemies. Every day a germ can enter through your nose, mouth or skin and try to make you ill. For this reason, you must wash your hands before you eat, and you mustn't share a cup or a towel when someone is sick. These small rules stop many germs from spreading to other people.

When you do get ill, be patient. Your body knows how to recover, but it needs your help. You should rest, eat good food and sleep well, and you shouldn't return to hard work too soon. Listen to your brain and your body: they will always tell you what they need.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "What does the heart do, according to the text?",
        options: [
          "It helps you breathe fresh air.",
          "It is a muscle that pumps blood around the body.",
          "It controls your thoughts.",
          "It fights germs in your skin.",
        ],
        answer: 1,
        explanation: "'your heart is a powerful muscle that pumps blood to every part of you'.",
      },
      {
        type: "multiple-choice",
        prompt: "Which rule does the text give to stop germs spreading?",
        options: [
          "You should sit all day.",
          "You mustn't drink water.",
          "You must wash your hands before you eat.",
          "You should return to work quickly.",
        ],
        answer: 2,
        explanation: "'you must wash your hands before you eat'.",
      },
      {
        type: "multiple-choice",
        prompt: "What should you do when you are ill?",
        options: [
          "Rest, eat good food and sleep well.",
          "Return to hard work at once.",
          "Stop drinking water.",
          "Exercise as hard as possible.",
        ],
        answer: 0,
        explanation: "'You should rest, eat good food and sleep well'.",
      },
    ],
  },
  speaking: [
    "Give three pieces of health advice to a friend. Use 'should' and 'shouldn't'.",
    "Talk about the rules people must and mustn't follow to avoid spreading germs. Use 'must' and 'mustn't'.",
    "How do you keep your body and brain healthy? Describe your habits.",
  ],
  writing: {
    task: "Write a short 'healthy body guide' with advice and rules. Use 'should', 'shouldn't', 'must' and 'mustn't' at least once each, plus three words from this topic.",
    minWords: 90,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt: "You ___ (advice: positive) exercise a few times a week.",
      answer: "should",
      explanation: "Advice / good idea → 'should' + infinitive.",
    },
    {
      type: "gap-fill",
      prompt: "You ___ (forbidden) share a towel with a sick person.",
      answer: "mustn't",
      accept: ["must not", "mustnt"],
      explanation: "Something forbidden or not allowed → 'mustn't' + infinitive.",
    },
    {
      type: "multiple-choice",
      prompt: "Which sentence gives negative advice (a bad idea, but not forbidden)?",
      options: [
        "You must wash your hands.",
        "You shouldn't eat too much sugar.",
        "You mustn't smoke here.",
        "You must drink water.",
      ],
      answer: 1,
      explanation: "'shouldn't' gives advice that something is a bad idea, not a strict rule.",
    },
    {
      type: "gap-fill",
      prompt: "When you run fast, you ___ more quickly. (take air in and out)",
      answer: "breathe",
      explanation: "'breathe' = to take air into your body and let it out again.",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the correct sentence:",
      options: [
        "You must to wash your hands.",
        "You must washing your hands.",
        "You must wash your hands.",
        "You musts wash your hands.",
      ],
      answer: 2,
      explanation: "After 'must' use the infinitive without 'to': 'must wash'.",
    },
  ],
};
