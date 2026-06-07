import type { Topic } from "../types";

export const b2Ai: Topic = {
  id: "b2-ai",
  level: "B2",
  title: "Living with Artificial Intelligence",
  theme: "Technology",
  summary:
    "Consider how AI is changing our world, and learn to talk about the future with the Future Continuous and the Future Perfect.",
  leadIn: [
    "In what ways do you already use artificial intelligence in your daily life?",
    "Which jobs do you think AI will change the most?",
    "Are you more excited or more worried about the future of AI?",
  ],
  vocabulary: [
    {
      word: "to replace",
      definition: "to take the place of something or someone",
      example: "Some people fear that machines will replace human workers.",
      collocations: ["replace someone with", "completely replace"],
      azNote: "əvəz etmək",
    },
    {
      word: "efficient",
      definition: "working well without wasting time, energy or money",
      example: "AI systems can make factories far more efficient.",
      collocations: ["highly efficient", "energy-efficient"],
      azNote: "səmərəli / effektiv",
    },
    {
      word: "data",
      definition: "information, especially facts or numbers used by computers",
      example: "Modern AI learns by studying enormous amounts of data.",
      collocations: ["collect data", "analyse data"],
      azNote: "məlumat / verilənlər",
    },
    {
      word: "to rely on",
      definition: "to depend on or trust something to work",
      example: "We already rely on AI to recommend films and filter emails.",
      collocations: ["rely on technology", "heavily rely on"],
      azNote: "etibar etmək / asılı olmaq",
    },
    {
      word: "threat",
      definition: "something that could cause harm or danger",
      example: "Some experts see AI as a threat; others see an opportunity.",
      collocations: ["a serious threat", "pose a threat"],
      azNote: "təhlükə / hədə",
    },
    {
      word: "to transform",
      definition: "to change something completely, usually for the better",
      example: "AI could transform medicine by spotting diseases earlier.",
      collocations: ["completely transform", "transform an industry"],
      azNote: "kökündən dəyişdirmək",
    },
  ],
  grammar: {
    point: "Future Continuous & Future Perfect",
    explanation:
      "Use the Future Continuous (will be + -ing) for an action that will be in progress at a specific time in the future: 'This time next year, AI will be writing news articles.' Use the Future Perfect (will have + past participle) for an action that will be finished before a certain point in the future: 'By 2040, AI will have changed many jobs.' We often use 'by', 'by the time' and 'in (ten years)' with these.",
    azNote:
      "Future Continuous (will be + -ing) = gələcəkdə müəyyən anda davam edən hərəkət ('At 8 p.m. tomorrow I will be working'). Future Perfect (will have + V3) = gələcəkdə müəyyən andan ƏVVƏL bitmiş hərəkət ('By 2030 they will have built it'). Tez-tez 'by, by the time, in 10 years' ilə işlənir.",
    examples: [
      { en: "This time next year, robots will be working in many shops.", note: "in progress at a future time → Future Continuous" },
      { en: "By 2050, AI will have transformed healthcare.", note: "finished before a future point → Future Perfect" },
      { en: "In ten years, we will be relying on AI even more.", note: "future ongoing situation" },
      {
        en: "By the time you finish school, AI will have replaced some jobs.",
        note: "completed before a future moment",
      },
    ],
  },
  reading: {
    title: "The age of intelligent machines",
    text: `Artificial intelligence is no longer science fiction. It already recommends what we watch, translates our messages and helps doctors read medical scans. But this is only the beginning. Experts believe that in twenty years' time, we will be living in a world shaped by AI in ways we can hardly imagine today.

Think about an ordinary morning in the near future. While you are still asleep, software will be analysing traffic data to plan your fastest route to work. By the time you wake up, your assistant will have answered your simple emails and organised your day. Machines will be doing quietly, in the background, many of the small tasks that fill our lives now.

The biggest changes will happen at work. AI is extremely efficient at jobs that involve patterns and large amounts of data, so it will replace some roles completely. Many economists argue, however, that it will also create new ones. By the middle of the century, millions of people will have started jobs that do not even exist yet.

Of course, there are real concerns. If we rely on AI too much, we may lose important skills, and some people see powerful AI as a genuine threat. The technology could transform medicine and education for the better, but only if we use it wisely. One thing is certain: by the time today's children grow up, artificial intelligence will have become a normal part of daily life — and learning to work alongside it will be one of the most valuable skills of all.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "What does the text say AI already does today?",
        options: [
          "Nothing useful yet",
          "Recommends shows, translates messages and helps read scans",
          "Only plays games",
          "Controls the weather",
        ],
        answer: 1,
        explanation: "'It already recommends what we watch, translates our messages and helps doctors read medical scans.'",
      },
      {
        type: "multiple-choice",
        prompt: "What do many economists argue about AI and jobs?",
        options: [
          "It will only destroy jobs.",
          "It will replace some roles but also create new ones.",
          "It will have no effect on work.",
          "It will make everyone unemployed.",
        ],
        answer: 1,
        explanation: "'it will also create new ones ... millions of people will have started jobs that do not even exist yet'.",
      },
      {
        type: "multiple-choice",
        prompt: "What concern does the writer mention?",
        options: [
          "That AI is too slow",
          "That relying on AI too much may make us lose skills",
          "That AI cannot read data",
          "That AI is too cheap",
        ],
        answer: 1,
        explanation: "'If we rely on AI too much, we may lose important skills'.",
      },
    ],
  },
  speaking: [
    "Describe what you think you will be doing, with the help of AI, this time in ten years.",
    "By the time you are older, how do you think AI will have changed your country?",
    "Do the benefits of AI outweigh the risks? Give reasons for your opinion.",
  ],
  writing: {
    task: "Write a paragraph of predictions about life with AI in 20 years. Use the Future Continuous and the Future Perfect at least twice each, plus three words from this topic.",
    minWords: 110,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt: "This time next year, robots ___ (work) in many shops. (in progress at a future time)",
      answer: "will be working",
      accept: ["will be working", "'ll be working"],
      explanation: "Action in progress at a future time → Future Continuous (will be working).",
    },
    {
      type: "gap-fill",
      prompt: "By 2050, AI ___ (transform) healthcare. (finished before that point)",
      answer: "will have transformed",
      accept: ["will have transformed"],
      explanation: "Completed before a future point → Future Perfect (will have transformed).",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the correct sentence:",
      options: [
        "By the time you arrive, I will finish the report.",
        "By the time you arrive, I will have finished the report.",
        "By the time you arrive, I will be finished the report.",
        "By the time you will arrive, I will have finished the report.",
      ],
      answer: 1,
      explanation: "Completed before a future moment → Future Perfect ('will have finished'); time clause uses present ('arrive').",
    },
    {
      type: "gap-fill",
      prompt: "Modern AI learns by studying enormous amounts of ___. (information / numbers)",
      answer: "data",
      explanation: "'data' = information, especially facts or numbers used by computers.",
    },
    {
      type: "multiple-choice",
      prompt: "'efficient' means:",
      options: [
        "working well without wasting time or energy",
        "very expensive",
        "extremely slow",
        "difficult to use",
      ],
      answer: 0,
      explanation: "'efficient' = working well without wasting time, energy or money.",
    },
  ],
};
