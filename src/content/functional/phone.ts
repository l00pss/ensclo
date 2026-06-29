import type { ReferenceGroup } from "../reference";
import type { FunctionalPhrase } from "../types";
import { Phone } from "lucide-react";

export const fnPhone: ReferenceGroup<FunctionalPhrase> = {
  id: "phone",
  label: "Telephoning",
  azLabel: "Telefon danışığı",
  icon: Phone,
  description:
    "Useful English phrases for making and answering phone calls — asking for someone, identifying callers, holding the line, taking messages and promising to call back.",
  azDescription:
    "Bu qrup telefon danışığında ən çox işlənən hazır ifadələri toplayır: kiməsə zəng vurmaq, kimin zəng etdiyini soruşmaq, qarşı tərəfdən gözləməsini xahiş etmək, mesaj götürmək və geri zəng etmək. Telefonda qarşı tərəfin üzünü görmədiyimiz üçün sözlər və ton xüsusilə vacibdir, ona görə də ifadələr çox vaxt nəzakətli və aydın olmalıdır. Burada həm rəsmi iş zəngləri, həm də qeyri-rəsmi dostyana zənglər üçün ifadələr var ki, hər vəziyyətdə düzgün üslubu seçə biləsən.",
  items: [
    {
      phrase: "Could I speak to ..., please?",
      level: "B1",
      use: "a polite, standard way to ask for the person you want to talk to",
      azUse:
        "Telefonda danışmaq istədiyin şəxsi nəzakətlə istəmək üçün ən standart ifadədir. 'please' sözü cümləni daha xoş və hörmətli edir, ona görə həm iş, həm də şəxsi zənglərdə təhlükəsiz seçimdir. Çox vaxt zəngin əvvəlində özünü təqdim etdikdən sonra dərhal işlədilir.",
      example: "Hello, could I speak to Mr Hughes, please?",
      register: "neutral",
    },
    {
      phrase: "Who's calling, please?",
      level: "B1",
      use: "to politely ask who is on the other end of the line",
      azUse:
        "Zəng edən şəxsin kim olduğunu nəzakətlə soruşmaq üçün işlənir. Adətən katib, resepşn işçisi və ya zəngə cavab verən şəxs, çağırılan adamı telefona dəvət etməzdən əvvəl bunu soruşur. 'please' onu daha nəzakətli edir; daha rəsmi variant 'May I ask who's calling?'-dur.",
      example: "— I'd like to speak to the manager. — Of course. Who's calling, please?",
      register: "formal",
    },
    {
      phrase: "Hold on a moment, please.",
      level: "B1",
      use: "to ask the caller to wait a short time",
      azUse:
        "Qarşı tərəfdən bir az gözləməsini xahiş etmək üçün işlənir — məsələn, çağırılan adamı çağırarkən və ya məlumatı yoxlayarkən. Gündəlik, bir az qeyri-rəsmi tonu var; daha rəsmi iş mühitində 'Could you hold the line, please?' deyilir. Qısa gözləmə üçün uyğundur, uzun fasilə yox.",
      example: "Hold on a moment, please — I'll just check if she's at her desk.",
      register: "informal",
    },
    {
      phrase: "I'm afraid he's not available at the moment.",
      level: "B2",
      use: "a polite way to say the person cannot come to the phone",
      azUse:
        "İstənilən şəxsin hazırda telefona gələ bilmədiyini nəzakətlə bildirmək üçün işlənir. 'I'm afraid' ifadəsi xoşagəlməz xəbəri yumşaldır və qarşı tərəfə hörmət göstərir, ona görə rəsmi iş zənglərində geniş yayılıb. Səbəbi açıqlamadan da işlədilə bilər, bu da diplomatik ton yaradır.",
      example:
        "I'm afraid he's not available at the moment. Would you like to leave a message?",
      register: "formal",
    },
    {
      phrase: "Could you take a message?",
      level: "B2",
      use: "to ask the person answering to pass on a message",
      azUse:
        "Axtardığın adam telefonda olmadıqda, cavab verən şəxsdən mesajını ona çatdırmasını xahiş etmək üçün işlənir. Nəzakətli və neytral tonu var, həm işdə, həm də şəxsi zənglərdə uyğundur. Çox vaxt 'Could you take a message for him/her?' şəklində tamamlanır.",
      example:
        "He's in a meeting right now. — No problem. Could you take a message?",
      register: "neutral",
    },
    {
      phrase: "Can I take a message?",
      level: "B1",
      use: "offered by the person answering when the wanted person is away",
      azUse:
        "Bu dəfə tərsinə — zəngə cavab verən şəxs, axtarılan adam yerində olmadıqda mesaj götürməyi təklif edir. Gündəlik və mehriban tonu var; daha rəsmi variant 'Would you like to leave a message?'-dur. Telefonda yardımsevər və peşəkar təəssürat yaratmaq üçün çox işlənir.",
      example:
        "She's not in the office today. Can I take a message and ask her to call you back?",
      register: "neutral",
    },
    {
      phrase: "I'll call you back.",
      level: "B1",
      use: "to promise to phone the person again later",
      azUse:
        "Sonra yenidən zəng edəcəyini vəd etmək üçün işlənən sadə və geniş yayılmış ifadədir. Qeyri-rəsmi və dostyana tonu var, ona görə yaxınlarla danışıqda idealdır. Vaxt da əlavə etmək olar: 'I'll call you back in ten minutes.'",
      example: "Sorry, I'm driving right now — I'll call you back in ten minutes.",
      register: "informal",
    },
    {
      phrase: "I'm calling regarding the position you advertised.",
      level: "C1",
      use: "a formal way to state the reason for your call at the start",
      azUse:
        "Zəngin əvvəlində zəng etmə səbəbini rəsmi və aydın şəkildə bildirmək üçün işlənir. 'regarding' sözü rəsmi registr yaradır və xüsusilə iş, müraciət və ya rəsmi sorğularda işlənir; gündəlik danışıqda onun yerinə 'about' deyilir. Bu ifadə qarşı tərəfin zəngi tez başa düşməsinə və düzgün şöbəyə yönləndirməsinə kömək edir.",
      example:
        "Good morning. I'm calling regarding the position you advertised on your website.",
      register: "formal",
    },
    {
      phrase: "Sorry, I think you've got the wrong number.",
      level: "B1",
      use: "to tell a caller they have dialled the wrong person or place",
      azUse:
        "Zəng edən şəxsin səhv nömrə yığdığını nəzakətlə bildirmək üçün işlənir. 'Sorry' sözü tonu yumşaldır, ona görə qarşı tərəf özünü pis hiss etmir; gündəlik, dostyana registri var. Adətən qısa izahla tamamlanır, məsələn burada belə bir adamın olmadığını deyirsən.",
      example:
        "Sorry, I think you've got the wrong number — there's no one called David here.",
      register: "informal",
    },
    {
      phrase: "Could you speak up a little, please?",
      level: "B1",
      use: "to politely ask the other person to talk more loudly",
      azUse:
        "Telefonda qarşı tərəfin səsi yavaş gələndə, bir az ucadan danışmasını nəzakətlə xahiş etmək üçün işlənir. 'a little' və 'please' xahişi daha yumşaq və hörmətli edir, ona görə həm iş, həm də şəxsi zənglərdə uyğundur. Bağlantı və ya səs problemi olduqda çox faydalıdır.",
      example:
        "Sorry, the line isn't very clear — could you speak up a little, please?",
      register: "neutral",
    },
    {
      phrase: "Let me put you through to the right department.",
      level: "C1",
      use: "to say you are transferring the caller to another person or section",
      azUse:
        "Zəngi düzgün şöbəyə və ya məsul şəxsə yönləndirdiyini bildirmək üçün işlənən rəsmi iş ifadəsidir. 'put you through' frazal feli telefonda 'birləşdirmək, yönləndirmək' mənasını verir və peşəkar registr yaradır. Adətən böyük şirkətlərin və ya çağrı mərkəzlərinin işçiləri tərəfindən deyilir.",
      example:
        "You'll need to speak to our sales team — let me put you through to the right department.",
      register: "formal",
    },
    {
      phrase: "Could you spell that for me, please?",
      level: "B2",
      use: "to ask the caller to say a name or word letter by letter",
      azUse:
        "Telefonda eşitdiyin adı və ya sözü hərf-hərf təkrarlamağı xahiş etmək üçün işlənir, çünki üzü görmədən bəzi səsləri qarışdırmaq asandır. Nəzakətli və neytral tonu var; mesaj götürəndə və ya məlumat qeyd edəndə xüsusilə faydalıdır. Səhvlərin qarşısını almaq və dəqiqlik üçün vacib ifadədir.",
      example:
        "I'll just write your name down — could you spell that for me, please?",
      register: "neutral",
    },
    {
      phrase: "I'm sorry, you're breaking up — I can't hear you very well.",
      level: "B2",
      use: "to say the connection is poor and the voice keeps cutting out",
      azUse:
        "Mobil əlaqə zəif olduqda və qarşı tərəfin səsi kəsilə-kəsilə gəldikdə işlənir. 'break up' frazal feli burada 'rabitənin kəsilməsi, səsin parçalanması' deməkdir və gündəlik, qeyri-rəsmi tonu var. Çox vaxt yenidən zəng etmək təklifi ilə davam etdirilir, məsələn sonra yenidən cəhd edəcəyini deyirsən.",
      example:
        "I'm sorry, you're breaking up — I can't hear you very well. Let me call you back.",
      register: "informal",
    },
  ],
  practice: [
    {
      type: "gap-fill",
      prompt: "Hello, could I ___ to Mr Hughes, please? (ask for the person)",
      answer: "speak",
      explanation:
        "'Could I speak to ..., please?' is the standard polite way to ask for the person you want.",
    },
    {
      type: "gap-fill",
      prompt: "He's in a meeting. Could you take a ___? (pass it on)",
      answer: "message",
      explanation:
        "'Could you take a message?' asks the person answering to pass your message on.",
    },
    {
      type: "gap-fill",
      prompt: "Sorry, I'm busy right now — I'll call you ___ in an hour.",
      answer: "back",
      explanation:
        "'I'll call you back' is an informal promise to phone someone again later.",
    },
    {
      type: "multiple-choice",
      prompt: "Which phrase politely asks who is on the line?",
      options: [
        "Who's calling, please?",
        "What do you want?",
        "Why are you phoning?",
      ],
      answer: 0,
      explanation:
        "'Who's calling, please?' is a polite way to ask who is on the other end of the line.",
    },
    {
      type: "multiple-choice",
      prompt: "Which is a polite way to say the person cannot come to the phone?",
      options: [
        "He's not here, bye.",
        "I'm afraid he's not available at the moment.",
        "He doesn't want to talk to you.",
      ],
      answer: 1,
      explanation:
        "'I'm afraid he's not available at the moment.' softens the bad news and stays polite and formal.",
    },
    {
      type: "multiple-choice",
      prompt: "Which phrase asks the caller to wait a short time?",
      options: [
        "Hold on a moment, please.",
        "Call me back tomorrow.",
        "Can I take a message?",
      ],
      answer: 0,
      explanation:
        "'Hold on a moment, please.' asks the caller to wait briefly while you check something.",
    },
  ],
};
