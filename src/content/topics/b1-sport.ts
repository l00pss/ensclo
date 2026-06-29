import type { Topic } from "../types";

export const b1Sport: Topic = {
  id: "b1-sport",
  level: "B1",
  title: "The World of Sport",
  theme: "Sport",
  summary: "Explore why people love sport, and learn to compare things with comparatives and superlatives.",
  leadIn: [
    "What is your favourite sport to watch or play?",
    "Who is the best athlete you know?",
    "Is football more popular than basketball in your country?",
  ],
  vocabulary: [
    {
      word: "athlete",
      definition: "a person who is good at sport and trains to compete",
      example: "Every athlete trains hard to become faster and stronger.",
      collocations: ["professional athlete", "talented athlete"],
      azNote: "idmançı, atletika ilə məşğul olan adam",
    },
    {
      word: "competition",
      definition: "an event where people try to win by being better than others",
      example: "The swimming competition was the most exciting event of the year.",
      collocations: ["enter a competition", "win a competition"],
      azNote: "yarış, müsabiqə; insanlar qalib gəlmək üçün mübarizə aparır",
    },
    {
      word: "coach",
      definition: "a person who trains a team or an athlete",
      example: "A good coach makes the whole team play better.",
      collocations: ["head coach", "team coach"],
      azNote: "məşqçi, komandanı və ya idmançını hazırlayan şəxs",
    },
    {
      word: "opponent",
      definition: "the person or team you play against in a match",
      example: "Their opponent was stronger, but our team did not give up.",
      collocations: ["tough opponent", "beat an opponent"],
      azNote: "rəqib, oyunda qarşı tərəfdə olan komanda və ya şəxs",
    },
    {
      word: "fitness",
      definition: "the state of being healthy and strong, especially from exercise",
      example: "Regular training improves your fitness more than anything else.",
      collocations: ["physical fitness", "improve fitness"],
      azNote: "fiziki forma, məşqlə əldə olunan sağlamlıq və güc",
    },
    {
      word: "victory",
      definition: "a win in a game, match or competition",
      example: "The team celebrated their greatest victory of the season.",
      collocations: ["clear victory", "celebrate a victory"],
      azNote: "qələbə, oyunda və ya yarışda udmaq",
    },
  ],
  grammar: {
    point: "Comparatives and superlatives",
    explanation:
      "We use comparatives to compare two things: short adjectives add '-er' (faster), and longer adjectives use 'more' (more popular). We use superlatives for the top of a group: '-est' (the fastest) or 'the most' (the most popular). Some words are irregular: good - better - the best, bad - worse - the worst. We use 'as ... as' to say two things are equal.",
    azNote:
      "İki şeyi müqayisə edəndə qısa sifətlərə '-er' əlavə edirik (faster), uzun sifətlərlə isə 'more' işlədirik (more popular). Bir qrupun ən yaxşısını demək üçün '-est' və ya 'the most' istifadə olunur. Bəzi sözlər qaydasızdır: good, better, the best; bad, worse, the worst. İki şey bərabər olanda 'as ... as' deyirik.",
    examples: [
      { en: "Usain Bolt was faster than every other runner.", note: "short adjective + -er" },
      { en: "Football is more popular than tennis in many countries.", note: "long adjective + more" },
      { en: "She is the best player on the team this year.", note: "irregular superlative" },
      { en: "My fitness is as good as it was last summer.", note: "as ... as for equality" },
    ],
  },
  reading: {
    title: "Why we love sport",
    text: `All around the world, millions of people play and watch sport every day. Some want to become a professional athlete, while others simply enjoy the feeling of getting fitter. Sport is more than a game: it teaches us how to work in a team, how to lose, and how to celebrate a victory with friends.

Behind almost every successful team there is a good coach. A coach helps each athlete to train harder and to become faster and stronger than before. The best coaches are not always the loudest ones. They know that improving fitness slowly is more useful than pushing too hard, and that a calm player often performs better than a nervous one. They also teach players to respect every opponent.

A real competition is exciting because nobody knows who will win. The favourite team is not always the best on the day, and a weaker opponent can play better than expected. Sometimes the most important match is not the easiest one, and the greatest victory comes after the hardest fight. This is why sport is more dramatic than almost any film.

In the end, sport is good for the body and the mind. Playing regularly is healthier than sitting at home, and team sport is often more fun than training alone. You do not have to be the fastest runner or the strongest player in the world. As long as you enjoy the competition and do your best, you are already a winner.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "According to the text, what do the best coaches understand?",
        options: [
          "Players must always train as hard as possible.",
          "Improving fitness slowly is more useful than pushing too hard.",
          "The loudest coach is the best coach.",
          "A nervous player performs better than a calm one.",
        ],
        answer: 1,
        explanation: "The text says improving fitness slowly is more useful than pushing too hard.",
      },
      {
        type: "multiple-choice",
        prompt: "Why is a real competition exciting?",
        options: [
          "Because the favourite team always wins.",
          "Because the best team plays every day.",
          "Because nobody knows who will win.",
          "Because there is never an opponent.",
        ],
        answer: 2,
        explanation: "The text states that a competition is exciting because nobody knows who will win.",
      },
      {
        type: "multiple-choice",
        prompt: "What is the main message of the last paragraph?",
        options: [
          "Only the fastest runner is a winner.",
          "Sitting at home is healthier than playing.",
          "You should train alone to be a winner.",
          "You can be a winner by enjoying sport and doing your best.",
        ],
        answer: 3,
        explanation: "The last paragraph says you are a winner if you enjoy the competition and do your best.",
      },
    ],
  },
  speaking: [
    "Compare two sports and say which one you think is more exciting and why.",
    "Talk about the best athlete in your country and explain what makes them great.",
    "Describe the hardest competition you have ever taken part in or watched.",
  ],
  writing: {
    task: "Write about your favourite sport. Use comparatives and superlatives (for example faster, the best, more popular) and at least 3 topic words such as athlete, coach, competition or victory.",
    minWords: 80,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt: "Usain Bolt was ___ (fast) than every other runner in the race.",
      answer: "faster",
      explanation: "Short adjective 'fast' takes '-er' in the comparative: faster.",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the correct superlative: 'She is ___ player on the team.'",
      options: ["the best", "the better", "more good", "best more"],
      answer: 0,
      explanation: "'Good' is irregular: good - better - the best. The superlative is 'the best'.",
    },
    {
      type: "gap-fill",
      prompt: "Football is ___ (popular) than tennis in many countries.",
      answer: "more popular",
      explanation: "Longer adjectives use 'more' for the comparative: more popular.",
    },
    {
      type: "multiple-choice",
      prompt: "Which sentence uses 'as ... as' correctly to show equality?",
      options: [
        "My fitness is as good as it was last summer.",
        "My fitness is as better as last summer.",
        "My fitness is as best as last summer.",
        "My fitness is good as as last summer.",
      ],
      answer: 0,
      explanation: "'as + adjective + as' shows two things are equal: as good as.",
    },
    {
      type: "multiple-choice",
      prompt: "Which word means 'the person or team you play against'?",
      options: ["opponent", "coach", "athlete", "victory"],
      answer: 0,
      explanation: "'Opponent' is the person or team you play against in a match.",
    },
  ],
};
