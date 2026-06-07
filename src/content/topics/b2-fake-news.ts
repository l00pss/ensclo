import type { Topic } from "../types";

export const b2FakeNews: Topic = {
  id: "b2-fake-news",
  level: "B2",
  title: "Fake News & Critical Thinking",
  theme: "Media",
  summary:
    "Learn how false information spreads and how to spot it, and use passive reporting structures such as 'It is said that…'.",
  leadIn: [
    "Where do you usually get your news? Do you trust it?",
    "Have you ever believed a story online that turned out to be false?",
    "How can people check whether a piece of news is true?",
  ],
  vocabulary: [
    {
      word: "source",
      definition: "the person, place or thing that information comes from",
      example: "Before sharing a story, you should always check the source.",
      collocations: ["a reliable source", "check the source"],
      azNote: "mənbə",
    },
    {
      word: "to spread",
      definition: "to move or be passed quickly to many people or places",
      example: "False stories often spread faster than true ones.",
      collocations: ["spread quickly", "spread rumours"],
      azNote: "yayılmaq (spread–spread–spread)",
    },
    {
      word: "evidence",
      definition: "facts or information that show whether something is true",
      example: "A serious claim should always be supported by evidence.",
      collocations: ["strong evidence", "lack of evidence"],
      azNote: "sübut / dəlil",
    },
    {
      word: "reliable",
      definition: "able to be trusted to be correct or to do what is needed",
      example: "Newspapers with strict checks are usually more reliable.",
      collocations: ["a reliable source", "highly reliable"],
      azNote: "etibarlı / güvənilən",
    },
    {
      word: "headline",
      definition: "the title of a news story, printed in large letters",
      example: "Many people share an article after reading only the headline.",
      collocations: ["a shocking headline", "the front-page headline"],
      azNote: "başlıq / manşet",
    },
    {
      word: "to mislead",
      definition: "to make someone believe something that is not true",
      example: "A photo taken out of context can easily mislead readers.",
      collocations: ["mislead the public", "deliberately mislead"],
      azNote: "yanıltmaq / çaşdırmaq",
    },
  ],
  grammar: {
    point: "Passive reporting structures (It is said that…)",
    explanation:
      "In formal or news writing we often report opinions without saying exactly who holds them, using verbs like say, believe, think, claim, report and know. There are two patterns: 'It is said that the story is false.' and 'The story is said to be false.' Use a present infinitive ('to be') for the same time, and a perfect infinitive ('to have been') for an earlier time: 'He is believed to have left the country.'",
    azNote:
      "Passive reporting = mənbəni dəqiq deməyə bilərik, 'deyilir ki...' tipli quruluş. İki model: 1) 'It is said that the news is fake.' 2) 'The news is said to be fake.' Eyni zaman üçün 'to be', daha əvvəlki zaman üçün 'to have been' işlədilir: 'He is thought to have made a mistake.'",
    examples: [
      { en: "It is said that false news spreads faster.", note: "It + is said + that-clause" },
      { en: "False news is said to spread faster.", note: "subject + is said + to + infinitive" },
      { en: "The photo is believed to be fake.", note: "believe → is believed to be" },
      {
        en: "The story is reported to have started online.",
        note: "earlier time → to have + past participle",
      },
    ],
  },
  reading: {
    title: "In a world of too much information",
    text: `We have never had so much information at our fingertips, yet telling truth from lies has never been harder. Every day, millions of stories are shared online, and not all of them are honest. It is now believed that false news can travel around the world in minutes, often faster than anyone can correct it.

Why does this happen? Part of the reason is emotional. Stories that make us angry or afraid are said to spread far more quickly than calm, balanced reports. A shocking headline is designed to make us react instantly, and many people share an article without ever reading it or checking the source. By the time experts point out that a story is false, it is thought to have already reached millions of readers.

False information is not always a complete invention. Sometimes a real photograph is used to mislead, perhaps by giving it a false date or place. Sometimes a single fact is true, but it is presented without the context that would change its meaning. This is why simply asking "Is this true?" is not enough; we also need to ask "Is this the whole story?".

Fortunately, there are simple habits that protect us. Before sharing, check whether the information comes from a reliable source and whether other respected outlets report the same thing. Look for evidence, not just strong opinions, and be suspicious of anything that seems too perfect or too outrageous. In an age of endless information, critical thinking is said to be one of the most important skills a person can have.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "Why do shocking stories spread so quickly?",
        options: [
          "Because they are always true",
          "Because they make us react emotionally and instantly",
          "Because they are very long",
          "Because experts share them",
        ],
        answer: 1,
        explanation: "'Stories that make us angry or afraid are said to spread far more quickly'.",
      },
      {
        type: "multiple-choice",
        prompt: "How can a real photograph be used to mislead?",
        options: [
          "By making it black and white",
          "By giving it a false date or place",
          "By making it smaller",
          "By deleting it",
        ],
        answer: 1,
        explanation: "'a real photograph is used to mislead, perhaps by giving it a false date or place'.",
      },
      {
        type: "multiple-choice",
        prompt: "What does the writer recommend before sharing a story?",
        options: [
          "Share it as fast as possible",
          "Check the source and look for evidence",
          "Only read the headline",
          "Trust strong opinions",
        ],
        answer: 1,
        explanation: "'check whether the information comes from a reliable source ... Look for evidence'.",
      },
    ],
  },
  speaking: [
    "Report some common beliefs using passive structures (e.g. 'It is said that...', 'Social media is believed to...').",
    "Describe how you decide whether a news story is reliable.",
    "Who should be responsible for stopping fake news — governments, companies, or individuals?",
  ],
  writing: {
    task: "Write a short guide on how to spot fake news. Use at least four passive reporting structures (e.g. 'It is said that...', 'X is believed to...'), plus three words from this topic.",
    minWords: 110,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt: "It is ___ (say) that false news spreads faster than the truth.",
      answer: "said",
      explanation: "Passive reporting: 'It is said that...' (be + past participle).",
    },
    {
      type: "multiple-choice",
      prompt: "Rewrite: 'People believe the photo is fake.' →",
      options: [
        "The photo is believed to be fake.",
        "The photo is believe to be fake.",
        "The photo believes to be fake.",
        "It is believe that the photo fake.",
      ],
      answer: 0,
      explanation: "subject + is believed + to + infinitive → 'is believed to be fake'.",
    },
    {
      type: "gap-fill",
      prompt: "The story is reported ___ ___ ___ (start) online last week. (earlier time)",
      answer: "to have started",
      accept: ["to have started"],
      explanation: "For an earlier time use the perfect infinitive: 'to have started'.",
    },
    {
      type: "gap-fill",
      prompt: "Before sharing, always check the ___ of the information. (where it comes from)",
      answer: "source",
      explanation: "'source' = where information comes from.",
    },
    {
      type: "multiple-choice",
      prompt: "'reliable' means:",
      options: [
        "able to be trusted to be correct",
        "impossible to find",
        "always false",
        "very expensive",
      ],
      answer: 0,
      explanation: "'reliable' = able to be trusted to be correct or to do what is needed.",
    },
  ],
};
