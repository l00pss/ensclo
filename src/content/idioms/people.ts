// Idioms — People & Relationships. Bir fayl = bir tematik qrup.
import type { ReferenceGroup } from "../reference";
import type { Idiom } from "../types";
import { Users } from "lucide-react";

export const idiomPeople: ReferenceGroup<Idiom> = {
  id: "people",
  label: "People & Relationships",
  azLabel: "İnsanlar və münasibətlər",
  icon: Users,
  description:
    "Common idioms for describing friendships, getting along with others, conflicts, and the ups and downs of relationships.",
  azDescription:
    "Bu qrup insanlar arasındakı münasibətləri — dostluğu, yola getməyi, mübahisələri və barışmağı — təsvir edən idiomları əhatə edir. Bu ifadələr gündəlik söhbətlərdə, kiminlə yaxın olduğunuzu, kiminlə anlaşmadığınızı və ya münasibətlərin necə dəyişdiyini izah etmək üçün çox işlənir. Onları öyrənmək insanlar haqqında daha təbii və canlı danışmağa kömək edir.",
  items: [
    {
      idiom: "get along with",
      level: "B1",
      meaning: "to have a friendly relationship with someone",
      azMeaning:
        "Kimləsə yola getmək, mehriban münasibətdə olmaq deməkdir. Yəni iki nəfər bir-birini başa düşür, mübahisə etmədən rahat ünsiyyət qurur və birlikdə olmaqdan narahat olmurlar.",
      example: "I get along with most of my colleagues, so the office feels friendly.",
      register: "neutral",
      azNote:
        "Çox vaxt 'get along with somebody' formasında işlənir; əgər heç kim qeyd olunmursa, 'get along' (yola getmək) tək də işlənə bilər.",
    },
    {
      idiom: "hit it off",
      level: "B2",
      meaning: "to like someone immediately when you first meet them",
      azMeaning:
        "İlk tanışlıqdan dərhal bir-birini bəyənmək, tez bir zamanda yaxın olmaq deməkdir. Yəni iki nəfər görüşən kimi aralarında səmimi bir bağ yaranır və sanki bir-birlərini çoxdan tanıyırlarmış kimi rahat danışırlar.",
      example: "We hit it off right away and talked for hours at the party.",
      register: "informal",
      azNote:
        "Adətən keçmiş zamanda 'hit it off' kimi deyilir; 'with somebody' əlavə edilərək kiminlə yaxınlaşıldığı göstərilə bilər.",
    },
    {
      idiom: "see eye to eye",
      level: "B2",
      meaning: "to agree completely with someone",
      azMeaning:
        "Kiminləsə tam razılaşmaq, eyni fikirdə olmaq deməkdir. Yəni iki nəfər bir məsələyə eyni baxır və aralarında fikir ayrılığı olmur. Tez-tez inkar formada — razılaşmadıqlarını bildirmək üçün — işlənir.",
      example: "My brother and I don't always see eye to eye on politics.",
      register: "neutral",
      azNote:
        "Çox vaxt 'don't see eye to eye' kimi inkarda işlənərək iki nəfərin bir mövzuda razılaşmadığını bildirir.",
    },
    {
      idiom: "break the ice",
      level: "B1",
      meaning: "to make people feel relaxed in a new or awkward social situation",
      azMeaning:
        "Buzu sındırmaq, yəni gərginliyi və ya yadlıq hissini aradan qaldırıb söhbəti başlatmaq deməkdir. Yeni tanış olan və ya bir-birindən çəkinən insanlar arasında ilk addımı atıb mühiti rahatlaşdırmaq mənasını verir.",
      example: "To break the ice, the teacher asked everyone to share a fun fact about themselves.",
      register: "informal",
      azNote:
        "Çox vaxt görüşlərin, dərslərin və ya tədbirlərin əvvəlində ünsiyyəti asanlaşdıran fəaliyyətlər ('ice-breaker') üçün işlənir.",
    },
    {
      idiom: "on the same wavelength",
      level: "B2",
      meaning: "to understand each other well and think in a similar way",
      azMeaning:
        "Bir-birini yaxşı başa düşmək, oxşar düşünmək deməkdir — sanki eyni dalğada olmaq. Bu insanlar bir-birinin fikrini az sözlə anlayır, eyni şeyləri gülməli və ya vacib hesab edirlər və birlikdə işləmək onlara asan gəlir.",
      example: "My business partner and I are on the same wavelength, so meetings go smoothly.",
      register: "informal",
      azNote:
        "Daha çox fikir və düşüncə uyğunluğunu, yəni zövq deyil, baxış oxşarlığını vurğulamaq üçün işlənir.",
    },
    {
      idiom: "fall out with",
      level: "B2",
      meaning: "to have an argument and stop being friendly with someone",
      azMeaning:
        "Kiminləsə mübahisə edib küsmək, münasibəti pozmaq deməkdir. Yəni əvvəllər yaxın olan iki nəfər bir mübahisədən sonra bir-biri ilə danışmağı dayandırır və aralarında soyuqluq yaranır.",
      example: "She fell out with her best friend over money and they haven't spoken since.",
      register: "informal",
      azNote:
        "'Fall out over something' (bir şey üstündə küsmək) formasında mübahisənin səbəbini göstərmək olar; ziddi 'make up' (barışmaq) ifadəsidir.",
    },
    {
      idiom: "build bridges",
      level: "C1",
      meaning: "to improve relationships between people who have disagreed",
      azMeaning:
        "İnsanlar arasında körpülər qurmaq, yəni mübahisə etmiş və ya bir-birindən uzaqlaşmış tərəflər arasında münasibəti yaxşılaşdırmaq deməkdir. Bu, anlaşma yaratmaq, etimadı bərpa etmək və düşmənçiliyi əməkdaşlığa çevirmək cəhdini bildirir.",
      example: "The new manager worked hard to build bridges between the two rival teams.",
      register: "neutral",
      azNote:
        "Çox vaxt rəsmi və ya ictimai kontekstdə — komandalar, qruplar və ya ölkələr arasında barışıq cəhdləri üçün işlənir.",
    },
    {
      idiom: "a shoulder to cry on",
      level: "C1",
      meaning: "someone who listens sympathetically and gives emotional support",
      azMeaning:
        "Dərd ortağı, yəni çətin anda dinləyən və mənəvi dəstək verən bir insan deməkdir. Belə adam problemini həll etməsə də, hisslərini paylaşa biləcəyin, səni anlayan və yanında olan birisidir.",
      example: "After the breakup, she just needed a shoulder to cry on, not advice.",
      register: "informal",
      azNote:
        "Çox vaxt 'need / have / be a shoulder to cry on' formalarında işlənir və emosional yaxınlığı vurğulayır.",
    },
  ],
  practice: [
    {
      type: "gap-fill",
      prompt: "We met at university and hit it ___ straight away — now we're best friends.",
      answer: "off",
      explanation:
        "'Hit it off' means to like someone immediately when you first meet them.",
    },
    {
      type: "gap-fill",
      prompt: "To break the ___ , the host started the dinner with a funny story.",
      answer: "ice",
      explanation:
        "'Break the ice' means to make people feel relaxed in a new or awkward situation.",
    },
    {
      type: "gap-fill",
      prompt: "My sister and I don't always see eye to ___ about money.",
      answer: "eye",
      explanation:
        "'See eye to eye' means to agree completely; the negative form shows disagreement.",
    },
    {
      type: "multiple-choice",
      prompt: "What does 'get along with someone' mean?",
      options: [
        "to have a friendly relationship with them",
        "to walk somewhere with them",
        "to argue with them constantly",
      ],
      answer: 0,
      explanation:
        "'Get along with' means to have a friendly, easy relationship with someone.",
    },
    {
      type: "multiple-choice",
      prompt: "If two people 'fall out with' each other, they have...",
      options: [
        "started a new friendship",
        "had an argument and stopped being friendly",
        "agreed on everything",
      ],
      answer: 1,
      explanation:
        "'Fall out with' means to argue and stop being friendly with someone.",
    },
    {
      type: "multiple-choice",
      prompt: "Someone described as 'a shoulder to cry on' is a person who...",
      options: [
        "gives you money when you need it",
        "always disagrees with you",
        "listens and gives you emotional support",
      ],
      answer: 2,
      explanation:
        "'A shoulder to cry on' is someone who listens sympathetically and supports you emotionally.",
    },
    {
      type: "gap-fill",
      prompt: "The new manager tried to build ___ between the two teams that had argued.",
      answer: "bridges",
      explanation:
        "'Build bridges' means to improve relationships between people who have disagreed.",
    },
  ],
};
