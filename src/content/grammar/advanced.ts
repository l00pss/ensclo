import type { GrammarGroup } from "../types";

export const advanced: GrammarGroup = {
  id: "advanced",
  description: "Advanced C1 structures for emphasis, formality and concise writing.",
  azDescription: "Bu bölmədə fikri qüvvətləndirmək (vurğu), rəsmi və ədəbi üslub yaratmaq, eləcə də cümləni daha yığcam ifadə etmək üçün işlədilən qabaqcıl C1 strukturları toplanıb. Burada söz sırasının dəyişməsi (inversiya), cümlənin bir hissəsini önə çıxarmaq (cleft) və feli birləşmələrlə cümləni qısaltma kimi mövzular izah olunur. Bu strukturlar əsasən yazılı və rəsmi dildə rast gəlinir.",
  rules: [
    {
      title: "Inversion after negative and limiting adverbials",
      level: "C1",
      explanation:
        "When a negative or limiting adverbial starts a sentence, the subject and auxiliary swap places, like in a question. This adds emphasis and sounds formal.",
      azNote:
        "Fikri qüvvətləndirmək üçün inkar və ya məhdudlaşdırıcı zərf (never, rarely, seldom, not only) cümlənin əvvəlinə keçəndə söz sırası sual kimi tərsinə çevrilir, yəni inversiya baş verir: köməkçi feil mübtədadan (subyektdən) əvvələ keçir. Məsələn: 'Never have I seen...' (yox 'Never I have seen'). Bu quruluş rəsmi və ədəbi dilə xas olub fikrə güclü vurğu verir.",
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
        "Rəsmi dildə şərt cümləsində 'if' sözünü tamamilə ataraq onun yerinə köməkçi feil ilə mübtədanı yerini dəyişmək olar (inversiya). Bu yalnız 'had', 'were' və 'should' feilləri ilə mümkündür. Məsələn: 'Had I known' = 'If I had known', 'Were I you' = 'If I were you', 'Should you need' = 'If you should need'. Bu üsul cümləni daha rəsmi və zərif səsləndirir.",
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
        "It-cleft (it ilə qurulan ayırıcı cümlə) cümləni iki hissəyə bölərək bir hissəni xüsusi olaraq önə çıxarmaq, yəni vurğulamaq üçün işlədilir. Önə çıxarılan söz 'it was/is' birləşməsindən sonra gəlir, cümlənin qalan hissəsi isə 'who' və ya 'that' ilə davam edir. Məsələn: 'It was John who called, not Tom' (məhz John zəng etdi). Belə cümlə 'kimin, nəyin' məhz mühüm olduğunu aydın göstərir.",
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
        "What-cleft (what ilə qurulan ayırıcı cümlə) 'what' sözü ilə başlayır və cümlənin əsas hissəsini önə çıxararaq vurğulayır. Bu zaman 'what' mübtəda rolunu oynayır, sonra adətən 'be' feilinin müvafiq forması (is/was) gəlir və vurğulanan hissə onun ardınca yerləşir. Məsələn: 'What I need is a holiday' (mənə lazım olan şey — məhz tətildir). Belə cümlə tələbi və ya hissi daha təsirli ifadə edir.",
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
        "Feli birləşmə (participle clause) tam tabe cümlənin yerinə işlənərək yazını daha qısa və yığcam edir. Eyni vaxtda baş verən və ya aktiv mənalı hərəkət üçün feilin '-ing' forması, ondan əvvəl baş vermiş hərəkət üçün isə 'having + feilin III forması' işlədilir. Məsələn: 'Walking home, I saw a friend' (evə gedərkən) və 'Having finished her work, she left' (işini bitirdikdən sonra). Hər iki hissənin mübtədası eyni şəxs olmalıdır.",
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
        "Təyini budaq cümləni (relative clause) qısaltmaq olar: bunun üçün əlaqələndirici əvəzlik və 'be' feili (who is, which was kimi) atılır. Aktiv məna üçün feilin '-ing' forması, passiv məna üçün isə feilin III forması saxlanılır. Məsələn: 'The man standing there' = 'who is standing there', 'The book written in 1990' = 'which was written in 1990'. Bu üsul cümləni qısaldır və yazıya rəvanlıq verir.",
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
