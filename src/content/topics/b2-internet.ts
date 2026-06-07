import type { Topic } from "../types";

export const b2Internet: Topic = {
  id: "b2-internet",
  level: "B2",
  title: "The History of the Internet",
  theme: "Technology",
  summary:
    "Trace how a military project became the modern internet, and use the Past Perfect to make the order of past events clear.",
  leadIn: [
    "How would your daily life be different without the internet?",
    "What did people do before they could search for information online?",
    "Do you think the internet has done more good than harm?",
  ],
  vocabulary: [
    {
      word: "network",
      definition: "a system of computers or people that are connected to each other",
      example: "The first network connected only a few university computers.",
      collocations: ["a computer network", "build a network"],
      azNote: "şəbəkə",
    },
    {
      word: "to share",
      definition: "to make information or resources available to others",
      example: "Scientists wanted a quick way to share their research.",
      collocations: ["share information", "share files"],
      azNote: "paylaşmaq",
    },
    {
      word: "access",
      definition: "the right or ability to use or reach something",
      example: "Today, billions of people have access to the internet.",
      collocations: ["have access to", "gain access"],
      azNote: "giriş / əlçatanlıq",
    },
    {
      word: "rapidly",
      definition: "very quickly",
      example: "Once the web appeared, the number of users grew rapidly.",
      collocations: ["grow rapidly", "spread rapidly"],
      azNote: "sürətlə",
    },
    {
      word: "to connect",
      definition: "to join two or more things together",
      example: "The new system could connect computers across the whole country.",
      collocations: ["connect to", "stay connected"],
      azNote: "qoşmaq / birləşdirmək",
    },
    {
      word: "revolution",
      definition: "a complete and dramatic change in the way people do things",
      example: "The internet started a revolution in how we communicate.",
      collocations: ["a digital revolution", "cause a revolution"],
      azNote: "inqilab / köklü dəyişiklik",
    },
  ],
  grammar: {
    point: "The Past Perfect",
    explanation:
      "Use the Past Perfect (had + past participle) to show that one past action happened before another past action. The Past Perfect is the 'earlier' past: 'By the time the web appeared, scientists had already used the network for years.' We often use it with 'by the time', 'before', 'after', 'already' and 'when' to make the time order clear.",
    azNote:
      "Past Perfect (had + V3) = keçmişdə başqa bir keçmiş hadisədən ƏVVƏL baş verən. Yəni 'keçmişin keçmişi'. 'When I arrived, the film had already started' (mən gələndə film artıq başlamışdı). Tez-tez 'by the time, before, after, already' ilə işlənir.",
    examples: [
      { en: "By 1990, engineers had already built several networks.", note: "earlier past → had built" },
      { en: "When the web launched, few people had heard of the internet.", note: "before the launch" },
      { en: "She had never used a computer before she started university.", note: "'before' + earlier past" },
      {
        en: "After they had connected the computers, they sent the first message.",
        note: "first action → past perfect; second → past simple",
      },
    ],
  },
  reading: {
    title: "From a secret project to a global web",
    text: `It is hard to imagine life without the internet, yet it is younger than many people think. The story began in the 1960s, long before anyone had imagined smartphones or social media. At that time, the United States military wanted a network that would keep working even if part of it was destroyed. By the end of the decade, engineers had connected a few university computers, and the first message had been sent from one machine to another.

For many years, only scientists used this early network. They had created it to share research quickly, and they did not expect ordinary people to be interested. By the 1980s, several separate networks had appeared, but they could not easily talk to each other. Something was still missing.

The real revolution came in 1991, when a British scientist named Tim Berners-Lee introduced the World Wide Web. Before he published his idea, using the internet had been difficult and technical. After he had shared the web freely with the world, everything changed. Suddenly, anyone with a computer could create a page and connect to information anywhere on the planet.

From that moment, the internet grew rapidly. By the year 2000, millions of people had gained access to it, and within two decades that number had reached billions. Businesses that had ignored the web soon realised their mistake, because the world had moved online. What had started as a small military experiment had quietly become one of the most important inventions in human history.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "Why did the US military want a network?",
        options: [
          "To play games",
          "To keep working even if part of it was destroyed",
          "To sell computers",
          "To replace the telephone",
        ],
        answer: 1,
        explanation: "'the United States military wanted a network that would keep working even if part of it was destroyed'.",
      },
      {
        type: "multiple-choice",
        prompt: "What did Tim Berners-Lee introduce in 1991?",
        options: ["The first computer", "Email", "The World Wide Web", "The smartphone"],
        answer: 2,
        explanation: "'a British scientist named Tim Berners-Lee introduced the World Wide Web'.",
      },
      {
        type: "multiple-choice",
        prompt: "What does the text say about the early network's original purpose?",
        options: [
          "It was created for ordinary people.",
          "Scientists created it to share research quickly.",
          "It was made for selling products.",
          "It was designed for entertainment.",
        ],
        answer: 1,
        explanation: "'They had created it to share research quickly'.",
      },
    ],
  },
  speaking: [
    "Describe how the internet had changed your country by the time you were a teenager.",
    "Talk about something you had never done before you started using the internet.",
    "Some people say we are too dependent on the internet. To what extent do you agree?",
  ],
  writing: {
    task: "Write a short history of how technology changed your daily life. Use at least four Past Perfect sentences (e.g. 'By the time I was 15, I had already...'), plus three words from this topic.",
    minWords: 110,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt: "By the time the web appeared, scientists ___ (use) the network for years.",
      answer: "had used",
      accept: ["had used", "had been using"],
      explanation: "An action before another past event → Past Perfect (had used).",
    },
    {
      type: "gap-fill",
      prompt: "When the web launched, few people ___ (hear) of the internet.",
      answer: "had heard",
      accept: ["had heard"],
      explanation: "Earlier past (before the launch) → Past Perfect (had heard).",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the correct sentence:",
      options: [
        "When I arrived, the meeting already started.",
        "When I arrived, the meeting had already started.",
        "When I had arrived, the meeting has already started.",
        "When I arrive, the meeting had already started.",
      ],
      answer: 1,
      explanation: "The earlier action takes the Past Perfect: 'had already started'.",
    },
    {
      type: "gap-fill",
      prompt: "Today billions of people have ___ to the internet. (the ability to use it)",
      answer: "access",
      explanation: "'access' = the right or ability to use or reach something.",
    },
    {
      type: "multiple-choice",
      prompt: "'rapidly' means:",
      options: ["very slowly", "very quickly", "carefully", "rarely"],
      answer: 1,
      explanation: "'rapidly' = very quickly.",
    },
  ],
};
