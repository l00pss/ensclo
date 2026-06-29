import type { GrammarGroup } from "../types";

export const prepositions: GrammarGroup = {
  id: "prepositions",
  description: "Prepositions link words and show time, place, movement, and relationships.",
  azDescription: "Sozonuyu (prepositions) sozleri baglayir; zaman, yer, hereket ve elaqe bildirir.",
  rules: [
    {
      title: "Prepositions of time: at / on / in",
      level: "B1",
      explanation:
        "Use 'at' for clock times and short points, 'on' for days and dates, and 'in' for months, years, and parts of the day.",
      azNote:
        "Saatlar ucun 'at', gunler ve tarixler ucun 'on', aylar, iller ve gunun hisseleri ucun 'in' islet.",
      form: "at + time | on + day/date | in + month/year/part of day",
      examples: [
        { en: "The train leaves at 7 o'clock.", note: "at + clock time" },
        { en: "We met on Monday.", note: "on + day" },
        { en: "She was born in 1998.", note: "in + year" },
        { en: "I read a lot in the evening.", note: "in + part of day" },
      ],
      pitfall: "Diqqet: 'at night' deyilir, 'in night' yox.",
    },
    {
      title: "Prepositions of place: at / on / in",
      level: "B1",
      explanation:
        "Use 'at' for a point or location, 'on' for a surface, and 'in' for an enclosed space or area.",
      azNote: "Nogte ucun 'at', seth ucun 'on', qapali yer ucun 'in' islet.",
      form: "at + point | on + surface | in + enclosed space",
      examples: [
        { en: "I'm waiting at the bus stop.", note: "at + point" },
        { en: "The picture is on the wall.", note: "on + surface" },
        { en: "The toys are in the box.", note: "in + enclosed space" },
        { en: "They live in London.", note: "in + area" },
      ],
      pitfall: "Diqqet: 'on the wall' (sethde), 'in the wall' deyil deyilmir.",
    },
    {
      title: "Prepositions of movement: to, into, onto, through, across, towards",
      level: "B1",
      explanation:
        "These show direction or movement: 'to' a destination, 'into'/'onto' entering or landing, 'through' inside something, 'across' to the other side, 'towards' in a direction.",
      azNote:
        "Hereket bildirir: 'to' istiqamet, 'into' iceriye, 'onto' usture, 'through' icinden, 'across' o tay, 'towards' tereferaf.",
      form: "verb of motion + to/into/onto/through/across/towards + place",
      examples: [
        { en: "We walked to the station.", note: "to + destination" },
        { en: "She jumped into the pool.", note: "into = entering" },
        { en: "The cat climbed onto the roof.", note: "onto = landing on a surface" },
        { en: "We drove through the tunnel.", note: "through = inside and out" },
        { en: "He ran across the road.", note: "across = to the other side" },
      ],
      pitfall: "Diqqet: 'go to home' yox, sadece 'go home' deyilir.",
    },
    {
      title: "Dependent prepositions after verbs",
      level: "B2",
      explanation:
        "Many verbs are followed by a fixed preposition, such as depend on, listen to, look for, belong to, and apologise for.",
      azNote:
        "Bezi feiller sabit sozonuyu ile gelir: depend on, listen to, look for, belong to, apologise for.",
      form: "verb + fixed preposition + object",
      examples: [
        { en: "It depends on the weather.", note: "depend on" },
        { en: "I listen to music every day.", note: "listen to" },
        { en: "She is looking for her keys.", note: "look for" },
        { en: "This book belongs to me.", note: "belong to" },
        { en: "He apologised for being late.", note: "apologise for" },
      ],
      pitfall: "Diqqet: 'listen music' yox, 'listen to music' deyilir.",
    },
    {
      title: "Adjective + preposition",
      level: "B2",
      explanation:
        "Certain adjectives need a specific preposition, such as good at, afraid of, interested in, keen on, and proud of.",
      azNote:
        "Bezi sifetler muey sozonuyu teleb edir: good at, afraid of, interested in, keen on, proud of.",
      form: "be + adjective + fixed preposition + object",
      examples: [
        { en: "She is good at drawing.", note: "good at" },
        { en: "I'm afraid of spiders.", note: "afraid of" },
        { en: "He's interested in history.", note: "interested in" },
        { en: "They are keen on hiking.", note: "keen on" },
        { en: "We're proud of our team.", note: "proud of" },
      ],
      pitfall: "Diqqet: 'good in maths' yox, 'good at maths' deyilir.",
    },
    {
      title: "Noun + preposition",
      level: "C1",
      explanation:
        "Some nouns are followed by a fixed preposition, such as reason for, increase in, solution to, and effect on.",
      azNote:
        "Bezi isimler sabit sozonuyu ile islenir: reason for, increase in, solution to, effect on.",
      form: "noun + fixed preposition + object",
      examples: [
        { en: "There is no reason for worry.", note: "reason for" },
        { en: "We saw an increase in sales.", note: "increase in" },
        { en: "They found a solution to the problem.", note: "solution to" },
        { en: "Stress has a bad effect on health.", note: "effect on" },
      ],
      pitfall: "Diqqet: 'reason of' yox, 'reason for' deyilir.",
    },
  ],
  practice: [
    {
      type: "gap-fill",
      prompt: "The meeting starts ___ 9 o'clock. (time)",
      answer: "at",
      explanation: "Clock times take 'at' -> 'at 9 o'clock'.",
    },
    {
      type: "gap-fill",
      prompt: "My birthday is ___ July. (month)",
      answer: "in",
      explanation: "Months take 'in' -> 'in July'.",
    },
    {
      type: "multiple-choice",
      prompt: "The keys are ___ the table.",
      options: ["in", "at", "on"],
      answer: 2,
      explanation: "A flat surface takes 'on' -> 'on the table'.",
    },
    {
      type: "multiple-choice",
      prompt: "She jumped ___ the cold water.",
      options: ["into", "on", "at"],
      answer: 0,
      explanation: "Entering a space uses 'into' -> 'into the water'.",
    },
    {
      type: "gap-fill",
      prompt: "I'm looking ___ my phone; I can't find it.",
      answer: "for",
      explanation: "The verb 'look' takes 'for' when searching -> 'look for'.",
    },
    {
      type: "multiple-choice",
      prompt: "He is very good ___ chess.",
      options: ["in", "at", "on"],
      answer: 1,
      explanation: "Fixed combination: 'good at' something.",
    },
    {
      type: "gap-fill",
      prompt: "I'm afraid ___ heights.",
      answer: "of",
      explanation: "The adjective 'afraid' takes 'of' -> 'afraid of'.",
    },
    {
      type: "multiple-choice",
      prompt: "Scientists found a solution ___ the problem.",
      options: ["for", "of", "to"],
      answer: 2,
      explanation: "The noun 'solution' takes 'to' -> 'solution to'.",
    },
    {
      type: "gap-fill",
      prompt: "We walked ___ the bridge to the other side.",
      answer: "across",
      explanation: "'across' means moving to the other side.",
    },
  ],
};
