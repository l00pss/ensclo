import type { ReferenceGroup } from "../reference";
import type { FunctionalPhrase } from "../types";
import { RefreshCw } from "lucide-react";

export const fnClarifying: ReferenceGroup<FunctionalPhrase> = {
  id: "clarifying",
  label: "Clarifying & Checking",
  azLabel: "Aydınlaşdırma",
  icon: RefreshCw,
  description:
    "Phrases for checking understanding, asking someone to repeat or explain, and confirming you have understood correctly.",
  azDescription:
    "Bu qrup söhbət zamanı bir şeyi tam başa düşmədikdə nəyisə təkrarlatmaq, izah istəmək və ya öz anladığını yoxlamaq üçün lazım olan ifadələri toplayır. İngilis dilində danışarkən hər şeyi ilk dəfədən başa düşmək çətindir, ona görə də nəzakətlə soruşmağı bacarmaq çox vacibdir. Bu ifadələr yanlış anlaşılmanın qarşısını alır və qarşı tərəfə fikrini dəqiqləşdirmək imkanı verir; bəziləri rəsmi iclas və telefon danışıqları, bəziləri isə dostlarla gündəlik söhbət üçün uyğundur.",
  items: [
    {
      phrase: "Sorry, could you repeat that?",
      level: "B1",
      use: "a polite, everyday way to ask someone to say something again",
      azUse:
        "Kiminsə dediyini eşitmədikdə və ya tutmadıqda nəzakətlə təkrar etməsini xahiş etmək üçün ən sadə və geniş yayılmış ifadədir. 'Sorry' sözü xahişi yumşaldır və qaba səslənməsinin qarşısını alır. Həm rəsmi, həm də qeyri-rəsmi vəziyyətlərdə təhlükəsiz şəkildə işlədə bilərsiniz.",
      example:
        "Sorry, could you repeat that? I didn't quite catch the last part.",
      register: "neutral",
    },
    {
      phrase: "Sorry, what was that?",
      level: "B1",
      use: "an informal, quick way to ask someone to repeat what they said",
      azUse:
        "Dostlar və yaxın tanışlarla söhbətdə nəyisə eşitmədikdə tez və təbii şəkildə təkrarlatmaq üçün işlədilir. Bu, qeyri-rəsmi bir ifadədir, ona görə rəsmi iclasda və ya müştəri ilə danışıqda işlətməmək daha yaxşıdır. Gündəlik danışıqda çox təbii və rahat səslənir.",
      example: "Sorry, what was that? It's really noisy in here.",
      register: "informal",
    },
    {
      phrase: "What do you mean by ...?",
      level: "B1",
      use: "to ask someone to explain a specific word or idea they used",
      azUse:
        "Qarşı tərəfin işlətdiyi konkret söz və ya fikrin nə demək olduğunu dəqiqləşdirmək üçün istifadə olunur. Sadəcə 'təkrar et' demir, daha çox 'bunu izah et, bununla nə nəzərdə tutursan' mənasını verir. Neytral registrdə olduğu üçün həm iş, həm də gündəlik kontekstdə rahat işlənir.",
      example:
        "What do you mean by 'flexible hours'? Can I start at any time?",
      register: "neutral",
    },
    {
      phrase: "So what you're saying is ...",
      level: "B2",
      use: "to summarise what someone said in your own words to check understanding",
      azUse:
        "Qarşı tərəfin dediklərini öz sözlərinizlə yekunlaşdırıb 'yəni sən bunu deyirsən ki...' deyərək anladığınızı yoxlamaq üçün işlədilir. Bu ifadə fəal dinləmə (active listening) göstərir və qarşı tərəfə səhv başa düşülübsə düzəltmək imkanı verir. İş görüşmələrində və müzakirələrdə xüsusilə faydalıdır, çünki razılaşmanı dəqiqləşdirir.",
      example:
        "So what you're saying is that we should delay the launch until next month?",
      register: "neutral",
    },
    {
      phrase: "Let me get this straight ...",
      level: "B2",
      use: "an informal way to clarify and confirm a situation before reacting",
      azUse:
        "Vəziyyəti tam aydınlaşdırmaq və 'gəl bunu dəqiqləşdirim' deyərək məsələni özünüz üçün yerli-yerinə qoymaq üçün işlədilir. Çox vaxt bir az təəccüb, şübhə və ya narazılıq çaları daşıyır, ona görə tonuna diqqət etmək lazımdır. Qeyri-rəsmi olduğundan dostlar arasında və ya gərgin söhbətdə daha çox işlənir.",
      example:
        "Let me get this straight — you sold the car without telling me?",
      register: "informal",
    },
    {
      phrase: "If I understand you correctly, ...",
      level: "B2",
      use: "a polite, formal way to check your interpretation of what was said",
      azUse:
        "Qarşı tərəfin fikrini düzgün başa düşüb-düşmədiyinizi nəzakətlə yoxlamaq üçün işlədilən rəsmi ifadədir. 'Əgər sizi düzgün anlayıramsa...' mənasını verir və qarşı tərəfə hörmət göstərir. Rəsmi e-poçtlarda, iclaslarda və işgüzar danışıqlarda yanlış anlaşılmanın qarşısını almaq üçün idealdır.",
      example:
        "If I understand you correctly, you'd like the report by Friday rather than Monday?",
      register: "formal",
    },
    {
      phrase: "Could you be a bit more specific?",
      level: "B2",
      use: "to politely ask someone to give more detail or a clearer explanation",
      azUse:
        "Qarşı tərəf çox ümumi və qeyri-dəqiq danışdıqda ondan nəzakətlə daha konkret və ətraflı izah istəmək üçün işlədilir. 'a bit' sözü xahişi yumşaldır və təzyiq kimi səslənməsinin qarşısını alır. İş kontekstində tələblərin dəqiqləşdirilməsi üçün çox faydalıdır.",
      example:
        "Could you be a bit more specific? I'm not sure which file you mean.",
      register: "neutral",
    },
    {
      phrase: "Just to make sure I've got this right, ...",
      level: "C1",
      use: "an advanced, careful way to confirm details before proceeding",
      azUse:
        "Mühüm bir addım atmazdan əvvəl bütün təfərrüatları diqqətlə təsdiqləmək üçün işlədilən səlis və peşəkar ifadədir. 'Sadəcə düzgün anladığımdan əmin olmaq üçün...' mənasını verir və danışanı son dərəcə diqqətli, məsuliyyətli göstərir. Mürəkkəb tapşırıqlarda, müqavilələrdə və ya texniki müzakirələrdə dəqiqliyi vurğulamaq üçün uyğundur.",
      example:
        "Just to make sure I've got this right, we're meeting the client at nine, not ten?",
      register: "formal",
    },
    {
      phrase: "Do you mean ... or ...?",
      level: "B1",
      use: "to clarify which of two possible options the speaker intends",
      azUse:
        "Qarşı tərəfin sözü iki cür başa düşülə biləndə hansını nəzərdə tutduğunu dəqiqləşdirmək üçün işlədilir. İki seçimi açıq şəkildə qarşı-qarşıya qoyaraq qarşı tərəfə birini seçmək imkanı verir və qarışıqlığı tez aradan qaldırır. Neytral registrdə olduğu üçün həm iş, həm də gündəlik söhbətdə rahat işlənir.",
      example:
        "Do you mean we leave today or tomorrow? I want to book the right ticket.",
      register: "neutral",
    },
    {
      phrase: "Sorry, I'm not sure I follow.",
      level: "B2",
      use: "to politely admit you are losing track of what someone is explaining",
      azUse:
        "Kiminsə izahını izləyə bilmədikdə və ya fikrin gedişatını itirdikdə nəzakətlə bunu etiraf etmək üçün işlədilir. 'Follow' burada 'başa düşmək, ardınca getmək' mənasındadır, ona görə də ifadə təqsiri qarşı tərəfə yükləmir. Mülayim və hörmətli səsləndiyindən həm iclaslarda, həm də gündəlik söhbətdə təhlükəsiz işlənir.",
      example:
        "Sorry, I'm not sure I follow. Could you go back to the part about the budget?",
      register: "neutral",
    },
    {
      phrase: "Are you saying that ...?",
      level: "B2",
      use: "to check a possibly surprising or important implication of what was said",
      azUse:
        "Qarşı tərəfin sözlərindən çıxan, bəzən gözlənilməz və ya mühüm bir nəticəni təsdiqləmək üçün işlədilir. 'Yəni sən deyirsən ki...?' mənasını verir və adətən bir az təəccüb və ya diqqət çaları daşıyır. Tonundan asılı olaraq həm neytral, həm də bir az çaşqınlıq ifadə edə bilər, ona görə işlədərkən səs ahənginə fikir vermək lazımdır.",
      example:
        "Are you saying that the project has been cancelled completely?",
      register: "neutral",
    },
    {
      phrase: "Would you mind explaining that again?",
      level: "B2",
      use: "a very polite way to ask someone to explain something one more time",
      azUse:
        "Bir şeyi yenidən izah etməsini xahiş edərkən xüsusilə nəzakətli və hörmətli səslənmək üçün işlədilir. 'Would you mind' quruluşu xahişi çox yumşaldır və sıxıntı yaratmadığınızı göstərir. Rəsmi şəraitdə, müştərilərlə və ya tanımadığınız adamlarla danışıqda idealdır.",
      example:
        "Would you mind explaining that again? I want to make sure I set it up correctly.",
      register: "formal",
    },
    {
      phrase: "Let me see if I've understood you correctly.",
      level: "C1",
      use: "an advanced way to introduce a careful restatement to confirm understanding",
      azUse:
        "Qarşı tərəfin dediklərini diqqətlə yenidən ifadə etməzdən əvvəl 'sizi düzgün anlayıb-anlamadığıma baxım' deyərək söhbəti çərçivəyə salmaq üçün işlədilən səlis ifadədir. Danışanı düşüncəli və məsuliyyətli göstərir və qarşı tərəfə düzəliş etmək imkanı yaradır. Peşəkar müzakirələrdə, danışıqlarda və mürəkkəb mövzularda dəqiqliyi vurğulamaq üçün uyğundur.",
      example:
        "Let me see if I've understood you correctly: you need both reports approved before the deadline.",
      register: "academic",
    },
  ],
  practice: [
    {
      type: "gap-fill",
      prompt: "Sorry, could you ___ that? I didn't catch it. (repeat)",
      answer: "repeat",
      explanation:
        "'Sorry, could you repeat that?' is a polite, everyday way to ask someone to say something again.",
    },
    {
      type: "gap-fill",
      prompt:
        "What do you ___ by 'flexible hours'? Can I start at any time? (mean)",
      answer: "mean",
      explanation:
        "'What do you mean by ...?' asks someone to explain a specific word or idea they used.",
    },
    {
      type: "gap-fill",
      prompt:
        "So what you're ___ is that we should delay the launch? (saying)",
      answer: "saying",
      explanation:
        "'So what you're saying is ...' summarises what someone said to check your understanding.",
    },
    {
      type: "multiple-choice",
      prompt:
        "Which phrase politely asks someone to give a clearer, more detailed explanation?",
      options: [
        "Could you be a bit more specific?",
        "Let me get this straight.",
        "Sorry, what was that?",
      ],
      answer: 0,
      explanation:
        "'Could you be a bit more specific?' politely asks for more detail; 'a bit' softens the request.",
    },
    {
      type: "multiple-choice",
      prompt:
        "Which phrase is the most formal way to check that you understood someone correctly?",
      options: [
        "Sorry, what was that?",
        "If I understand you correctly, ...",
        "Let me get this straight.",
      ],
      answer: 1,
      explanation:
        "'If I understand you correctly, ...' is a polite, formal way to confirm your interpretation, ideal for meetings and emails.",
    },
    {
      type: "multiple-choice",
      prompt:
        "You want to confirm every detail before an important meeting. Which phrase fits best?",
      options: [
        "Sorry, what was that?",
        "What do you mean by that?",
        "Just to make sure I've got this right, ...",
      ],
      answer: 2,
      explanation:
        "'Just to make sure I've got this right, ...' is a careful, advanced way to confirm details before proceeding.",
    },
  ],
};
