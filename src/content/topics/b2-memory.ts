import type { Topic } from "../types";

export const b2Memory: Topic = {
  id: "b2-memory",
  level: "B2",
  title: "The Brain and Memory",
  theme: "Science",
  summary:
    "Explore how the brain stores and recalls memories, and learn to add information with defining and non-defining relative clauses (who, which, that, whose, where).",
  leadIn: [
    "What is the earliest memory that you can clearly remember?",
    "Why do you think we forget some experiences but not others?",
    "Do you trust your memory, or do you rely on notes and photos?",
  ],
  vocabulary: [
    {
      word: "to recall",
      definition: "to bring a fact, event or feeling back into your mind",
      example: "She could recall the smell of her grandmother's kitchen in perfect detail.",
      collocations: ["recall a memory", "vividly recall"],
      azNote: "xatırlamaq, yada salmaq",
    },
    {
      word: "to retain",
      definition: "to keep or hold something, such as information, in your memory",
      example: "Students who sleep well tend to retain more of what they study.",
      collocations: ["retain information", "retain knowledge"],
      azNote: "yadda saxlamaq, qoruyub saxlamaq",
    },
    {
      word: "to consolidate",
      definition: "to make a memory stronger and more permanent over time",
      example: "The brain consolidates new memories mainly while we are asleep.",
      collocations: ["consolidate memories", "consolidate learning"],
      azNote: "möhkəmləndirmək, sabitləşdirmək (yaddaşı daha davamlı etmək)",
    },
    {
      word: "fragile",
      definition: "easily damaged, broken or lost",
      example: "A fresh memory is fragile and can fade within a few hours.",
      collocations: ["a fragile memory", "remain fragile"],
      azNote: "kövrək, asanlıqla zədələnən və ya itən",
    },
    {
      word: "to trigger",
      definition: "to cause something to happen or to start suddenly",
      example: "A familiar song can trigger emotions we had completely forgotten.",
      collocations: ["trigger a memory", "trigger a reaction"],
      azNote: "tetikləmək, birdən hərəkətə gətirmək, oyatmaq",
    },
    {
      word: "vivid",
      definition: "producing clear, strong and detailed images in the mind",
      example: "He has a vivid memory of his first day at school.",
      collocations: ["a vivid memory", "vivid detail"],
      azNote: "canlı, parlaq və təfərrüatlı (xatirə haqqında)",
    },
  ],
  grammar: {
    point: "Relative clauses (defining & non-defining)",
    explanation:
      "Relative clauses add information about a noun using a relative pronoun: 'who' (people), 'which' (things), 'that' (people or things, informal), 'whose' (possession) and 'where' (places). A defining relative clause gives essential information and takes no commas: 'The part of the brain that stores memories is the hippocampus.' A non-defining relative clause adds extra, non-essential information and is separated by commas; here you cannot use 'that': 'The hippocampus, which lies deep in the brain, helps form memories.'",
    azNote:
      "Relative clause-lar bir isim haqqında əlavə məlumat verir: 'who' (insanlar), 'which' (əşyalar), 'that' (hər ikisi, qeyri-rəsmi), 'whose' (sahiblik), 'where' (yerlər). Defining növ vacib məlumat verir və vergül qoyulmur. Non-defining növ isə əlavə, vacib olmayan məlumat verir, vergüllə ayrılır və orada 'that' işlənmir.",
    examples: [
      { en: "Scientists who study memory often work with brain scans.", note: "defining, people → who, no commas" },
      { en: "The hippocampus, which sits deep inside the brain, helps store memories.", note: "non-defining, extra info → which + commas" },
      { en: "A patient whose memory was damaged could not recall recent events.", note: "whose → possession" },
      { en: "I still remember the house where I grew up.", note: "where → place" },
    ],
  },
  reading: {
    title: "How the brain builds a memory",
    text: `Memory is one of the most remarkable abilities that the human brain possesses. Every time you learn a name, a route or a melody, groups of cells that fire together form a new connection. Yet a brand-new memory is surprisingly fragile, and it can disappear within hours unless the brain takes steps to protect it.

The region that plays the central role in this process is the hippocampus, which sits deep inside the brain. Scientists who study memory believe that the hippocampus first captures an experience and then, mainly during sleep, helps to consolidate it. This is why a good night's rest helps students retain far more of what they have learned. People whose sleep is regularly disturbed often struggle to remember new information the next day.

Not all memories are equal. An ordinary afternoon may vanish completely, while a moment that carried strong emotion can stay with us for decades. This is the kind of vivid memory that we can recall in astonishing detail years later. Emotion acts like a marker which tells the brain that an event matters and deserves to be kept.

Memory is also easy to reawaken. A smell, a photograph or a piece of music can suddenly trigger a scene from the past, sometimes one that we believed we had forgotten. Think of a street where you once lived, or a teacher who once inspired you: a single clue can bring the whole picture flooding back. Far from being a perfect recording, then, memory is a living, changing system that the brain rebuilds every time we use it.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "According to the text, why can a brand-new memory disappear quickly?",
        options: [
          "Because the brain deletes every new memory",
          "Because a fresh memory is fragile unless the brain protects it",
          "Because the hippocampus is not involved",
          "Because emotions always erase memories",
        ],
        answer: 1,
        explanation: "'a brand-new memory is surprisingly fragile, and it can disappear within hours unless the brain takes steps to protect it'.",
      },
      {
        type: "multiple-choice",
        prompt: "When does the hippocampus mainly help to consolidate a memory?",
        options: [
          "While we are awake and busy",
          "Only during exams",
          "Mainly during sleep",
          "Never, according to scientists",
        ],
        answer: 2,
        explanation: "'then, mainly during sleep, helps to consolidate it.'",
      },
      {
        type: "multiple-choice",
        prompt: "What does the text say can trigger a memory from the past?",
        options: [
          "Only writing it down",
          "A smell, a photograph or a piece of music",
          "Nothing can bring it back",
          "Only the hippocampus",
        ],
        answer: 1,
        explanation: "'A smell, a photograph or a piece of music can suddenly trigger a scene from the past'.",
      },
    ],
  },
  speaking: [
    "Describe a place where something important happened to you, using a relative clause.",
    "Talk about a person who has had a strong influence on your life.",
    "Do you think a memory which is full of emotion is more reliable than an ordinary one? Why or why not?",
  ],
  writing: {
    task: "Write about a vivid memory from your childhood and explain why you still recall it. Use at least three relative clauses (with who, which, that, whose or where) and three words from this topic.",
    minWords: 110,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt: "The scientist ___ studies memory works in a sleep laboratory. (relative pronoun for a person)",
      answer: "who",
      accept: ["who", "that"],
      explanation: "Defining clause about a person → 'who' (or informal 'that'), with no commas.",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the correct non-defining relative clause:",
      options: [
        "The hippocampus that sits deep in the brain helps store memories.",
        "The hippocampus, which sits deep in the brain, helps store memories.",
        "The hippocampus, that sits deep in the brain, helps store memories.",
        "The hippocampus where sits deep in the brain helps store memories.",
      ],
      answer: 1,
      explanation: "Non-defining clauses add extra information, take commas and cannot use 'that'; for a thing we use 'which'.",
    },
    {
      type: "gap-fill",
      prompt: "I still remember the street ___ I grew up. (relative word for a place)",
      answer: "where",
      explanation: "'where' introduces a relative clause about a place.",
    },
    {
      type: "gap-fill",
      prompt: "A patient ___ memory was damaged could not recall recent events. (relative word for possession)",
      answer: "whose",
      explanation: "'whose' shows possession — the memory belonging to the patient.",
    },
    {
      type: "multiple-choice",
      prompt: "Which word means 'to keep information in your memory'?",
      options: [
        "to retain",
        "to trigger",
        "fragile",
        "vivid",
      ],
      answer: 0,
      explanation: "'to retain' = to keep or hold something, such as information, in your memory.",
    },
  ],
};
