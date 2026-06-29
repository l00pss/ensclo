import type { Topic } from "../types";
export const b2SpaceExploration: Topic = {
  id: "b2-space-exploration", level: "B2", title: "Space Exploration", theme: "Space",
  summary: "Explore the story of space travel and learn to choose between the present perfect and the past simple depending on whether a time is finished or still connected to now.",
  leadIn: ["Have you ever watched a rocket launch, live or online?", "Which space mission do you think was the most important, and when did it happen?", "Would you travel to another planet if you had the chance?"],
  vocabulary: [
    { word: "orbit", definition: "the curved path of an object around a planet, star or moon", example: "The new satellite has reached a stable orbit and is already sending data back to Earth.", collocations: ["enter orbit", "stable orbit"], azNote: "orbit, yəni bir planetin və ya ulduzun ətrafındakı əyri hərəkət yolu, kosmosdan danışarkən tez-tez işlənir." },
    { word: "milestone", definition: "an important event that marks a stage of progress", example: "The first Moon landing was a milestone that scientists still talk about today.", collocations: ["reach a milestone", "major milestone"], azNote: "milestone mühüm bir mərhələ, dönüş nöqtəsi deməkdir, tərəqqinin önəmli anını bildirir." },
    { word: "probe", definition: "an unmanned spacecraft sent to study a distant place", example: "Since 1977, the probe has travelled billions of kilometres past the outer planets.", collocations: ["launch a probe", "space probe"], azNote: "probe insansız kosmik aparatdır, uzaq yerləri tədqiq etmək üçün göndərilir." },
    { word: "harsh", definition: "extremely difficult, unpleasant and hard to survive in", example: "The harsh conditions on Mars make long human missions very dangerous.", collocations: ["harsh conditions", "harsh environment"], azNote: "harsh sərt, çətin, dözülməz deməkdir, ağır şəraiti təsvir edəndə işlənir." },
    { word: "breakthrough", definition: "a sudden, important discovery or development", example: "Reusable rockets have been a real breakthrough for the space industry.", collocations: ["make a breakthrough", "scientific breakthrough"], azNote: "breakthrough böyük irəliləyiş, mühüm kəşf deməkdir, elmdə önəmli addımı bildirir." },
    { word: "rover", definition: "a vehicle designed to move across the surface of a planet or moon", example: "A small rover has explored the dusty surface of Mars for several years.", collocations: ["send a rover", "Mars rover"], azNote: "rover planet səthində hərəkət edən tədqiqat aparatıdır, məsələn Marsda gəzən maşın." },
  ],
  grammar: {
    point: "Present perfect vs past simple",
    explanation: "We use the past simple for actions in a finished time period, especially with words like 'in 1969', 'yesterday' or 'last year'. We use the present perfect for experiences in our lives or for past actions whose result is still connected to now, often with 'ever', 'never', 'already', 'just' and 'yet'.",
    azNote: "Past simple bitmiş zaman üçündür, məsələn '1969-cu ildə', 'dünən'. Present perfect isə həyat təcrübəsini və ya nəticəsi indi ilə bağlı olan keçmiş hərəkəti bildirir. Konkret bitmiş vaxt deyiləndə past simple, vaxt deyilməyəndə və ya nəticə indiyə bağlı olanda present perfect işlənir.",
    examples: [
      { en: "Astronauts first landed on the Moon in 1969.", note: "past simple: a finished time, '1969'" },
      { en: "Humans have explored space for more than sixty years.", note: "present perfect: a period continuing up to now" },
      { en: "Scientists have already found water ice on Mars.", note: "present perfect: result connected to now, 'already'" },
      { en: "The Apollo programme ended in 1972, so no one returned for decades.", note: "past simple: a finished, dated event" },
    ],
  },
  reading: { title: "From the first orbit to the surface of Mars",
    text: `Space exploration has fascinated people for generations, yet the modern story really began only a few decades ago. In 1957, the Soviet Union launched the first artificial satellite into orbit, and four years later a human travelled around the Earth for the first time. These early flights were a clear milestone, because they proved that machines and people could survive beyond our atmosphere. Since then, dozens of countries have joined the effort, and the pace of progress has never slowed down.

The conditions in space are extremely harsh, so engineers have had to solve enormous problems. Astronauts must cope with no air, freezing temperatures and dangerous radiation, while their spacecraft has to work perfectly far from any help. When the United States sent astronauts to the Moon in 1969, the mission was a genuine breakthrough that changed how we saw our place in the universe. After that famous landing, scientists began to dream of reaching other planets, not just our own Moon.

Today, much of the most exciting work is done by machines rather than humans. A small space probe can fly for years toward the edge of the solar system, while a robotic rover can drive slowly across a distant surface and study the rocks beneath its wheels. Engineers have already landed several of these vehicles on Mars, and each one has sent back images that no person had ever seen before.

So what comes next? Private companies have recently developed reusable rockets, which have made launches far cheaper than they used to be. Many experts believe that humans will return to the Moon soon and that they have not yet finished exploring. The first chapter of space travel ended decades ago, but the most ambitious chapter has only just begun.`,
    questions: [
      { type: "multiple-choice", prompt: "Why does the text call the early flights 'a clear milestone'?", options: ["They were cheaper than later missions", "They proved people and machines could survive beyond the atmosphere", "They reached another planet", "They were run by private companies"], answer: 1, explanation: "The text says the early flights proved that machines and people could survive beyond our atmosphere." },
      { type: "multiple-choice", prompt: "According to the text, what does most of the exciting work today rely on?", options: ["Human astronauts", "Machines such as probes and rovers", "Larger satellites in orbit", "International tourists"], answer: 1, explanation: "The passage states that much of the most exciting work is done by machines rather than humans." },
      { type: "multiple-choice", prompt: "What recent development has made launches cheaper?", options: ["Bigger crews", "Reusable rockets developed by private companies", "Landing on the Moon", "Smaller satellites"], answer: 1, explanation: "The text says private companies have recently developed reusable rockets, which have made launches far cheaper." },
    ],
  },
  speaking: ["Describe a famous space mission and say exactly when it happened.", "Talk about something amazing that scientists have achieved in space, without giving a specific date.", "Do you think governments have spent too much money on space exploration? Why or why not?"],
  writing: { task: "Write a short article about the progress of space exploration. Use the present perfect for achievements connected to now and the past simple for finished, dated events, and include at least 3 of the topic words.", minWords: 120 },
  quiz: [
    { type: "gap-fill", prompt: "The first satellite ___ (reach) orbit in 1957.", answer: "reached", explanation: "A finished time ('in 1957') needs the past simple, so we use 'reached'." },
    { type: "gap-fill", prompt: "Scientists ___ (already / find) water ice on Mars.", answer: "have already found", explanation: "A result connected to now with 'already' takes the present perfect: 'have already found'." },
    { type: "multiple-choice", prompt: "Choose the correct sentence.", options: ["Humans have walked on the Moon in 1969.", "Humans walked on the Moon in 1969.", "Humans have walk on the Moon in 1969.", "Humans walks on the Moon in 1969."], answer: 1, explanation: "With the finished, dated time '1969' we use the past simple: 'walked'." },
    { type: "multiple-choice", prompt: "Which sentence correctly describes a life experience with no specific time?", options: ["I never saw a rocket launch.", "I have never seen a rocket launch.", "I have never saw a rocket launch.", "I am never seeing a rocket launch."], answer: 1, explanation: "Experiences with 'never' and no fixed time take the present perfect: 'have never seen'." },
    { type: "gap-fill", prompt: "The probe ___ (travel) billions of kilometres since 1977 and it is still going.", answer: "has travelled", explanation: "An action continuing up to now with 'since' uses the present perfect: 'has travelled'." },
  ],
};
