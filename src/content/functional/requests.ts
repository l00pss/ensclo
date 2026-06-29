import type { ReferenceGroup } from "../reference";
import type { FunctionalPhrase } from "../types";
import { Handshake } from "lucide-react";

export const fnRequests: ReferenceGroup<FunctionalPhrase> = {
  id: "requests",
  label: "Requests & Offers",
  azLabel: "Xahiş və təklif",
  icon: Handshake,
  description:
    "Phrases for politely asking someone to do something and for offering your help.",
  azDescription:
    "Bu qrup başqasından nəyisə nəzakətlə xahiş etmək və ona kömək təklif etmək üçün lazım olan ifadələri əhatə edir. İngiliscə birbaşa \"Give me...\" və ya \"Help me\" demək kobud səslənir; bunun əvəzinə \"Could you...\", \"Would you mind...\" kimi yumşaldıcı strukturlardan istifadə olunur. Burada həm rəsmi (iş, müştəri), həm də qeyri-rəsmi (dost, ailə) kontekstlər üçün ifadələr var və hər birinin nəzakət səviyyəsi izah olunub.",
  items: [
    {
      phrase: "Could you possibly ...?",
      level: "B1",
      use: "to make a polite, slightly tentative request",
      azUse:
        "Kimdənsə nəyisə nəzakətlə xahiş etmək üçün işlənir; \"possibly\" sözü xahişi daha da yumşaldır və sanki \"əgər mümkünsə\" mənası qatır. Həm rəsmi, həm qeyri-rəsmi kontekstdə işlənə bilər və adamı məcbur hiss etdirmədən xahiş etməyə imkan verir. Məsələn, kifayət qədər böyük və ya narahatlıq yarada biləcək bir iş istəyəndə uyğundur.",
      example: "Could you possibly send me the report by tomorrow morning?",
      register: "neutral",
    },
    {
      phrase: "Would you mind ...ing?",
      level: "B1",
      use: "to ask politely, expecting a 'no, of course not' style answer",
      azUse:
        "Hərfi mənada \"...etmək sizə narahatlıq yaradarmı?\" deməkdir, ona görə də ondan sonra fel həmişə -ing formasında gəlir (məs. Would you mind closing...). Diqqət: bu xahişə razılıq vermək üçün cavab \"No\" (yox, narahatlıq yoxdur) olur, \"Yes\" deyil — bu, azərbaycanlılar üçün tez-tez çaşdırıcı olur. Nəzakətli və bir az ehtiyatlı səslənir, rəsmi və qeyri-rəsmi hallarda işlənir.",
      example: "Would you mind closing the window? It's a bit cold in here.",
      register: "neutral",
    },
    {
      phrase: "I was wondering if you could ...",
      level: "B2",
      use: "a very polite, indirect way to ask for a favour",
      azUse:
        "Çox nəzakətli və dolayı xahiş formasıdır; keçmiş zaman (\"was wondering\") xahişi daha yumşaq və təvazökar göstərir, baxmayaraq ki söhbət indi gedir. Adətən kiməsə zəhmət verə biləcək və ya bir az utancaq olduğun böyük xahişlər üçün işlənir. Həm işdə (müdir, kollega), həm də az tanıdığın adamla danışanda çox uyğundur.",
      example:
        "I was wondering if you could give me some feedback on my presentation.",
      register: "formal",
    },
    {
      phrase: "Do you think you could ...?",
      level: "B1",
      use: "to make a friendly, fairly informal request",
      azUse:
        "Dostyana və bir qədər qeyri-rəsmi xahiş ifadəsidir; \"Bacararsanmı...?\" / \"Edə bilərsənmi...?\" mənasını verir. Tanıdığın adamlarla — dostlar, kollegalar, ailə üzvləri ilə — rahat səslənir, lakin yenə də birbaşa əmrdən daha nəzakətlidir. Gündəlik kiçik xahişlər üçün idealdır.",
      example: "Do you think you could give me a lift to the station?",
      register: "informal",
    },
    {
      phrase: "Shall I ...?",
      level: "B1",
      use: "to offer to do something for someone",
      azUse:
        "Kiməsə kömək və ya xidmət təklif etmək üçün işlənir; \"...edimmi?\" / \"Mən...edim?\" mənasını daşıyır və yalnız \"I\" və ya \"we\" ilə işlənir. Britaniya ingiliscəsində çox geniş yayılıb və nəzakətli, mehriban səslənir. Məsələn, kömək lazım olub-olmadığını soruşmaq və ya birgə qərar təklif etmək üçün uyğundur.",
      example: "Shall I carry that bag for you? It looks heavy.",
      register: "neutral",
    },
    {
      phrase: "Do you need a hand?",
      level: "B1",
      use: "an informal way to offer help",
      azUse:
        "Qeyri-rəsmi şəkildə kömək təklif etmək üçün işlənir; \"a hand\" burada \"kömək\" mənasında idiomatik ifadədir, ona görə hərfi tərcümə (\"əl lazımdır?\") yanlışdır. Dostlar, kollegalar arasında çox təbii səslənir, məsələn kimsə nəyləsə çətinlik çəkəndə. Daha rəsmi variant: \"Can I help you with that?\"",
      example: "You look busy — do you need a hand with those boxes?",
      register: "informal",
    },
    {
      phrase: "Would it be possible to ...?",
      level: "B2",
      use: "a formal, impersonal way to request something",
      azUse:
        "Rəsmi və qeyri-şəxsi (impersonal) xahiş formasıdır — diqqəti konkret adama yox, işin özünün mümkünlüyünə yönəldir. Bu, xüsusən e-poçtlarda, müştərilərlə və ya hörmət göstərmək istədiyin rəsmi mühitlərdə çox işlənir. \"Mümkündürmü...?\" mənasını verir və yüksək səviyyəli nəzakət bildirir.",
      example: "Would it be possible to reschedule our meeting to Friday?",
      register: "formal",
    },
    {
      phrase: "Please don't hesitate to ...",
      level: "C1",
      use: "to formally offer help or invite future contact",
      azUse:
        "Çox rəsmi və nəzakətli ifadədir; hərfi mənada \"...etməyə çəkinməyin\" deməkdir və adətən kömək təklif etmək və ya əlaqə saxlamağa dəvət etmək üçün işlənir. İş yazışmalarında, xüsusən rəsmi e-poçtların sonunda standart bir cümlədir (məs. \"...don't hesitate to contact me\"). Müştəriyə və ya rəsmi tərəf-müqabilə özünü rahat və dəstəklənmiş hiss etdirmək üçün istifadə olunur.",
      example:
        "If you have any further questions, please don't hesitate to contact me.",
      register: "formal",
    },
    {
      phrase: "Is there any chance you could ...?",
      level: "B2",
      use: "to ask for a favour in a casual but slightly hopeful way",
      azUse:
        "Bir az ümidvar, lakin rahat tonla kömək və ya lütf istəmək üçün işlənir; \"Bir ehtimal varmı ki...?\" mənasını verir və qarşı tərəfə \"yox\" demək üçün asanlıqla yer qoyur. Çox zaman dostlar, tanışlar arasında, bəzən isə işdə yumşaq xahis kimi istifadə olunur. Cavabın müsbət olub-olmayacağına əmin olmadığın hallarda təbii səslənir.",
      example: "Is there any chance you could cover my shift on Saturday?",
      register: "informal",
    },
    {
      phrase: "I'd be grateful if you could ...",
      level: "C1",
      use: "to make a formal, courteous request in writing",
      azUse:
        "Rəsmi və nəzakətli yazışmalarda, xüsusən e-poçtlarda istifadə olunan ifadədir; \"...etsəniz minnətdar olaram\" mənasını verir və qarşı tərəfə hörmət göstərir. Şərt cümləsi (if you could) və \"grateful\" sözü xahişi həm yumşaq, həm də peşəkar göstərir. Müştərilərə, müdirə və ya az tanıdığın rəsmi şəxslərə yazanda çox uyğundur.",
      example: "I'd be grateful if you could confirm your attendance by Friday.",
      register: "formal",
    },
    {
      phrase: "Let me give you a hand with ...",
      level: "B1",
      use: "to actively offer to help with a specific task",
      azUse:
        "Konkret bir işdə fəal şəkildə kömək təklif etmək üçün işlənən qeyri-rəsmi ifadədir; \"give you a hand\" idiomatik olaraq \"sənə kömək etmək\" deməkdir, ona görə hərfi tərcümə yanlışdır. \"Let me...\" hissəsi təklifi mehriban və könüllü göstərir, sanki sən özün irəli atılırsan. Dostlar, ailə və kollegalar arasında təbii səslənir.",
      example: "You've got a lot to carry — let me give you a hand with those bags.",
      register: "informal",
    },
    {
      phrase: "Would you be so kind as to ...?",
      level: "C1",
      use: "a very formal and polite way to make a request",
      azUse:
        "Çox rəsmi və yüksək nəzakətli xahis formasıdır; \"Zəhmət olmasa, ... etmək lütfkarlığını göstərərdinizmi?\" kimi tərcümə oluna bilər. Gündəlik danışıqda nadirən, lakin rəsmi məktublarda, mərasimlərdə və ya xüsusi hörmət göstərmək istədiyin hallarda işlənir. Bəzən qeyri-rəsmi mühitdə kinayəli (sarkastik) çalarla da işlədilə bilər, ona görə kontekstə diqqət etmək lazımdır.",
      example: "Would you be so kind as to forward this email to the rest of the team?",
      register: "formal",
    },
    {
      phrase: "Just let me know if you need anything.",
      level: "B1",
      use: "to offer open-ended help and signal availability",
      azUse:
        "Qarşı tərəfə açıq şəkildə kömək təklif etmək və \"hər an hazıram\" mesajını vermək üçün işlənir; \"Nəyə ehtiyacın olsa, sadəcə de\" mənasını daşıyır. Həm dostyana, həm də nisbətən rəsmi mühitdə işlənə bilər və mehriban, dəstəkləyici səslənir. Çox vaxt söhbətin və ya görüşün sonunda, kömək lazım ola biləcəyini bildirmək üçün istifadə olunur.",
      example: "I'll be in the office all day, so just let me know if you need anything.",
      register: "neutral",
    },
  ],
  practice: [
    {
      type: "multiple-choice",
      prompt: "Which phrase is the most formal way to make a request?",
      options: [
        "Do you think you could open the door?",
        "Would it be possible to extend the deadline?",
        "Do you need a hand?",
      ],
      answer: 1,
      explanation:
        "\"Would it be possible to ...?\" is impersonal and formal, ideal for emails and professional settings. The other two are informal or are offers, not requests.",
    },
    {
      type: "multiple-choice",
      prompt:
        "Your friend asks: 'Would you mind closing the window?' You are happy to do it. What do you say?",
      options: [
        "Yes, I would.",
        "No, not at all.",
        "Yes, of course I mind.",
      ],
      answer: 1,
      explanation:
        "\"Would you mind ...?\" literally asks if it bothers you, so agreeing means saying 'No' (it doesn't bother me). Saying 'Yes' would mean you refuse.",
    },
    {
      type: "multiple-choice",
      prompt: "Which phrase is used to OFFER help rather than request it?",
      options: [
        "Could you possibly help me?",
        "I was wondering if you could help me.",
        "Shall I help you with that?",
      ],
      answer: 2,
      explanation:
        "\"Shall I ...?\" offers to do something for someone. The other two are requests asking the listener to do something.",
    },
    {
      type: "gap-fill",
      prompt:
        "You look tired. Do you need a ___ with the washing-up? (informal offer of help)",
      answer: "hand",
      explanation:
        "\"Do you need a hand?\" is an informal idiom meaning 'do you need help?'.",
    },
    {
      type: "gap-fill",
      prompt:
        "I was ___ if you could give me some feedback on my essay. (very polite, indirect request)",
      answer: "wondering",
      explanation:
        "\"I was wondering if you could ...\" is a very polite, indirect way to ask for a favour.",
    },
    {
      type: "gap-fill",
      prompt:
        "Would you ___ turning the music down a little? (polite request + -ing verb)",
      answer: "mind",
      explanation:
        "After \"Would you mind\" the verb takes the -ing form, e.g. 'Would you mind turning ...'.",
    },
  ],
};
