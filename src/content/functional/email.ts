import type { ReferenceGroup } from "../reference";
import type { FunctionalPhrase } from "../types";
import { Mail } from "lucide-react";

export const fnEmail: ReferenceGroup<FunctionalPhrase> = {
  id: "email",
  label: "Emails & Formal Writing",
  azLabel: "Email və rəsmi yazı",
  icon: Mail,
  description:
    "Ready-made phrases for opening, structuring and closing formal and professional emails in English.",
  azDescription:
    "Bu qrup rəsmi və işgüzar email yazarkən istifadə olunan hazır ifadələri toplayır: emaili necə açmaq, məqsədini bildirmək, sənəd əlavə etmək, nəzakətli xahiş etmək və emaili düzgün bağlamaq. İş müraciətləri, müştərilərlə yazışma, müəllim və ya rəsmi qurumlara müraciət kimi hallarda bu kəlmələr yazını peşəkar və nəzakətli göstərir. Düzgün açılış və bağlanış sayəsində email həm aydın, həm də hörmətli səslənir.",
  items: [
    {
      phrase: "I am writing to ...",
      level: "B1",
      use: "a standard formal opening to state the purpose of your email",
      azUse:
        "Rəsmi emailin əvvəlində məqsədini bildirmək üçün işlənən standart açılış ifadəsidir. \"I am writing to\" deyib sonra məqsədini əlavə edirsən, məsələn 'soruşmaq', 'şikayət etmək', 'müraciət etmək'. Rəsmi registrdir və ilk cümlədə email-in niyə yazıldığını birbaşa bildirmək üçün ən təhlükəsiz seçimdir.",
      example: "I am writing to enquire about the marketing position advertised on your website.",
      register: "formal",
    },
    {
      phrase: "I am writing with regard to ...",
      level: "B2",
      use: "a formal way to introduce the specific topic or matter you are contacting about",
      azUse:
        "Hansı mövzu və ya məsələ barədə yazdığını rəsmi şəkildə bildirmək üçün işlənir; \"with regard to\" 'ilə əlaqədar olaraq' deməkdir. Adətən artıq mövcud olan bir mövzuya (sifariş, müqavilə, əvvəlki məktub) istinad edərkən istifadə olunur. Çox rəsmi registrdir və işgüzar yazışmada peşəkar səslənir.",
      example: "I am writing with regard to the invoice we received on 12 May.",
      register: "formal",
    },
    {
      phrase: "Thank you for your email regarding ...",
      level: "B1",
      use: "a polite opening when replying to a message you have received",
      azUse:
        "Sənə gələn emaila cavab verərkən nəzakətli açılış kimi işlənir; əvvəlcə təşəkkür edib sonra mövzunu xatırladırsan. Bu, qarşı tərəfə hörmət göstərir və söhbətin nə barədə olduğunu aydınlaşdırır. Rəsmi və yarı-rəsmi yazışmada geniş istifadə olunur.",
      example: "Thank you for your email regarding the upcoming conference.",
      register: "formal",
    },
    {
      phrase: "I would be grateful if you could ...",
      level: "B2",
      use: "a very polite, formal way to make a request",
      azUse:
        "Çox nəzakətli və rəsmi şəkildə xahiş etmək üçün işlənir; hərfi mənası 'minnətdar olaram ki, edə bilsəniz'-dir. Birbaşa 'Please send me' demək əvəzinə bu ifadə xahişi daha yumşaq və hörmətli edir. Xüsusən rəsmi qurumlara, üstünə və ya tanımadığın adamlara yazarkən idealdır.",
      example: "I would be grateful if you could send me the report by Friday.",
      register: "formal",
    },
    {
      phrase: "Please find attached ...",
      level: "B2",
      use: "a standard formal phrase to refer to a file or document attached to the email",
      azUse:
        "Emaila əlavə etdiyin sənəd və ya fayldan bəhs etmək üçün işlənən standart rəsmi ifadədir; 'əlavədə ... tapa bilərsiniz' mənasını verir. Adətən CV, hesabat, müqavilə kimi sənədləri göndərərkən istifadə olunur. Çox rəsmi və işgüzar registrdir; gündəlik danışıqda 'I've attached' daha qeyri-rəsmi alternativdir.",
      example: "Please find attached my CV and a copy of my references.",
      register: "formal",
    },
    {
      phrase: "Please do not hesitate to contact me if you have any questions.",
      level: "B2",
      use: "a polite closing offer to provide further help or information",
      azUse:
        "Emailin sonunda qarşı tərəfə əlavə kömək təklif etmək üçün işlənən nəzakətli bağlanış ifadəsidir; 'sualınız olarsa, çəkinmədən mənimlə əlaqə saxlayın' deməkdir. Bu, açıq və köməksevər təəssürat yaradır. Rəsmi və işgüzar emaillərdə bağlamadan əvvəl çox işlənir.",
      example: "Please do not hesitate to contact me if you have any questions.",
      register: "formal",
    },
    {
      phrase: "I look forward to hearing from you.",
      level: "B1",
      use: "a polite, formal way to end an email expecting a reply",
      azUse:
        "Cavab gözlədiyini bildirən nəzakətli, rəsmi bağlanış ifadəsidir; 'sizdən cavab almağı səbirsizliklə gözləyirəm' mənasını verir. Diqqət: feildən sonra 'hearing' (gerund) gəlir, 'to hear' yox. Rəsmi məktub və emaillərin sonunda 'Best regards'-dan əvvəl tez-tez işlənir.",
      example: "I look forward to hearing from you at your earliest convenience.",
      register: "formal",
    },
    {
      phrase: "Best regards,",
      level: "B1",
      use: "a common neutral-to-formal sign-off before your name",
      azUse:
        "Email-i imzalamadan, yəni adından əvvəl yazılan ümumi, neytral-rəsmi bağlanış (sign-off) ifadəsidir; 'hörmətlə' mənasına yaxındır. Çox rəsmi hallarda 'Yours sincerely' / 'Yours faithfully', daha səmimi hallarda isə 'Kind regards' işlənə bilər. 'Best regards' iş yazışmasının böyük əksəriyyəti üçün təhlükəsiz və peşəkar seçimdir.",
      example: "Best regards,\nSarah Johnson",
      register: "formal",
    },
  ],
  practice: [
    {
      type: "multiple-choice",
      prompt: "Which phrase is the most appropriate formal opening to state why you are writing?",
      options: [
        "I am writing to enquire about the vacancy.",
        "Hey, what's up with the job?",
        "Just checking on the job thing.",
      ],
      answer: 0,
      explanation:
        "\"I am writing to ...\" is the standard formal opening that introduces the purpose of the email. The other options are informal and unsuitable for formal writing.",
    },
    {
      type: "multiple-choice",
      prompt: "How do you politely refer to a document included with your email?",
      options: [
        "Please find attached my CV.",
        "Look at the file I put in.",
        "My CV is somewhere here.",
      ],
      answer: 0,
      explanation:
        "\"Please find attached ...\" is the standard formal phrase for referring to an attachment.",
    },
    {
      type: "multiple-choice",
      prompt: "Which is a polite, formal way to make a request in an email?",
      options: [
        "I would be grateful if you could send me the report.",
        "Send me the report now.",
        "Give me that report.",
      ],
      answer: 0,
      explanation:
        "\"I would be grateful if you could ...\" softens the request and sounds polite and professional, unlike the direct commands.",
    },
    {
      type: "gap-fill",
      prompt: "Please find ___ my CV and references. (the word for documents included in the email)",
      answer: "attached",
      accept: ["attached"],
      explanation:
        "\"Please find attached ...\" is the fixed formal phrase used to refer to files sent with the email.",
    },
    {
      type: "gap-fill",
      prompt: "I look forward to ___ from you. (verb 'hear' in the -ing form)",
      answer: "hearing",
      accept: ["hearing"],
      explanation:
        "After \"look forward to\" we use the -ing form, so it is \"hearing\", not \"hear\".",
    },
    {
      type: "gap-fill",
      prompt: "I would be ___ if you could reply by Friday. (the polite adjective meaning 'thankful')",
      answer: "grateful",
      accept: ["grateful"],
      explanation:
        "\"I would be grateful if you could ...\" is a very polite, formal way to make a request.",
    },
  ],
};
