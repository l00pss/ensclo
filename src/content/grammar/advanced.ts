import type { GrammarGroup } from "../types";

export const advanced: GrammarGroup = {
  id: "advanced",
  description: "Advanced C1 structures for emphasis, formality and concise writing.",
  azDescription: "Vurğu, rəsmilik və yığcam ifadə üçün qabaqcıl C1 strukturları.",
  rules: [
    {
      title: "Inversion after negative and limiting adverbials",
      level: "C1",
      explanation:
        "When a negative or limiting adverbial starts a sentence, the subject and auxiliary swap places, like in a question. This adds emphasis and sounds formal.",
      azNote:
        "Cümlə inkar/məhdudlaşdırıcı zərflə başlayanda köməkçi feil ilə subyekt yer dəyişir (sual kimi). Vurğu üçündür.",
      form: "Negative adverbial + auxiliary + subject + main verb",
      examples: [
        { en: "Never have I seen such a beautiful sunset.", note: "Never + have I seen" },
        { en: "Rarely does he arrive on time.", note: "Rarely + does he arrive" },
        { en: "Not only did she sing, but she also danced.", note: "Not only ... but also" },
        { en: "Seldom do we eat out these days.", note: "Seldom + do we eat" },
      ],
      pitfall:
        "Adi söz sırasına qayıtma: 'Never I have seen' səhvdir → 'Never have I seen'.",
    },
    {
      title: "Inversion in conditionals (omitting 'if')",
      level: "C1",
      explanation:
        "In formal English you can drop 'if' and invert the subject and auxiliary. This works with 'had', 'were' and 'should'.",
      azNote:
        "Rəsmi dildə 'if' atılır və kömkçi feil ilə subyekt yer dəyişir: 'had', 'were', 'should' ilə.",
      form: "Had / Were / Should + subject + ... , + main clause",
      examples: [
        { en: "Had I known earlier, I would have helped.", note: "= If I had known" },
        { en: "Were I you, I would take the job.", note: "= If I were you" },
        { en: "Should you need anything, just call me.", note: "= If you should need" },
      ],
      pitfall: "İnvert edilmiş şərtdə 'if' işlədilmir: 'Had if I known' yanlışdır.",
    },
    {
      title: "Cleft sentences with 'it'",
      level: "C1",
      explanation:
        "An it-cleft splits a sentence to highlight one part. You put the focused element after 'it was/is' and the rest in a relative clause.",
      azNote:
        "It-cleft cümləni bölüb bir hissəni qabardır: 'It was John who called' (məhz John).",
      form: "It + be + focused part + who / that + rest",
      examples: [
        { en: "It was John who called, not Tom.", note: "focus on John" },
        { en: "It is your support that matters most.", note: "focus on your support" },
      ],
      pitfall:
        "İnsan üçün 'who', əşya üçün 'that': 'It was the car who broke' səhvdir → 'that'.",
    },
    {
      title: "Cleft sentences with 'what'",
      level: "C1",
      explanation:
        "A what-cleft uses 'what' as the subject to emphasise the rest of the sentence. The verb is usually a form of 'be'.",
      azNote:
        "What-cleft 'what' ilə başlayıb qalan hissəni vurğulayır: 'What I need is a holiday'.",
      form: "What + clause + be + emphasised part",
      examples: [
        { en: "What I need is a holiday.", note: "focus on a holiday" },
        { en: "What surprised me was his honesty.", note: "focus on his honesty" },
      ],
      pitfall: "Feil 'be' formasında olmalıdır: 'What I need have a holiday' yanlışdır.",
    },
    {
      title: "Participle clauses",
      level: "C1",
      explanation:
        "Participle clauses make writing shorter by replacing a full clause. Use '-ing' for active meaning and 'having + past participle' for an earlier action.",
      azNote:
        "Participle clause cümləni qısaldır: '-ing' eyni zaman, 'having + III forma' əvvəlki hərəkət.",
      form: "Present participle (-ing) / Having + past participle + main clause",
      examples: [
        { en: "Walking home, I saw an old friend.", note: "= While I was walking home" },
        { en: "Having finished her work, she left.", note: "= After she had finished" },
        { en: "Being tired, he rested for an hour.", note: "= Because he was tired" },
      ],
      pitfall:
        "Subyekt eyni olmalıdır: 'Walking home, the rain started' məntiqsizdir (yağış gəzmir).",
    },
    {
      title: "Reduced relative clauses",
      level: "C1",
      explanation:
        "You can shorten a relative clause by dropping the relative pronoun and 'be'. Use an '-ing' form for active and a past participle for passive meaning.",
      azNote:
        "Relative clause qısaldıla bilər: aktiv üçün '-ing', passiv üçün III forma; 'who is / which was' atılır.",
      form: "Noun + present participle (-ing) / past participle",
      examples: [
        { en: "The man standing there is my teacher.", note: "= who is standing there" },
        { en: "The book written in 1990 is famous.", note: "= which was written in 1990" },
      ],
      pitfall:
        "Aktiv/passiv qarışdırma: 'the book writing in 1990' səhvdir → 'written' (passiv).",
    },
  ],
  practice: [
    {
      type: "multiple-choice",
      prompt: "Never ___ such a beautiful sunset.",
      options: ["I have seen", "have I seen", "I saw seen"],
      answer: 1,
      explanation:
        "The negative adverbial 'Never' at the start triggers inversion: 'have I seen'.",
    },
    {
      type: "gap-fill",
      prompt: "___ I known earlier, I would have helped. (inverted conditional: omit 'if')",
      answer: "had",
      explanation: "Inverted third conditional drops 'if': 'Had I known...'.",
    },
    {
      type: "multiple-choice",
      prompt: "___ you need anything, just call me.",
      options: ["Should", "Would", "Did"],
      answer: 0,
      explanation:
        "Inverted conditional with 'should' replaces 'if you need': 'Should you need...'.",
    },
    {
      type: "gap-fill",
      prompt: "It was John ___ called, not Tom. (relative word for a person)",
      answer: "who",
      accept: ["that"],
      explanation: "An it-cleft uses 'who' (or 'that') for a person.",
    },
    {
      type: "gap-fill",
      prompt: "___ I need is a holiday. (start a what-cleft)",
      answer: "what",
      explanation: "A what-cleft begins with 'What' to emphasise the rest.",
    },
    {
      type: "multiple-choice",
      prompt: "___ her work, she left the office.",
      options: ["Have finished", "Having finished", "Finish"],
      answer: 1,
      explanation:
        "A participle clause for an earlier action uses 'Having + past participle'.",
    },
    {
      type: "multiple-choice",
      prompt: "The book ___ in 1990 is still popular.",
      options: ["writing", "written", "wrote"],
      answer: 1,
      explanation:
        "A reduced relative with passive meaning uses the past participle: 'written'.",
    },
    {
      type: "gap-fill",
      prompt: "The man ___ there is my teacher. (reduced relative = who is standing)",
      answer: "standing",
      explanation:
        "A reduced relative with active meaning uses the '-ing' form: 'standing'.",
    },
  ],
};
