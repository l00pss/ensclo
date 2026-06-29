import type { Topic } from "../types";

export const c1LanguageIdentity: Topic = {
  id: "c1-language-identity",
  level: "C1",
  title: "Language and Identity",
  theme: "Language",
  summary:
    "Explore how the languages we speak shape who we are, and learn to use inversion after negative and limiting adverbials (Never have I...; Not only... but also...; Rarely does...) for emphasis in formal English.",
  leadIn: [
    "To what extent does the language you speak determine the way you see the world?",
    "Can a person fully belong to a culture whose language they do not speak?",
    "What is gained, and what is lost, when a community abandons its mother tongue?",
  ],
  vocabulary: [
    {
      word: "vernacular",
      definition:
        "the everyday language or dialect spoken by ordinary people in a particular region, as opposed to a formal or official standard",
      example:
        "Poets who write in the vernacular often capture a community's identity more vividly than any official record.",
      collocations: ["local vernacular", "speak in the vernacular"],
      azNote: "yerli danışıq dili, xalq dili, rəsmi standartdan fərqli gündəlik dialekt",
    },
    {
      word: "assimilation",
      definition:
        "the process by which a minority group gradually adopts the customs and language of a dominant culture, often losing its own",
      example:
        "Rapid assimilation allowed newcomers to advance economically, yet many felt they had surrendered something irreplaceable.",
      collocations: ["cultural assimilation", "pressure to assimilation"],
      azNote: "assimilyasiya, azlıq qrupun hakim mədəniyyətə qarışıb öz dilini itirməsi prosesi",
    },
    {
      word: "heritage",
      definition:
        "the traditions, values, and language passed down from previous generations that form part of a group's character",
      example:
        "For diaspora communities, a shared heritage is often preserved through stories, food, and the cadence of an ancestral tongue.",
      collocations: ["cultural heritage", "linguistic heritage"],
      azNote: "irs, miras, nəsillərdən ötürülən ənənələr, dəyərlər və dil",
    },
    {
      word: "to articulate",
      definition:
        "to express an idea, feeling, or argument clearly and effectively in words",
      example:
        "Bilingual speakers sometimes struggle to articulate a subtle emotion that exists in one language but not the other.",
      collocations: ["articulate an argument", "clearly articulate"],
      azNote: "fikri, hissi və ya arqumenti aydın, dəqiq şəkildə ifadə etmək",
    },
    {
      word: "multilingualism",
      definition:
        "the ability to speak, or the condition of a society in which people speak, several languages",
      example:
        "Far from being a handicap, multilingualism has been shown to enhance cognitive flexibility and empathy.",
      collocations: ["promote multilingualism", "widespread multilingualism"],
      azNote: "çoxdillilik, bir neçə dildə danışma bacarığı və ya cəmiyyətdə bir neçə dilin işlənməsi",
    },
    {
      word: "stigma",
      definition:
        "a strong feeling of social disapproval attached to a particular characteristic, accent, or way of speaking",
      example:
        "The stigma once attached to regional accents discouraged many children from speaking as their parents did.",
      collocations: ["social stigma", "attach a stigma"],
      azNote: "damğa, ləkə, müəyyən xüsusiyyətə, vurğuya və ya danışıq tərzinə bağlanan cəmiyyət qınağı",
    },
  ],
  grammar: {
    point: "Inversion after negative and limiting adverbials",
    explanation:
      "When a sentence begins with a negative or limiting adverbial expression for emphasis, the normal subject-verb order is inverted, so the auxiliary verb comes before the subject, as in a question. Common triggers include 'Never', 'Rarely', 'Seldom', 'Not only... but also', 'No sooner... than', and 'Under no circumstances'. This device is largely confined to formal and literary registers, where it lends weight and rhetorical force to a statement.",
    azNote:
      "Cümlə vurğu üçün mənfi və ya məhdudlaşdırıcı zərflə başlayanda, normal mübtəda-feil sırası tərsinə çevrilir, yəni köməkçi feil mübtədadan əvvələ keçir, sual cümləsindəki kimi. Bu, əsasən rəsmi və ədəbi dildə işlənir. Tətikləyici ifadələr, məsələn, 'Never', 'Rarely', 'Not only... but also', 'No sooner... than' kimidir.",
    examples: [
      {
        en: "Never have I encountered a community so determined to preserve its heritage.",
        note: "Never + auxiliary (have) + subject (I): emphatic present perfect",
      },
      {
        en: "Not only does language carry information, but it also encodes a whole worldview.",
        note: "Not only + auxiliary (does) + subject; note the comma before 'but it also'",
      },
      {
        en: "Rarely does a single accent provoke such strong reactions.",
        note: "Rarely + does + subject + base verb (third person)",
      },
      {
        en: "No sooner had the policy been introduced than the vernacular began to disappear.",
        note: "No sooner... than with inverted past perfect; do not confuse with 'when'",
      },
    ],
  },
  reading: {
    title: "The languages that make us who we are",
    text: `Seldom do we pause to consider how profoundly our sense of self is bound up with the words we use. To speak a language is not merely to transmit information, but to inherit a way of perceiving the world, a set of distinctions and silences that earlier generations have handed down. In this sense, language is the most intimate component of any cultural heritage, and the loss of a tongue is the loss of an entire perspective that no translation can fully recover.

Consider the experience of migrant families. Under pressure to advance in a new society, many embrace assimilation, allowing the dominant language to displace the one spoken at home. The economic logic is rarely in doubt; what is harder to measure is the quiet cost. Children grow up unable to articulate their grandparents' jokes, prayers, or terms of endearment, and a subtle distance opens within the family. Not only does the old vernacular fade, but with it disappears a particular texture of belonging that cannot simply be reconstructed.

Compounding the problem is the stigma that has long been attached to minority languages and regional accents. Never have prejudices about "correct" speech been entirely innocent; historically, they have served to mark certain groups as inferior and to justify their exclusion. Faced with such disapproval, speakers often suppress the very features that connect them to their origins, and an irreplaceable richness is gradually erased from public life.

Yet the picture is not uniformly bleak. Rarely has scholarly opinion been so united in celebrating the benefits of multilingualism, which research now links to greater cognitive flexibility, sharper empathy, and a more nuanced grasp of ambiguity. No sooner had communities begun to recognise these advantages than revival movements emerged, teaching ancestral tongues to a new generation. What such efforts make clear is that identity is not fixed but negotiated, and that the languages we choose to keep alive are, in the end, a declaration of who we intend to be.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "According to the writer, why is the loss of a language so significant?",
        options: [
          "It makes international trade more difficult.",
          "It erases an entire way of perceiving the world that translation cannot recover.",
          "It prevents children from learning grammar correctly.",
          "It is the only cause of family conflict.",
        ],
        answer: 1,
        explanation:
          "The first paragraph states that losing a tongue is 'the loss of an entire perspective that no translation can fully recover'.",
      },
      {
        type: "multiple-choice",
        prompt: "What does the writer identify as the 'quiet cost' of assimilation for migrant families?",
        options: [
          "A loss of income in the new society",
          "An inability to find employment",
          "A subtle distance and loss of belonging within the family",
          "A complete refusal to learn the dominant language",
        ],
        answer: 2,
        explanation:
          "The second paragraph describes children unable to articulate their grandparents' expressions and 'a subtle distance' opening within the family.",
      },
      {
        type: "multiple-choice",
        prompt: "How does the writer characterise current scholarly opinion on multilingualism?",
        options: [
          "Divided and sceptical about its value",
          "Unusually united in celebrating its cognitive and emotional benefits",
          "Indifferent to questions of identity",
          "Convinced that it harms children's development",
        ],
        answer: 1,
        explanation:
          "The final paragraph notes that 'Rarely has scholarly opinion been so united' in praising the benefits of multilingualism.",
      },
    ],
  },
  speaking: [
    "'When a language dies, a unique way of understanding the world dies with it.' To what extent do you agree?",
    "Discuss whether governments should actively fund the revival of endangered minority languages, or let market forces decide.",
    "How might the stigma attached to certain accents be reduced in schools and the media?",
  ],
  writing: {
    task: "Write a discursive essay responding to the statement: 'In a globalised world, preserving minority languages is a luxury we can no longer afford.' Present both sides and reach a reasoned conclusion. Use at least two examples of inversion after a negative or limiting adverbial.",
    minWords: 220,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt:
        "Never ___ I heard such a passionate defence of a dying language. (emphatic inversion, present perfect)",
      answer: "have",
      explanation:
        "After the negative adverbial 'Never', the auxiliary is inverted before the subject: 'Never have I heard...'.",
    },
    {
      type: "multiple-choice",
      prompt: "Which sentence uses inversion after a limiting adverbial correctly?",
      options: [
        "Rarely does a single accent provoke such strong reactions.",
        "Rarely a single accent provokes such strong reactions.",
        "Rarely provokes a single accent such strong reactions.",
        "Rarely does provokes a single accent such reactions.",
      ],
      answer: 0,
      explanation:
        "'Rarely' triggers inversion with the auxiliary 'does' before the subject, followed by the base verb: 'Rarely does a single accent provoke...'.",
    },
    {
      type: "gap-fill",
      prompt:
        "Not only ___ language carry information, but it also encodes a worldview. (inversion, present simple)",
      answer: "does",
      explanation:
        "After 'Not only' the auxiliary 'does' is inverted before the subject: 'Not only does language carry...'.",
    },
    {
      type: "multiple-choice",
      prompt: "Which sentence correctly completes the 'No sooner... than' structure?",
      options: [
        "No sooner had the policy been introduced than the vernacular began to disappear.",
        "No sooner the policy was introduced when the vernacular began to disappear.",
        "No sooner had the policy been introduced when the vernacular disappeared.",
        "No sooner the policy had been introduced than the vernacular disappeared.",
      ],
      answer: 0,
      explanation:
        "'No sooner' requires inverted past perfect and is paired with 'than', not 'when': 'No sooner had... than...'.",
    },
    {
      type: "gap-fill",
      prompt:
        "The process by which a minority group adopts a dominant culture and loses its own is called ___. (vocabulary)",
      answer: "assimilation",
      explanation:
        "'assimilation' is the gradual adoption of a dominant culture's customs and language, often at the expense of one's own.",
    },
  ],
};
