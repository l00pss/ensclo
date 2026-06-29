import type { ReferenceGroup } from "../reference";
import type { FunctionalPhrase } from "../types";
import { UserPlus } from "lucide-react";

export const fnGreetings: ReferenceGroup<FunctionalPhrase> = {
  id: "greetings",
  label: "Greetings & Introductions",
  azLabel: "Salamlaşma və tanışlıq",
  icon: UserPlus,
  description:
    "Phrases for greeting people, introducing yourself and others, and saying goodbye in both formal and informal situations.",
  azDescription:
    "Bu qrup insanlarla salamlaşmaq, özünü və başqalarını təqdim etmək, eləcə də nəzakətlə vidalaşmaq üçün ifadələri əhatə edir. İlk təəssürat çox vacibdir, ona görə də düzgün ifadəni düzgün şəraitdə (rəsmi görüşdə, iş tanışlığında və ya dostlarla) seçmək lazımdır. Burada həm çox rəsmi ('How do you do?'), həm də səmimi, qeyri-rəsmi ('Take care', 'See you around') variantlar var ki, hər vəziyyətə uyğun ifadə tapa biləsən.",
  items: [
    {
      phrase: "Nice to meet you.",
      level: "B1",
      use: "a standard, friendly way to greet someone you are meeting for the first time",
      azUse:
        "Kiminləsə ilk dəfə tanış olanda işlədilən ən geniş yayılmış və universal ifadədir. Həm qeyri-rəsmi, həm də yarı-rəsmi şəraitdə təhlükəsiz seçimdir — yəni demək olar ki, hər yerdə uyğun gəlir. Adətən tanışlığın əvvəlində, adlar deyiləndən sonra işlədilir və səmimi, mehriban təəssürat yaradır.",
      example: "Hi, I'm Aysel. — Nice to meet you, Aysel!",
      register: "neutral",
    },
    {
      phrase: "Pleased to meet you.",
      level: "B1",
      use: "a slightly more polite way to greet someone for the first time",
      azUse:
        "'Nice to meet you'-nun bir az daha nəzakətli və ölçülü versiyasıdır. İş tanışlıqlarında, müştərilərlə və ya yaşca, vəzifəcə böyük insanlarla ilk dəfə görüşəndə hörmət bildirmək üçün uyğundur. Tonu yarı-rəsmidir, ona görə həm peşəkar mühitdə, həm də nəzakət göstərmək istədiyin sosial vəziyyətlərdə işlədə bilərsən.",
      example: "Pleased to meet you, Mr. Hudson. I've heard a lot about your work.",
      register: "formal",
    },
    {
      phrase: "How do you do?",
      level: "B2",
      use: "a very formal greeting used when meeting someone for the first time",
      azUse:
        "Çox rəsmi, hətta bir az köhnə üslubda tanışlıq ifadəsidir və yalnız ilk görüşdə işlədilir. Diqqət et: bu, hərfi mənada 'necəsən?' sualı deyil — buna cavab da adətən eyni ifadə ('How do you do?') ilə verilir, real cavab gözlənilmir. Rəsmi tədbirlərdə, diplomatik və ya yüksək səviyyəli işgüzar görüşlərdə işlədilir; gündəlik söhbətdə çox rəsmi səslənər.",
      example: "May I introduce Dr. Mammadova? — How do you do? — How do you do?",
      register: "formal",
    },
    {
      phrase: "Let me introduce myself.",
      level: "B1",
      use: "to politely begin introducing who you are",
      azUse:
        "Özünü təqdim etməyə başlamazdan əvvəl işlədilən nəzakətli giriş ifadəsidir. Adətən tanımadığın bir qrupla danışanda, iş görüşündə və ya təqdimatda 'icazə verin özümü təqdim edim' mənasında deyilir. Tonu yarı-rəsmidir və həmsöhbətin diqqətini cəlb edərək tanışlıq üçün təbii keçid yaradır.",
      example: "Let me introduce myself. I'm Kamran, the new project manager.",
      register: "formal",
    },
    {
      phrase: "I'd like you to meet ...",
      level: "B2",
      use: "to introduce one person to another in a polite, warm way",
      azUse:
        "Bir nəfəri başqa birisi ilə tanış etmək üçün işlədilən nəzakətli və mehriban ifadədir. 'I'd like' ('I would like') hissəsi ona təmkinli, hörmətli ton verir, ona görə həm rəsmi, həm də yarı-rəsmi şəraitdə uyğundur. Adətən adından sonra həmin şəxs haqqında qısa məlumat da əlavə olunur (kim olduğu, nə işlə məşğul olduğu).",
      example: "Sarah, I'd like you to meet my colleague Elvin. He leads our design team.",
      register: "formal",
    },
    {
      phrase: "This is ...",
      level: "B1",
      use: "a simple, everyday way to introduce someone",
      azUse:
        "Birisini təqdim etmək üçün ən sadə və gündəlik ifadədir. 'Bu, ...-dır' mənasında işlədilir və adətən qeyri-rəsmi və ya yarı-rəsmi şəraitdə — dostları, ailə üzvlərini və ya iş yoldaşlarını bir-biri ilə tanış edəndə deyilir. Sürətli, təbii və rahat səsləndiyi üçün gündəlik söhbətdə ən çox işlənən təqdimat üsuludur.",
      example: "Hey everyone, this is my sister, Nigar.",
      register: "informal",
    },
    {
      phrase: "Take care!",
      level: "B1",
      use: "a warm, friendly way to say goodbye",
      azUse:
        "Vidalaşarkən 'özündən muğayat ol' mənasında işlədilən mehriban, səmimi ifadədir. Qarşı tərəfə qayğı və xoş niyyət bildirir, ona görə dostlar, tanışlar və iş yoldaşları ilə geniş işlədilir. Tonu qeyri-rəsmi-neytraldır; rəsmi olmayan, lakin nəzakətli vidalaşma kimi demək olar ki, hər kontekstdə uyğun gəlir.",
      example: "I have to get going now. Take care, and see you next week!",
      register: "informal",
    },
    {
      phrase: "See you around.",
      level: "B2",
      use: "a casual way to say goodbye when you expect to meet again sometime",
      azUse:
        "Yenidən görüşəcəyini, amma dəqiq vaxt müəyyən etmədiyini bildirən çox qeyri-rəsmi vidalaşma ifadəsidir — 'görüşərik, harasa rast gələrik' mənasında. Adətən tez-tez gördüyün, eyni mühitdə (iş yeri, universitet, qonşuluq) olduğun adamlarla işlədilir. Rahat və dostyana səsləndiyi üçün rəsmi şəraitə uyğun gəlmir; orada 'Goodbye' və ya 'It was nice meeting you' daha münasibdir.",
      example: "Anyway, I'd better head off. See you around, Tom!",
      register: "informal",
    },
    {
      phrase: "Long time no see!",
      level: "B1",
      use: "a friendly greeting for someone you haven't seen in a while",
      azUse:
        "Uzun müddət görmədiyin bir adamla qarşılaşanda işlədilən səmimi, qeyri-rəsmi salamlaşma ifadəsidir — 'çoxdandır görüşmürük' mənasında. Adətən dostlar, köhnə tanışlar və ya iş yoldaşları ilə təsadüfən rastlaşanda istifadə olunur və xoş təəssürat, sevinc bildirir. Tonu çox rahat olduğu üçün rəsmi görüşlərə uyğun gəlmir; orada 'It's been a while since we last met' kimi ölçülü variant daha münasibdir.",
      example: "Aysel! Long time no see! How have you been?",
      register: "informal",
    },
    {
      phrase: "I don't think we've met.",
      level: "B2",
      use: "a polite way to start a conversation with someone you haven't been introduced to",
      azUse:
        "Hələ rəsmi şəkildə tanış olmadığın bir adamla söhbətə nəzakətlə başlamaq üçün işlədilən ifadədir — 'deyəsən, tanış deyilik' mənasında. Adətən tədbirlərdə, görüşlərdə və ya məclislərdə özünü təqdim etməyə təbii keçid yaratmaq üçün deyilir və ardınca adın söylənir. Tonu yarı-rəsmidir və həm peşəkar, həm də sosial mühitdə rahat işlədilə bilər.",
      example: "Hi, I don't think we've met. I'm Leyla, from the marketing team.",
      register: "neutral",
    },
    {
      phrase: "It was a pleasure meeting you.",
      level: "B2",
      use: "a polite way to say goodbye after meeting someone for the first time",
      azUse:
        "Kiminləsə ilk dəfə tanış olduqdan sonra vidalaşarkən işlədilən nəzakətli ifadədir — 'sizinlə tanış olmaq xoş oldu' mənasında. Keçmiş zaman ('was') işləndiyi üçün görüşün sonunda, ayrılarkən deyilir və hörmət, məmnunluq bildirir. Tonu rəsmi-nəzakətlidir, ona görə iş tanışlıqlarında, müsahibələrdən sonra və ya peşəkar tədbirlərdə xüsusilə uyğundur.",
      example: "It was a pleasure meeting you, Mr. Khan. I hope we can work together soon.",
      register: "formal",
    },
    {
      phrase: "I'll let you go.",
      level: "C1",
      use: "a tactful way to signal that you are ending a conversation politely",
      azUse:
        "Söhbəti nəzakətlə bitirmək istədiyini incə şəkildə bildirmək üçün işlədilən ifadədir — 'səni daha çox saxlamayım, get işinə bax' mənasında. Qarşı tərəfin vaxtına hörmət etdiyini göstərir və söhbəti kobudcasına kəsmədən, yumşaq şəkildə yekunlaşdırmağa imkan verir. Tonu yarı-rəsmi-neytraldır; həm telefon danışıqlarında, həm də üzbəüz görüşlərdə nəzakətli bağlayış kimi işlədilir.",
      example: "Well, I'll let you go — I know you're busy. Let's catch up soon!",
      register: "neutral",
    },
    {
      phrase: "May I have a word?",
      level: "C1",
      use: "a polite, formal way to ask to speak with someone briefly",
      azUse:
        "Kiminləsə qısa müddət, adətən təklikdə danışmaq icazəsi istəmək üçün işlədilən nəzakətli, rəsmi ifadədir — 'sizinlə bir kəlmə danışa bilərəmmi?' mənasında. Çox vaxt ciddi və ya həssas bir mövzunu müzakirə etməzdən əvvəl, iş mühitində rəhbər və ya həmkarla işlədilir. Tonu rəsmi və hörmətli olduğu üçün gündəlik, dostyana söhbətdə bir az ağır səslənə bilər; orada 'Can I talk to you for a sec?' daha təbiidir.",
      example: "Excuse me, Ms. Aliyeva, may I have a word? It's about tomorrow's meeting.",
      register: "formal",
    },
  ],
  practice: [
    {
      type: "multiple-choice",
      prompt: "Which greeting is the most formal way to meet someone for the first time?",
      options: ["How's it going?", "How do you do?", "See you around."],
      answer: 1,
      explanation:
        "'How do you do?' is a very formal first-meeting greeting; the expected reply is also 'How do you do?'. 'How's it going?' is casual and 'See you around' is a goodbye.",
    },
    {
      type: "multiple-choice",
      prompt: "You want to introduce your colleague to a client in a polite, professional way. What do you say?",
      options: ["This is Elvin.", "I'd like you to meet my colleague Elvin.", "Take care, Elvin."],
      answer: 1,
      explanation:
        "'I'd like you to meet ...' is a polite, warm way to introduce one person to another, suitable for professional settings. 'This is ...' is more casual and 'Take care' is a goodbye.",
    },
    {
      type: "multiple-choice",
      prompt: "Which phrase is a warm, friendly way to say goodbye?",
      options: ["Take care!", "Let me introduce myself.", "Pleased to meet you."],
      answer: 0,
      explanation:
        "'Take care!' is a friendly farewell expressing goodwill. The other two are used at the start of a meeting, not when leaving.",
    },
    {
      type: "gap-fill",
      prompt: "Let me ___ myself. I'm Kamran, the new project manager. (introduce)",
      answer: "introduce",
      explanation: "'Let me introduce myself' is a polite way to begin telling people who you are.",
    },
    {
      type: "gap-fill",
      prompt: "Anyway, I'd better head off. See you ___, Tom! (around)",
      answer: "around",
      explanation: "'See you around' is a casual goodbye used when you expect to meet again but without a fixed time.",
    },
    {
      type: "gap-fill",
      prompt: "Hey everyone, ___ is my sister, Nigar. (this)",
      answer: "this",
      explanation: "'This is ...' is the simplest, most common everyday way to introduce someone.",
    },
  ],
};
