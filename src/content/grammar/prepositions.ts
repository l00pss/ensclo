import type { GrammarGroup } from "../types";

export const prepositions: GrammarGroup = {
  id: "prepositions",
  description: "Prepositions link words and show time, place, movement, and relationships.",
  azDescription: "Sözönləri (prepositions) cümlədəki sözləri bir-birinə bağlayan kiçik sözlərdir. Onlar bir şeyin nə vaxt baş verdiyini (zaman), harada olduğunu (yer), hara doğru getdiyini (hərəkət) və sözlər arasındakı əlaqəni göstərir. İngiliscədə ən çox işlənənlər at, on, in, to, for, of kimi sözlərdir; düzgün sözönünü seçmək mənanı dəyişir, ona görə hər birinin nə vaxt işlədildiyini ayrıca öyrənmək lazımdır.",
  rules: [
    {
      title: "Prepositions of time: at / on / in",
      level: "B1",
      explanation:
        "Use 'at' for clock times and short points, 'on' for days and dates, and 'in' for months, years, and parts of the day.",
      azNote:
        "Zaman bildirəndə üç əsas sözönü var. Dəqiq saatlar və qısa zaman nöqtələri üçün 'at' işlət (at 7 o'clock, at midnight). Günlər və tarixlər üçün 'on' işlət (on Monday, on 5 May). Aylar, fəsillər, illər və günün hissələri üçün 'in' işlət (in July, in summer, in 1998, in the morning). Sadə qayda: ən kiçik zamandan ən böyüyə doğru get -> at -> on -> in.",
      form: "at + time | on + day/date | in + month/year/part of day",
      examples: [
        { en: "The train leaves at 7 o'clock.", note: "at + clock time" },
        { en: "We met on Monday.", note: "on + day" },
        { en: "She was born in 1998.", note: "in + year" },
        { en: "I read a lot in the evening.", note: "in + part of day" },
      ],
      pitfall: "Diqqət: 'at night' deyilir, 'in night' yox.",
    },
    {
      title: "Prepositions of place: at / on / in",
      level: "B1",
      explanation:
        "Use 'at' for a point or location, 'on' for a surface, and 'in' for an enclosed space or area.",
      azNote: "Yer bildirəndə də eyni üç sözönü işləyir, amma fərqli məna ilə. Konkret bir nöqtə və ya görüş yeri üçün 'at' işlət (at the bus stop, at the door). Bir səthin üzərində olan şey üçün 'on' işlət (on the wall, on the table). Qapalı yerin içində və ya geniş əraziyə (şəhər, ölkə) aid olanda 'in' işlət (in the box, in London). Qısaca: nöqtə -> at, üst -> on, içəri -> in.",
      form: "at + point | on + surface | in + enclosed space",
      examples: [
        { en: "I'm waiting at the bus stop.", note: "at + point" },
        { en: "The picture is on the wall.", note: "on + surface" },
        { en: "The toys are in the box.", note: "in + enclosed space" },
        { en: "They live in London.", note: "in + area" },
      ],
      pitfall: "Diqqət: 'on the wall' (səthdə) deyilir, 'in the wall' yox.",
    },
    {
      title: "Prepositions of movement: to, into, onto, through, across, towards",
      level: "B1",
      explanation:
        "These show direction or movement: 'to' a destination, 'into'/'onto' entering or landing, 'through' inside something, 'across' to the other side, 'towards' in a direction.",
      azNote:
        "Bu sözönləri hərəkətin istiqamətini göstərir. 'to' bir hədəfə, son nöqtəyə doğru getməyi bildirir (walk to the station). 'into' bir şeyin içinə daxil olmağı, 'onto' isə bir səthin üstünə qalxıb düşməyi bildirir (jump into the pool, climb onto the roof). 'through' bir şeyin içindən keçib o biri ucundan çıxmaq deməkdir (drive through the tunnel). 'across' bir yerin bir tərəfindən o biri tərəfinə keçməyi (run across the road), 'towards' isə sadəcə bir istiqamətə doğru hərəkət etməyi bildirir.",
      form: "verb of motion + to/into/onto/through/across/towards + place",
      examples: [
        { en: "We walked to the station.", note: "to + destination" },
        { en: "She jumped into the pool.", note: "into = entering" },
        { en: "The cat climbed onto the roof.", note: "onto = landing on a surface" },
        { en: "We drove through the tunnel.", note: "through = inside and out" },
        { en: "He ran across the road.", note: "across = to the other side" },
      ],
      pitfall: "Diqqət: 'go to home' yox, sadəcə 'go home' deyilir.",
    },
    {
      title: "Dependent prepositions after verbs",
      level: "B2",
      explanation:
        "Many verbs are followed by a fixed preposition, such as depend on, listen to, look for, belong to, and apologise for.",
      azNote:
        "İngiliscədə bir çox feil özündən sonra həmişə eyni, dəyişməz sözönü ilə işlənir. Bu birləşmələri bir bütöv kimi əzbərləmək lazımdır, çünki məntiqlə tapmaq çətindir: depend on (-dan asılı olmaq), listen to (qulaq asmaq), look for (axtarmaq), belong to (-a aid olmaq), apologise for (-a görə üzr istəmək). Feili öyrənəndə onunla gələn sözönünü də birlikdə yadda saxla.",
      form: "verb + fixed preposition + object",
      examples: [
        { en: "It depends on the weather.", note: "depend on" },
        { en: "I listen to music every day.", note: "listen to" },
        { en: "She is looking for her keys.", note: "look for" },
        { en: "This book belongs to me.", note: "belong to" },
        { en: "He apologised for being late.", note: "apologise for" },
      ],
      pitfall: "Diqqət: 'listen music' yox, 'listen to music' deyilir.",
    },
    {
      title: "Adjective + preposition",
      level: "B2",
      explanation:
        "Certain adjectives need a specific preposition, such as good at, afraid of, interested in, keen on, and proud of.",
      azNote:
        "Bəzi sifətlər özlərindən sonra konkret bir sözönü tələb edir və bu birləşmələr sabitdir. Adətən 'be' feili ilə işlənir: good at (bir işdə bacarıqlı olmaq), afraid of (qorxmaq), interested in (maraqlanmaq), keen on (həvəsli olmaq), proud of (qürur duymaq). Sifəti tək öyrənmək kifayət deyil; onunla gələn sözönünü də birlikdə yadda saxla, məsələn good at maths.",
      form: "be + adjective + fixed preposition + object",
      examples: [
        { en: "She is good at drawing.", note: "good at" },
        { en: "I'm afraid of spiders.", note: "afraid of" },
        { en: "He's interested in history.", note: "interested in" },
        { en: "They are keen on hiking.", note: "keen on" },
        { en: "We're proud of our team.", note: "proud of" },
      ],
      pitfall: "Diqqət: 'good in maths' yox, 'good at maths' deyilir.",
    },
    {
      title: "Noun + preposition",
      level: "C1",
      explanation:
        "Some nouns are followed by a fixed preposition, such as reason for, increase in, solution to, and effect on.",
      azNote:
        "Feillər və sifətlər kimi, bəzi isimlər də özlərindən sonra dəyişməz bir sözönü ilə işlənir. Bunlar çox vaxt rəsmi və yazılı dildə rast gəlinir: reason for (səbəb), increase in (artım), solution to (həll yolu), effect on (təsir). Diqqət et ki, eyni mənalı söz Azərbaycan dilindən fərqli sözönü götürə bilər, ona görə bu birləşmələri olduğu kimi əzbərləmək lazımdır.",
      form: "noun + fixed preposition + object",
      examples: [
        { en: "There is no reason for worry.", note: "reason for" },
        { en: "We saw an increase in sales.", note: "increase in" },
        { en: "They found a solution to the problem.", note: "solution to" },
        { en: "Stress has a bad effect on health.", note: "effect on" },
      ],
      pitfall: "Diqqət: 'reason of' yox, 'reason for' deyilir.",
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
