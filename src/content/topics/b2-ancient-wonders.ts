import type { Topic } from "../types";

export const b2AncientWonders: Topic = {
  id: "b2-ancient-wonders",
  level: "B2",
  title: "Wonders of the Ancient World",
  theme: "History",
  summary:
    "Marvel at what ancient people built, and use the third conditional to imagine how the past could have been different.",
  leadIn: [
    "Which ancient site or building would you most like to visit, and why?",
    "How do you think people built huge monuments without modern machines?",
    "Why do you think we are still fascinated by the ancient world?",
  ],
  vocabulary: [
    {
      word: "monument",
      definition: "a large structure built to remember a person or event",
      example: "The pyramids are among the most famous monuments ever built.",
      collocations: ["an ancient monument", "a national monument"],
      azNote: "abidə / monument",
    },
    {
      word: "civilisation",
      definition: "a society with its own culture, cities and way of life",
      example: "Several great civilisations rose and fell along this river.",
      collocations: ["an ancient civilisation", "the rise of a civilisation"],
      azNote: "sivilizasiya / mədəniyyət",
    },
    {
      word: "to construct",
      definition: "to build something large, such as a building or road",
      example: "Workers constructed the temple over many decades.",
      collocations: ["construct a building", "carefully constructed"],
      azNote: "tikmək / inşa etmək",
    },
    {
      word: "remains",
      definition: "the parts of something that are left after it is destroyed or has decayed",
      example: "Tourists come from all over the world to see the remains of the city.",
      collocations: ["ancient remains", "the remains of"],
      azNote: "qalıqlar / xarabalıqlar",
    },
    {
      word: "achievement",
      definition: "something impressive that you succeed in doing through effort",
      example: "The Great Wall is an extraordinary engineering achievement.",
      collocations: ["a great achievement", "a remarkable achievement"],
      azNote: "nailiyyət / uğur",
    },
    {
      word: "to collapse",
      definition: "to fall down or fail suddenly and completely",
      example: "No one knows exactly why the empire eventually collapsed.",
      collocations: ["collapse suddenly", "an economy collapses"],
      azNote: "uçmaq / çökmək",
    },
  ],
  grammar: {
    point: "The third conditional",
    explanation:
      "Use the third conditional to imagine a different past — a situation that did not actually happen — and its imaginary result. The structure is: If + past perfect, ... would have + past participle. 'If the library hadn't burned, we would have learned much more.' The past perfect (had + V3) describes the unreal condition; 'would have + V3' describes the unreal result. We can also use 'might have' or 'could have' for less certain results.",
    azNote:
      "Third conditional = keçmişin XƏYALİ, baş verməmiş variantı və nəticəsi. Quruluş: If + past perfect, ... would have + V3. 'If I had studied, I would have passed' (oxumadım → keçmədim, xəyali). 'had + V3' qeyri-real şərt, 'would have + V3' qeyri-real nəticə. Az əmin nəticə üçün 'might have / could have'.",
    examples: [
      { en: "If they hadn't built the pyramids, we wouldn't know so much about them.", note: "unreal past condition + result" },
      { en: "If the city hadn't been destroyed, more remains would have survived.", note: "would have + V3" },
      { en: "If we had studied their writing, we might have understood their culture.", note: "less certain → might have" },
      {
        en: "✗ If they would have built... → ✓ If they had built...",
        note: "'would have' is NOT used in the if-clause",
      },
    ],
  },
  reading: {
    title: "Built to last forever",
    text: `Thousands of years ago, without machines, computers or modern tools, ancient civilisations created monuments so impressive that they still amaze us today. Standing in front of the Great Pyramid of Giza or the temples of Greece, it is natural to wonder how — and why — ordinary people achieved such extraordinary things.

The Egyptians are perhaps the most famous builders of all. They constructed the pyramids as tombs for their kings, moving enormous blocks of stone with little more than ropes, ramps and human muscle. If they had not been so well organised, such an achievement would have been impossible. Even now, engineers study the pyramids to understand exactly how they were built.

Other civilisations left equally remarkable remains. The Romans constructed roads, bridges and aqueducts so well that some are still standing two thousand years later. If the Romans had not developed concrete, much of their architecture would have collapsed long ago. Their engineering shaped the cities we live in today.

Sadly, not everything survived. The ancient Library of Alexandria, which once held the knowledge of the ancient world, was destroyed. Historians often say that if that library had not been lost, science might have advanced centuries earlier. We will never know how much wisdom disappeared with it.

What these wonders teach us is humbling. The people who built them had far less than we do, yet they created things that have lasted for millennia. If they had given up when the task seemed impossible, the world would have been a poorer place — and we would have lost some of the greatest achievements in human history.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "How did the Egyptians move the huge stone blocks?",
        options: [
          "With electric machines",
          "With ropes, ramps and human muscle",
          "With trucks",
          "They did not move them",
        ],
        answer: 1,
        explanation: "'moving enormous blocks of stone with little more than ropes, ramps and human muscle'.",
      },
      {
        type: "multiple-choice",
        prompt: "Why is some Roman architecture still standing today?",
        options: [
          "Because it was rebuilt last year",
          "Because the Romans developed concrete",
          "Because it was made of gold",
          "Because no one has used it",
        ],
        answer: 1,
        explanation: "'If the Romans had not developed concrete, much of their architecture would have collapsed'.",
      },
      {
        type: "multiple-choice",
        prompt: "What do historians say about the Library of Alexandria?",
        options: [
          "It was never important.",
          "If it had not been lost, science might have advanced earlier.",
          "It still exists today.",
          "It held no useful knowledge.",
        ],
        answer: 1,
        explanation: "'if that library had not been lost, science might have advanced centuries earlier'.",
      },
    ],
  },
  speaking: [
    "Talk about a historical event and how the world would have been different if it had not happened. Use the third conditional.",
    "If you had lived in an ancient civilisation, what do you think life would have been like?",
    "Why do you think it is important to protect ancient monuments today?",
  ],
  writing: {
    task: "Write a paragraph imagining how history would have been different if a famous invention or monument had never existed. Use at least four third-conditional sentences and three words from this topic.",
    minWords: 110,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt: "If they ___ (not / build) the pyramids, we would know much less about Egypt.",
      answer: "hadn't built",
      accept: ["had not built", "hadnt built"],
      explanation: "Third conditional if-clause → past perfect: 'hadn't built'.",
    },
    {
      type: "gap-fill",
      prompt: "If the city hadn't been destroyed, more remains ___ (survive).",
      answer: "would have survived",
      accept: ["would have survived"],
      explanation: "Third conditional result → 'would have' + past participle.",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the correct third conditional:",
      options: [
        "If they would have planned better, it would have worked.",
        "If they had planned better, it would have worked.",
        "If they had planned better, it would worked.",
        "If they planned better, it would have worked.",
      ],
      answer: 1,
      explanation: "If + past perfect (had planned), ... would have + past participle (would have worked).",
    },
    {
      type: "gap-fill",
      prompt: "Tourists come to see the ancient ___ of the city. (parts left after destruction)",
      answer: "remains",
      explanation: "'remains' = the parts left after something is destroyed or decays.",
    },
    {
      type: "multiple-choice",
      prompt: "'to collapse' means:",
      options: [
        "to grow stronger",
        "to fall down or fail suddenly",
        "to build slowly",
        "to repair something",
      ],
      answer: 1,
      explanation: "'to collapse' = to fall down or fail suddenly and completely.",
    },
  ],
};
