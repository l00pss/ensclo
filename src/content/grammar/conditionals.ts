import type { GrammarGroup } from "../types";

export const conditionals: GrammarGroup = {
  id: "conditionals",
  description:
    "Conditionals talk about 'if' situations and their results — from general truths to real future possibilities to impossible, imaginary worlds.",
  azDescription:
    "Şərt cümlələri (Conditionals) 'əgər' ilə bir vəziyyəti və onun nəticəsini bildirir: yəni bir şey baş verəndə nə olur və ya nə olardı. Hər cümlədə iki tərəf var — 'if' (şərt) tərəfi və nəticə tərəfi. Növləri vəziyyətin nə qədər real olmasına görə dəyişir: həmişə doğru olan ümumi həqiqətlərdən tutmuş real gələcək ehtimallarına, oradan da yalnız xəyalda mövcud olan mümkünsüz vəziyyətlərə qədər.",
  rules: [
    {
      title: "Zero Conditional",
      level: "B1",
      explanation:
        "For general truths and facts: when the condition happens, the result always happens. Both clauses use the present simple.",
      azNote:
        "Zero Conditional ümumi həqiqətləri və dəyişməz faktları bildirir: şərt baş verəndə nəticə də həmişə, istisnasız baş verir. Quruluş: 'If + sadə indiki zaman (Present Simple), sadə indiki zaman' — yəni hər iki tərəfdə eyni zaman işlənir, məsələn 'If you heat ice, it melts'. Burada 'if' praktiki olaraq 'when' (nə vaxt) mənası verir, çünki nəticə həmişə doğrudur.",
      form: "If + present simple, present simple",
      examples: [
        { en: "If you heat ice, it melts." },
        { en: "Plants die if they don't get water." },
      ],
      pitfall: "Burada 'if' ≈ 'when' — həmişə doğru olan nəticə.",
    },
    {
      title: "First Conditional",
      level: "B1",
      explanation:
        "For real and possible situations in the future: if the condition is met, this is the likely result.",
      azNote:
        "First Conditional gələcəkdə real və baş verməsi mümkün olan vəziyyəti və onun ehtimal olunan nəticəsini bildirir. Quruluş: 'If + sadə indiki zaman (Present Simple), will + əsas feil' — məsələn 'If it rains, we will stay at home'. Diqqət: 'if' olan tərəfdə 'will' İŞLƏNMİR; orada sadə indiki zaman gəlir, 'will' isə yalnız nəticə tərəfində olur.",
      form: "If + present simple, will + base verb",
      examples: [
        { en: "If it rains, we'll stay at home." },
        { en: "She'll be angry if you're late." },
      ],
      pitfall: "'if' tərəfində 'will' olmaz: 'If it will rain' YOX → 'If it rains'.",
    },
    {
      title: "Second Conditional",
      level: "B2",
      explanation:
        "For unreal, imaginary or unlikely situations in the present/future. The past form does NOT mean past time here — it signals 'imaginary'.",
      azNote:
        "Second Conditional indiki və ya gələcəkdə xəyali, ehtimalı az olan və ya reallıqda mümkün olmayan vəziyyəti bildirir. Quruluş: 'If + keçmiş zaman (Past Simple), would + əsas feil' — məsələn 'If I won the lottery, I would travel the world'. Vacib məqam: buradakı keçmiş forma (won, were) əsl keçmiş zamanı yox, XƏYALİ vəziyyəti göstərir; rəsmi dildə bütün şəxslərlə 'was' yerinə 'were' işlənir.",
      form: "If + past simple, would + base verb",
      examples: [
        { en: "If I won the lottery, I would travel the world." },
        { en: "If I were you, I'd apologise.", note: "'were' for all persons in formal use" },
      ],
      pitfall: "Şərt tərəfdə 'would' gəlmir: 'If I would win' YOX → 'If I won'.",
    },
    {
      title: "Third Conditional",
      level: "B2",
      explanation:
        "For imaginary situations in the PAST — things that did not happen, and their imagined results. Often used for regret or criticism.",
      azNote:
        "Third Conditional keçmişdə əslində baş VERMƏMİŞ xəyali vəziyyəti və onun təsəvvür edilən nəticəsini bildirir — yəni 'belə olsaydı, belə olardı' deyə keçmişi xəyal edirik. Quruluş: 'If + past perfect (had + üçüncü forma), would have + üçüncü forma' — məsələn 'If I had studied harder, I would have passed'. Çox vaxt keçmişə görə peşmançılıq və ya tənqid bildirmək üçün işlənir.",
      form: "If + past perfect, would have + past participle",
      examples: [
        { en: "If I had studied harder, I would have passed." },
        { en: "She wouldn't have missed the train if she had left earlier." },
      ],
      pitfall: "'would' iki dəfə yox: 'If I would have known' YOX → 'If I had known'.",
    },
    {
      title: "unless / as long as / in case",
      level: "B2",
      explanation:
        "Other ways to express conditions. 'unless' = if not; 'as long as / provided that' = only if; 'in case' = as a precaution.",
      azNote:
        "Şərti yalnız 'if' ilə yox, başqa bağlayıcılarla da ifadə etmək olar. 'unless' = 'əgər ...-masa/-məsə', yəni 'if not' deməkdir (məsələn 'unless you come' = 'if you don't come'). 'as long as' və 'provided that' = 'yalnız o şərtlə ki', yəni nəticə yalnız həmin şərt yerinə yetəndə baş verir. 'in case' isə = 'ehtiyat üçün, hər ehtimala qarşı' mənasını verir.",
      examples: [
        { en: "I won't go unless you come with me.", note: "= if you don't come" },
        { en: "You can borrow it as long as you return it." },
        { en: "Take an umbrella in case it rains." },
      ],
      pitfall: "'in case' gələcək hadisə üçün present istəyir: 'in case it will rain' YOX.",
    },
    {
      title: "Mixed Conditional",
      level: "C1",
      explanation:
        "Combines a past condition with a present result (or vice versa) when the two times don't match. Common: past 'if', present 'would'.",
      azNote:
        "Mixed Conditional şərtlə nəticənin zamanı bir-birinə uyğun gəlmədikdə işlənir, yəni iki fərqli növün hissələrini birləşdirir. Ən çox rast gəlinən hal: keçmişdəki şərt → indiki nəticə, məsələn 'If I had taken that job, I would be richer now' (keçmiş şərt → indiki nəticə). Əks variant da olur: indiki şərt → keçmiş nəticə. Hər iki yarının zamanı fərqli olduğu üçün standart düsturları olduğu kimi qarışdırmaq olmaz.",
      form: "If + past perfect, would + base verb (now)",
      examples: [
        {
          en: "If I had taken that job, I would be richer now.",
          note: "past condition → present result",
        },
        {
          en: "If she weren't so shy, she would have spoken up.",
          note: "present condition → past result",
        },
      ],
      pitfall: "İki yarının zamanı fərqli olduğuna görə standart düsturları qarışdırma.",
    },
  ],
  practice: [
    {
      type: "multiple-choice",
      prompt: "If you ___ ice, it melts.",
      options: ["will heat", "heat", "would heat", "heated"],
      answer: 1,
      explanation: "General truth → Zero Conditional, present simple in both clauses.",
    },
    {
      type: "gap-fill",
      prompt: "If it rains tomorrow, we ___ stay at home. (real future)",
      answer: "will",
      explanation: "First Conditional → result clause uses 'will'.",
    },
    {
      type: "multiple-choice",
      prompt: "If I ___ the lottery, I would buy a house.",
      options: ["win", "won", "will win", "would win"],
      answer: 1,
      explanation: "Imaginary present/future → Second Conditional, past simple in the 'if' clause.",
    },
    {
      type: "gap-fill",
      prompt: "If I had studied harder, I ___ have passed the exam. (past, unreal)",
      answer: "would",
      explanation: "Third Conditional → 'would have + past participle'.",
    },
    {
      type: "multiple-choice",
      prompt: "I won't help you ___ you say sorry.",
      options: ["if", "unless", "as long as", "in case"],
      answer: 1,
      explanation: "'unless' = if not: I'll help only if you apologise.",
    },
    {
      type: "multiple-choice",
      prompt: "If she had caught the earlier flight, she ___ here now.",
      options: ["would be", "would have been", "will be", "is"],
      answer: 0,
      explanation: "Mixed: past condition → present result → 'would be' now.",
    },
  ],
};
