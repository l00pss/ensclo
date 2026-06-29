import type { ReferenceGroup } from "../reference";
import type { FunctionalPhrase } from "../types";
import { Briefcase } from "lucide-react";

export const fnInterviews: ReferenceGroup<FunctionalPhrase> = {
  id: "interviews",
  label: "Job Interviews",
  azLabel: "İş müsahibəsi",
  icon: Briefcase,
  description:
    "Useful English phrases for job interviews: describing your strengths and experience, showing motivation, talking about your future goals, and asking the interviewer questions about the role.",
  azDescription:
    "Bu qrup iş müsahibəsində özünü inamlı və peşəkar təqdim etmək üçün lazım olan ən vacib ingilis ifadələrini toplayır. Burada öz güclü tərəflərini və iş təcrübəni təsvir etmək, motivasiyanı və həvəsini göstərmək, gələcək məqsədlərindən danışmaq və müsahibə götürən şəxsə vəzifə haqqında ağıllı suallar vermək kimi funksiyalar əhatə olunur. Bu ifadələr əsasən rəsmi və neytral üslubdadır, çünki müsahibədə həm aydın, həm də nəzakətli olmaq vacibdir; onları əvvəlcədən öyrənib məşq etmək sizə həyəcanı azaltmağa və yaxşı təəssürat yaratmağa kömək edir.",
  items: [
    {
      phrase: "My greatest strength is ...",
      level: "B1",
      use: "to introduce your best professional quality clearly and confidently when asked about your strengths",
      azUse:
        "müsahibədə 'What is your greatest strength?' (Ən güclü tərəfin nədir?) sualına cavab verərkən öz ən yaxşı peşəkar keyfiyyətini aydın və inamlı şəkildə təqdim etmək üçün işlənir. Bu rəsmi ifadədən sonra adətən bir-iki cümlə ilə həmin keyfiyyəti nümunə ilə izah etmək lazımdır, sadəcə sözü demək kifayət deyil. Lovğa yox, inamlı səslənir, ona görə müsahibə üçün çox uyğundur.",
      example:
        "My greatest strength is my ability to stay calm and organised under pressure.",
      register: "formal",
    },
    {
      phrase: "I have experience in ...",
      level: "B1",
      use: "to state the field or area where you have worked and built up skills",
      azUse:
        "hansı sahədə işlədiyini və təcrübə topladığını bildirmək üçün işlənən neytral, lakin peşəkar ifadədir. 'In' sözündən sonra adətən bir sahə və ya fəaliyyət gəlir (məsələn, 'in marketing', 'in managing teams'). Müsahibədə öz keçmiş işini və bacarıqlarını vəzifənin tələbləri ilə əlaqələndirmək üçün çox faydalıdır.",
      example:
        "I have experience in managing small teams and meeting tight deadlines.",
      register: "neutral",
    },
    {
      phrase: "I'm a quick learner.",
      level: "B1",
      use: "to show that you adapt fast and can pick up new skills or tasks easily",
      azUse:
        "yeni işləri, bacarıqları və proqramları tez öyrənə bildiyini göstərmək üçün işlənir; xüsusən təcrübən az olanda və ya yeni bir sahəyə keçəndə faydalıdır. Bu ifadə müsahibə götürən şəxsə 'məni öyrətmək asan olacaq' mesajını verir. Yarı-rəsmi və neytral səslənir; daha inandırıcı olmaq üçün bir qısa nümunə ilə dəstəkləmək yaxşıdır.",
      example:
        "I'm a quick learner, so I was able to use the new software within a week.",
      register: "neutral",
    },
    {
      phrase: "I'm passionate about ...",
      level: "B2",
      use: "to express strong enthusiasm and genuine interest in your work or field",
      azUse:
        "öz işinə və ya bir sahəyə güclü həvəs və səmimi maraq göstərmək üçün işlənir; 'passionate' sözü sadəcə 'maraqlı' deyil, 'çox sevdiyim, ürəkdən bağlı olduğum' mənasını verir. Müsahibədə motivasiyanı və işə olan sevgini göstərmək üçün güclü təsir yaradan ifadədir. Rəsmi və neytral kontekstdə təbii səslənir, lakin dediyiniz şeyə həqiqətən inandığınız hiss olunmalıdır.",
      example:
        "I'm passionate about creating products that genuinely help people in their daily lives.",
      register: "formal",
    },
    {
      phrase: "Why are you interested in this position?",
      level: "B2",
      use: "a common interview question you should be ready to answer about your motivation for the role",
      azUse:
        "bu, müsahibə götürən şəxsin tez-tez verdiyi sualdır və mənası 'Bu vəzifə ilə niyə maraqlanırsınız?' deməkdir. Bu suala hazır olmaq və cavabınızı şirkətlə, vəzifənin öhdəlikləri ilə və öz karyera məqsədlərinizlə əlaqələndirmək vacibdir. İfadəni özünüz də qarşı tərəfin sualını gözləyəndə tanımalı, həm də bənzər tərzdə nəzakətli suallar qurmağı bacarmalısınız.",
      example:
        "Why are you interested in this position, and how does it fit your career plans?",
      register: "formal",
    },
    {
      phrase: "In five years, I see myself ...",
      level: "B2",
      use: "to answer questions about your future career goals and ambitions",
      azUse:
        "müsahibədə 'Where do you see yourself in five years?' (Beş ildən sonra özünüzü harada görürsünüz?) sualına cavab verərkən gələcək karyera məqsədlərini və ambisiyalarını bildirmək üçün işlənir. 'I see myself' hərfən 'özümü görürəm' deməkdir, yəni gələcəkdə hansı mövqedə və ya rolda olmaq istədiyini təsvir edirsən. Cavabı real və həmin şirkətdə inkişafla bağlı vermək yaxşı təəssürat yaradır; çox uzaq və ya əlaqəsiz arzulardan qaçmaq lazımdır.",
      example:
        "In five years, I see myself leading a team and taking on more responsibility within the company.",
      register: "formal",
    },
    {
      phrase: "Could you tell me more about the role?",
      level: "B2",
      use: "a polite way to ask the interviewer for more details about the job's responsibilities",
      azUse:
        "müsahibənin sonunda və ya 'Do you have any questions?' (Sualınız varmı?) deyiləndə vəzifənin öhdəlikləri haqqında daha çox məlumat soruşmaq üçün nəzakətli ifadədir. Bu cür sual vermək sizin işə həqiqətən maraqlı olduğunuzu və ciddi yanaşdığınızı göstərir. 'Could you' ifadəni yumşaq və nəzakətli edir; rəsmi mühit üçün ideal seçimdir.",
      example:
        "Could you tell me more about the role and what a typical working day looks like?",
      register: "formal",
    },
    {
      phrase: "I believe I'd be a good fit for this team.",
      level: "C1",
      use: "to confidently summarise why your skills and personality match the team and company",
      azUse:
        "müsahibənin sonunda öz bacarıqlarının və şəxsiyyətinin komandaya və şirkətə nə üçün uyğun olduğunu inamla yekunlaşdırmaq üçün işlənir. 'Good fit' bir şəxsin müəyyən komandaya, mədəniyyətə və ya rola uyğun gəlməsi deməkdir, yəni təkcə bacarıq yox, həm də uyumdan bəhs edir. 'I believe' ifadəni lovğa yox, təvazökar və inamlı edir; rəsmi və peşəkar kontekstdə güclü bağlayıcı cümlə kimi işlənir.",
      example:
        "Given my experience and the way I work, I believe I'd be a good fit for this team.",
      register: "formal",
    },
  ],
  practice: [
    {
      type: "gap-fill",
      prompt: "My greatest ___ is staying calm under pressure. (best quality)",
      answer: "strength",
      explanation:
        "'My greatest strength is ...' öz ən yaxşı peşəkar keyfiyyətini təqdim etmək üçün işlənir, ona görə boşluğa 'strength' gəlir.",
    },
    {
      type: "multiple-choice",
      prompt:
        "Which phrase shows strong enthusiasm and genuine interest in your work?",
      options: [
        "I'm passionate about ...",
        "Could you tell me more about the role?",
        "I have experience in ...",
      ],
      answer: 0,
      explanation:
        "'I'm passionate about ...' işə güclü həvəs və səmimi maraq göstərmək üçün işlənir.",
    },
    {
      type: "gap-fill",
      prompt:
        "I have ___ in managing small teams and meeting deadlines. (worked in this area)",
      answer: "experience",
      explanation:
        "'I have experience in ...' hansı sahədə işlədiyini və təcrübə topladığını bildirmək üçün işlənir.",
    },
    {
      type: "multiple-choice",
      prompt:
        "At the end of the interview, which phrase politely asks for more details about the job?",
      options: [
        "Could you tell me more about the role?",
        "I'm a quick learner.",
        "My greatest strength is teamwork.",
      ],
      answer: 0,
      explanation:
        "'Could you tell me more about the role?' vəzifə haqqında daha çox məlumat soruşmaq üçün nəzakətli ifadədir və işə marağı göstərir.",
    },
    {
      type: "gap-fill",
      prompt:
        "In five years, I ___ myself leading a team. (picture / imagine in the future)",
      answer: "see",
      explanation:
        "'In five years, I see myself ...' gələcək karyera məqsədlərindən danışmaq üçün işlənir; 'see myself' özünü gələcəkdə müəyyən rolda təsəvvür etmək deməkdir.",
    },
    {
      type: "multiple-choice",
      prompt:
        "Which phrase confidently summarises why you match the team and company?",
      options: [
        "I believe I'd be a good fit for this team.",
        "Why are you interested in this position?",
        "I have experience in marketing.",
      ],
      answer: 0,
      explanation:
        "'I believe I'd be a good fit for this team' bacarıqlarının və şəxsiyyətinin komandaya uyğun olduğunu inamla bildirmək üçün işlənir.",
    },
    {
      type: "gap-fill",
      prompt:
        "I'm a quick ___, so I learned the new software in a week. (someone who learns fast)",
      answer: "learner",
      explanation:
        "'I'm a quick learner' yeni işləri və bacarıqları tez öyrənə bildiyini göstərmək üçün işlənir.",
    },
  ],
};
