import type { GrammarGroup } from "../types";

export const reportedSpeech: GrammarGroup = {
  id: "reported-speech",
  description:
    "Reported (indirect) speech tells someone what another person said without quoting them. Tenses usually shift 'one step back' and pronouns and time words change.",
  azDescription:
    "Dolayı nitq (reported speech) başqasının dediyini eynən sitat gətirmədən, öz sözlərinlə çatdırmaq üçün istifadə olunur. Yəni dırnaq işarələri qoymadan deyirsən. Adətən üç şey dəyişir: tabe cümlədəki feilin zamanı bir addım geriyə sürüşür (məsələn Present Simple Past Simple olur), əvəzliklər yeni danışana uyğunlaşır, vaxt və yer sözləri isə fərqli formaya keçir.",
  rules: [
    {
      title: "say vs tell",
      level: "B1",
      explanation:
        "'tell' needs a person object (tell someone); 'say' does not (say something). Don't mix them up.",
      azNote:
        "'tell' feili özündən sonra mütləq kimə deyildiyini, yəni bir insan obyektini tələb edir: tell me, tell him. 'say' feili isə insan obyekti istəmir, sadəcə nə deyildiyini bildirir: say something. Bu ikisini bir-biri ilə qarışdırma. Məsələn: 'She told me' düzgündür, amma birbaşa 'She said me' demək olmaz.",
      form: "tell + somebody + that …  ·  say (that) …",
      examples: [
        { en: "She told me that she was busy.", note: "tell + person" },
        { en: "She said that she was busy.", note: "say (no person)" },
      ],
      pitfall: "'She said me' YOX → 'She told me' ya da 'She said to me'.",
    },
    {
      title: "Backshift of tenses",
      level: "B2",
      explanation:
        "When the reporting verb is in the past (said, told), the verb usually moves one tense back: present → past, past → past perfect, will → would.",
      azNote:
        "Başqasının sözünü nəql edəndə, əgər nəql feili (reporting verb) keçmiş zamandadırsa (said, told), tabe cümlədəki feil bir zaman geriyə sürüşür. Yəni Present Simple Past Simple olur, Past Simple Past Perfect olur, will isə would olur. Məsələn: 'I am tired' → He said he WAS tired. Bu sürüşməyə backshift deyilir.",
      form: "said (that) + clause (one tense back)",
      examples: [
        { en: '"I am tired." → He said he was tired.' },
        { en: '"I will call you." → She said she would call me.' },
        { en: '"I saw it." → He said he had seen it.' },
      ],
      pitfall: "Ümumi/həmişə doğru faktlarda backshift məcburi deyil: 'She said the Earth is round.'",
    },
    {
      title: "Pronouns & time/place words",
      level: "B2",
      explanation:
        "Pronouns change to fit the new speaker, and time/place words shift: now → then, today → that day, tomorrow → the next day, here → there.",
      azNote:
        "Nəql edəndə əvəzliklər (I, you, my, here kimi sözlər) artıq yeni danışanın baxış bucağına uyğunlaşmalıdır. Eyni zamanda vaxt və yer bildirən sözlər də dəyişir: now → then, today → that day, tomorrow → the next day, here → there. Yəni keçmişdən danışdığın üçün 'indi' əvəzinə 'o zaman' deyirsən.",
      examples: [
        { en: '"I\'ll see you here tomorrow." → He said he\'d see me there the next day.' },
        { en: '"I did it today." → She said she had done it that day.' },
      ],
      pitfall: "Yalnız feili dəyişib əvəzlik/vaxt sözünü unutma — hamısı dəyişir.",
    },
    {
      title: "Reported questions",
      level: "B2",
      explanation:
        "Use 'if/whether' for yes/no questions and the question word for wh-questions. The word order becomes statement order (subject + verb), with NO auxiliary 'do' and no question mark.",
      azNote:
        "Sualları nəql edərkən: cavabı bəli/xeyr olan suallarda 'if' və ya 'whether' işlət, wh-suallarında isə sual sözünü (where, what, when) saxla. Söz sırası artıq sual kimi yox, adi təsdiq cümləsi kimi olur — yəni əvvəl mübtəda, sonra feil gəlir. Köməkçi 'do/does/did' işlədilmir və sonda sual işarəsi qoyulmur. Məsələn: 'Where do you live?' → She asked where I LIVED.",
      form: "asked (+ object) + if/whether/wh- + subject + verb",
      examples: [
        { en: '"Where do you live?" → She asked where I lived.' },
        { en: '"Are you ready?" → He asked if I was ready.' },
      ],
      pitfall: "Sual sırasını saxlama: 'She asked where did I live' YOX → 'where I lived'.",
    },
    {
      title: "Reported commands & requests",
      level: "B2",
      explanation:
        "Use 'tell/ask someone (not) to + verb' for orders and requests — no backshift needed.",
      azNote:
        "Əmrləri və xahişləri nəql edərkən 'tell/ask somebody (not) to + feilin əsas forması' qəlibindən istifadə et. Yəni feili keçmiş zamana sürüşdürmək (backshift) burada lazım deyil, sadəcə 'to + feil' işlədilir. Məsələn: 'Sit down' → The teacher told us TO SIT down. İnkar üçün isə 'not' sözünü 'to'-dan əvvəl qoyursan: told me NOT TO go.",
      form: "told/asked + somebody + (not) to + base verb",
      examples: [
        { en: '"Sit down." → The teacher told us to sit down.' },
        { en: '"Please don\'t be late." → She asked me not to be late.' },
      ],
      pitfall: "İnkar əmrdə 'not' məsdərdən əvvəl: 'told me to not go' deyil → 'told me not to go'.",
    },
  ],
  practice: [
    {
      type: "multiple-choice",
      prompt: '"I am hungry," he said. → He said he ___ hungry.',
      options: ["is", "was", "has been", "would be"],
      answer: 1,
      explanation: "Backshift: present 'am' → past 'was'.",
    },
    {
      type: "multiple-choice",
      prompt: "She ___ me that the meeting was cancelled.",
      options: ["said", "told", "asked", "spoke"],
      answer: 1,
      explanation: "With a person object you need 'told' (tell someone).",
    },
    {
      type: "multiple-choice",
      prompt: '"I\'ll help you," she said. → She said she ___ help me.',
      options: ["will", "would", "had", "is going to"],
      answer: 1,
      explanation: "Backshift: 'will' → 'would'.",
    },
    {
      type: "gap-fill",
      prompt: 'He asked me where I ___. ("Where do you work?") (work, backshifted)',
      answer: "worked",
      explanation: "Reported question: statement order + backshift → 'where I worked'.",
    },
    {
      type: "multiple-choice",
      prompt: '"Are you tired?" → She asked me ___ I was tired.',
      options: ["that", "if", "what", "do"],
      answer: 1,
      explanation: "Yes/no question reported → 'if' (or 'whether').",
    },
    {
      type: "multiple-choice",
      prompt: '"Don\'t touch it!" → He told me ___ touch it.',
      options: ["to not", "not to", "don't", "to don't"],
      answer: 1,
      explanation: "Negative command → 'not to + verb'.",
    },
  ],
};
