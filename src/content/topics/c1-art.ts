import type { Topic } from "../types";
export const c1Art: Topic = {
  id: "c1-art",
  level: "C1",
  title: "What is Art?",
  theme: "Culture",
  summary: "Explore competing definitions of art, and learn to add extra information with non-defining relative clauses and advanced noun phrases.",
  leadIn: [
    "Can something be considered art if the artist never intended it to be?",
    "Who ultimately decides what counts as a masterpiece, the critic or the public?",
    "Is the value of a work of art intrinsic, or is it constructed by society?",
  ],
  vocabulary: [
    { word: "aesthetic", definition: "relating to beauty or the appreciation of beauty and artistic form", example: "The museum's curators prized the sculpture for its austere aesthetic qualities rather than its narrative content.", collocations: ["aesthetic experience", "aesthetic judgement"], azNote: "estetik — gözəlliyə və bədii forma qavrayışına aid olan; sənətdə zövq və gözəllik məsələsi." },
    { word: "subjective", definition: "based on personal feelings, tastes or opinions rather than objective fact", example: "Because beauty is so subjective, two viewers may reach entirely opposite conclusions about the same canvas.", collocations: ["subjective interpretation", "deeply subjective"], azNote: "subyektiv — fərdi hiss və zövqə əsaslanan, obyektiv həqiqət olmayan; hər kəsdə fərqli ola bilər." },
    { word: "provocative", definition: "intended to stimulate strong reactions, debate or controversy", example: "The installation, which many found provocative, deliberately challenged conventional notions of decency.", collocations: ["provocative work", "deliberately provocative"], azNote: "təhrikedici, mübahisə doğuran — güclü reaksiya və müzakirə yaratmaq üçün düşünülmüş əsər." },
    { word: "intrinsic", definition: "belonging naturally to something; essential and inherent rather than added from outside", example: "Critics dispute whether a painting has any intrinsic worth independent of the market that prices it.", collocations: ["intrinsic value", "intrinsic worth"], azNote: "daxili, özünəməxsus — bir şeyə təbii şəkildə aid olan, kənardan əlavə edilməyən əsas xüsusiyyət." },
    { word: "discourse", definition: "serious, extended discussion or debate about a subject, especially in writing or scholarship", example: "Contemporary critical discourse, which now spans philosophy and politics, treats art as a form of argument.", collocations: ["critical discourse", "public discourse"], azNote: "diskurs, ciddi müzakirə — bir mövzu ətrafında, xüsusən elmi mühitdə aparılan geniş fikir mübadiləsi." },
    { word: "ephemeral", definition: "lasting for a very short time; transient and quickly fading", example: "Performance pieces are often ephemeral, surviving only in photographs and the memories of those who witnessed them.", collocations: ["ephemeral nature", "ephemeral beauty"], azNote: "müvəqqəti, ötəri — çox qısa müddət yaşayan, tez itib gedən; davamlı olmayan." },
  ],
  grammar: {
    point: "Non-defining relative clauses and advanced noun phrases",
    explanation: "A non-defining relative clause, which is always set off by commas, adds extra, non-essential information about a noun that is already identified. Use 'who' for people, 'which' for things and ideas, and 'whose' for possession, but never 'that' in this structure. Such clauses, together with dense noun phrases, let academic writers pack background detail into a single elegant sentence.",
    azNote: "Qeyri-təyinedici budaq cümlə əlavə, vacib olmayan məlumat verir və hər zaman vergüllərlə ayrılır, vergülləri əsla atmayın. İnsan üçün 'who', əşya və ideya üçün 'which', mənsubiyyət üçün 'whose' işlədilir, lakin bu quruluşda 'that' istifadə olunmur.",
    examples: [
      { en: "Marcel Duchamp, who exhibited a urinal as sculpture in 1917, redefined what art could be.", note: "extra information about a person, set off by commas" },
      { en: "Abstract expressionism, which emerged in post-war New York, rejected representation altogether.", note: "'which' for a movement; non-essential detail" },
      { en: "The artist, whose intentions remain disputed, left the canvas deliberately unfinished.", note: "'whose' for possession" },
      { en: "Conceptual art, a movement preoccupied with ideas rather than objects, treats the concept as the artwork.", note: "advanced noun phrase in apposition, also set off by commas" },
    ],
  },
  reading: {
    title: "The Shifting Boundaries of Art",
    text: `For centuries, the question of what constitutes art seemed deceptively simple: a painting, a statue or a symphony evidently belonged to the category, while a factory tool did not. Yet the modern era, which has dismantled almost every inherited certainty, has rendered such confident distinctions untenable. When Marcel Duchamp, whose readymades scandalised the art world, presented an ordinary urinal as sculpture, he forced a question that still dominates critical discourse: is the aesthetic worth of an object located in the object itself, or in the institutions that frame it?

One influential answer holds that artistic value is irreducibly subjective. According to this view, beauty resides not in the canvas but in the eye of the beholder, and no judgement can claim universal authority. A rival tradition insists, by contrast, that genuine works possess an intrinsic quality, a formal coherence which a trained sensibility can recognise across cultures and centuries. Each position, which has distinguished defenders, struggles to explain the cases the other handles easily.

Contemporary practice complicates matters further. Much of the most celebrated recent work is deliberately provocative, designed less to please than to unsettle the assumptions of its audience. Performance and installation pieces, which often exist only for an afternoon, are radically ephemeral; they survive, if at all, as documentation rather than as enduring objects. Such work, whose very transience is part of its meaning, refuses the permanence we once associated with masterpieces.

Perhaps, then, art is best understood not as a fixed class of objects but as an ongoing conversation, a discourse through which a community continually negotiates what deserves attention. On this account, the boundaries of art, which every generation redraws, are neither arbitrary nor eternal. They are the visible trace of a society arguing, in paint and stone and gesture, about what it values most.`,
    questions: [
      { type: "multiple-choice", prompt: "Why does the writer say the modern era has made confident distinctions about art 'untenable'?", options: ["Because museums have closed", "Because it has dismantled inherited certainties about what counts as art", "Because painting is no longer taught", "Because critics now agree on everything"], answer: 1, explanation: "The text states the modern era 'has dismantled almost every inherited certainty', undermining old distinctions." },
      { type: "multiple-choice", prompt: "What is the central disagreement between the two traditions described in paragraph two?", options: ["Whether art should be expensive", "Whether artistic value is subjective or intrinsic", "Whether Duchamp was a real artist", "Whether beauty can be photographed"], answer: 1, explanation: "One view calls value subjective; the rival tradition insists works possess an intrinsic quality." },
      { type: "multiple-choice", prompt: "According to the final paragraph, art is best understood as", options: ["a fixed class of beautiful objects", "an ongoing discourse through which a community negotiates value", "an investment that always appreciates", "a purely individual private experience"], answer: 1, explanation: "The conclusion reframes art as 'an ongoing conversation, a discourse' about what a community values." },
    ],
  },
  speaking: [
    "Present an argument for whether artistic value is subjective or intrinsic, and defend your position against an obvious objection.",
    "Describe a provocative or ephemeral work you have encountered, and explain how it affected your understanding of art.",
    "Discuss how far public institutions, rather than individual taste, shape the discourse about what counts as a masterpiece.",
  ],
  writing: {
    task: "Write an academic-style essay arguing whether art has any intrinsic value or is purely subjective. Use at least two non-defining relative clauses (set off by commas) and four of the topic's vocabulary words.",
    minWords: 180,
  },
  quiz: [
    { type: "gap-fill", prompt: "Marcel Duchamp, ___ readymades scandalised the art world, redefined sculpture.", answer: "whose", accept: ["whose"], explanation: "'whose' signals possession (Duchamp's readymades) in a non-defining clause set off by commas." },
    { type: "multiple-choice", prompt: "Which sentence punctuates a non-defining relative clause correctly?", options: ["Abstract art which emerged after the war rejected realism.", "Abstract art, which emerged after the war, rejected realism.", "Abstract art that emerged after the war, rejected realism.", "Abstract art, that emerged after the war rejected realism."], answer: 1, explanation: "A non-defining clause is set off by commas on both sides and uses 'which', not 'that'." },
    { type: "gap-fill", prompt: "Performance pieces are radically ___, surviving only as documentation.", answer: "ephemeral", accept: ["ephemeral"], explanation: "'ephemeral' means lasting only a very short time, matching the idea of work that does not endure." },
    { type: "multiple-choice", prompt: "In the non-defining structure described, which relative pronoun must NOT be used?", options: ["who", "which", "whose", "that"], answer: 3, explanation: "Non-defining relative clauses never use 'that'; they take who, which or whose." },
    { type: "multiple-choice", prompt: "Which word best completes the academic sentence: 'Whether a painting has any ___ worth, independent of its market price, is disputed.'?", options: ["intrinsic", "ephemeral", "provocative", "subjective"], answer: 0, explanation: "'intrinsic' worth means value belonging to the object itself, independent of external factors like price." },
  ],
};
