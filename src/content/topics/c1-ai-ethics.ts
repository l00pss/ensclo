import type { Topic } from "../types";

export const c1AiEthics: Topic = {
  id: "c1-ai-ethics", level: "C1", title: "Artificial Intelligence and Ethics", theme: "Ethics",
  summary: "Examine the moral dilemmas posed by artificial intelligence, and learn to speculate about past decisions using perfect modals (should have / must have / might have + past participle) alongside cautious, hedging language.",
  leadIn: [
    "To what extent should developers be held accountable for the unintended consequences of the algorithms they design?",
    "Looking back, how might the early architects of social media have anticipated the ethical pitfalls of their platforms?",
    "Where, in your view, should society draw the line between technological progress and the protection of individual autonomy?",
  ],
  vocabulary: [
    { word: "accountability", definition: "the obligation of an individual or organisation to accept responsibility for their actions and to disclose them transparently", example: "Critics argue that genuine accountability is impossible when no single person can explain how an algorithm reached its verdict.", collocations: ["demand accountability", "a lack of accountability"], azNote: "Hesabatlılıq, yəni öz qərarlarına və hərəkətlərinə görə məsuliyyət daşımaq, bu sözdə əsas məsələdir." },
    { word: "bias", definition: "a systematic and often unconscious tendency that produces unfair or distorted outcomes", example: "If the training data reflects historical prejudice, the resulting model will inevitably reproduce that bias at scale.", collocations: ["inherent bias", "mitigate bias"], azNote: "Qərəz, yəni qeyri-ədalətli meyl, çox vaxt məlumatların özündən gəlir, ona görə də diqqətlə yoxlanmalıdır." },
    { word: "autonomy", definition: "the capacity of an agent to make independent decisions free from external control", example: "Granting machines a degree of autonomy raises the troubling question of who bears responsibility when they err.", collocations: ["preserve autonomy", "human autonomy"], azNote: "Muxtariyyət, yəni kənar nəzarət olmadan müstəqil qərar vermək qabiliyyəti, insanlara da, maşınlara da aid edilə bilər." },
    { word: "transparency", definition: "the quality of being open and comprehensible so that decisions can be scrutinised by others", example: "Regulators increasingly insist on transparency, demanding that companies reveal how their systems weigh competing factors.", collocations: ["ensure transparency", "a commitment to transparency"], azNote: "Şəffaflıq, yəni qərarların başa düşülən və yoxlanıla bilən olması, etik süni intellekt üçün vacibdir." },
    { word: "surveillance", definition: "the continuous monitoring of people's behaviour, often through technological means", example: "Facial-recognition tools have transformed everyday surveillance into an almost invisible feature of urban life.", collocations: ["mass surveillance", "under surveillance"], azNote: "İzləmə, yəni insanların davranışının davamlı nəzarət altında saxlanması, məxfilik hüquqlarını ciddi şəkildə təhdid edir." },
    { word: "dilemma", definition: "a situation requiring a choice between two or more options, none of which is wholly satisfactory", example: "Engineers face a genuine dilemma when a safety feature for one group quietly disadvantages another.", collocations: ["a moral dilemma", "resolve a dilemma"], azNote: "İkilem, yəni heç biri tam qənaətbəxş olmayan seçimlər arasında qalmaq, etik mübahisələrin mərkəzindədir." },
  ],
  grammar: {
    point: "Perfect modals (should have / must have / might have + past participle) and cautious, hedging language",
    explanation: "Perfect modals combine a modal verb with 'have' plus a past participle to comment on or speculate about the past. 'Should have' expresses criticism or regret about something that did not happen; 'must have' conveys a confident deduction; and 'might / may / could have' signals tentative possibility. In academic discussion these forms are frequently softened further with hedging expressions such as 'arguably', 'it could be argued', and 'to some extent', which let writers advance a claim without overstating their certainty.",
    azNote: "Perfect modal-lar keçmiş haqqında mühakimə və ya təxmin bildirir, məsələn 'should have' təəssüf və tənqid, 'must have' əmin nəticə, 'might have' isə ehtimal anlamına gəlir. Akademik dildə fikri yumşaltmaq üçün 'arguably', 'to some extent' kimi ehtiyatlı ifadələr əlavə olunur, beləliklə iddia həddən artıq qəti səslənmir.",
    examples: [
      { en: "The designers should have anticipated that the dataset would encode existing bias.", note: "criticism of a past failure" },
      { en: "The system must have learned this prejudice from the historical records it was trained on.", note: "confident deduction about the past" },
      { en: "Stronger oversight might have prevented the breach of privacy, though we cannot be certain.", note: "tentative possibility softened by hedging" },
      { en: "It could be argued that regulators may have underestimated the scale of the problem.", note: "double hedging with a cautious modal" },
    ],
  },
  reading: {
    title: "The Moral Architecture of Intelligent Machines",
    text: `As artificial intelligence migrates from the laboratory into hospitals, courtrooms, and city streets, the ethical questions it raises have grown impossible to ignore. When an automated system denies someone a loan or flags them as a suspect, who, precisely, is answerable? The diffuse nature of modern development means that no single engineer can claim full ownership of an outcome, and this erosion of accountability lies at the heart of the contemporary debate.

A recurring concern is bias. Because models learn from historical records, they tend to absorb the inequalities embedded within them; a recruitment tool trained on decades of male-dominated hiring may quietly penalise female applicants. Critics contend that the developers should have audited their data more rigorously, and that the discriminatory pattern must have been visible long before the product reached the market. Greater transparency, they argue, might have exposed the flaw earlier, allowing it to be corrected before any real harm occurred.

The expansion of intelligent systems also reshapes the boundaries of privacy. Pervasive surveillance, once the preserve of authoritarian states, is now woven into ordinary commerce, as cameras and sensors silently catalogue our movements. This trend collides with a deep human attachment to autonomy: the right to act, and to be judged, as a free agent rather than as a data point. Here lies a genuine dilemma, for the very tools that promise convenience and security may erode the freedoms they claim to protect.

None of these tensions admits an easy resolution. It could be argued that earlier regulators may have underestimated how quickly the technology would advance, yet hindsight alone solves nothing. What the field arguably requires is not blame but humility: a willingness to acknowledge uncertainty, to design for scrutiny, and to keep human judgement firmly at the centre of decisions that shape human lives.`,
    questions: [
      { type: "multiple-choice", prompt: "According to the first paragraph, why is accountability difficult to assign in modern AI development?", options: ["Engineers deliberately conceal their work", "No single engineer fully owns an outcome because development is diffuse", "Governments refuse to regulate the industry", "The systems are too simple to analyse"], answer: 1, explanation: "The text states that the diffuse nature of development means no single engineer can claim full ownership, which erodes accountability." },
      { type: "multiple-choice", prompt: "What does the writer suggest greater transparency might have achieved?", options: ["It would have eliminated all surveillance", "It might have exposed the biased flaw earlier so it could be corrected", "It would have increased the company's profits", "It would have replaced human judgement entirely"], answer: 1, explanation: "The second paragraph says greater transparency might have exposed the flaw earlier, allowing correction before harm." },
      { type: "multiple-choice", prompt: "What does the writer argue the field most needs in the final paragraph?", options: ["More blame directed at regulators", "Faster technological advancement", "Humility and a willingness to acknowledge uncertainty", "Complete automation of decision-making"], answer: 2, explanation: "The conclusion argues that the field requires humility, acknowledging uncertainty and keeping human judgement central." },
    ],
  },
  speaking: [
    "Speculate about a past technological failure using perfect modals: what should the creators have done differently, and what might have prevented the harm?",
    "Discuss whether mass surveillance can ever be ethically justified, hedging your claims with cautious language such as 'it could be argued' or 'to some extent'.",
    "Consider how much autonomy we should be willing to surrender to intelligent systems, and explain where you would draw the line.",
  ],
  writing: { task: "Write an argumentative essay evaluating whether the early developers of a controversial technology bear moral responsibility for its consequences. Use at least three perfect modals (should have / must have / might have + past participle), employ hedging language, and incorporate at least four of the topic's vocabulary words.", minWords: 220 },
  quiz: [
    { type: "gap-fill", prompt: "The engineers ___ audited the dataset before release; their negligence caused real harm. (criticism + audit, perfect modal)", answer: "should have", explanation: "'Should have + past participle' expresses criticism or regret about a past action that did not happen." },
    { type: "gap-fill", prompt: "Given how accurate the prediction was, the model ___ learned the pattern from millions of records. (confident deduction)", answer: "must have", explanation: "'Must have + past participle' conveys a confident deduction about the past based on evidence." },
    { type: "multiple-choice", prompt: "Which sentence uses cautious, hedging language most appropriately for academic register?", options: ["Regulators definitely failed and everyone knows it.", "It could be argued that regulators may have underestimated the risk.", "Regulators failed because they are stupid.", "Regulators never do anything right, full stop."], answer: 1, explanation: "'It could be argued' and 'may have' soften the claim, signalling appropriate tentativeness for academic writing." },
    { type: "multiple-choice", prompt: "Which word means 'a systematic tendency that produces unfair outcomes'?", options: ["transparency", "bias", "autonomy", "surveillance"], answer: 1, explanation: "'Bias' is a systematic, often unconscious tendency that produces unfair or distorted outcomes." },
    { type: "gap-fill", prompt: "Stronger oversight ___ prevented the breach, though we cannot be entirely sure. (tentative possibility)", answer: "might have", explanation: "'Might have + past participle' expresses a tentative possibility about the past, suiting the uncertainty signalled by the clause." },
  ],
};
