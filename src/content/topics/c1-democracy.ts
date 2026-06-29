import type { Topic } from "../types";

export const c1Democracy: Topic = {
  id: "c1-democracy",
  level: "C1",
  title: "The Future of Democracy",
  theme: "Politics",
  summary:
    "Examine abstract debates about the health of democratic institutions, and use hypothetical and unreal structures (wish, if only, would rather, it's time + past) to express regret, preference and overdue change.",
  leadIn: [
    "To what extent do you believe ordinary citizens still have a meaningful influence over the decisions that govern their lives?",
    "Why do you think trust in political institutions has declined across so many established democracies?",
    "If you could reform one aspect of your country's political system, what would you change, and why?",
  ],
  vocabulary: [
    {
      word: "legitimacy",
      definition:
        "the quality of being widely accepted as rightful, lawful and deserving of obedience or support",
      example:
        "A government that wins barely a third of the vote may struggle to claim genuine legitimacy.",
      collocations: ["democratic legitimacy", "question the legitimacy"],
      azNote: "qanuniliyət / məşruiyyət (geniş şəkildə haqlı və qəbul olunmuş sayılma)",
    },
    {
      word: "accountability",
      definition:
        "the obligation of those in power to explain their actions and to accept responsibility for the consequences",
      example:
        "Without independent courts and a free press, accountability becomes little more than a slogan.",
      collocations: ["hold to account", "public accountability"],
      azNote: "hesabatlılıq / cavabdehlik (hakimiyyətin əməllərinə görə məsuliyyət daşıması)",
    },
    {
      word: "populism",
      definition:
        "a political approach that claims to speak for ordinary people against a corrupt or self-serving elite",
      example:
        "The rise of populism has reshaped the political landscape on both the left and the right.",
      collocations: ["rise of populism", "appeal to populism"],
      azNote: "populizm (xalqı korrupsioner elitaya qarşı qoyan siyasi yanaşma)",
    },
    {
      word: "to disenfranchise",
      definition:
        "to deprive a person or group of the right to vote, or more broadly of a voice in public affairs",
      example:
        "Restrictive registration laws can quietly disenfranchise the poorest communities.",
      collocations: ["disenfranchise voters", "feel disenfranchised"],
      azNote: "səs hüququndan məhrum etmək / siyasi səsdən mərhum etmək",
    },
    {
      word: "polarisation",
      definition:
        "the sharp division of a society into opposing groups with increasingly incompatible beliefs",
      example:
        "Social media has been blamed for accelerating the polarisation of public debate.",
      collocations: ["political polarisation", "deepening polarisation"],
      azNote: "qütbləşmə (cəmiyyətin bir-birinə zidd qruplara kəskin bölünməsi)",
    },
    {
      word: "apathy",
      definition:
        "a lack of interest, enthusiasm or concern, especially towards political participation",
      example:
        "Falling turnout is often read as a symptom of widespread voter apathy.",
      collocations: ["voter apathy", "political apathy"],
      azNote: "laqeydlik / biganəlik (xüsusən siyasi iştiraka qarşı maraqsızlıq)",
    },
  ],
  grammar: {
    point: "Hypothetical & Unreal Structures (wish, if only, would rather, it's time + past)",
    explanation:
      "To talk about situations that are contrary to reality, English uses past-tense forms with a present or future meaning. 'I wish' and 'if only' + past simple express regret about the present ('I wish people cared more'), while + past perfect expresses regret about the past ('If only we had voted'). 'Would rather' + past tense expresses a preference about another person's behaviour ('I'd rather you didn't generalise'), and 'It's (high) time' + past tense signals that an action is overdue ('It's high time politicians listened').",
    azNote:
      "Reallıqdan fərqli, xəyali vəziyyətləri ifadə etmək üçün keçmiş zaman formaları indiki məna daşıyır. 'I wish / if only' + past simple indiki peşmançılıq, + past perfect keçmiş peşmançılıq bildirir. 'Would rather' + keçmiş zaman başqasının davranışına dair üstünlük, 'It's time' + keçmiş zaman isə gecikmiş, vaxtı çatmış hərəkəti göstərir.",
    examples: [
      {
        en: "I wish citizens took a more active interest in how they are governed.",
        note: "wish + past simple → regret about a present reality",
      },
      {
        en: "If only previous governments had taken accountability seriously, trust might be higher now.",
        note: "if only + past perfect → regret about the past",
      },
      {
        en: "Many voters would rather politicians spoke honestly than made empty promises.",
        note: "would rather + past tense → preference about others' behaviour",
      },
      {
        en: "It's high time we addressed the apathy that hollows out our institutions.",
        note: "it's (high) time + past tense → an overdue action",
      },
    ],
  },
  reading: {
    title: "Democracy in an age of disenchantment",
    text: `Across the established democracies of the world, a quiet unease has taken hold. Turnout drifts downward, party membership withers, and surveys repeatedly record that citizens no longer trust those who govern them. Many of us, watching this slow erosion, secretly wish the picture were brighter; if only the institutions we inherited still commanded the confidence they once did. Yet the legitimacy of a political system is not a permanent possession. It must be continually renewed, and renewal demands genuine accountability — the sense that power can be questioned, scrutinised and, when necessary, removed.

It is tempting to blame this disenchantment on a single villain. For some, the culprit is populism, which flatters ordinary people while corroding the norms that restrain those in office. For others, the deeper problem is a creeping polarisation that turns fellow citizens into enemies and renders compromise almost impossible. There is truth in both diagnoses, but each is incomplete. A great many people have simply withdrawn altogether, and that apathy may be more corrosive than any ideology, for a democracy can survive disagreement far more easily than it can survive indifference.

Consider how easily citizens come to feel sidelined. When electoral rules are quietly rewritten to disenfranchise the inconvenient, when lobbying drowns out the ordinary voter, and when the same scandals recur without consequence, people conclude, not unreasonably, that their participation changes nothing. Most of them would rather their leaders listened than lectured; if only those in power treated voters as partners rather than as an audience to be managed.

None of this is irreversible. It's high time we stopped treating democratic decline as a spectator sport and started rebuilding the institutions that make self-government possible. Were citizens given a real stake in decisions, were transparency made the default rather than the exception, the corrosive cynicism of recent years might slowly give way to something better. Democracy has never been a finished achievement; it is a practice that each generation must consciously choose to sustain.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "According to the writer, why is legitimacy described as 'not a permanent possession'?",
        options: [
          "Because it can never truly be achieved",
          "Because it must be continually renewed through accountability",
          "Because only populist leaders can grant it",
          "Because it depends entirely on high voter turnout",
        ],
        answer: 1,
        explanation:
          "The text states that legitimacy 'must be continually renewed, and renewal demands genuine accountability'.",
      },
      {
        type: "multiple-choice",
        prompt: "What does the writer suggest may be more damaging than any single ideology?",
        options: [
          "Polarisation between parties",
          "The rise of populism",
          "Widespread apathy and indifference",
          "Frequent political scandals",
        ],
        answer: 2,
        explanation:
          "The writer argues that 'apathy may be more corrosive than any ideology', since democracy survives disagreement more easily than indifference.",
      },
      {
        type: "multiple-choice",
        prompt: "What is the writer's overall stance on democratic decline?",
        options: [
          "It is inevitable and cannot be reversed.",
          "It is a problem only for populist movements.",
          "It is reversible if institutions are actively rebuilt.",
          "It is exaggerated and not a genuine concern.",
        ],
        answer: 2,
        explanation:
          "The final paragraph insists 'None of this is irreversible' and calls for rebuilding institutions and sustaining democracy.",
      },
    ],
  },
  speaking: [
    "'A democracy can survive disagreement, but not indifference.' To what extent do you agree with this claim?",
    "Discuss the main factors that might cause citizens to feel disenfranchised, and what could realistically be done about them.",
    "If only one reform could be introduced to restore public trust in politics, what should it be, and what consequences might it have?",
  ],
  writing: {
    task: "Write a discursive essay responding to the statement: 'The greatest threat to modern democracy is not extremism but apathy.' Present both sides and reach a reasoned conclusion. Use at least two hypothetical or unreal structures (for example, 'I wish', 'if only', 'would rather' or 'it's time + past').",
    minWords: 220,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt:
        "If only governments ___ (take) accountability seriously decades ago, trust would be higher today.",
      answer: "had taken",
      accept: ["had taken"],
      explanation:
        "'If only' + past perfect (had taken) expresses regret about the past with a present consequence.",
    },
    {
      type: "gap-fill",
      prompt:
        "It's high time politicians ___ (listen) to the citizens they claim to represent.",
      answer: "listened",
      accept: ["listened"],
      explanation:
        "'It's (high) time' is followed by the past tense to signal an action that is overdue.",
    },
    {
      type: "multiple-choice",
      prompt: "Which sentence correctly uses 'would rather' to express a preference about someone else's behaviour?",
      options: [
        "I would rather voters to participate more.",
        "I would rather voters participated more.",
        "I would rather voters participate more.",
        "I would rather voters had participate more.",
      ],
      answer: 1,
      explanation:
        "'Would rather' + past tense (participated) expresses a preference about another person's behaviour.",
    },
    {
      type: "gap-fill",
      prompt:
        "Many citizens wish their leaders ___ (be) more honest about the challenges the country faces.",
      answer: "were",
      accept: ["were", "was"],
      explanation:
        "'Wish' + past simple expresses regret about a present reality; the subjunctive 'were' is standard here.",
    },
    {
      type: "multiple-choice",
      prompt: "To 'disenfranchise' a group of people means to:",
      options: [
        "give them new economic opportunities",
        "deprive them of the right to vote or a political voice",
        "encourage them to join a political party",
        "make them more politically engaged",
      ],
      answer: 1,
      explanation:
        "'To disenfranchise' means to deprive people of the right to vote, or more broadly of a voice in public affairs.",
    },
  ],
};
