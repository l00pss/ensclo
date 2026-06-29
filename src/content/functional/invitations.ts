import type { ReferenceGroup } from "../reference";
import type { FunctionalPhrase } from "../types";
import { CalendarPlus } from "lucide-react";

export const fnInvitations: ReferenceGroup<FunctionalPhrase> = {
  id: "invitations",
  label: "Invitations",
  azLabel: "Dəvət",
  icon: CalendarPlus,
  description:
    "Phrases for inviting people, accepting an invitation with enthusiasm and politely declining one without causing offence.",
  azDescription:
    "Bu qrup kimisə bir yerə və ya birlikdə nəsə etməyə dəvət etmək, dəvəti məmnuniyyətlə qəbul etmək və ya nəzakətlə imtina etmək üçün lazım olan ifadələri əhatə edir. İngiliscədə dəvət vermə üslubu çox vacibdir: 'Would you like to…?' rəsmi və nəzakətli səslənir, 'Do you fancy…?' isə dostlar arasında tamamilə qeyri-rəsmidir. İmtina edərkən isə birbaşa 'no' demək kobud sayılır, ona görə 'I'm afraid I can't make it' kimi yumşaldıcı ifadələrlə üzr istəmək və alternativ təklif etmək (məsələn 'Maybe another time') öyrənəcəksən ki, qarşı tərəfi incitmədən rədd edə biləsən.",
  items: [
    {
      phrase: "Would you like to...?",
      level: "B1",
      use: "a polite, neutral way to invite someone to do something",
      azUse:
        "Kimisə nəsə etməyə nəzakətlə dəvət etmək üçün ən təhlükəsiz və geniş işlənən ifadədir; ardınca feilin əsas forması gəlir ('Would you like to join us?'). Həm rəsmi, həm də qeyri-rəsmi mühitdə işlədilə bilər, ona görə tanımadığın adamla da, dostunla da rahatlıqla istifadə edə bilərsən. Çox nəzakətli səsləndiyi üçün qarşı tərəfə heç bir təzyiq hiss etdirmir və onlara asanlıqla 'yox' demək imkanı verir.",
      example: "Would you like to come over for dinner on Saturday?",
      register: "neutral",
    },
    {
      phrase: "Do you fancy...?",
      level: "B1",
      use: "a casual, friendly way to invite someone, common in British English",
      azUse:
        "Dostcasına və çox qeyri-rəsmi dəvət vermək üçün işlənir; ardınca isim və ya feilin -ing forması gəlir ('Do you fancy a coffee?', 'Do you fancy going out?'). Əsasən Britaniya ingiliscəsində geniş yayılıb və yaxın dostlar, ailə və tanış iş yoldaşları arasında çox təbii səslənir. Rəsmi yığıncaqlarda və ya yuxarı vəzifəli adamlarla danışarkən həddən artıq təsadüfi qaldığına görə bunun əvəzinə 'Would you like to…?' işlətmək daha yaxşıdır.",
      example: "Do you fancy grabbing a coffee after work?",
      register: "informal",
    },
    {
      phrase: "I'd love to.",
      level: "B1",
      use: "an enthusiastic way to accept an invitation",
      azUse:
        "Dəvəti böyük həvəslə və səmimiyyətlə qəbul etmək üçün işlənir; 'I'd' burada 'I would'-un qısaldılmış formasıdır. Sadəcə 'OK' və ya 'yes'-dən daha isti və minnətdar səsləndiyi üçün qarşı tərəfə dəvətdən doğrudan da sevindiyini hiss etdirir. Həm rəsmi, həm qeyri-rəsmi mühitdə işlənir; istəsən ardınca səbəb əlavə edə bilərsən ('I'd love to, thanks for asking').",
      example: "I'd love to. What time should I come?",
      register: "neutral",
    },
    {
      phrase: "That sounds great.",
      level: "B1",
      use: "a friendly, informal way to show you like the idea and accept",
      azUse:
        "Təklif olunan plana razı olduğunu və onu bəyəndiyini dostcasına bildirmək üçün işlənir. Adətən dəvəti qəbul edərkən reaksiya kimi deyilir ('Dinner on Saturday?' — 'That sounds great!') və müsbət, rahat bir ton yaradır. Qeyri-rəsmi və yarı-rəsmi mühitlərə uyğundur; daha rəsmi cavab istəyirsənsə 'That sounds lovely' və ya 'I'd be delighted' işlədə bilərsən.",
      example: "A trip to the coast? That sounds great, count me in!",
      register: "informal",
    },
    {
      phrase: "I'd be delighted to.",
      level: "B2",
      use: "a formal, warm way to accept an invitation",
      azUse:
        "Dəvəti çox nəzakətli və rəsmi şəkildə, eyni zamanda səmimi tonla qəbul etmək üçün işlənir. Rəsmi tədbirlərə, iş yeməklərinə və ya yuxarı vəzifəli adamların dəvətlərinə cavab verərkən xüsusən uyğundur, çünki həm hörmət, həm də həvəs bildirir. Gündəlik dostcasına söhbətdə isə bir az təmtəraqlı səsləndiyinə görə orada 'I'd love to' daha təbii qalır.",
      example: "Thank you for the invitation — I'd be delighted to attend.",
      register: "formal",
    },
    {
      phrase: "I'm afraid I can't make it.",
      level: "B2",
      use: "a polite way to decline because you are unable to come",
      azUse:
        "Bir dəvəti gələ bilməyəcəyini nəzakətlə bildirmək üçün ən geniş işlənən ifadədir; 'I'm afraid' burada peşmanlıq və üzr çaları əlavə edir. Birbaşa 'I can't come' deməkdən daha yumşaq və mehriban səsləndiyinə görə qarşı tərəfi incitmir. Həm rəsmi, həm qeyri-rəsmi mühitə uyğundur və adətən ardınca qısa səbəb gəlir ('…I've got other plans'), bu da imtananı daha səmimi göstərir.",
      example: "Thanks for inviting me, but I'm afraid I can't make it on Friday.",
      register: "neutral",
    },
    {
      phrase: "Maybe another time.",
      level: "B1",
      use: "to soften a refusal by suggesting a future occasion",
      azUse:
        "İmtinanı yumşaltmaq və qarşı tərəfə gələcəkdə birlikdə vaxt keçirməyə açıq olduğunu göstərmək üçün işlənir. Adətən imtinadan sonra əlavə edilir ('I can't tonight — maybe another time') ki, rədd cavabı son və soyuq səslənməsin. Daha çox qeyri-rəsmi və yarı-rəsmi söhbətlərə uyğundur; bu ifadə münasibəti qoruyub saxlamağa kömək edir və ümid verir ki, növbəti dəfə razılaşa bilərsiniz.",
      example: "I'm busy this weekend, but maybe another time?",
      register: "informal",
    },
    {
      phrase: "I'd really like to, but unfortunately I have a prior commitment.",
      level: "C1",
      use: "a formal, very polite way to decline while showing genuine regret",
      azUse:
        "Dəvəti rəsmi və çox nəzakətli şəkildə, eyni zamanda səmimi peşmanlıq bildirərək rədd etmək üçün işlənir. 'I'd really like to' əvvəlcə həvəsini göstərir, 'a prior commitment' isə əvvəlcədən başqa öhdəliyin olduğunu detallara girmədən, peşəkar şəkildə izah edir. Rəsmi e-poçtlarda, iş dəvətlərində və yaxşı tanımadığın adamlarla işlənir; bu üslub imtananı həm hörmətli, həm də inandırıcı edir.",
      example:
        "I'd really like to, but unfortunately I have a prior commitment that evening.",
      register: "formal",
    },
    {
      phrase: "Why don't you join us?",
      level: "B1",
      use: "a warm, friendly way to invite someone to be part of a group activity",
      azUse:
        "Kimisə artıq planlaşdırılmış bir qrup fəaliyyətinə qoşulmağa səmimi və dostcasına dəvət etmək üçün işlənir; sual formasında olsa da, əslində mehriban bir təklifdir. Sözün açılışı 'Why don't you…?' burada təzyiq deyil, isti bir dəvət çaları daşıyır, ona görə qarşı tərəf özünü istənilən hiss edir. Daha çox qeyri-rəsmi və yarı-rəsmi mühitlərə, dostlar və tanış həmkarlarla söhbətə uyğundur; rəsmi dəvətdə isə 'Would you like to join us?' daha münasibdir.",
      example: "We're going to the cinema tonight — why don't you join us?",
      register: "informal",
    },
    {
      phrase: "It would be a pleasure to have you.",
      level: "C1",
      use: "a formal, gracious way to invite someone and make them feel welcome",
      azUse:
        "Kimisə çox nəzakətli və zərif şəkildə dəvət etmək, eyni zamanda onun iştirakının sənin üçün şərəf olduğunu vurğulamaq üçün işlənir. Bu ifadə xüsusilə rəsmi tədbirlərdə, iş yeməklərində və ya hörmətli qonaqları dəvət edərkən uyğundur, çünki həm incəlik, həm də səmimi qonaqpərvərlik bildirir. Gündəlik dostcasına söhbətdə bir az təmtəraqlı səsləndiyinə görə orada daha sadə 'You're welcome to come along' işlətmək təbii qalır.",
      example: "Our conference is next month, and it would be a pleasure to have you.",
      register: "formal",
    },
    {
      phrase: "I really appreciate the invite, but I'll have to pass this time.",
      level: "B2",
      use: "a friendly yet clear way to decline while thanking the person",
      azUse:
        "Dəvəti rədd edərkən əvvəlcə minnətdarlıq bildirmək, sonra isə bu dəfə qatıla bilməyəcəyini aydın amma mehriban şəkildə demək üçün işlənir; 'I'll have to pass' yumşaq bir imtina ifadəsidir. 'Invite' burada 'invitation'-un qeyri-rəsmi formasıdır, ona görə bu cümlə dostlar və tanış həmkarlar arasında daha təbii səslənir. Təşəkkürlə imtananı birləşdirdiyi üçün qarşı tərəfi incitmir və münasibəti zədələmir.",
      example: "I really appreciate the invite, but I'll have to pass this time — work is hectic.",
      register: "informal",
    },
    {
      phrase: "Let me check my schedule and get back to you.",
      level: "B2",
      use: "a polite way to delay your answer to an invitation without refusing outright",
      azUse:
        "Dəvətə dərhal 'hə' və ya 'yox' demək əvəzinə, cavabı nəzakətlə təxirə salmaq və vaxtını yoxladıqdan sonra xəbər verəcəyini bildirmək üçün işlənir. Bu ifadə həm rəsmi, həm qeyri-rəsmi mühitə uyğundur və qarşı tərəfə özünü rədd edilmiş hiss etdirmədən sənə düşünmək vaxtı qazandırır. Xüsusən iş mühitində və ya plansız anlarda çox faydalıdır, çünki səni tələsik söz verməkdən qoruyur.",
      example: "Thanks for asking — let me check my schedule and get back to you tomorrow.",
      register: "neutral",
    },
    {
      phrase: "We'd be honoured if you could attend.",
      level: "C1",
      use: "a very formal, respectful way to invite someone to an important event",
      azUse:
        "Kimisə mühüm və rəsmi bir tədbirə son dərəcə hörmətlə dəvət etmək üçün işlənir; 'honoured' sözü qarşı tərəfin iştirakına böyük dəyər verdiyini bildirir. Bu ifadə rəsmi dəvətnamələrdə, toy, mükafat mərasimi və ya yüksək vəzifəli şəxslərə müraciətdə xüsusən uyğundur, çünki həddən artıq nəzakətli və təmkinli səslənir. Gündəlik və ya dostcasına dəvətlərdə bunu işlətmək süni görünər, ona görə orada daha sadə ifadələr seçmək lazımdır.",
      example: "We'd be honoured if you could attend the opening ceremony as our guest.",
      register: "formal",
    },
  ],
  practice: [
    {
      type: "multiple-choice",
      prompt: "Which phrase is the most casual, friendly way to invite a close friend?",
      options: [
        "Do you fancy grabbing a coffee?",
        "Would you like to attend?",
        "I'd be delighted to.",
      ],
      answer: 0,
      explanation:
        "\"Do you fancy...?\" is very informal and used with friends. \"Would you like to...?\" is neutral/polite, and \"I'd be delighted to\" is a formal way to accept, not invite.",
    },
    {
      type: "multiple-choice",
      prompt: "Which phrase politely declines an invitation while showing regret?",
      options: [
        "That sounds great.",
        "I'd love to.",
        "I'm afraid I can't make it.",
      ],
      answer: 2,
      explanation:
        "\"I'm afraid I can't make it\" politely declines and signals regret. The other two are ways of accepting.",
    },
    {
      type: "multiple-choice",
      prompt: "Which response is the most formal way to accept an invitation?",
      options: [
        "That sounds great.",
        "I'd be delighted to.",
        "Maybe another time.",
      ],
      answer: 1,
      explanation:
        "\"I'd be delighted to\" is formal and warm. \"That sounds great\" is informal, and \"Maybe another time\" softens a refusal.",
    },
    {
      type: "gap-fill",
      prompt: "Would you ___ to come over for dinner on Saturday? (polite invitation)",
      answer: "like",
      explanation:
        "\"Would you like to...?\" is the standard polite way to invite someone to do something.",
    },
    {
      type: "gap-fill",
      prompt: "I'm ___ I can't make it on Friday, but thanks for asking. (polite refusal)",
      answer: "afraid",
      explanation:
        "\"I'm afraid I can't make it\" adds a note of regret, making the refusal more polite.",
    },
    {
      type: "gap-fill",
      prompt: "I can't tonight, but maybe ___ time? (softening a refusal for the future)",
      answer: "another",
      explanation:
        "\"Maybe another time\" softens a refusal by suggesting a future occasion.",
    },
  ],
};
