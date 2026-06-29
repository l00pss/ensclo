import type { ReferenceGroup } from "../reference";
import type { FunctionalPhrase } from "../types";
import { MessagesSquare } from "lucide-react";

export const fnNegotiating: ReferenceGroup<FunctionalPhrase> = {
  id: "negotiating",
  label: "Persuading & Negotiating",
  azLabel: "İnandırma və danışıq",
  icon: MessagesSquare,
  description:
    "Phrases for persuading people and negotiating — stating your position, proposing compromises and showing what you can and cannot accept.",
  azDescription:
    "Bu qrup qarşı tərəfi inandırmaq, fikrini əsaslandırmaq və hər iki tərəfi qane edən razılığa gəlmək üçün lazım olan ifadələri əhatə edir. Danışıqlarda sözün necə deyilməsi nəticəyə birbaşa təsir edir: 'The way I see it…' fikrini özünə inamla təqdim edir, 'How about we meet halfway?' isə güzəştə hazır olduğunu göstərir. Burada həm iş görüşlərində, həm də gündəlik mübahisələrdə fikrini sərt deyil, nəzakətli və konkret şəkildə çatdırmağı, eyni zamanda razılaşma əldə etməyi öyrənəcəksən.",
  items: [
    {
      phrase: "The way I see it, ...",
      level: "B2",
      use: "to introduce your position or interpretation of a situation",
      azUse:
        "Bir vəziyyəti necə başa düşdüyünü, öz baxış bucağını təqdim etmək üçün işlənir. Fikrini qəti həqiqət kimi deyil, sənin yozumun kimi göstərir, ona görə qarşı tərəf razılaşmasa belə söhbəti açıq saxlayır. Həm iş yığıncaqlarında, həm də dostlarla mübahisədə işlənə bilən neytral ifadədir; danışığa öz mövqeyini bildirməklə başlamaq üçün təbii bir girişdir.",
      example: "The way I see it, we both lose if we can't agree today.",
      register: "neutral",
    },
    {
      phrase: "How about we meet halfway?",
      level: "B2",
      use: "to suggest a compromise where both sides give up something",
      azUse:
        "Hər iki tərəfin bir az güzəştə getməsi ilə ortaq nöqtədə razılaşmağı təklif etmək üçün işlənir; 'meet halfway' məcazi olaraq 'yarı yolda görüşmək', yəni güzəştə getmək deməkdir. Dostcasına, lakin işgüzar danışıqlarda da rahat səslənir, çünki sənin də güzəştə hazır olduğunu göstərir. Çıxılmaz vəziyyəti yumşaltmaq və söhbəti irəli aparmaq üçün çox faydalı bir ifadədir.",
      example: "How about we meet halfway and split the extra cost?",
      register: "neutral",
    },
    {
      phrase: "Would you be willing to...?",
      level: "B2",
      use: "to politely ask if the other side will agree to something",
      azUse:
        "Qarşı tərəfin bir şeyə razı olub-olmayacağını nəzakətlə soruşmaq üçün işlənir; 'willing to' onun könüllü razılığını vurğulayır. Birbaşa 'Will you…?' demədən, təzyiqsiz və hörmətli şəkildə təklif irəli sürür, ona görə rəsmi danışıqlara və iş yazışmalarına çox uyğundur. Qarşı tərəfə seçim hüququ tanıdığı üçün razılaşma şansını artıran incə bir ifadədir.",
      example: "Would you be willing to extend the deadline by a few days?",
      register: "formal",
    },
    {
      phrase: "Let's find a compromise.",
      level: "B2",
      use: "to propose working together towards a solution both sides accept",
      azUse:
        "Hər iki tərəfin qəbul edə biləcəyi bir orta həll tapmağı birgə təklif etmək üçün işlənir; 'compromise' qarşılıqlı güzəşt deməkdir. Söhbəti mübahisədən əməkdaşlığa yönəldir və 'biz bunu birlikdə həll edə bilərik' mesajını verir. Neytral, lakin konstruktiv səsləndiyi üçün həm iş görüşlərində, həm də şəxsi mübahisələrdə gərginliyi azaltmaq üçün çox işlədilir.",
      example: "We don't have to argue about this — let's find a compromise.",
      register: "neutral",
    },
    {
      phrase: "That works for me.",
      level: "B1",
      use: "to show that you accept a proposal or arrangement",
      azUse:
        "Təklif olunan bir şeyin (vaxt, plan, şərt) sənə uyğun olduğunu, razı olduğunu bildirmək üçün işlənir. Sadə və dostcasına səslənir, eyni zamanda iş mühitində də tamamilə yerindədir, ona görə geniş istifadə olunan neytral təsdiq ifadəsidir. Danışıqda bir nöqtəyə razılıq verib irəli getmək üçün qısa və təbii bir yoldur.",
      example: "Friday at noon? That works for me.",
      register: "neutral",
    },
    {
      phrase: "I can live with that.",
      level: "B2",
      use: "to accept something that is not ideal but acceptable",
      azUse:
        "İdeal olmasa da, dözə biləcəyin, qəbul edə biləcəyin bir şərtə razılıq vermək üçün işlənir. Tam məmnun olmadığını, amma güzəştə getməyə hazır olduğunu incə şəkildə bildirir, ona görə danışıqlarda razılaşmanı bağlayan praktik bir ifadədir. Bir qədər qeyri-rəsmi, danışıq dilinə xas səslənir; rəsmi yazıdan çox canlı görüşlərə daha uyğundur.",
      example: "It's not exactly what I wanted, but I can live with that.",
      register: "neutral",
    },
    {
      phrase: "I take your point, but ...",
      level: "C1",
      use: "to acknowledge the other side's argument before disagreeing",
      azUse:
        "Qarşı tərəfin fikrini qəbul etdiyini göstərib sonra öz etirazını və ya fərqli mövqeyini bildirmək üçün işlənir; 'take your point' 'fikrini anladım/qəbul edirəm' deməkdir. Əvvəlcə razılaşaraq başlaması etirazını daha nəzakətli və inandırıcı edir, ona görə rəsmi müzakirələrdə və iş danışıqlarında çox dəyərlidir. Mübahisəni qızışdırmadan öz arqumentini irəli sürmək üçün peşəkar bir keçid ifadəsidir.",
      example: "I take your point, but the budget simply won't stretch that far.",
      register: "formal",
    },
    {
      phrase: "Could we possibly come to an arrangement?",
      level: "C1",
      use: "a very polite, formal way to invite a mutual agreement",
      azUse:
        "Hər iki tərəfi qane edən rəsmi razılaşmaya gəlməyi çox nəzakətli şəkildə təklif etmək üçün işlənir; 'come to an arrangement' rəsmi olaraq 'razılaşmaya gəlmək' deməkdir. 'Could' və 'possibly' birlikdə ifadəni daha yumşaq və ehtiramlı edir, ona görə işgüzar görüşlərdə, müştəri və ya tərəfdaşlarla danışıqlarda çox yaraşır. Yüksək səviyyəli, rəsmi üslubdur; gündəlik dostcasına söhbətlərdə isə həddən artıq təmtəraqlı səslənə bilər.",
      example:
        "Could we possibly come to an arrangement that suits both of our teams?",
      register: "formal",
    },
    {
      phrase: "Let me put it this way.",
      level: "B1",
      use: "to rephrase your point more clearly or persuasively",
      azUse:
        "Fikrini başqa, daha aydın və ya daha inandırıcı sözlərlə yenidən izah etmək istəyəndə işlənir; qarşı tərəf səni tam başa düşməyəndə söhbəti yumşaq şəkildə yenidən qurmağa kömək edir. Həm dostcasına söhbətlərdə, həm də iş danışıqlarında rahat səslənən neytral bir keçid ifadəsidir. Mövqeyini sıfırdan deyil, yeni bir bucaqdan təqdim edib qarşı tərəfi inandırmaq üçün təbii bir vasitədir.",
      example: "Let me put it this way: if we wait, we'll lose the contract.",
      register: "neutral",
    },
    {
      phrase: "I'm afraid that's out of the question.",
      level: "B2",
      use: "to firmly but politely refuse something as impossible",
      azUse:
        "Bir təklifin və ya tələbin qətiyyən mümkün olmadığını nəzakətli, lakin qəti şəkildə bildirmək üçün işlənir; 'out of the question' 'söhbət belə ola bilməz', yəni tamamilə qeyri-mümkün deməkdir. 'I'm afraid' əvvəlinə əlavə olunaraq rədd cavabını daha yumşaq və hörmətli edir, ona görə rəsmi danışıqlara və müştəri ilə söhbətlərə uyğundur. Sərhədini aydın qoyarkən münasibəti pozmamaq üçün incə bir ifadədir.",
      example: "Lowering the price by half? I'm afraid that's out of the question.",
      register: "formal",
    },
    {
      phrase: "If you can do X, then I can do Y.",
      level: "B2",
      use: "to offer a conditional trade-off in a negotiation",
      azUse:
        "Danışıqda şərtli güzəşt təklif etmək üçün işlənir: 'sən bunu etsən, mən də bunu edərəm' məntiqi ilə qarşılıqlı mübadilə qurur. Hər iki tərəfin nə verib nə alacağını aydın göstərdiyi üçün razılaşmanı irəli aparan praktik və neytral bir formuladır. Həm bazarlıqda, həm də iş müqavilələrində öz təklifini qarşı tərəfin addımına bağlamaq üçün çox işlədilir.",
      example: "If you can pay upfront, then I can give you a ten percent discount.",
      register: "neutral",
    },
    {
      phrase: "Let's not lose sight of the bigger picture.",
      level: "C1",
      use: "to refocus a negotiation on the main goal rather than small details",
      azUse:
        "Danışıq xırda detallarda ilişib qalanda diqqəti yenidən əsas məqsədə yönəltmək üçün işlənir; 'the bigger picture' 'ümumi mənzərə', yəni ən vacib hədəf deməkdir. Söhbəti kiçik mübahisələrdən uzaqlaşdırıb hər iki tərəfin ortaq marağını xatırlatdığı üçün gərginliyi azaldır. Yüksək səviyyəli, peşəkar üsluba aiddir və iş yığıncaqlarında liderlik tonu verən nəzakətli bir ifadədir.",
      example: "We can argue about wording later — let's not lose sight of the bigger picture.",
      register: "formal",
    },
    {
      phrase: "Take it or leave it.",
      level: "B2",
      use: "to present a final offer with no room for further negotiation",
      azUse:
        "Son təklifini irəli sürüb daha güzəşt olmayacağını bildirmək üçün işlənir; 'ya qəbul et, ya da imtina et' mənasını verir və danışığa nöqtə qoyur. Olduqca sərt və qeyri-rəsmi səslənir, ona görə diqqətlə işlədilməlidir — yanlış yerdə deyilsə kobud təsir bağışlaya bilər. Adətən bazarlıqda və ya təzyiq altında son sözünü demək istəyəndə canlı danışıqda işlənir.",
      example: "This is my best price — take it or leave it.",
      register: "informal",
    },
  ],
  practice: [
    {
      type: "multiple-choice",
      prompt: "Which phrase suggests a compromise where both sides give up something?",
      options: [
        "That works for me.",
        "How about we meet halfway?",
        "The way I see it, ...",
      ],
      answer: 1,
      explanation:
        "\"How about we meet halfway?\" proposes that both sides give up something to reach a middle point. The others state agreement or introduce your view.",
    },
    {
      type: "multiple-choice",
      prompt: "Which phrase politely acknowledges the other person's argument before you disagree?",
      options: [
        "I can live with that.",
        "I take your point, but ...",
        "That works for me.",
      ],
      answer: 1,
      explanation:
        "\"I take your point, but ...\" first accepts the other side's argument, which makes your disagreement more polite and persuasive.",
    },
    {
      type: "multiple-choice",
      prompt: "Which phrase is the most polite, formal way to invite a mutual agreement?",
      options: [
        "Could we possibly come to an arrangement?",
        "How about we meet halfway?",
        "That works for me.",
      ],
      answer: 0,
      explanation:
        "\"Could we possibly come to an arrangement?\" uses 'could' and 'possibly' to sound very polite and formal, ideal for business negotiations.",
    },
    {
      type: "gap-fill",
      prompt: "How about we meet ___ and split the extra cost? (compromise: half + way)",
      answer: "halfway",
      explanation:
        "\"Meet halfway\" means to compromise so that both sides give up something.",
    },
    {
      type: "gap-fill",
      prompt: "Would you be ___ to extend the deadline by a few days? (polite request for agreement)",
      answer: "willing",
      explanation:
        "\"Would you be willing to...?\" politely asks if the other person will agree to do something.",
    },
    {
      type: "gap-fill",
      prompt: "It's not exactly what I wanted, but I can ___ with that. (reluctant acceptance)",
      answer: "live",
      explanation:
        "\"I can live with that\" accepts something that is not ideal but still acceptable.",
    },
  ],
};
