import type { GrammarGroup } from "../types";

export const passive: GrammarGroup = {
  id: "passive",
  description:
    "The passive voice puts the focus on the action or the receiver, not the doer. Common in news, science and formal writing where who did it is unknown or unimportant.",
  azDescription:
    "Passiv səs (məchul növ) diqqəti işi GÖRƏNƏ yox, işin özünə və işdən təsirlənən obyektə yönəldir. Yəni cümlədə əsas yeri hərəkəti edən şəxs deyil, hərəkətin üzərinə düşdüyü şey tutur. Bu quruluş daha çox xəbərlərdə, elmi mətnlərdə və rəsmi yazıda — işi kimin gördüyü bilinmədikdə, aydın olduqda və ya əhəmiyyət daşımadıqda işlənir. Məsələn: 'The house was built in 1990' (Ev 1990-cı ildə tikildi) — burada evi kimin tikdiyi vacib deyil.",
  rules: [
    {
      title: "Passive: basic form",
      level: "B2",
      explanation:
        "Form the passive with the verb 'be' (in the right tense) + the past participle. The object of the active sentence becomes the subject.",
      azNote:
        "Passiv səs belə qurulur: 'be' feili (cümlənin tələb etdiyi lazımi zamanda) + əsas feilin üçüncü forması (past participle, yəni keçmiş zaman feili sifəti). Aktiv cümlədəki tamamlıq (obyekt) passiv cümlədə mübtədaya çevrilir. Məsələn aktiv 'They built the house' cümləsindəki 'the house' passivdə cümlənin başına keçib mübtəda olur: 'The house was built'.",
      form: "subject + be + past participle (+ by + agent)",
      examples: [
        { en: "The house was built in 1990.", note: "active: 'They built the house...'" },
        { en: "English is spoken here." },
        { en: "The report will be sent tomorrow." },
      ],
      pitfall: "3-cü formanı unutma: 'was build' YOX → 'was built'.",
    },
    {
      title: "Passive across tenses",
      level: "B2",
      explanation:
        "Only the form of 'be' changes for the tense; the past participle stays the same.",
      azNote:
        "Passiv cümləni müxtəlif zamanlara salanda yalnız 'be' feilinin forması dəyişir; əsas feilin üçüncü forması (past participle) isə həmişə eyni qalır. Yəni zamanı dəyişmək üçün sadəcə 'be' feilini düzgün formaya sal: indiki zamanda 'is/are', keçmişdə 'was/were', bitmiş zamanda 'has/have been', davam edən zamanda 'is being', gələcəkdə 'will be'. Sondakı əsas feil isə dəyişmir.",
      form: "is/are · was/were · has been · is being · will be + past participle",
      examples: [
        { en: "The room is cleaned every day.", note: "present simple" },
        { en: "The road is being repaired.", note: "present continuous" },
        { en: "The parcel has been delivered.", note: "present perfect" },
      ],
      pitfall: "Continuous passivdə 'being' lazımdır: 'is repaired' (bir dəfə) ≠ 'is being repaired' (indi davam edir).",
    },
    {
      title: "The agent: by + doer",
      level: "B2",
      explanation:
        "Add 'by + agent' only when the doer is important. Often we leave it out because it's unknown, obvious, or unimportant.",
      azNote:
        "İşi görən şəxsi və ya qüvvəni (agent) cümləyə 'by + işi görən' şəklində yalnız onun kim olduğu vacib olanda əlavə edirik. Məsələn 'Hamlet was written by Shakespeare' — burada müəllifin kim olduğu önəmlidir. Çox vaxt isə işi görən bilinmədiyi, özlüyündə aydın olduğu və ya əhəmiyyət daşımadığı üçün 'by' hissəsini tamamilə buraxırıq: 'My car was stolen' (Maşınım oğurlandı) — kimin oğurladığı bilinmir.",
      examples: [
        { en: "Hamlet was written by Shakespeare.", note: "agent matters" },
        { en: "My car was stolen.", note: "agent unknown — no 'by'" },
      ],
      pitfall: "Hər passivdə 'by' yazmaq lazım deyil — çox vaxt artıqdır.",
    },
    {
      title: "Passive with modals",
      level: "B2",
      explanation:
        "Use 'modal + be + past participle'. Common in rules and instructions.",
      azNote:
        "Modal feillə (must, should, can, may və s.) passiv belə qurulur: modal + 'be' + əsas feilin üçüncü forması (past participle). Diqqət et — modaldan sonra 'be' həmişə dəyişməz qalır. Bu quruluş qaydalarda, təlimatlarda və göstərişlərdə çox işlənir. Məsələn: 'Helmets must be worn' (Dəbilqə taxılmalıdır).",
      form: "modal + be + past participle",
      examples: [
        { en: "Helmets must be worn at all times." },
        { en: "This form should be completed in black ink." },
      ],
      pitfall: "Modaldan sonra həmişə 'be': 'must worn' YOX → 'must be worn'.",
    },
    {
      title: "Personal & impersonal passive",
      level: "C1",
      explanation:
        "For reporting opinions/beliefs: 'It is said that…' (impersonal) or 'He is said to…' (personal). Common in journalism and formal English.",
      azNote:
        "Ümumi fikir, inanc və ya söz-söhbət ötürmək üçün — yəni 'deyilir ki…', 'hesab olunur ki…' məzmununu vermək üçün — iki quruluş işlənir. Şəxssiz (impersonal) quruluş: 'It is said/believed/thought that…' (Deyilir/zənn edilir ki…). Şəxsli (personal) quruluş: 'subyekt + is said to + feilin əsas forması', məsələn 'The CEO is said to be resigning' (Deyilir ki, direktor istefa verir). Bu üsul jurnalistikada və rəsmi dildə geniş istifadə olunur.",
      form: "It is said/believed/thought that …  ·  subject + is said to + base verb",
      examples: [
        { en: "It is believed that the painting is genuine." },
        { en: "The CEO is said to be resigning." },
      ],
      pitfall: "Keçmiş üçün 'to have done': 'is said to have left' (artıq gedib).",
    },
  ],
  practice: [
    {
      type: "gap-fill",
      prompt: "The Mona Lisa ___ painted by Leonardo da Vinci. (past)",
      answer: "was",
      explanation: "Past passive → 'was' + past participle ('was painted').",
    },
    {
      type: "multiple-choice",
      prompt: "English ___ in many countries around the world.",
      options: ["speaks", "is speaking", "is spoken", "spoken"],
      answer: 2,
      explanation: "Present simple passive → 'is spoken'.",
    },
    {
      type: "multiple-choice",
      prompt: "Sorry about the noise — the road ___ at the moment.",
      options: ["is repaired", "is being repaired", "repairs", "was repaired"],
      answer: 1,
      explanation: "Action in progress now → present continuous passive 'is being repaired'.",
    },
    {
      type: "multiple-choice",
      prompt: "Helmets must ___ on the building site.",
      options: ["wear", "be worn", "worn", "to be worn"],
      answer: 1,
      explanation: "Passive with a modal → 'must be worn'.",
    },
    {
      type: "gap-fill",
      prompt: "The package has ___ delivered. (present perfect passive: be)",
      answer: "been",
      explanation: "Present perfect passive → 'has been delivered'.",
    },
    {
      type: "multiple-choice",
      prompt: "Which sentence best leaves out an unimportant agent?",
      options: [
        "My bike was stolen.",
        "My bike was stolen by someone.",
        "Someone stole my bike by them.",
        "My bike stole.",
      ],
      answer: 0,
      explanation: "When the doer is unknown/unimportant, drop 'by ...'.",
    },
  ],
};
