import type { Topic } from "../types";
export const c1DecisionMaking: Topic = {
  id: "c1-decision-making", level: "C1", title: "The Psychology of Decision-Making", theme: "Psychology",
  summary: "Explore how the mind weighs choices, and master mixed conditionals to connect past conditions with present results and present conditions with past results.",
  leadIn: [
    "To what extent do you believe your everyday choices are genuinely rational rather than instinctive?",
    "Can you recall a decision that still shapes who you are today, and reflect on how things might be different now?",
    "When facing uncertainty, do you tend to deliberate at length or trust your first impression?",
  ],
  vocabulary: [
    { word: "cognitive", definition: "relating to the mental processes of thinking, reasoning, and understanding", example: "Decision fatigue gradually erodes our cognitive resources, leaving us prone to careless errors.", collocations: ["cognitive process", "cognitive load"], azNote: "İdrakla, yəni düşünmə və dərketmə prosesləri ilə bağlı deməkdir. Psixologiyada tez-tez işlənir." },
    { word: "bias", definition: "an inclination or prejudice that distorts impartial judgement", example: "Confirmation bias leads us to favour evidence that supports what we already believe.", collocations: ["unconscious bias", "cognitive bias"], azNote: "Qərəz, yəni obyektivliyi pozan meyl və ya önyarğı mənasını verir, vergüldən sonra da diqqətli olun." },
    { word: "deliberate", definition: "to think about or discuss something carefully before reaching a decision", example: "The committee deliberated for hours before settling on a compromise.", collocations: ["deliberate carefully", "deliberate over options"], azNote: "Feil kimi diqqətlə düşünmək, ölçüb-biçmək deməkdir, sifət kimi isə qəsdən, bilərəkdən mənasını verir." },
    { word: "intuition", definition: "the ability to understand or know something immediately without conscious reasoning", example: "Seasoned doctors often rely on intuition that decades of experience have refined.", collocations: ["gut intuition", "trust your intuition"], azNote: "Sezgi, yəni şüurlu mühakimə olmadan dərhal anlamaq qabiliyyəti deməkdir." },
    { word: "heuristic", definition: "a mental shortcut or rule of thumb that simplifies complex decisions", example: "Using a simple heuristic, shoppers judge quality by price alone.", collocations: ["mental heuristic", "useful heuristic"], azNote: "Mürəkkəb qərarları sadələşdirən praktik fikir qısayolu, təxmini qaydadır." },
    { word: "ambivalence", definition: "the state of having contradictory feelings about something at the same time", example: "Her ambivalence about the offer delayed the decision for weeks.", collocations: ["deep ambivalence", "feel ambivalence"], azNote: "Eyni anda bir şeyə qarşı ziddiyyətli, qarışıq hisslər bəsləmə halıdır, yəni tərəddüd və ikili münasibət." },
  ],
  grammar: {
    point: "Mixed conditionals (past condition → present result, and present condition → past result)",
    explanation: "Mixed conditionals combine two different time frames within a single sentence to express how reality might be otherwise. In the first type, an unreal past condition produces a present result: 'If + past perfect, ... would + base verb'. In the second type, a permanent present condition explains a past result: 'If + past simple, ... would have + past participle'.",
    azNote: "Qarışıq şərt cümlələri iki fərqli zaman çərçivəsini birləşdirir. Birinci növdə keçmişdəki qeyri-real şərt indiki nəticəyə gətirir, ona görə 'if + past perfect' ilə 'would + feil' işlənir. İkinci növdə isə daimi indiki vəziyyət keçmişdəki nəticəni izah edir, yəni 'if + past simple' ilə 'would have + III forma' qurulur.",
    examples: [
      { en: "If she had trusted her intuition then, she would feel far less regret today.", note: "past condition → present result" },
      { en: "If he weren't so prone to bias, he would have judged the candidate fairly last week.", note: "present condition → past result" },
      { en: "If I had learned to deliberate more calmly, I would be a steadier decision-maker now.", note: "past condition → present result" },
      { en: "If you were genuinely indecisive, you would never have committed to such a bold plan.", note: "present condition → past result" },
    ],
  },
  reading: { title: "The Architecture of Choice",
    text: `Every waking hour confronts us with choices, yet psychologists increasingly argue that the rational, deliberate self we imagine is largely a comforting fiction. Much of our thinking unfolds automatically, governed by mental shortcuts and emotional impulses that operate beneath conscious awareness. Had we evolved to weigh every option with mathematical precision, we would be paralysed by the sheer cognitive effort required; if our ancestors had deliberated endlessly over each threat, they would not have survived long enough to pass on their genes.

To cope, the mind leans on heuristic strategies, efficient rules of thumb that trade accuracy for speed. A heuristic usually serves us well, but it can also misfire spectacularly. Closely related is the problem of bias, a systematic distortion that skews judgement without our noticing. If executives recognised their own bias more readily, they would have avoided countless disastrous investments over the past decade. The trouble is that such distortions feel like clear-sighted reasoning rather than error.

Alongside these rapid processes runs intuition, the swift, wordless sense that something is right or wrong. Far from being mere superstition, intuition can encode genuine expertise, distilling years of experience into an instant verdict. Yet intuition and analysis frequently collide, producing ambivalence, that uncomfortable state in which competing feelings refuse to resolve. If people tolerated ambivalence more gracefully, they would make fewer impulsive choices simply to escape the discomfort of uncertainty.

The most striking lesson is how profoundly past choices shape the present self. If you had cultivated the habit of pausing to deliberate years ago, you would be a more discerning judge of risk today. Decision-making, then, is less a single rational act than an evolving architecture, built quietly from cognitive habits, emotional reflexes, and the countless small commitments we scarcely remember making.`,
    questions: [
      { type: "multiple-choice", prompt: "According to the passage, why does the mind rely on heuristic strategies?", options: ["Because they guarantee accurate outcomes", "Because they trade accuracy for speed and reduce effort", "Because they eliminate all forms of bias", "Because they are based on careful deliberation"], answer: 1, explanation: "The text states that heuristics are 'efficient rules of thumb that trade accuracy for speed'." },
      { type: "multiple-choice", prompt: "What does the passage suggest about intuition?", options: ["It is mere superstition with no value", "It can encode genuine expertise from years of experience", "It always conflicts with bias", "It eliminates ambivalence entirely"], answer: 1, explanation: "The passage says intuition 'can encode genuine expertise, distilling years of experience into an instant verdict'." },
      { type: "multiple-choice", prompt: "What is the 'most striking lesson' the author identifies?", options: ["That bias is impossible to overcome", "That intuition is always superior to analysis", "That past choices profoundly shape the present self", "That heuristics should never be used"], answer: 2, explanation: "The final paragraph opens by calling it striking 'how profoundly past choices shape the present self'." },
    ],
  },
  speaking: [
    "Describe a past decision and explain how your life would be different now if you had chosen otherwise, using mixed conditionals.",
    "Discuss whether organisations should trust intuition or insist on slow, deliberate analysis when making high-stakes decisions.",
    "To what extent can people realistically overcome their own cognitive bias? Argue your position with examples.",
  ],
  writing: { task: "Write a reflective essay analysing a significant decision and how it shaped who you are. Use at least three mixed conditionals and three of the topic's vocabulary words (for example cognitive, bias, deliberate, intuition, heuristic, ambivalence).", minWords: 160 },
  quiz: [
    { type: "gap-fill", prompt: "If she had listened to her intuition back then, she ___ much happier today.", answer: "would be", explanation: "Past condition (had listened) with a present result requires 'would + base verb'." },
    { type: "gap-fill", prompt: "If he weren't so indecisive, he ___ (commit) to the plan months ago.", answer: "would have committed", explanation: "A present condition (weren't) explaining a past result requires 'would have + past participle'." },
    { type: "multiple-choice", prompt: "Which sentence is a correctly formed mixed conditional linking a past condition to a present result?", options: ["If I had saved money earlier, I would own a house now.", "If I save money earlier, I will own a house now.", "If I had saved money earlier, I would have owned a house then.", "If I save money, I would own a house."], answer: 0, explanation: "'If + past perfect' (had saved) with 'would + base verb' (would own) correctly links a past condition to a present result." },
    { type: "multiple-choice", prompt: "Which word means 'a mental shortcut or rule of thumb that simplifies complex decisions'?", options: ["heuristic", "ambivalence", "intuition", "bias"], answer: 0, explanation: "A 'heuristic' is precisely a simplifying mental shortcut." },
    { type: "multiple-choice", prompt: "Choose the word that best completes the sentence: 'Her ___ about accepting the job left her unable to decide for weeks.'", options: ["ambivalence", "heuristic", "deliberate", "cognitive"], answer: 0, explanation: "'Ambivalence' denotes contradictory feelings that prevent a decision, fitting the context exactly." },
  ],
};
