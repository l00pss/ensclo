import type { Topic } from "../types";

export const b1Weather: Topic = {
  id: "b1-weather",
  level: "B1",
  title: "Weather and Seasons",
  theme: "Nature",
  summary: "Learn to describe weather and the four seasons, and talk about the future with 'will' for predictions and 'be going to' for plans and evidence-based predictions.",
  leadIn: [
    "What is your favourite season, and why?",
    "What is the weather like today where you are?",
    "Do you think the weather will change tomorrow?",
  ],
  vocabulary: [
    { word: "forecast", definition: "a statement that says what the weather will probably be like", example: "The forecast says it will be sunny all weekend.", collocations: ["weather forecast", "check the forecast"], azNote: "hava proqnozu deməkdir, gələcək hava haqqında məlumat verir." },
    { word: "drizzle", definition: "very light rain made of small drops", example: "There was a soft drizzle as we walked to the station.", collocations: ["light drizzle", "morning drizzle"], azNote: "çox yüngül, narın yağışdır, güclü leysan deyil." },
    { word: "humid", definition: "having a lot of water in the air, making it feel warm and sticky", example: "Summer in the city is hot and very humid.", collocations: ["humid weather", "humid climate"], azNote: "havanın rütubətli, nəm olması deməkdir, xüsusən isti yay günlərində." },
    { word: "mild", definition: "not too hot and not too cold; gentle and pleasant", example: "We had a mild winter this year with little snow.", collocations: ["mild winter", "mild temperature"], azNote: "havanın mülayim, nə çox isti, nə də çox soyuq olması deməkdir." },
    { word: "frost", definition: "a thin white layer of ice that forms on cold surfaces", example: "There was frost on the car windows this morning.", collocations: ["heavy frost", "morning frost"], azNote: "soyuq səthlərdə əmələ gələn nazik ağ buz təbəqəsidir, şaxta deməkdir." },
    { word: "downpour", definition: "a sudden, very heavy fall of rain", example: "We got caught in a downpour and were soaked in minutes.", collocations: ["sudden downpour", "heavy downpour"], azNote: "qəfil və çox güclü yağış, leysan deməkdir." },
  ],
  grammar: {
    point: "Future forms: 'will' vs 'be going to'",
    explanation: "We use 'will' for predictions based on opinion or general belief, and for quick decisions made at the moment of speaking. We use 'be going to' for plans we have already decided and for predictions based on present evidence we can see right now.",
    azNote: "'will' fikrə, inanca əsaslanan proqnozlar və o anda verilən qərarlar üçün işlədilir. 'be going to' isə əvvəlcədən qurulmuş planlar və indi gördüyümüz dəlilə əsaslanan proqnozlar üçün istifadə olunur.",
    examples: [
      { en: "I think it will rain later this evening.", note: "prediction based on opinion -> will" },
      { en: "Look at those dark clouds! It is going to rain.", note: "prediction based on present evidence -> be going to" },
      { en: "We are going to visit the mountains next weekend.", note: "a plan already decided -> be going to" },
      { en: "It is cold in here, so I will close the window.", note: "quick decision at the moment -> will" },
    ],
  },
  reading: {
    title: "A Year of Changing Skies",
    text: `People love to talk about the weather, and a good forecast helps us plan our days. In spring, the air is often soft and the temperature is mild, with gentle sunshine between showers. You may step outside into a light drizzle in the morning, but by noon the clouds will usually clear. Many people say spring is the season of hope, because they believe the warm days will soon arrive.

Summer brings its own challenges. The afternoons can be hot and humid, and the sticky air makes it hard to sleep. If you look at the sky and see tall grey clouds building up, you can be sure a downpour is going to hit the city within an hour. When that happens, people run for cover and wait for the heavy rain to pass. After the storm, the streets shine and the air feels fresh again.

Autumn is a calmer time. The leaves turn gold and the wind grows cool. The forecast often promises a mix of sun and rain, and an early morning frost may cover the gardens with a thin white layer. Many families say, "We are going to collect apples this weekend," because they have already planned their trips to the countryside before winter comes.

Winter is the coldest season of all. On clear nights, the temperature will drop quickly and ice will form on every surface. Some winters are harsh, but others stay surprisingly mild. Whatever the season, the sky keeps changing, and that is why we will always find something to say about the weather.`,
    questions: [
      { type: "multiple-choice", prompt: "What kind of rain might you meet on a spring morning?", options: ["A heavy downpour", "A light drizzle", "Frozen frost", "No rain at all"], answer: 1, explanation: "The text says you may step outside into a light drizzle in the morning." },
      { type: "multiple-choice", prompt: "Why does the writer say a downpour 'is going to' hit the city?", options: ["It is a quick decision", "It is based on present evidence in the sky", "It is a fixed timetable", "It is only an opinion"], answer: 1, explanation: "Seeing tall grey clouds is present evidence, so 'be going to' is used for the prediction." },
      { type: "multiple-choice", prompt: "What can happen to gardens on a cold autumn morning?", options: ["They become humid", "A frost may cover them", "A downpour floods them", "They stay mild and warm"], answer: 1, explanation: "The text says an early morning frost may cover the gardens with a thin white layer." },
    ],
  },
  speaking: [
    "Describe the typical weather of each season where you live.",
    "Make three predictions about tomorrow's weather using 'will' and 'be going to'.",
    "Talk about a plan you have for the next holiday and the weather you expect.",
  ],
  writing: {
    task: "Write a short text about your favourite season. Use 'will' and 'be going to', and include at least 3 of the topic words.",
    minWords: 80,
  },
  quiz: [
    { type: "gap-fill", prompt: "Look at those dark clouds! It ___ (be going to) rain very soon.", answer: "is going to", explanation: "We use 'be going to' for a prediction based on present evidence we can see." },
    { type: "gap-fill", prompt: "It is cold in this room, so I ___ (will) close the window.", answer: "will", explanation: "A quick decision made at the moment of speaking takes 'will'." },
    { type: "multiple-choice", prompt: "Which sentence is a plan already decided?", options: ["I think it will snow tonight.", "We are going to ski in the mountains next week.", "It will probably be windy.", "Maybe it will clear up later."], answer: 1, explanation: "'be going to' is used for plans we have already decided, like the skiing trip." },
    { type: "multiple-choice", prompt: "Which word means 'not too hot and not too cold'?", options: ["humid", "mild", "frost", "downpour"], answer: 1, explanation: "'mild' describes pleasant weather that is neither hot nor cold." },
    { type: "gap-fill", prompt: "The weather ___ tells us what the sky will probably do tomorrow.", answer: "forecast", explanation: "A 'forecast' predicts the likely weather." },
  ],
};
