import type { Topic } from "../types";

export const b1Volcanoes: Topic = {
  id: "b1-volcanoes",
  level: "B1",
  title: "Volcanoes & Earthquakes",
  theme: "Nature",
  summary:
    "Learn how our powerful planet shakes and erupts, and practise the first conditional to talk about real future possibilities.",
  leadIn: [
    "Have you ever felt an earthquake or seen a volcano? How did you feel?",
    "What should people do if an earthquake starts?",
    "Why do you think people live near dangerous volcanoes?",
  ],
  vocabulary: [
    {
      word: "to erupt",
      definition: "(of a volcano) to suddenly throw out fire, rock and gas",
      example: "If a volcano erupts, hot rock and ash fly into the sky.",
      collocations: ["a volcano erupts", "erupt violently"],
      azNote: "püskürmək (vulkan)",
    },
    {
      word: "to shake",
      definition: "to move quickly from side to side or up and down",
      example: "During the earthquake, the whole building started to shake.",
      collocations: ["shake violently", "the ground shakes"],
      azNote: "silkələnmək / titrəmək",
    },
    {
      word: "damage",
      definition: "harm that makes something less good or breaks it",
      example: "The earthquake caused serious damage to the old houses.",
      collocations: ["cause damage", "serious damage"],
      azNote: "zərər / dağıntı",
    },
    {
      word: "warning",
      definition: "something that tells you danger may come, so you can prepare",
      example: "If scientists give a warning, people will have time to leave.",
      collocations: ["give a warning", "an early warning"],
      azNote: "xəbərdarlıq",
    },
    {
      word: "to escape",
      definition: "to get away from a dangerous place or situation",
      example: "People ran to the hills to escape the rising lava.",
      collocations: ["escape from", "escape safely"],
      azNote: "qaçıb xilas olmaq",
    },
    {
      word: "powerful",
      definition: "very strong; having a lot of force",
      example: "A powerful earthquake can destroy a whole city in seconds.",
      collocations: ["a powerful force", "extremely powerful"],
      azNote: "güclü / qüvvətli",
    },
  ],
  grammar: {
    point: "The first conditional (if + present, will)",
    explanation:
      "We use the first conditional to talk about a real or likely future situation and its result: 'If a volcano erupts, people will leave.' The structure is: If + present simple, ... will + infinitive. The two parts can swap order (no comma is needed when 'if' comes second): 'People will leave if a volcano erupts.' We can use 'when' instead of 'if' for things we are sure will happen.",
    azNote:
      "First conditional = real/mümkün gələcək şərt və nəticə. Quruluş: If + present simple, ... will + infinitive. 'If it rains, we will stay home.' Şərt hissəsi (if) PRESENT-dədir, will YOX. Hissələrin yeri dəyişə bilər (if sonda gələndə vergül lazım deyil).",
    examples: [
      { en: "If a volcano erupts, hot ash will cover the town.", note: "if + present, will + inf." },
      { en: "People will escape if scientists give a warning.", note: "if-clause second, no comma" },
      {
        en: "✗ If it will shake, the windows will break. → ✓ If it shakes, the windows will break.",
        note: "the if-clause uses the present, NOT will",
      },
      {
        en: "When the alarm rings, everyone will leave the building.",
        note: "'when' for something we are sure will happen",
      },
    ],
  },
  reading: {
    title: "When the Earth moves",
    text: `Our planet may look calm, but deep underground it is always moving. The surface of the Earth is made of giant pieces of rock that slowly push against each other. Most of the time we feel nothing, but sometimes this movement creates two of nature's most powerful events: earthquakes and volcanic eruptions.

During an earthquake, the ground suddenly begins to shake. A small earthquake is not dangerous, but a powerful one can cause terrible damage. Walls fall, roads break, and whole buildings collapse in seconds. That is why scientists say: if an earthquake starts, you will be safer under a strong table than near a window.

Volcanoes are just as dramatic. When a volcano erupts, it throws out hot rock, gas and ash. Rivers of lava can flow down the mountain and destroy everything in their path. If people receive a warning in time, they will have a chance to escape; if they do not, the results can be deadly.

So why do millions of people still live near volcanoes? The answer is surprising: the land around them is often perfect for farming. People know the danger, but they also know that if they stay, they will grow excellent crops. Living with nature's power is a risk — but for many, it is a risk worth taking.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "According to scientists, where is it safer during an earthquake?",
        options: [
          "Near a window",
          "Under a strong table",
          "On the roof",
          "In the lift",
        ],
        answer: 1,
        explanation: "'you will be safer under a strong table than near a window'.",
      },
      {
        type: "multiple-choice",
        prompt: "What does a volcano throw out when it erupts?",
        options: [
          "Water and ice",
          "Hot rock, gas and ash",
          "Sand and snow",
          "Only smoke",
        ],
        answer: 1,
        explanation: "'it throws out hot rock, gas and ash'.",
      },
      {
        type: "multiple-choice",
        prompt: "Why do many people live near volcanoes?",
        options: [
          "Because it is cheaper to travel",
          "Because the land is good for farming",
          "Because there is no danger",
          "Because the weather is always cold",
        ],
        answer: 1,
        explanation: "'the land around them is often perfect for farming'.",
      },
    ],
  },
  speaking: [
    "What will you do if an earthquake happens while you are at home? Explain your plan.",
    "Do you think people should be allowed to live near active volcanoes? Why / why not?",
    "If your town receives a natural disaster warning, what will the most important things to do be?",
  ],
  writing: {
    task: "Write a short safety guide telling people what to do in an earthquake. Use at least four first-conditional sentences (If ..., ... will ...) and three words from this topic.",
    minWords: 90,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt: "If a volcano ___ (erupt), people will leave the town.",
      answer: "erupts",
      explanation: "The if-clause uses the present simple (erupts), not 'will'.",
    },
    {
      type: "gap-fill",
      prompt: "If scientists give a warning, people ___ (have) time to escape.",
      answer: "will have",
      accept: ["will have", "'ll have"],
      explanation: "The result clause uses 'will' + infinitive.",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the correct first conditional:",
      options: [
        "If the ground will shake, the windows will break.",
        "If the ground shakes, the windows will break.",
        "If the ground shake, the windows break.",
        "If the ground shakes, the windows break will.",
      ],
      answer: 1,
      explanation: "First conditional: If + present simple, ... will + infinitive.",
    },
    {
      type: "gap-fill",
      prompt: "A strong earthquake can cause serious ___ to buildings. (harm)",
      answer: "damage",
      explanation: "'damage' = harm that breaks or weakens something.",
    },
    {
      type: "multiple-choice",
      prompt: "'to escape' means:",
      options: [
        "to stay in danger",
        "to get away from danger",
        "to build a house",
        "to cause an eruption",
      ],
      answer: 1,
      explanation: "'to escape' = to get away from a dangerous place or situation.",
    },
  ],
};
