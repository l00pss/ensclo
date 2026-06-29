import type { ReferenceGroup } from "../reference";
import type { FunctionalPhrase } from "../types";
import { Coffee } from "lucide-react";

export const fnSmalltalk: ReferenceGroup<FunctionalPhrase> = {
  id: "smalltalk",
  label: "Small Talk & Socialising",
  azLabel: "Söhbət və sosiallaşma",
  icon: Coffee,
  description:
    "Phrases for starting and keeping a relaxed, friendly conversation with people you meet at work, parties, or while waiting.",
  azDescription:
    "Bu qrup yüngül, dostyana söhbətə başlamaq və onu davam etdirmək üçün ifadələri əhatə edir — yəni 'small talk'. İş yerində, tədbirlərdə, qonaqlıqda və ya növbədə gözləyəndə tanış olduğun və ya az tanıdığın insanlarla rahat münasibət qurmağa kömək edir. Bu ifadələrin əksəriyyəti qeyri-rəsmidir; məqsəd dərin mövzu açmaq deyil, səmimi və mehriban təəssürat yaratmaqdır.",
  items: [
    {
      phrase: "How's it going?",
      level: "B1",
      use: "a casual, friendly way to ask how someone is",
      azUse:
        "Kiminsə necə olduğunu soruşmaq üçün çox qeyri-rəsmi və səmimi salamlaşma ifadəsidir. 'How are you?'-nun daha rahat, dostyana versiyasıdır və adətən tanışlar, iş yoldaşları və ya yaşıdlarla işlədilir. Rəsmi görüşlərdə və ya yaşca böyük, hörmət bildirmək istədiyin insanlarla işlətmə.",
      example: "Hey Tom! How's it going? Haven't seen you in a while.",
      register: "informal",
    },
    {
      phrase: "How have you been?",
      level: "B1",
      use: "to ask how someone has been since you last met",
      azUse:
        "Bir müddətdir görmədiyin tanışınla yenidən rastlaşanda onun bu vaxt ərzində necə yaşadığını soruşmaq üçün işlədilir. 'How are you?'-dan fərqi odur ki, keçən vaxtı vurğulayır — yəni 'son görüşümüzdən bəri necəsən?'. Neytral-qeyri-rəsmi tonu var, həm dost, həm də tanış iş yoldaşı ilə rahat işlənə bilər.",
      example: "Sarah, hi! How have you been? It must be six months since we last talked.",
      register: "neutral",
    },
    {
      phrase: "Any plans for the weekend?",
      level: "B1",
      use: "to start friendly small talk about someone's free time",
      azUse:
        "Həmsöhbətinlə yüngül söhbəti davam etdirmək və onun asudə vaxtı haqqında soruşmaq üçün çox işlənən qeyri-rəsmi sualdır. Adətən cümə günü və ya həftə sonuna yaxın iş yoldaşları, qonşular və tanışlarla işlədilir. Səmimi maraq göstərmək və söhbətə təbii mövzu açmaq üçün əla başlanğıcdır.",
      example: "It's almost Friday — any plans for the weekend?",
      register: "informal",
    },
    {
      phrase: "It's been ages!",
      level: "B2",
      use: "to say you haven't seen someone for a long time",
      azUse:
        "Çoxdan görmədiyin birisi ilə rastlaşanda təəccüb və sevinclə 'çox vaxt keçib, görüşmürük' demək üçün işlədilən qeyri-rəsmi ifadədir. 'Ages' burada hərfi yox, mübaliğəli mənada 'çox uzun müddət' deməkdir. Səmimi və emosional tonu var, ona görə yaxın tanışlar və dostlarla işlədilir, rəsmi şəraitdə yox.",
      example: "Wow, it's been ages! How are the kids doing?",
      register: "informal",
    },
    {
      phrase: "Nice to finally meet you.",
      level: "B2",
      use: "to greet someone you've heard about but never met before",
      azUse:
        "Haqqında çox eşitdiyin və ya uzun müddət yalnız yazışdığın, telefonla danışdığın birisi ilə nəhayət üzbəüz tanış olanda işlədilir. 'Finally' sözü görüşün gözlənilən, çoxdan gözlənən olduğunu vurğulayır və bu, qarşı tərəfə xoş gəlir. Həm qeyri-rəsmi, həm də yarı-rəsmi (məsələn, iş tanışlığı) şəraitdə nəzakətli səslənir.",
      example: "So you're Mark from the design team — nice to finally meet you in person!",
      register: "neutral",
    },
    {
      phrase: "How do you two know each other?",
      level: "B2",
      use: "to ask how two people in a group are connected",
      azUse:
        "Qonaqlıqda və ya tədbirdə bir qrup adamla söhbət edəndə iki nəfərin bir-birini haradan tanıdığını soruşmaq üçün işlədilən təbii small talk sualıdır. Söhbəti canlandırmaq və ortaq mövzu tapmaq üçün çox faydalıdır. Qeyri-rəsmi və mehriban tonu var, sosial mühitlərdə geniş işlənir.",
      example: "You both seem really close — how do you two know each other?",
      register: "informal",
    },
    {
      phrase: "I don't think we've met. I'm ...",
      level: "B2",
      use: "to politely introduce yourself to a stranger",
      azUse:
        "Tədbirdə və ya iş mühitində tanımadığın birisinə özünü nəzakətlə təqdim etmək üçün işlədilir. İlk hissə ('I don't think we've met') buz qırmaq və təbii keçid yaratmaq üçündür, sonra adını deyirsən. Həm qeyri-rəsmi qonaqlıqlarda, həm də yarı-rəsmi networking görüşlərində uyğun, nəzakətli bir başlanğıcdır.",
      example: "Hi, I don't think we've met. I'm Leyla, I work in marketing.",
      register: "neutral",
    },
    {
      phrase: "It was great catching up.",
      level: "B2",
      use: "to end a friendly conversation on a warm note",
      azUse:
        "Çoxdan görmədiyin tanışınla söhbət edib xəbər tutandan sonra söhbəti mehriban bir tonla bitirmək üçün işlədilir. 'Catch up' birisi ilə görüşüb son xəbərləri öyrənmək, danışmaq deməkdir. Bu ifadə söhbətin sənin üçün xoş olduğunu bildirir və qeyri-rəsmi, səmimi vidalaşma kimi işlənir.",
      example: "I have to run, but it was great catching up — let's grab a coffee soon!",
      register: "informal",
    },
    {
      phrase: "So, what do you do?",
      level: "B1",
      use: "to casually ask about someone's job when you first meet them",
      azUse:
        "Yeni tanış olduğun birisinin nə işlə məşğul olduğunu, peşəsini soruşmaq üçün işlədilən çox geniş yayılmış qeyri-rəsmi sualdır. 'So' sözü söhbətə təbii keçid yaradır və sualı yumşaq səsləndirir. Qonaqlıqlarda, tədbirlərdə və networking görüşlərində buz qırmaq üçün əla mövzudur, lakin çox rəsmi şəraitdə bir az birbaşa səslənə bilər.",
      example: "So, what do you do? I work in software myself.",
      register: "informal",
    },
    {
      phrase: "Crazy weather we're having, isn't it?",
      level: "B1",
      use: "to break the ice by commenting on the weather",
      azUse:
        "Tanımadığın və ya az tanıdığın birisi ilə söhbətə başlamaq üçün hava haqqında şərh edən klassik small talk ifadəsidir. İngilis dilində hava həmişə təhlükəsiz, neytral mövzudur və susqunluğu doldurmaq üçün işlədilir. Çox səmimi və qeyri-rəsmi tonu var; növbədə, liftdə və ya avtobus dayanacağında yad adamla rahat söz açmaq üçün uyğundur.",
      example: "Crazy weather we're having, isn't it? It was sunny an hour ago.",
      register: "informal",
    },
    {
      phrase: "I'd love to hear more about that.",
      level: "B2",
      use: "to show genuine interest and encourage someone to keep talking",
      azUse:
        "Həmsöhbətinin dediyi bir şeyə səmimi maraq göstərmək və onu danışmağa davam etməyə həvəsləndirmək üçün işlədilir. Bu ifadə qarşı tərəfə onu diqqətlə dinlədiyini və mövzunun sənə maraqlı olduğunu hiss etdirir. Neytral tonu var, həm dostyana söhbətdə, həm də yarı-rəsmi iş tanışlıqlarında nəzakətli və mehriban səslənir.",
      example: "You backpacked across Asia? I'd love to hear more about that.",
      register: "neutral",
    },
    {
      phrase: "I won't keep you any longer.",
      level: "C1",
      use: "to politely signal that you are about to end the conversation",
      azUse:
        "Söhbəti nəzakətlə bitirmək istədiyini, qarşı tərəfin vaxtını daha çox almaq istəmədiyini bildirmək üçün işlədilən incə ifadədir. Birbaşa 'getməliyəm' deməkdən daha zərif və düşüncəlidir, çünki diqqəti qarşı tərəfin məşğulluğuna yönəldir. Yarı-rəsmi və nəzakətli tonu var, həm iş, həm də sosial mühitdə hörmətlə vidalaşmaq üçün uyğundur.",
      example: "Anyway, I won't keep you any longer — it was lovely chatting with you.",
      register: "formal",
    },
    {
      phrase: "We should hang out sometime.",
      level: "B2",
      use: "to suggest meeting up again in a relaxed, informal way",
      azUse:
        "Yeni tanış olduğun və ya söhbətindən zövq aldığın birisi ilə gələcəkdə yenidən görüşmək təklifini rahat şəkildə bildirmək üçün işlədilir. 'Hang out' birlikdə vaxt keçirmək, gəzmək mənasında qeyri-rəsmi ifadədir. Çox səmimi və dostyana tonu var, ona görə yaşıdlarla, dostlarla işlənir; rəsmi iş münasibətlərində bunun yerinə daha nəzakətli formalar seçilir.",
      example: "I had a great time talking with you — we should hang out sometime!",
      register: "informal",
    },
  ],
  practice: [
    {
      type: "multiple-choice",
      prompt: "Which phrase is the most casual way to ask how someone is?",
      options: ["How's it going?", "I would like to inquire about your wellbeing.", "May I ask how you are?"],
      answer: 0,
      explanation:
        "'How's it going?' is a relaxed, informal greeting used with friends and colleagues. The other two are far too formal for small talk.",
    },
    {
      type: "multiple-choice",
      prompt: "You meet someone you haven't seen for a very long time. What do you say?",
      options: ["Nice to finally meet you.", "It's been ages!", "Any plans for the weekend?"],
      answer: 1,
      explanation:
        "'It's been ages!' expresses that a long time has passed since you last saw the person. 'Nice to finally meet you' is for a first meeting.",
    },
    {
      type: "multiple-choice",
      prompt: "Which phrase politely introduces yourself to a stranger at an event?",
      options: ["How have you been?", "It was great catching up.", "I don't think we've met. I'm ..."],
      answer: 2,
      explanation:
        "'I don't think we've met. I'm ...' is a polite, natural way to introduce yourself to someone new. The others assume you already know the person.",
    },
    {
      type: "gap-fill",
      prompt: "It's almost Friday — any ___ for the weekend? (plans)",
      answer: "plans",
      explanation: "'Any plans for the weekend?' is a common way to start friendly small talk about someone's free time.",
    },
    {
      type: "gap-fill",
      prompt: "I have to run, but it was great ___ up — let's meet soon! (catching)",
      answer: "catching",
      explanation: "'It was great catching up' warmly ends a conversation after sharing recent news with someone.",
    },
    {
      type: "gap-fill",
      prompt: "So you're Mark from the design team — nice to ___ meet you! (finally)",
      answer: "finally",
      explanation: "'Nice to finally meet you' is used when you meet in person someone you had only heard about or talked to remotely.",
    },
  ],
};
