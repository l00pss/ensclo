import type { Topic } from "../types";

export const c1Bioethics: Topic = {
  id: "c1-bioethics",
  level: "C1",
  title: "Bioethics and Genetic Engineering",
  theme: "Science",
  summary:
    "Examine the moral controversies surrounding genetic engineering, and learn to report opinions objectively using impersonal and personal passive structures (It is believed that ...; X is said to ...).",
  leadIn: [
    "To what extent should scientists be permitted to alter the human genome?",
    "Who, if anyone, has the right to decide which traits future generations inherit?",
    "Is there a meaningful moral distinction between curing disease and enhancing human ability?",
  ],
  vocabulary: [
    {
      word: "heritable",
      definition:
        "capable of being passed from one generation to the next through the genes",
      example:
        "Editing reproductive cells produces heritable changes that affect every subsequent descendant.",
      collocations: ["heritable trait", "heritable disease"],
      azNote: "irsi, nəsildən-nəslə ötürülə bilən (genlər vasitəsilə)",
    },
    {
      word: "autonomy",
      definition:
        "the capacity and right of an individual to make informed decisions about their own life and body",
      example:
        "Critics argue that editing an embryo violates the future child's autonomy.",
      collocations: ["personal autonomy", "respect autonomy"],
      azNote: "muxtariyyət, öz bədəni və həyatı barədə müstəqil qərar vermə hüququ",
    },
    {
      word: "eugenics",
      definition:
        "the discredited belief that the human species can be improved by controlling who is allowed to reproduce",
      example:
        "Many fear that genetic selection could become a subtle, modern form of eugenics.",
      collocations: ["the spectre of eugenics", "eugenics movement"],
      azNote: "evgenika, insan irqini seçici nəsil artımı ilə \"yaxşılaşdırmağa\" çalışan gözdən düşmüş ideologiya",
    },
    {
      word: "to manipulate",
      definition:
        "to alter or control something with skill, often in a deliberate and technical way",
      example:
        "The technology allows researchers to manipulate individual sequences of DNA.",
      collocations: ["manipulate the genome", "manipulate genetic material"],
      azNote: "manipulyasiya etmək, bir şeyi məharətlə dəyişdirmək və ya idarə etmək",
    },
    {
      word: "unforeseen",
      definition:
        "not anticipated or predicted, especially with regard to future consequences",
      example:
        "Even a precise edit may trigger unforeseen effects elsewhere in the genome.",
      collocations: ["unforeseen consequences", "unforeseen risks"],
      azNote: "gözlənilməz, əvvəlcədən təxmin edilməyən (xüsusən nəticələr barədə)",
    },
    {
      word: "consensus",
      definition:
        "a general or widely shared agreement reached within a group or community",
      example:
        "There is no international consensus on where the ethical limits should lie.",
      collocations: ["reach a consensus", "broad consensus"],
      azNote: "konsensus, bir qrup daxilində ümumi razılıq, yekdil mövqe",
    },
  ],
  grammar: {
    point: "Impersonal and Personal Passive (It is believed that ...; X is said to ...)",
    explanation:
      "When we report widely held opinions without naming a source, English uses two parallel passive patterns. The impersonal passive keeps an empty 'it' as subject: 'It is believed that the technology is safe.' The personal passive promotes the original subject and follows it with a to-infinitive: 'The technology is believed to be safe.' Common reporting verbs include believe, think, say, argue, claim, consider and expect; use a perfect infinitive ('to have caused') when the reported action is earlier than the reporting.",
    azNote:
      "Mənbəni adlandırmadan ümumi fikri çatdırmaq üçün iki passiv quruluş var. İmpersonal passiv boş 'it' ilə başlayır: 'It is believed that ...'. Personal passiv əsl mübtədanı önə çəkir və ardınca to-məsdər gəlir: 'X is said to ...'. Daha əvvəlki hərəkət üçün 'to have done' perfekt məsdərindən istifadə olunur.",
    examples: [
      {
        en: "It is widely believed that gene editing will transform medicine.",
        note: "impersonal passive: it + be + past participle + that-clause",
      },
      {
        en: "Gene editing is widely believed to be the future of medicine.",
        note: "personal passive: subject + be + past participle + to-infinitive",
      },
      {
        en: "It is argued that the procedure was carried out without proper oversight.",
        note: "impersonal passive reporting a past event",
      },
      {
        en: "The scientist is said to have edited the embryos in secret.",
        note: "personal passive with perfect infinitive (to have edited) for an earlier action",
      },
    ],
  },
  reading: {
    title: "Editing the human blueprint",
    text: `Few scientific advances have provoked as much ethical anxiety as the ability to manipulate the human genome with precision. Since the advent of so-called molecular scissors, it has been argued that medicine stands on the threshold of a new era, one in which inherited disorders might be eliminated before a child is even born. The promise is undeniably seductive. Yet it is widely believed that the same tools could be turned from healing to enhancement, and it is here that the discipline of bioethics is most urgently tested.

The crucial distinction lies in which cells are altered. Edits made to ordinary body cells affect only the patient, but changes introduced into reproductive cells are heritable, rippling down through every future descendant. Such interventions are thought to carry risks that no individual can meaningfully consent to, for the people most affected do not yet exist. Critics contend that this represents an unprecedented assault on the autonomy of future generations, who are made, in effect, the unwitting subjects of an experiment they never chose.

There is also the matter of unforeseen consequences. The genome is widely understood to be a system of bewildering complexity, in which a single sequence may serve several functions at once. A correction that appears flawless in the laboratory is said to have produced unexpected mutations elsewhere, and such off-target effects could remain invisible for decades. Beyond the biology lies a deeper unease: were enhancement to become routine, society might drift, however gradually, towards a new and commercialised form of eugenics, in which the wealthy could simply purchase advantages for their children.

For these reasons, it is generally accepted that no firm international consensus has yet been reached. Some nations have prohibited heritable editing outright, while others permit tightly regulated research. What almost everyone concedes is that the technology has outpaced our moral frameworks. It is often said that just because something can be done does not mean that it ought to be; rarely has that ancient caution seemed more pertinent than it does today.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "According to the text, why are edits to reproductive cells especially controversial?",
        options: [
          "They are more expensive than other treatments.",
          "They are heritable and affect descendants who cannot consent.",
          "They are impossible with current technology.",
          "They only ever benefit the wealthy.",
        ],
        answer: 1,
        explanation:
          "The text states such changes 'are heritable' and that those most affected 'do not yet exist', so they cannot consent.",
      },
      {
        type: "multiple-choice",
        prompt: "What does the writer suggest about unforeseen consequences of editing?",
        options: [
          "They have all been fully eliminated.",
          "They are irrelevant to bioethics.",
          "Off-target effects may stay hidden for decades.",
          "They only occur in laboratory animals.",
        ],
        answer: 2,
        explanation:
          "The text notes off-target effects 'could remain invisible for decades'.",
      },
      {
        type: "multiple-choice",
        prompt: "What is the writer's overall position on the technology?",
        options: [
          "It should be banned in every country immediately.",
          "Its power has outpaced our moral frameworks, so caution is needed.",
          "It is entirely harmless and should be unregulated.",
          "It is useless for treating inherited disorders.",
        ],
        answer: 1,
        explanation:
          "The final paragraph concludes that 'the technology has outpaced our moral frameworks' and stresses caution.",
      },
    ],
  },
  speaking: [
    "'Parents have the right to use genetic technology to give their children the best possible start in life.' To what extent do you agree?",
    "Discuss the difference between using genetic engineering to cure disease and using it for enhancement. Where should the line be drawn?",
    "If a global consensus on genetic editing could be reached, what three principles do you think it should contain?",
  ],
  writing: {
    task: "Write a discursive essay responding to the statement: 'The genetic editing of human embryos should be permanently banned.' Present both sides and reach a reasoned conclusion. Use at least two impersonal or personal passive structures (e.g. 'It is argued that ...', 'X is said to ...').",
    minWords: 220,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt:
        "It is widely ___ that gene editing will transform medicine. (impersonal passive of 'believe')",
      answer: "believed",
      explanation:
        "Impersonal passive: 'It is believed that ...' uses the past participle 'believed'.",
    },
    {
      type: "gap-fill",
      prompt:
        "The scientist is said ___ have edited the embryos in secret. (perfect infinitive)",
      answer: "to",
      explanation:
        "Personal passive with a perfect infinitive: 'is said to have edited' reports an earlier action.",
    },
    {
      type: "multiple-choice",
      prompt:
        "Which sentence correctly rewrites 'People think the procedure is dangerous' as a personal passive?",
      options: [
        "It is thought the procedure dangerous.",
        "The procedure is thought to be dangerous.",
        "The procedure is thought that it is dangerous.",
        "The procedure thinks to be dangerous.",
      ],
      answer: 1,
      explanation:
        "Personal passive promotes the subject and adds a to-infinitive: 'The procedure is thought to be dangerous.'",
    },
    {
      type: "multiple-choice",
      prompt: "'heritable' is closest in meaning to:",
      options: ["temporary", "inheritable", "harmless", "artificial"],
      answer: 1,
      explanation:
        "'heritable' means capable of being passed down through the genes, i.e. inheritable.",
    },
    {
      type: "gap-fill",
      prompt:
        "There is still no international ___ on where the ethical limits of editing should lie. (general agreement)",
      answer: "consensus",
      explanation: "'consensus' means a widely shared agreement within a group.",
    },
  ],
};
