import type { Topic } from "../types";

export const b1Smartphones: Topic = {
  id: "b1-smartphones",
  level: "B1",
  title: "Smartphones and Apps",
  theme: "Technology",
  summary:
    "Learn how people use smartphones and apps every day, and practise the present perfect with 'just', 'already' and 'yet' to talk about recent actions and results.",
  leadIn: [
    "How many apps have you used on your phone today?",
    "Which app do you think is the most useful, and why?",
    "Have you ever lost your phone? How did you feel?",
  ],
  vocabulary: [
    {
      word: "to download",
      definition: "to copy a program or file from the internet onto your device",
      example: "I have just downloaded a new game from the app store.",
      collocations: ["download an app", "download a file"],
      azNote: "yükləmək (internetdən cihaza)",
    },
    {
      word: "to update",
      definition: "to change a program to the newest version with new features or fixes",
      example: "Have you updated your apps yet?",
      collocations: ["update an app", "a software update"],
      azNote: "yeniləmək (proqramı ən son versiyaya çevirmək)",
    },
    {
      word: "notification",
      definition: "a short message your phone shows to tell you that something has happened",
      example: "I have already turned off the noisy notifications.",
      collocations: ["get a notification", "push notification"],
      azNote: "bildiriş (telefonun göstərdiyi qısa mesaj)",
    },
    {
      word: "feature",
      definition: "a useful part or function that a phone or app offers",
      example: "This camera has a clever new feature for night photos.",
      collocations: ["a useful feature", "a new feature"],
      azNote: "xüsusiyyət / funksiya",
    },
    {
      word: "to install",
      definition: "to put a program onto a device so that you can use it",
      example: "She has just installed a banking app on her phone.",
      collocations: ["install software", "install an app"],
      azNote: "quraşdırmaq (proqramı cihaza yerləşdirmək)",
    },
    {
      word: "screen",
      definition: "the flat surface of a phone where you see pictures, text and apps",
      example: "He has cracked the screen of his phone again.",
      collocations: ["touch screen", "screen time"],
      azNote: "ekran",
    },
  ],
  grammar: {
    point: "Present perfect with 'just', 'already' and 'yet'",
    explanation:
      "We use the present perfect (have/has + past participle) to talk about recent actions that are connected to now. 'Just' means a very short time ago: 'I have just downloaded it.' 'Already' means sooner than expected, and goes before the main verb: 'I have already updated my apps.' 'Yet' is used in questions and negatives, usually at the end: 'Have you finished yet?' / 'I haven't finished yet.'",
    azNote:
      "Present perfect (have/has + V3) bu yaxınlarda olan və indi ilə bağlı hərəkətləri bildirir. 'Just' = elə indicə, 'already' = gözləniləndən tez (əsas feldən əvvəl gəlir), 'yet' isə suallarda və inkarda, adətən cümlənin sonunda işlədilir.",
    examples: [
      { en: "I have just downloaded the new app.", note: "'just' = a very short time ago" },
      { en: "She has already updated her phone.", note: "'already' goes before the main verb" },
      { en: "Have you charged your phone yet?", note: "'yet' in a question, at the end" },
      { en: "I haven't read the notification yet.", note: "'yet' in a negative sentence" },
    ],
  },
  reading: {
    title: "A morning with my phone",
    text: `My phone wakes me up every day, and the trouble starts before I even leave my bed. This morning I opened my eyes and saw that my screen was already full of messages. I have just read them all, and now I feel tired before the day has even begun.

The first notification told me that my favourite music app wanted to update. I have already updated it three times this month, so I closed the message and decided to do it later. Then a second message asked me to install a new weather app. I have not installed it yet, because my phone is already very slow and almost full.

While I was making coffee, my brother sent me a link. "You have to download this game," he wrote. "It has a brilliant new feature where you play with friends online." I have downloaded a lot of games this year, and most of them are still on my phone, taking up space. Have I really finished the last one yet? No, I haven't, so I did not download the new one either.

By nine o'clock I had touched my screen more than fifty times, but I had not done anything important. Phones are wonderful: they keep us connected, entertained and informed. However, they can also steal our time without us noticing. I have just decided to try something different. Tomorrow morning I will leave my phone in another room and start the day in peace - but I haven't told anyone about my plan yet.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "Why did the writer NOT update the music app this morning?",
        options: [
          "The app did not work.",
          "They had already updated it several times that month.",
          "They deleted the app.",
          "The phone was switched off.",
        ],
        answer: 1,
        explanation: "'I have already updated it three times this month, so I closed the message'.",
      },
      {
        type: "multiple-choice",
        prompt: "Why didn't the writer install the new weather app?",
        options: [
          "The phone is already very slow and almost full.",
          "The app cost too much money.",
          "The app had no useful feature.",
          "Their brother told them not to.",
        ],
        answer: 0,
        explanation: "'I have not installed it yet, because my phone is already very slow and almost full'.",
      },
      {
        type: "multiple-choice",
        prompt: "What does the writer plan to do tomorrow?",
        options: [
          "Download more games.",
          "Buy a new phone.",
          "Leave the phone in another room in the morning.",
          "Turn off all notifications forever.",
        ],
        answer: 2,
        explanation: "'Tomorrow morning I will leave my phone in another room and start the day in peace'.",
      },
    ],
  },
  speaking: [
    "Tell a partner three things you have already done today and one thing you haven't done yet.",
    "Describe an app you have just started using. What feature do you like most?",
    "Do you think people spend too much time looking at screens? Explain your opinion.",
  ],
  writing: {
    task: "Write a short paragraph about your phone and the apps you use. Say what you have just done, what you have already done today, and what you haven't done yet. Use at least four topic words.",
    minWords: 90,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt: "I have ___ downloaded the app - it finished a second ago.",
      answer: "just",
      accept: ["just"],
      explanation: "'just' shows the action happened a very short time ago.",
    },
    {
      type: "gap-fill",
      prompt: "Have you updated your phone ___? (question, at the end)",
      answer: "yet",
      accept: ["yet"],
      explanation: "'yet' is used in questions and goes at the end of the sentence.",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the correct sentence:",
      options: [
        "I have already install the app.",
        "I have already installed the app.",
        "I already have installed the app yet.",
        "I have installed already the app.",
      ],
      answer: 1,
      explanation: "Present perfect = have + past participle, and 'already' goes before the main verb: 'have already installed'.",
    },
    {
      type: "multiple-choice",
      prompt: "Which sentence is correct with 'yet'?",
      options: [
        "I haven't read the notification yet.",
        "I have read the notification yet.",
        "I haven't yet read already the notification.",
        "I have yet not read the notification.",
      ],
      answer: 0,
      explanation: "'yet' is used in negatives, usually at the end: 'I haven't read the notification yet.'",
    },
    {
      type: "multiple-choice",
      prompt: "A 'feature' is:",
      options: [
        "a useful part or function of an app or phone",
        "a message that tells you something has happened",
        "the flat glass surface of the phone",
        "an old, broken program",
      ],
      answer: 0,
      explanation: "A 'feature' is a useful part or function that a phone or app offers.",
    },
  ],
};
