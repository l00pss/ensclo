import type { ReferenceGroup } from "../reference";
import type { FunctionalPhrase } from "../types";
import { Frown } from "lucide-react";

export const fnComplaints: ReferenceGroup<FunctionalPhrase> = {
  id: "complaints",
  label: "Complaints",
  azLabel: "Şikayət",
  icon: Frown,
  description:
    "Phrases for making polite complaints and for responding helpfully when someone complains to you.",
  azDescription:
    "Bu qrup məhsul, xidmət və ya yaranmış problemdən narazı olduğunuzda necə nəzakətlə şikayət edəcəyinizi öyrədir. Burada şikayəti yumşaq və hörmətlə başlatmağa kömək edən rəsmi ifadələr (I'm afraid I have a complaint, This isn't what I expected) və problemi konkret izah etmək üçün lazım olan cümlələr var. Eyni zamanda kiminsə şikayətinə peşəkar və empatik şəkildə cavab vermək (I'm sorry to hear that, We'll sort it out right away) də göstərilir ki, gərginliyi azaldıb məsələni sakit həll edə biləsiniz.",
  items: [
    {
      phrase: "I'm afraid I have a complaint.",
      level: "B2",
      use: "a polite, formal way to signal that you are about to complain",
      azUse:
        "Şikayət etməyə başlamazdan əvvəl qarşı tərəfi nəzakətlə xəbərdar etmək üçün işlədilən rəsmi ifadədir. \"I'm afraid\" hissəsi tonu yumşaldır və narazılığınızı kobud yox, mədəni səsləndirir. Otel, restoran, mağaza və ya müştəri xidmətində, tanımadığınız adamlarla danışarkən çox uyğundur.",
      example: "I'm afraid I have a complaint about the service I received yesterday.",
      register: "formal",
    },
    {
      phrase: "I'm calling about a problem with my order.",
      level: "B1",
      use: "to state clearly at the start of a phone call what the problem concerns",
      azUse:
        "Telefonla zəng edib şikayətin nə ilə bağlı olduğunu lap əvvəldən aydın bildirmək üçün istifadə olunur. Bu cümlə müştəri xidmətinə vaxt itirmədən mövzunu çatdırır və söhbəti düzgün istiqamətə yönəldir. \"order\" sözünü \"delivery\", \"booking\" və ya başqa sözlərlə əvəz edərək müxtəlif situasiyalara uyğunlaşdıra bilərsiniz.",
      example: "Hello, I'm calling about a problem with my order — it arrived damaged.",
      register: "neutral",
    },
    {
      phrase: "This isn't what I expected.",
      level: "B1",
      use: "to express disappointment that something is not as good as you thought it would be",
      azUse:
        "Bir şeyin gözlədiyiniz keyfiyyətdə və ya formada olmadığını bildirmək üçün işlədilən ifadədir. Açıq narazılıq bildirir, amma kobud səslənmir, ona görə həm gündəlik, həm də iş situasiyalarında rahat işlənir. Çox vaxt problemi konkretləşdirməzdən əvvəl ümumi məyusluğu çatdırmaq üçün deyilir.",
      example: "I'm sorry, but this isn't what I expected — the room is much smaller than in the photos.",
      register: "neutral",
    },
    {
      phrase: "I'd like to speak to the manager, please.",
      level: "B2",
      use: "a firm but polite way to escalate a complaint to someone in charge",
      azUse:
        "Şikayəti daha yuxarı səviyyəyə, məsul şəxsə çatdırmaq istədiyinizi bildirən qətiyyətli, amma nəzakətli ifadədir. \"please\" sözü kəskinliyi azaldıb tələbi mədəni saxlayır. Adətən problem ilkin işçi tərəfindən həll olunmayanda və ya daha ciddi addım atmaq lazım gələndə işlədilir.",
      example: "I appreciate your help, but I'd like to speak to the manager, please.",
      register: "formal",
    },
    {
      phrase: "This really isn't good enough.",
      level: "B2",
      use: "a stronger, slightly informal way to show you are dissatisfied and expect better",
      azUse:
        "Narazılığınızı daha güclü şəkildə, lakin yenə də kobud olmadan bildirmək üçün işlədilən, bir az qeyri-rəsmi ifadədir. Vəziyyətin qəbuledilməz olduğunu və daha yaxşısını gözlədiyinizi vurğulayır. Çox ciddi və ya çox rəsmi məqamlardan çox, qıcıqlandığınız adi situasiyalarda işlədilir, ona görə tonuna diqqət etmək lazımdır.",
      example: "I've waited over an hour for my food — this really isn't good enough.",
      register: "informal",
    },
    {
      phrase: "I'm sorry to hear that.",
      level: "B1",
      use: "an empathetic way to respond when someone tells you about a problem",
      azUse:
        "Kimsə problemindən və ya narazılığından danışanda empatiya göstərmək üçün işlədilən cavabdır. Qarşı tərəfin hisslərini tanıyır və söhbəti sakit, mehriban tonda saxlayır. Müştəri xidmətində şikayətə cavab verərkən demək olar ki, ilk deyilən cümlədir, çünki gərginliyi dərhal azaldır.",
      example: "I'm sorry to hear that. Let me see what I can do to fix it for you.",
      register: "neutral",
    },
    {
      phrase: "We'll sort it out right away.",
      level: "B2",
      use: "to reassure a customer that you will deal with their problem immediately",
      azUse:
        "Müştərini problemin dərhal həll olunacağına əmin etmək üçün işlədilən ifadədir. \"sort it out\" Britaniya İngiliscəsində \"həll etmək\" mənasında geniş istifadə olunan qeyri-rəsmi feildir, \"right away\" isə \"dərhal\" deməkdir. Şikayətə cavab verərkən peşəkar və həllyönümlü təəssürat yaradır.",
      example: "Don't worry — we'll sort it out right away and send you a replacement.",
      register: "informal",
    },
    {
      phrase: "Please accept our sincere apologies for the inconvenience.",
      level: "C1",
      use: "a formal, professional way to apologise in response to a complaint",
      azUse:
        "Şikayətə rəsmi və peşəkar şəkildə üzr istəyərək cavab vermək üçün işlədilən ifadədir. Adətən müştəri məktublarında, e-poçtlarda və ya rəsmi telefon danışıqlarında deyilir. \"inconvenience\" sözü yaranmış narahatlığa nəzakətli işarə edir və şirkəti məsuliyyətli, hörmətli göstərir.",
      example:
        "Please accept our sincere apologies for the inconvenience — we are taking steps to make sure this does not happen again.",
      register: "formal",
    },
    {
      phrase: "I'd like to make a formal complaint.",
      level: "C1",
      use: "to state explicitly that you want your complaint recorded officially",
      azUse:
        "Şikayətinizin sadəcə söhbət deyil, rəsmi qaydada qeydə alınmasını istədiyinizi bildirmək üçün işlədilən ifadədir. \"formal\" sözü məsələnin ciddi olduğunu və adi narazılıqdan fərqli olaraq yazılı prosedur tələb etdiyini vurğulayır. Adətən bank, dövlət idarəsi və ya iri şirkətlərlə problem yaşadıqda, məsələni sənədləşdirmək istədiyiniz hallarda deyilir.",
      example: "If this can't be resolved today, I'd like to make a formal complaint.",
      register: "formal",
    },
    {
      phrase: "Could you tell me what exactly went wrong?",
      level: "B2",
      use: "to ask a complaining customer for details so you can understand the problem",
      azUse:
        "Şikayət edən adamdan problemin təfərrüatlarını öyrənmək, nəyin səhv getdiyini dəqiqləşdirmək üçün verilən nəzakətli sualdır. \"exactly\" sözü konkret məlumat istədiyinizi göstərir və vəziyyəti düzgün başa düşməyə kömək edir. Müştəri xidmətində işləyən şəxs məsələni həll etməzdən əvvəl faktları aydınlaşdırmaq üçün bu sualı verir.",
      example: "I'm sorry you're unhappy — could you tell me what exactly went wrong?",
      register: "neutral",
    },
    {
      phrase: "I expect a full refund.",
      level: "B2",
      use: "to state firmly what compensation you want as a result of the problem",
      azUse:
        "Yaşanan problemə görə pulunuzun tam geri qaytarılmasını qətiyyətlə tələb etmək üçün işlədilən ifadədir. \"expect\" feili burada gözlənti yox, möhkəm tələb bildirir, ona görə tonu ciddidir. Məhsul və ya xidmət tamamilə qüsurlu olduqda, kompensasiya tələbinizi açıq qoymaq istədiyiniz hallarda işlədilir.",
      example: "The product was faulty from day one, so I expect a full refund.",
      register: "neutral",
    },
    {
      phrase: "Thank you for bringing this to our attention.",
      level: "C1",
      use: "a polite, professional way to acknowledge a customer's complaint",
      azUse:
        "Müştərinin şikayətini peşəkar və minnətdar tonda qəbul etmək üçün işlədilən rəsmi ifadədir. Narazılığı problem kimi yox, şirkətin daha yaxşı olması üçün faydalı geri-bildirim kimi dəyərləndirir. E-poçtlarda, rəsmi cavablarda və müştəri xidmətində gərginliyi azaldıb hörmətli təəssürat yaratmaq üçün geniş işlədilir.",
      example: "Thank you for bringing this to our attention — we'll look into it immediately.",
      register: "formal",
    },
    {
      phrase: "There seems to be a bit of a problem with this.",
      level: "B1",
      use: "a gentle, indirect way to point out that something is wrong",
      azUse:
        "Bir şeyin səhv olduğunu çox yumşaq və dolayı yolla bildirmək üçün işlədilən gündəlik ifadədir. \"seems to be\" və \"a bit of\" hissələri narazılığı kobudlaşdırmadan, mehriban tonda çatdırır. Tanıdığınız adamlarla və ya münaqişədən qaçmaq istədiyiniz adi situasiyalarda şikayəti incə şəkildə başlatmaq üçün çox uyğundur.",
      example: "Sorry to bother you, but there seems to be a bit of a problem with this bill.",
      register: "informal",
    },
  ],
  practice: [
    {
      type: "multiple-choice",
      prompt: "Which phrase politely signals that you are about to make a complaint?",
      options: [
        "I'm afraid I have a complaint.",
        "We'll sort it out right away.",
        "I'm sorry to hear that.",
      ],
      answer: 0,
      explanation:
        "\"I'm afraid I have a complaint\" softens the start of a complaint and is polite and formal. The other two are responses you give when someone complains to you.",
    },
    {
      type: "multiple-choice",
      prompt: "A customer is upset. Which is the most empathetic way to respond?",
      options: [
        "This really isn't good enough.",
        "I'm sorry to hear that.",
        "This isn't what I expected.",
      ],
      answer: 1,
      explanation:
        "\"I'm sorry to hear that\" shows empathy and calms the situation. The other options are complaints made by a dissatisfied customer, not responses.",
    },
    {
      type: "multiple-choice",
      prompt: "Which phrase reassures a customer that you will fix the problem immediately?",
      options: [
        "I'd like to speak to the manager.",
        "We'll sort it out right away.",
        "This isn't what I expected.",
      ],
      answer: 1,
      explanation:
        "\"We'll sort it out right away\" tells the customer the problem will be dealt with immediately. The other options either escalate or express a complaint.",
    },
    {
      type: "gap-fill",
      prompt: "I'd like to speak to the ___, please. (the person in charge)",
      answer: "manager",
      explanation:
        "\"I'd like to speak to the manager, please\" is a firm but polite way to escalate a complaint to someone in charge.",
    },
    {
      type: "gap-fill",
      prompt: "Please accept our sincere ___ for the inconvenience. (a formal way to say sorry)",
      answer: "apologies",
      explanation:
        "\"Please accept our sincere apologies for the inconvenience\" is a formal, professional way to apologise in response to a complaint.",
    },
    {
      type: "gap-fill",
      prompt: "I'm calling about a ___ with my order — it arrived damaged. (something wrong)",
      answer: "problem",
      explanation:
        "\"I'm calling about a problem with my order\" clearly states at the start of a phone call what the complaint concerns.",
    },
  ],
};
