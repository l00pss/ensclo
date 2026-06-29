import type { Topic } from "../types";

export const c1Inequality: Topic = {
  id: "c1-inequality",
  level: "C1",
  title: "The Economics of Inequality",
  theme: "Economy",
  summary:
    "Examine the structural causes of economic inequality, and use cleft sentences ('It is ... that ...'; 'What ... is ...') to add emphasis to sophisticated arguments.",
  leadIn: [
    "To what extent is a degree of economic inequality an inevitable feature of any market economy?",
    "Should governments prioritise reducing the gap between rich and poor, or maximising overall growth?",
    "How far does the circumstance of one's birth determine one's economic destiny?",
  ],
  vocabulary: [
    {
      word: "disparity",
      definition:
        "a great or noticeable difference between two or more things, especially one regarded as unfair",
      example:
        "The disparity in wealth between the richest and poorest deciles has widened sharply over the past decade.",
      collocations: ["wealth disparity", "income disparity"],
      azNote: "kəskin fərq, bərabərsizlik, uçurum (xüsusən ədalətsiz sayılan)",
    },
    {
      word: "to perpetuate",
      definition:
        "to cause something, especially an undesirable situation, to continue indefinitely",
      example:
        "Unequal access to education tends to perpetuate poverty from one generation to the next.",
      collocations: ["perpetuate inequality", "perpetuate a cycle"],
      azNote: "davam etdirmək, əbədiləşdirmək (adətən mənfi vəziyyəti), kökləşdirmək",
    },
    {
      word: "social mobility",
      definition:
        "the ability of individuals or groups to move between different social or economic positions within a society",
      example:
        "Low social mobility means that talented children from poor families rarely reach the top.",
      collocations: ["upward social mobility", "limited social mobility"],
      azNote: "sosial mobillik, cəmiyyətdə təbəqələr arasında yuxarı və ya aşağı hərəkət imkanı",
    },
    {
      word: "redistribution",
      definition:
        "the reallocation of wealth or income, typically through taxation and public spending, to reduce inequality",
      example:
        "Progressive taxation is the principal mechanism of redistribution in most modern states.",
      collocations: ["wealth redistribution", "income redistribution"],
      azNote: "yenidən bölüşdürmə, sərvətin və ya gəlirin vergi və xərclər vasitəsilə yenidən paylanması",
    },
    {
      word: "entrenched",
      definition:
        "firmly established and very difficult to change, especially when describing attitudes, habits or privilege",
      example:
        "Entrenched privilege allows wealthy families to pass on their advantages largely intact.",
      collocations: ["deeply entrenched", "entrenched privilege"],
      azNote: "kök salmış, bərkimiş, dəyişdirilməsi çox çətin olan (imtiyaz, münasibət və s.)",
    },
    {
      word: "meritocracy",
      definition:
        "a system in which advancement is based on individual ability and effort rather than on inherited wealth or status",
      example:
        "Many societies celebrate the ideal of meritocracy while quietly tolerating inherited advantage.",
      collocations: ["the myth of meritocracy", "a genuine meritocracy"],
      azNote: "meritokratiya, irsi sərvət deyil, qabiliyyət və əməyə görə irəliləyişə əsaslanan sistem",
    },
  ],
  grammar: {
    point: "Cleft sentences for emphasis (It is ... that ...; What ... is ...)",
    explanation:
      "Cleft sentences split one idea into two clauses in order to foreground a particular element. In an 'it-cleft', we place the emphasised element after 'It is/was' and follow it with a 'that/who' clause: 'It is structural reform that the economy needs', not merely 'The economy needs structural reform'. In a 'wh-cleft' (or pseudo-cleft), 'What' introduces the idea and the emphasised element follows 'is': 'What the poorest households lack is access to capital'.",
    azNote:
      "Cleft (parçalanmış) cümlələr bir fikri iki hissəyə bölərək konkret elementi vurğulayır. 'It is ... that ...' qəlibi vurğulanan sözü 'It is/was'-dan sonra qoyur: 'It is education that matters most'. 'What ... is ...' qəlibində isə 'What' fikri başladır, vurğulanan hissə 'is'-dən sonra gəlir: 'What we need is reform'. Hər ikisi yazıda və danışıqda emfaza üçün işlənir.",
    examples: [
      {
        en: "It is inherited wealth, not talent, that most reliably predicts where a person will end up.",
        note: "it-cleft emphasising the subject 'inherited wealth'",
      },
      {
        en: "What perpetuates inequality is not a single policy but a web of mutually reinforcing advantages.",
        note: "wh-cleft (pseudo-cleft) emphasising the cause",
      },
      {
        en: "It was during the 1980s that the disparity between top and median incomes began to accelerate.",
        note: "it-cleft emphasising a time expression",
      },
      {
        en: "What governments often overlook is the degree to which privilege has become entrenched.",
        note: "wh-cleft emphasising the overlooked object",
      },
    ],
  },
  reading: {
    title: "Why the playing field is rarely level",
    text: `It is a comforting belief, widely shared across prosperous societies, that talent and hard work are ultimately rewarded — that we live, more or less, in a meritocracy. Yet the evidence assembled by economists over the past three decades tells a less flattering story. What the data increasingly reveal is that the single best predictor of an individual's eventual income is not ability or ambition but the income of their parents. It is this stubborn correlation, more than any other figure, that should give the optimists pause.

The mechanisms are not mysterious. Wealthy families can secure superior schooling, fund unpaid internships, absorb the risk of entrepreneurial failure, and pass on assets that compound across a lifetime. Each advantage is modest in isolation, but together they perpetuate a cycle in which the disparity between the comfortable and the precarious grows ever wider. What looks like the natural sorting of talent is, on closer inspection, the quiet operation of inherited privilege — a privilege that has become so entrenched that it is mistaken for fairness.

This matters because social mobility, the capacity of people to rise above the circumstances of their birth, has stalled in many advanced economies even as overall wealth has multiplied. It is not poverty alone that corrodes a society, but the sense that the game is rigged; when citizens cease to believe that effort can change their station, the social contract begins to fray. What follows is often resentment, disengagement, and a loss of faith in institutions.

None of this is inevitable. It is policy, ultimately, that determines how the gains of an economy are shared. Through progressive taxation, universal education and the redistribution of opportunity rather than merely of income, states can loosen the grip of inherited advantage. What such measures require, however, is not technical ingenuity but political will — and a willingness to admit that the comforting story of pure meritocracy was never quite true.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "According to the reading, what is the single best predictor of a person's eventual income?",
        options: [
          "Their individual talent",
          "Their level of ambition",
          "Their parents' income",
          "The region where they live",
        ],
        answer: 2,
        explanation:
          "The text states the best predictor 'is not ability or ambition but the income of their parents'.",
      },
      {
        type: "multiple-choice",
        prompt: "What does the writer suggest is often mistaken for fairness?",
        options: [
          "Progressive taxation",
          "Deeply entrenched inherited privilege",
          "The natural sorting of talent through hard work",
          "The redistribution of opportunity",
        ],
        answer: 1,
        explanation:
          "The text says privilege 'has become so entrenched that it is mistaken for fairness'.",
      },
      {
        type: "multiple-choice",
        prompt: "What does the writer identify as the ultimate requirement for reducing inequality?",
        options: [
          "Technical ingenuity",
          "Political will",
          "Faster economic growth",
          "More unpaid internships",
        ],
        answer: 1,
        explanation:
          "The final paragraph states such measures require 'not technical ingenuity but political will'.",
      },
    ],
  },
  speaking: [
    "Using a cleft sentence, state what you believe is the single most important driver of inequality, and defend your choice.",
    "'A pure meritocracy is neither achievable nor even desirable.' To what extent do you agree?",
    "Discuss the trade-offs a government faces when deciding how far to pursue the redistribution of wealth.",
  ],
  writing: {
    task: "Write a discursive essay responding to the statement: 'Inequality is the unavoidable price of a dynamic economy.' Present both sides and reach a reasoned conclusion. Use at least two cleft sentences ('It is ... that ...' and 'What ... is ...') for emphasis.",
    minWords: 220,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt:
        "___ is education that most reliably opens the door to social mobility. (it-cleft for emphasis)",
      answer: "It",
      explanation:
        "An it-cleft begins with 'It is/was' and foregrounds the emphasised element: 'It is education that ...'.",
    },
    {
      type: "gap-fill",
      prompt:
        "___ the poorest households lack is access to capital, not the will to work. (wh-cleft)",
      answer: "What",
      explanation:
        "A wh-cleft (pseudo-cleft) begins with 'What' and places the emphasised idea after 'is': 'What ... lack is ...'.",
    },
    {
      type: "multiple-choice",
      prompt: "Which sentence is a correctly formed cleft sentence emphasising 'inherited wealth'?",
      options: [
        "It is inherited wealth that predicts a person's income most reliably.",
        "Inherited wealth is what does predicts income most reliably.",
        "What inherited wealth predicts income most reliably.",
        "It inherited wealth that predicts income most reliably.",
      ],
      answer: 0,
      explanation:
        "A well-formed it-cleft is 'It is + emphasised element + that-clause': 'It is inherited wealth that predicts ...'.",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the best emphatic rewrite of 'The economy needs structural reform.'",
      options: [
        "The economy needs really structural reform.",
        "What the economy needs is structural reform.",
        "What needs the economy is structural reform.",
        "It the economy needs structural reform that.",
      ],
      answer: 1,
      explanation:
        "The wh-cleft 'What the economy needs is structural reform' emphasises the required reform.",
    },
    {
      type: "multiple-choice",
      prompt: "'entrenched' is closest in meaning to:",
      options: ["temporary", "firmly established", "negligible", "generous"],
      answer: 1,
      explanation:
        "'entrenched' describes something firmly established and very difficult to change.",
    },
  ],
};
