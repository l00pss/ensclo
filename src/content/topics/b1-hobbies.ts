import type { Topic } from "../types";

export const b1Hobbies: Topic = {
  id: "b1-hobbies",
  level: "B1",
  title: "Hobbies and Free Time",
  theme: "Lifestyle",
  summary:
    "Talk about what you do for fun, and learn the difference between the present simple (habits and routines) and the present continuous (actions happening now), plus 'like/love/enjoy/hate + -ing'.",
  leadIn: [
    "What do you usually do in your free time?",
    "Are you doing any new activities at the moment?",
    "Do you enjoy doing sport, or do you prefer relaxing at home?",
  ],
  vocabulary: [
    {
      word: "hobby",
      definition: "an activity you do for pleasure when you are not working or studying",
      example: "Painting is her favourite hobby.",
      collocations: ["a popular hobby", "an expensive hobby"],
      azNote: "hobbi / maraq dairəsi, sevərək edilən məşğuliyyət",
    },
    {
      word: "to collect",
      definition: "to gather together many things of the same type because you enjoy it",
      example: "He likes to collect old coins from different countries.",
      collocations: ["collect stamps", "collect things"],
      azNote: "kolleksiya etmək, yığmaq (məsələn, marka və ya pul)",
    },
    {
      word: "spare time",
      definition: "the time when you are free and not working or studying",
      example: "In my spare time I read books and play the guitar.",
      collocations: ["in my spare time", "have spare time"],
      azNote: "boş vaxt, asudə vaxt",
    },
    {
      word: "to take up",
      definition: "to start doing a new activity or hobby",
      example: "She decided to take up photography last year.",
      collocations: ["take up a sport", "take up a hobby"],
      azNote: "yeni bir məşğuliyyətə başlamaq, öyrənməyə başlamaq",
    },
    {
      word: "keen",
      definition: "very interested in something and wanting to do it a lot",
      example: "My brother is keen on chess and plays every evening.",
      collocations: ["keen on", "a keen player"],
      azNote: "həvəsli, çox maraqlanan ('keen on' = bir şeyə həvəsi olmaq)",
    },
    {
      word: "relaxing",
      definition: "making you feel calm and free from stress or worry",
      example: "Listening to music is very relaxing after a long day.",
      collocations: ["a relaxing hobby", "really relaxing"],
      azNote: "rahatladıcı, sakitləşdirici, dincəldən",
    },
  ],
  grammar: {
    point: "Present simple vs present continuous (+ like/love/enjoy/hate + -ing)",
    explanation:
      "Use the present simple for habits, routines and things that are generally true: 'I play tennis every weekend.' Use the present continuous (am/is/are + -ing) for actions happening now or around the present moment: 'I am reading a great book this week.' After 'like', 'love', 'enjoy' and 'hate' we usually use the -ing form: 'I enjoy painting.' Time words like 'usually', 'every day' and 'often' go with the present simple, while 'now', 'at the moment' and 'today' go with the present continuous.",
    azNote:
      "Present simple vərdiş və təkrarlanan işlər üçündür: 'I play tennis every weekend.' Present continuous indi, bu an baş verən iş üçündür: 'I am reading now.' 'like, love, enjoy, hate' sözlərindən sonra adətən feilin -ing formasını işlədirik: 'I enjoy painting.' 'usually, every day' = present simple, 'now, at the moment' = present continuous.",
    examples: [
      { en: "I usually read a book in the evening.", note: "habit → present simple" },
      { en: "I am reading a detective story right now.", note: "happening now → present continuous" },
      { en: "She loves collecting old postcards.", note: "love + -ing" },
      { en: "We don't enjoy waiting in long queues.", note: "enjoy + -ing (negative)" },
    ],
  },
  reading: {
    title: "How we spend our spare time",
    text: `Everybody needs a hobby. After a long week of work or study, people look for something fun and relaxing to do in their spare time. Some hobbies are quiet and calm, while others are active and exciting, but they all help us to enjoy life and to feel happier.

Take my friend Leyla. She is very keen on photography and she takes hundreds of pictures every month. "I love walking around the old city and taking photos of doors and windows," she says. Right now she is planning a small exhibition, so this week she is choosing her best images instead of taking new ones. Photography is her main hobby, but she also likes to collect old cameras, and she already has more than twenty of them on a shelf at home.

My cousin Tural is different. He hates sitting still, so every Saturday he plays football with his friends in the park. He enjoys being part of a team, and he says sport is the best way to relax. This year he wants to try something new, so he is also learning to swim. "I am not very good yet," he laughs, "but I am getting better every week."

What about people who think they have no time? The truth is that a hobby does not need to take many hours. You can take up something simple, like cooking, drawing or gardening, and do it for just twenty minutes a day. The important thing is to choose an activity you really enjoy. So, what are you doing with your free time at the moment, and what new hobby would you like to start?`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "Why is Leyla choosing her best images this week?",
        options: [
          "Because she is selling her cameras.",
          "Because she is planning a small exhibition.",
          "Because she hates taking photos.",
          "Because she is learning to swim.",
        ],
        answer: 1,
        explanation: "'Right now she is planning a small exhibition, so this week she is choosing her best images'.",
      },
      {
        type: "multiple-choice",
        prompt: "What does Tural do every Saturday?",
        options: [
          "He takes photos of the old city.",
          "He collects old cameras.",
          "He plays football with his friends.",
          "He stays at home and rests.",
        ],
        answer: 2,
        explanation: "'every Saturday he plays football with his friends in the park' — a habit in the present simple.",
      },
      {
        type: "multiple-choice",
        prompt: "According to the text, what is the most important thing about a hobby?",
        options: [
          "It must take many hours every day.",
          "It must be a sport.",
          "It should be expensive.",
          "It should be an activity you really enjoy.",
        ],
        answer: 3,
        explanation: "'The important thing is to choose an activity you really enjoy.'",
      },
    ],
  },
  speaking: [
    "Describe what you usually do in your spare time. Use the present simple and time words like 'usually' and 'every day'.",
    "Tell your partner what you are doing in your life at the moment. Use the present continuous and phrases like 'this week' or 'right now'.",
    "Talk about a hobby you would like to take up and explain why you enjoy it. Use 'love', 'enjoy' or 'hate' + -ing.",
  ],
  writing: {
    task: "Write about your hobbies and free time. Describe one thing you do regularly (present simple) and one thing you are doing now (present continuous). Use 'enjoy/love/like + -ing' and at least three words from this topic.",
    minWords: 90,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt: "Every weekend Tural ___ (play) football with his friends.",
      answer: "plays",
      explanation: "A regular habit ('every weekend') → present simple with -s for 'he'.",
    },
    {
      type: "gap-fill",
      prompt: "Be quiet! I ___ (read) an interesting book right now.",
      answer: "am reading",
      accept: ["'m reading"],
      explanation: "An action happening now ('right now') → present continuous (am + reading).",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the correct sentence:",
      options: [
        "I enjoy to collect old coins.",
        "I enjoy collect old coins.",
        "I enjoy collecting old coins.",
        "I enjoy collects old coins.",
      ],
      answer: 2,
      explanation: "After 'enjoy' we use the -ing form: 'enjoy collecting'.",
    },
    {
      type: "multiple-choice",
      prompt: "Which sentence describes a habit, not an action happening now?",
      options: [
        "She is taking photos at the moment.",
        "She usually takes photos at the weekend.",
        "She is choosing her best images today.",
        "She is learning to swim this year.",
      ],
      answer: 1,
      explanation: "'usually ... at the weekend' shows a habit → present simple. The others use the present continuous for now.",
    },
    {
      type: "gap-fill",
      prompt: "She wants to ___ ___ a new hobby, so she is buying a guitar. (start a new activity)",
      answer: "take up",
      explanation: "'take up' = to start a new activity or hobby.",
    },
  ],
};
