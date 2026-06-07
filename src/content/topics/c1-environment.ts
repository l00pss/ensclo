import type { Topic } from "../types";

export const c1Environment: Topic = {
  id: "c1-environment",
  level: "C1",
  title: "Environment & Climate Change",
  theme: "Environment",
  summary:
    "Engage with abstract arguments about sustainability and climate policy, and use advanced conditional structures (mixed and inverted conditionals) to discuss hypothetical consequences.",
  leadIn: [
    "To what extent do you think individuals, rather than governments, are responsible for tackling climate change?",
    "Is economic growth compatible with environmental protection?",
    "How might cities be redesigned to become more sustainable?",
  ],
  vocabulary: [
    {
      word: "sustainability",
      definition:
        "the ability to continue an activity over time without depleting natural resources or causing severe ecological damage",
      example:
        "Long-term sustainability requires a fundamental shift away from fossil fuels.",
      collocations: ["environmental sustainability", "ensure sustainability"],
      azNote: "davamlılıq / dayanıqlılıq (ekoloji tarazlığı pozmadan davam etdirmə)",
    },
    {
      word: "to mitigate",
      definition: "to make something less harmful, serious, or severe",
      example: "Reforestation can help to mitigate the effects of carbon emissions.",
      collocations: ["mitigate the impact", "mitigate risk"],
      azNote: "yumşaltmaq / təsirini azaltmaq",
    },
    {
      word: "carbon footprint",
      definition:
        "the total amount of greenhouse gases produced by a person, organisation or activity",
      example: "Flying frequently dramatically increases your carbon footprint.",
      collocations: ["reduce your carbon footprint", "a large carbon footprint"],
      azNote: "karbon izi (bir fəaliyyətin buraxdığı qaz miqdarı)",
    },
    {
      word: "depletion",
      definition: "the reduction of something to a point of severe scarcity or exhaustion",
      example: "The depletion of natural resources is accelerating worldwide.",
      collocations: ["resource depletion", "ozone depletion"],
      azNote: "tükənmə / azalma",
    },
    {
      word: "to offset",
      definition: "to balance or compensate for the effect of something",
      example:
        "Some companies offset their emissions by investing in renewable energy projects.",
      collocations: ["offset emissions", "offset the cost"],
      azNote: "kompensasiya etmək / tarazlamaq",
    },
    {
      word: "negligible",
      definition: "so small or unimportant as to be not worth considering",
      example:
        "Critics argue that the impact of individual recycling is negligible compared with industrial pollution.",
      collocations: ["a negligible effect", "negligible amount"],
      azNote: "əhəmiyyətsiz dərəcədə kiçik",
    },
  ],
  grammar: {
    point: "Advanced Conditionals (mixed & inverted)",
    explanation:
      "Mixed conditionals combine different time frames: a past condition with a present result — 'If we had acted sooner (past), the situation would be less critical now (present).' In formal English, the 'if' can be dropped and the auxiliary inverted: 'Had we acted sooner, the situation would be less critical.' Likewise, 'Were governments to invest more, ...' = 'If governments invested more, ...'.",
    azNote:
      "Mixed conditional = şərt və nəticə fərqli zamanlarda. Keçmiş şərt + indiki nəticə: 'If I had studied (past), I would have a better job now (present).' Rəsmi dildə 'if' atılıb köməkçi feil əvvələ keçir: 'Had I studied...', 'Were I to...', 'Should you need...'.",
    examples: [
      {
        en: "If governments had invested in renewables earlier, emissions would be lower today.",
        note: "mixed: past condition (had invested) → present result (would be)",
      },
      {
        en: "Had we listened to scientists, this crisis might have been avoided.",
        note: "inverted third conditional (Had + subject), formal",
      },
      {
        en: "Were the policy to be adopted, it would transform the energy sector.",
        note: "inverted second conditional (Were + subject + to)",
      },
      {
        en: "Should temperatures continue to rise, coastal cities will be at risk.",
        note: "inverted first conditional (Should + subject), formal",
      },
    ],
  },
  reading: {
    title: "The limits of individual action",
    text: `It has become commonplace to be told that we can save the planet through our personal choices — by recycling diligently, cycling to work, carrying a reusable cup, or otherwise reducing our carbon footprint. The message is appealing precisely because it is empowering: it implies that the solution lies within reach of every individual. While such habits are undeniably worthwhile, a growing body of research suggests that their cumulative effect, when set against the sheer scale of industrial emissions, is close to negligible.

Consider the numbers. A single transatlantic flight can generate more emissions than a year of careful recycling will ever offset. Just one hundred companies are responsible for the majority of global industrial emissions, a figure that puts the impact of any one household into sobering perspective. Were every citizen of a wealthy nation to adopt a perfectly "green" lifestyle overnight, the reduction would be real but modest, dwarfed by the output of a fossil-fuel industry whose business model depends on continued extraction.

This is not to say that individual action is pointless. Personal choices shape social norms, and social norms eventually shape policy; people who change their own behaviour are often the same people who vote for change and demand it of others. Rather, critics contend that an excessive focus on personal responsibility risks obscuring the structural changes that genuine sustainability demands. It is, some argue, a narrative that has been quietly encouraged by the very industries that stand to lose the most from regulation, because a public preoccupied with its own shopping habits is a public distracted from the question of who profits.

The historical dimension is difficult to ignore. Had the burden been placed squarely on the largest polluters decades ago, when the science was already well understood, the trajectory of global emissions might look very different today. Were governments now to tax carbon at its true cost, to invest at scale in renewable infrastructure, and to hold corporations accountable for the damage they cause, the depletion of natural resources could be slowed within a generation. Should they continue to delay, however, the costs — economic, ecological and human — will only compound.

The challenge, then, is not merely to change individual behaviour, important though that is, but to mitigate the systemic forces that make the unsustainable choice the cheapest and most convenient one. Until the structures themselves are reformed, asking consumers to save the planet one reusable bag at a time may be less a solution than a comforting distraction.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "What is the writer's main argument?",
        options: [
          "Individual choices alone are enough to solve climate change.",
          "Recycling is completely useless.",
          "Personal action matters, but structural change is essential.",
          "Industrial emissions are not a serious problem.",
        ],
        answer: 2,
        explanation:
          "The writer values individual action but argues structural change is what 'genuine sustainability demands'.",
      },
      {
        type: "multiple-choice",
        prompt: "What does the writer suggest about focusing only on personal responsibility?",
        options: [
          "It guarantees success.",
          "It may hide the need for larger structural changes.",
          "It is the only realistic solution.",
          "It has no effect on public opinion.",
        ],
        answer: 1,
        explanation:
          "'an excessive focus on personal responsibility risks obscuring the structural changes'.",
      },
      {
        type: "multiple-choice",
        prompt: "Why does the writer mention that just one hundred companies cause most industrial emissions?",
        options: [
          "To prove that recycling is the best solution",
          "To put the impact of a single household into perspective",
          "To argue that companies are powerless",
          "To show that flights are harmless",
        ],
        answer: 1,
        explanation:
          "The statistic 'puts the impact of any one household into sobering perspective' — emphasising that structural sources dwarf individual ones.",
      },
    ],
  },
  speaking: [
    "'The responsibility for climate change lies with corporations, not consumers.' To what extent do you agree?",
    "Discuss the trade-offs a developing country might face between economic growth and environmental protection.",
    "If you could implement one environmental policy worldwide, what would it be, and what consequences might it have?",
  ],
  writing: {
    task: "Write a discursive essay responding to the statement: 'Individual lifestyle changes are a distraction from the real causes of climate change.' Present both sides and reach a conclusion. Use at least two advanced conditional structures.",
    minWords: 220,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt:
        "___ we acted sooner, the crisis would be less severe now. (inverted, drop 'if')",
      answer: "Had",
      explanation:
        "Inverted third/mixed conditional: 'Had we acted...' = 'If we had acted...'.",
    },
    {
      type: "gap-fill",
      prompt:
        "If the company ___ (invest) in clean energy years ago, it would be a market leader today.",
      answer: "had invested",
      accept: ["had invested"],
      explanation:
        "Mixed conditional: past condition → present result needs the past perfect (had invested).",
    },
    {
      type: "multiple-choice",
      prompt: "Which sentence is a correctly formed inverted conditional?",
      options: [
        "Were governments to act, the problem would improve.",
        "If governments were act, the problem would improve.",
        "Had governments to act, the problem would improve.",
        "Should governments acting, the problem would improve.",
      ],
      answer: 0,
      explanation: "'Were + subject + to + infinitive' is the correct inverted second conditional.",
    },
    {
      type: "gap-fill",
      prompt: "Reforestation can help ___ the impact of emissions. (reduce the severity of)",
      answer: "mitigate",
      explanation: "'mitigate' = to make something less severe.",
    },
    {
      type: "multiple-choice",
      prompt: "'negligible' is closest in meaning to:",
      options: ["enormous", "insignificant", "dangerous", "essential"],
      answer: 1,
      explanation: "'negligible' means so small it is not worth considering — i.e. insignificant.",
    },
  ],
};
