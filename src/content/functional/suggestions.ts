import type { ReferenceGroup } from "../reference";
import type { FunctionalPhrase } from "../types";
import { Lightbulb } from "lucide-react";

export const fnSuggestions: ReferenceGroup<FunctionalPhrase> = {
  id: "suggestions",
  label: "Suggestions & Advice",
  azLabel: "Təklif və məsləhət",
  icon: Lightbulb,
  description:
    "Phrases for making suggestions and giving advice — proposing ideas, recommending options and telling someone what you think they should do.",
  azDescription:
    "Bu qrup kiməsə nə etməyin yaxşı olacağını bildirmək, fikir irəli sürmək və ya məsləhət vermək üçün lazım olan ifadələri əhatə edir. İngiliscə təklifi necə yumşaltdığına görə qarşı tərəfə fərqli təsir bağışlayır: 'Why don't we…' dostcasına səslənir, 'I'd suggest…' isə rəsmi və peşəkardır. Burada həm dostlarla, həm də iş və rəsmi mühitdə işlədə biləcəyin variantları öyrənəcəksən ki, məsləhətin nə əmr, nə də qeyri-müəyyən səslənsin.",
  items: [
    {
      phrase: "Why don't we...?",
      level: "B1",
      use: "a friendly way to suggest doing something together",
      azUse:
        "Birlikdə nəsə etməyi dostcasına təklif etmək üçün ən geniş işlənən ifadədir. Sual formasında olsa da əslində cavab gözləmir — sadəcə fikri yumşaq və səmimi şəkildə irəli sürür. Daha çox dostlar, ailə və yaxın iş yoldaşları arasında, qeyri-rəsmi mühitdə işlənir; rəsmi yığıncaqlarda bir qədər təsadüfi səslənə bilər.",
      example: "Why don't we meet at the cafe before the film?",
      register: "informal",
    },
    {
      phrase: "How about...?",
      level: "B1",
      use: "to propose an idea or activity, often followed by a noun or -ing form",
      azUse:
        "Tez və asan təklif vermək üçün istifadə olunur və ardınca ya isim, ya da feilin -ing forması gəlir ('How about pizza?', 'How about going out?'). Çox qeyri-rəsmi və canlı danışıq ifadəsidir, ona görə dostlar arası söhbətlərə çox uyğundur. Eyni mənanı 'What about…?' də verir; rəsmi yazışmalarda daha tutarlı ifadələrə üstünlük vermək yaxşıdır.",
      example: "How about ordering some food and watching a movie tonight?",
      register: "informal",
    },
    {
      phrase: "You should...",
      level: "B1",
      use: "a direct way to give advice or a recommendation",
      azUse:
        "Kiməsə birbaşa məsləhət vermək, onun üçün yaxşı olacağını düşündüyün şeyi bildirmək üçün işlənir. Neytral ifadədir, amma bir qədər birbaşa səsləndiyinə görə tanıdığın və ya səndən kömək istəyən adamla işlətmək daha münasibdir. Çox tez-tez və kəskin tonla deyilsə əmr kimi səslənə bilər, ona görə bəzən 'I think you should…' deyə yumşaltmaq daha nəzakətli olur.",
      example: "You should see a doctor if the pain doesn't go away.",
      register: "neutral",
    },
    {
      phrase: "If I were you, I'd...",
      level: "B2",
      use: "to give advice by imagining yourself in the other person's situation",
      azUse:
        "Özünü qarşı tərəfin yerinə qoyaraq məsləhət vermək üçün istifadə olunur və ikinci tip şərt cümləsi (second conditional) üzərində qurulur. 'You should…'-dan daha yumşaq və qayğılı səslənir, çünki birbaşa əmr yox, şəxsi fikir kimi təqdim edir. Həm dostluq, həm də işgüzar söhbətlərdə rahat işlənir; 'I'd' burada 'I would'-un qısaldılmış formasıdır.",
      example: "If I were you, I'd apply for that job before the deadline.",
      register: "neutral",
    },
    {
      phrase: "Have you thought about...?",
      level: "B2",
      use: "to suggest an option gently, as something to consider",
      azUse:
        "Bir variantı təzyiq etmədən, sadəcə düşünməyə dəyər bir fikir kimi təklif etmək üçün işlənir. Ardınca isim və ya -ing forması gəlir ('Have you thought about moving?') və qarşı tərəfin seçimə hörmət göstərdiyini hiss etdirir. Həm dostlar, həm də iş mühiti üçün uyğundur; nəzakətli və açıq fikirli səsləndiyi üçün həssas mövzularda xüsusən faydalıdır.",
      example: "Have you thought about studying abroad for a year?",
      register: "neutral",
    },
    {
      phrase: "I'd suggest...",
      level: "B2",
      use: "a polite, professional way to recommend a course of action",
      azUse:
        "Peşəkar və nəzakətli şəkildə tövsiyə vermək üçün işlənir; ardınca ya isim, ya -ing forması, ya da '(that) you…' cümləsi gələ bilər. İş yığıncaqlarında, müştəri ilə söhbətdə və rəsmi e-poçtlarda çox uyğundur, çünki fikrini özünə inamlı, amma təzyiqsiz çatdırır. 'I'd' burada 'I would'-dur və ifadəni daha yumşaq edir — 'I suggest…' bir az daha qətidir.",
      example: "I'd suggest booking the tickets early to get a better price.",
      register: "formal",
    },
    {
      phrase: "It might be worth -ing...",
      level: "C1",
      use: "to suggest something is worth considering, in a tentative way",
      azUse:
        "Nəyinsə cəhd etməyə və ya nəzərə almağa dəyər ola biləcəyini çox ehtiyatlı və təvazökar şəkildə bildirmək üçün işlənir. 'Might' və 'worth' birlikdə fikri yumşaldır ki, qarşı tərəf üzərində heç bir təzyiq hiss etməsin. Yüksək səviyyəli, rəsmi və peşəkar üslubdur; məsləhəti incə şəkildə vermək istədiyin iş və akademik mühitlərdə özünü təbii göstərir.",
      example: "It might be worth checking the contract again before you sign it.",
      register: "formal",
    },
    {
      phrase: "If I might make a suggestion, ...",
      level: "C1",
      use: "a very polite, formal way to introduce a suggestion",
      azUse:
        "Təklif verməzdən əvvəl icazə istəyirmiş kimi səslənən, çox rəsmi və nəzakətli giriş ifadəsidir. Adətən yığıncaqlarda, rəsmi müzakirələrdə və ya yuxarı vəzifəli, yaxşı tanımadığın adamlarla danışarkən, fikrini ehtiramla irəli sürmək üçün işlənir. 'Might' burada nəzakəti gücləndirir; gündəlik dostcasına söhbətlərdə isə həddən artıq təmtəraqlı səslənə bilər.",
      example:
        "If I might make a suggestion, we could postpone the launch until the testing is finished.",
      register: "formal",
    },
    {
      phrase: "Let's...",
      level: "B1",
      use: "to suggest doing something together in a quick, enthusiastic way",
      azUse:
        "Birlikdə nəsə etməyi tez və həvəslə təklif etmək üçün ən sadə yoldur; ardınca həmişə feilin əsas forması gəlir ('Let's go', 'Let's start'). 'Let us'-un qısaldılmış formasıdır və danışıqda demək olar ki, həmişə qısa şəkildə işlənir. Çox qeyri-rəsmi və canlı səsləndiyi üçün dostlar, ailə və komanda yoldaşları arasında təbii görünür, rəsmi yığıncaqda isə bir az təsadüfi qala bilər.",
      example: "Let's take a short break and continue after lunch.",
      register: "informal",
    },
    {
      phrase: "You might want to...",
      level: "B2",
      use: "to give advice gently, without sounding pushy",
      azUse:
        "Kiməsə nə etməyin yaxşı olacağını çox yumşaq və təzyiqsiz şəkildə bildirmək üçün işlənir; 'You should…'-dan daha incə səslənir, çünki qərarı qarşı tərəfin öz əlinə buraxır. 'Might' burada ehtiyat və nəzakət qatır, ona görə həssas mövzularda və ya yeni tanış olduğun adamla danışarkən faydalıdır. Həm dostcasına, həm də işgüzar söhbətlərdə rahat işlənir.",
      example: "You might want to back up your files before updating the system.",
      register: "neutral",
    },
    {
      phrase: "What if we...?",
      level: "B2",
      use: "to float a possible idea and invite the other person to consider it",
      azUse:
        "Mümkün bir fikri ortaya atıb qarşı tərəfi onu birlikdə düşünməyə dəvət etmək üçün işlənir; ardınca adətən indiki zamanda feil gəlir ('What if we tried…'). Beyin fırtınası, plan qurma və komanda müzakirələrində xüsusən faydalıdır, çünki təklifi qəti qərar kimi yox, açıq variant kimi təqdim edir. Neytral tona malikdir, ona görə həm dostlar arası, həm də iş mühitində təbii səslənir.",
      example: "What if we moved the meeting to Friday so everyone can join?",
      register: "neutral",
    },
    {
      phrase: "I would recommend...",
      level: "C1",
      use: "to give a confident, professional recommendation",
      azUse:
        "Peşəkar və özünə inamlı şəkildə tövsiyə vermək üçün işlənir; ardınca isim, -ing forması və ya '(that) you…' cümləsi gələ bilər. Rəsmi e-poçtlarda, hesabatlarda, müştəri görüşlərində və ekspert rəyi bildirərkən çox uyğundur, çünki ciddi və etibarlı təsir bağışlayır. 'I'd suggest…'-dən bir qədər daha qəti və nüfuzlu səslənir, ona görə təcrübənə əsaslanan fikir bildirəndə xüsusən yerinə düşür.",
      example: "I would recommend reviewing the figures with the finance team before the presentation.",
      register: "formal",
    },
    {
      phrase: "Perhaps you could consider...",
      level: "C1",
      use: "a very tactful, formal way to put forward an option",
      azUse:
        "Bir variantı çox nəzakətli, diplomatik və ehtiyatlı şəkildə irəli sürmək üçün işlənir; 'perhaps' və 'could' birlikdə fikri olduqca yumşaldır. Yüksək rəsmi üslubdur və adətən yazılı işgüzar yazışmalarda, rəsmi müzakirələrdə və ya həssas vəziyyətlərdə, qarşı tərəfi incitmədən təklif verəndə işlənir. Gündəlik dostcasına söhbətlərdə isə həddən artıq rəsmi və uzaq səslənə bilər.",
      example: "Perhaps you could consider outsourcing the design work to meet the deadline.",
      register: "formal",
    },
  ],
  practice: [
    {
      type: "multiple-choice",
      prompt: "Which phrase is the most polite and formal way to introduce a suggestion in a meeting?",
      options: [
        "If I might make a suggestion, ...",
        "How about...?",
        "Why don't we...?",
      ],
      answer: 0,
      explanation:
        "\"If I might make a suggestion, ...\" is a very formal, polite opener, ideal for meetings. \"How about...?\" and \"Why don't we...?\" are informal.",
    },
    {
      type: "multiple-choice",
      prompt: "Which phrase gives advice by imagining yourself in someone else's situation?",
      options: [
        "I'd suggest booking early.",
        "If I were you, I'd apply now.",
        "How about a coffee?",
      ],
      answer: 1,
      explanation:
        "\"If I were you, I'd...\" uses the second conditional to give advice from the other person's point of view.",
    },
    {
      type: "gap-fill",
      prompt: "___ don't we meet at the cafe before the film? (suggesting doing something together)",
      answer: "Why",
      explanation:
        "\"Why don't we...?\" is a friendly way to suggest doing something together.",
    },
    {
      type: "gap-fill",
      prompt: "If I ___ you, I'd apply for that job before the deadline. (advice)",
      answer: "were",
      explanation:
        "\"If I were you, I'd...\" uses 'were' for all subjects in this second-conditional advice pattern.",
    },
    {
      type: "gap-fill",
      prompt: "How ___ ordering some food and watching a movie tonight? (proposing an idea)",
      answer: "about",
      explanation:
        "\"How about + -ing\" proposes an activity in an informal way.",
    },
    {
      type: "multiple-choice",
      prompt: "Which phrase is the most tentative, suggesting something is simply worth considering?",
      options: [
        "You should sign it.",
        "It might be worth checking the contract again.",
        "Why don't we sign it?",
      ],
      answer: 1,
      explanation:
        "\"It might be worth -ing\" is tentative and polite. \"You should\" is direct, and \"Why don't we?\" is an informal suggestion.",
    },
  ],
};
