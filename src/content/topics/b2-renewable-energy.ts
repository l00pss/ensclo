import type { Topic } from "../types";

export const b2RenewableEnergy: Topic = {
  id: "b2-renewable-energy",
  level: "B2",
  title: "Renewable Energy",
  theme: "Environment",
  summary:
    "Explore how clean power could reshape our world, and learn to make predictions about the future of energy with modal verbs (may, might, could, will, can).",
  leadIn: [
    "How is most of the electricity in your country produced today?",
    "Which form of renewable energy do you think has the greatest potential?",
    "Do you believe the world will fully give up fossil fuels in your lifetime?",
  ],
  vocabulary: [
    {
      word: "renewable",
      definition: "able to be replaced naturally and used again, so it never runs out",
      example: "Solar and wind are renewable sources that the planet constantly replaces.",
      collocations: ["renewable energy", "renewable sources"],
      azNote: "bərpa olunan / tükənməyən",
    },
    {
      word: "to harness",
      definition: "to control and use the energy of something for a practical purpose",
      example: "Engineers are finding clever new ways to harness the power of the wind.",
      collocations: ["harness the power of", "harness energy"],
      azNote: "(enerjini) istifadəyə yönəltmək, ram edib işlətmək",
    },
    {
      word: "emissions",
      definition: "gases, especially harmful ones, that are released into the air",
      example: "Switching to clean power could cut carbon emissions dramatically.",
      collocations: ["carbon emissions", "reduce emissions"],
      azNote: "atmosferə buraxılan qazlar, tullantılar",
    },
    {
      word: "grid",
      definition: "the network of cables that carries electricity across a country",
      example: "A smarter grid might store extra power for cloudy or windless days.",
      collocations: ["the power grid", "national grid"],
      azNote: "elektrik şəbəkəsi",
    },
    {
      word: "sustainable",
      definition: "able to continue for a long time without damaging the environment",
      example: "Many cities are setting ambitious targets for sustainable development.",
      collocations: ["sustainable development", "environmentally sustainable"],
      azNote: "davamlı / dayanıqlı (ətraf mühitə ziyan vurmadan)",
    },
    {
      word: "to phase out",
      definition: "to stop using or providing something gradually, over a period of time",
      example: "Several governments plan to phase out coal power within two decades.",
      collocations: ["phase out gradually", "phase out fossil fuels"],
      azNote: "tədricən aradan qaldırmaq / mərhələli şəkildə dayandırmaq",
    },
  ],
  grammar: {
    point: "Modal verbs of possibility and prediction (may, might, could, will, can)",
    explanation:
      "To predict the future with confidence, use 'will' ('Solar power will become cheaper.'). To talk about something that is possible but not certain, use 'may', 'might' or 'could' ('Batteries might solve the storage problem.'); these three are very close in meaning. Use 'can' for general possibility or ability ('Wind turbines can work even in winter.'). All of these modals are followed by the bare infinitive, with no 'to'.",
    azNote:
      "Gələcəyə əmin proqnoz üçün 'will' işlədirik. Mümkün, amma qəti olmayan hal üçün 'may, might, could' (üçü də demək olar ki, eyni mənadadır). Ümumi imkan və ya bacarıq üçün isə 'can' işlənir. Bütün bu modal feillərdən sonra fel 'to'-suz, sadə formada gəlir.",
    examples: [
      { en: "By 2050, renewable energy will supply most of our electricity.", note: "confident prediction → will" },
      { en: "Cheaper batteries might finally make solar power reliable at night.", note: "possible, not certain → might" },
      { en: "A breakthrough in storage could transform the whole industry.", note: "possibility → could" },
      { en: "Modern wind turbines can generate power even in light winds.", note: "general possibility / ability → can" },
    ],
  },
  reading: {
    title: "Powering a cleaner future",
    text: `For most of the last century, the world ran on coal, oil and gas. These fuels built modern life, but they also fill the air with harmful emissions that are warming the planet. Today the picture is changing fast, and many scientists believe that renewable sources such as the sun and the wind will provide the bulk of our power within a generation.

The reasons are partly economic. The cost of solar panels has fallen so sharply that clean electricity is now cheaper than coal in most countries. Because of this, governments around the world have promised to phase out their oldest, dirtiest power stations. They argue that a modern economy can grow and still be sustainable, as long as it learns to harness energy from sources that never run out.

There are, of course, real challenges. The sun does not always shine and the wind does not always blow, so power supply may not match demand at every moment. To solve this, engineers are building giant batteries and upgrading the grid so that it can move electricity quickly from sunny regions to cloudy ones. With better storage, a country might run for days entirely on clean power, even after dark.

Nobody can be completely certain what the energy system of 2060 will look like. New technologies could appear that we cannot yet imagine, from floating wind farms to hydrogen made with surplus solar power. What does seem clear is the direction: the age of fossil fuels is slowly ending, and the choices we make in the next ten years may decide how smooth that transition will be.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "Why do many scientists expect renewable sources to dominate soon?",
        options: [
          "Because fossil fuels have already run out",
          "Because clean electricity has become cheaper and the planet is warming",
          "Because governments banned all electricity",
          "Because nobody uses coal anywhere",
        ],
        answer: 1,
        explanation:
          "The text says emissions are warming the planet and that solar power 'is now cheaper than coal in most countries'.",
      },
      {
        type: "multiple-choice",
        prompt: "What is the main challenge the text describes for renewable power?",
        options: [
          "Renewable energy is far too expensive",
          "The sun and wind are not always available, so supply may not match demand",
          "Batteries are illegal in most countries",
          "People do not want cheaper electricity",
        ],
        answer: 1,
        explanation:
          "'The sun does not always shine and the wind does not always blow, so power supply may not match demand at every moment.'",
      },
      {
        type: "multiple-choice",
        prompt: "How does the writer describe the future energy system of 2060?",
        options: [
          "As something nobody can be completely certain about",
          "As exactly the same as today",
          "As impossible to change",
          "As powered entirely by coal",
        ],
        answer: 0,
        explanation: "'Nobody can be completely certain what the energy system of 2060 will look like.'",
      },
    ],
  },
  speaking: [
    "Make three predictions about how your country will produce electricity in thirty years, using 'will', 'may' and 'might'.",
    "What problems could slow down the switch to renewable energy, and how might they be solved?",
    "Some people say individuals can do little to fight climate change. Do you agree? Give reasons.",
  ],
  writing: {
    task: "Write a short article predicting the future of energy in your country. Use at least four different modal verbs of prediction (will, may, might, could, can) and three words from this topic.",
    minWords: 110,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt: "I am sure about this: by 2050, renewable energy ___ supply most of our electricity. (confident prediction)",
      answer: "will",
      accept: ["will", "'ll"],
      explanation: "A confident prediction about the future uses 'will' + bare infinitive.",
    },
    {
      type: "gap-fill",
      prompt: "It is possible but not certain: cheaper batteries ___ make solar power reliable at night. (use a modal of possibility)",
      answer: "might",
      accept: ["might", "may", "could"],
      explanation: "For something possible but not certain we use 'may', 'might' or 'could' + bare infinitive.",
    },
    {
      type: "multiple-choice",
      prompt: "Which sentence is correct?",
      options: [
        "A breakthrough in storage could to transform the industry.",
        "A breakthrough in storage could transform the industry.",
        "A breakthrough in storage could transforms the industry.",
        "A breakthrough in storage could transforming the industry.",
      ],
      answer: 1,
      explanation: "Modal verbs are followed by the bare infinitive: 'could transform' (no 'to', no '-s', no '-ing').",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the best word: Several governments plan to ___ coal power gradually over the next twenty years.",
      options: ["phase out", "harness", "warm up", "switch on"],
      answer: 0,
      explanation: "'phase out' = to stop using something gradually over time.",
    },
    {
      type: "gap-fill",
      prompt: "Switching to clean power could cut carbon ___ dramatically. (harmful gases released into the air)",
      answer: "emissions",
      explanation: "'emissions' = harmful gases released into the air.",
    },
  ],
};
