import type { ReferenceGroup } from "../reference";
import type { FunctionalPhrase } from "../types";
import { MessageCircle } from "lucide-react";

export const fnOpinions: ReferenceGroup<FunctionalPhrase> = {
  id: "opinions",
  label: "Giving Opinions",
  azLabel: "Fikir bildirmə",
  icon: MessageCircle,
  description:
    "Phrases for introducing your own point of view and inviting other people to share theirs.",
  azDescription:
    "Bu ifadələr fikrini bildirərkən onu nəzakətli və aydın şəkilde təqdim etmək üçün lazımdır — birbaşa \"It is good\" demək əvəzinə \"In my opinion, it is good\" demək cümləni daha təbii və yumşaq edir. Müzakirələrdə, iclaslarda, esselərdə və gündəlik söhbətlərdə öz mövqeyini başqasının fikri ilə qarışdırmadan göstərmək üçün işlənir. Bundan əlavə, qarşı tərəfin fikrini soruşan ifadələr söhbəti canlı saxlayır və dialoqu tək tərəfli olmaqdan qoruyur.",
  items: [
    {
      phrase: "In my opinion, ...",
      level: "B1",
      use: "a neutral, all-purpose way to introduce your personal opinion",
      azUse:
        "Öz şəxsi fikrini bildirmək üçün ən universal və neytral ifadədir; həm rəsmi (iş, esse), həm də qeyri-rəsmi (dostlarla söhbət) kontekstdə işlənə bilər. Cümlənin əvvəlinde gəlir və ardınca vergül qoyulur. Diqqət: \"in my opinion\" deyilir, \"to my opinion\" yox — bu, azərbaycanlıların tez-tez etdiyi səhvdir.",
      example: "In my opinion, remote work makes most people more productive.",
      register: "neutral",
    },
    {
      phrase: "If you ask me, ...",
      level: "B2",
      use: "an informal way to give an opinion, often a strong or honest one",
      azUse:
        "Qeyri-rəsmi, danışıq dilinə aid ifadədir və adətən güclü, səmimi fikir bildirəndə işlənir — \"mənə qalsa\", \"məncə isə\" mənasını verir. Dostlarla, ailə ilə söhbətdə təbii səslənir, lakin rəsmi yazıda və iş yazışmalarında istifadə etmə. Çox vaxt qarşı tərəfin fikrindən fərqli, açıq bir mövqe ortaya qoymaq üçün seçilir.",
      example: "If you ask me, they paid way too much for that car.",
      register: "informal",
    },
    {
      phrase: "As far as I'm concerned, ...",
      level: "B2",
      use: "to stress that this is your personal view, others may disagree",
      azUse:
        "Bu ifadə fikrin yalnız səndən asılı olduğunu, başqalarının fərqli düşünə biləcəyini vurğulamaq üçün işlənir — \"mənə gəlincə\", \"mənim fikrimcə isə\" mənasını daşıyır. Çox vaxt qətiyyətli və bir qədər iddialı səslənir, sanki \"başqaları nə deyirsə desin, mənim mövqeyim budur\". Həm söhbətdə, həm də yazıda işlənə bilər, amma tonu güclü olduğu üçün ehtiyatla istifadə et.",
      example:
        "As far as I'm concerned, the meeting was a complete waste of time.",
      register: "neutral",
    },
    {
      phrase: "From my point of view, ...",
      level: "B1",
      use: "to present an opinion as your particular perspective",
      azUse:
        "Fikrini \"mənim baxış bucağımdan\" kimi təqdim etmək üçün işlənir və başqasının fərqli perspektivi ola biləcəyini nəzakətli şəkilde qəbul edir. Həm rəsmi, həm qeyri-rəsmi kontekstdə uyğundur və xüsusən bir məsələni müxtəlif tərəflərdən müzakirə edəndə faydalıdır. Cümlənin əvvəlinde gəlir, ardınca vergül qoyulur.",
      example:
        "From my point of view, the new policy will help small businesses.",
      register: "neutral",
    },
    {
      phrase: "Personally, I think (that) ...",
      level: "B1",
      use: "to make clear the opinion is yours, slightly informal",
      azUse:
        "\"Personally\" sözü fikrin məhz sənə aid olduğunu və onu başqalarına aşırmadığını vurğulayır — \"şəxsən mən düşünürəm ki\" mənasını verir. Bir qədər qeyri-rəsmi səslənir, gündəlik söhbətdə və yumşaq tonlu yazıda yaxşı işləyir. \"That\" sözü çox vaxt buraxılır: \"Personally, I think it's wrong\" tamamilə təbiidir.",
      example: "Personally, I think the film was overrated.",
      register: "informal",
    },
    {
      phrase: "It seems to me that ...",
      level: "B2",
      use: "to give an opinion in a soft, tentative way",
      azUse:
        "Fikrini ehtiyatlı, yumşaq və qəti olmayan şəkilde bildirmək üçün işlənir — \"mənə elə gəlir ki\" mənasını daşıyır. Qarşı tərəfi qıcıqlandırmadan, fikir ayrılığı olan mövzularda mövqeyini nəzakətli təqdim etmək üçün idealdır. Həm rəsmi, həm qeyri-rəsmi kontekstdə işlənir və səni daha açıq, dinləməyə hazır göstərir.",
      example:
        "It seems to me that we are focusing on the wrong problem here.",
      register: "neutral",
    },
    {
      phrase: "I'm convinced that ...",
      level: "C1",
      use: "to express a strong, firmly held opinion",
      azUse:
        "Çox güclü, möhkəm və əmin olduğun fikri bildirmək üçün işlənir — \"qətiyyətlə inanıram ki\", \"əminəm ki\" mənasını verir. Adi \"I think\"-dən daha qətiyyətlidir, ona görə yalnız doğrudan da əmin olduğun məqamlarda işlət. Həm rəsmi müzakirələrdə, həm də inandırıcı esse və çıxışlarda mövqeyini gücləndirmək üçün uyğundur.",
      example:
        "I'm convinced that investing in education is the key to long-term growth.",
      register: "formal",
    },
    {
      phrase: "What do you think (about ...)?",
      level: "B1",
      use: "to ask directly for someone else's opinion",
      azUse:
        "Qarşı tərəfin fikrini birbaşa soruşmaq üçün ən sadə və geniş işlənən ifadədir — \"sən nə düşünürsən?\", \"sənin fikrin nədir?\" mənasını verir. Söhbəti tək tərəfli olmaqdan qoruyur və qarşı tərəfi danışmağa dəvet edir. \"About\" əlavə edərək konkret mövzunu da göstərə bilərsən: \"What do you think about the plan?\".",
      example: "I'd go for the blue one. What do you think?",
      register: "neutral",
    },
  ],
  practice: [
    {
      type: "multiple-choice",
      prompt: "Which phrase introduces an opinion in a soft, tentative way?",
      options: [
        "I'm convinced that ...",
        "It seems to me that ...",
        "If you ask me, ...",
      ],
      answer: 1,
      explanation:
        "\"It seems to me that ...\" sounds careful and tentative. \"I'm convinced\" is very strong and \"If you ask me\" is blunt and informal.",
    },
    {
      type: "multiple-choice",
      prompt: "Which phrase is the most informal way to give an opinion?",
      options: [
        "From my point of view, ...",
        "If you ask me, ...",
        "In my opinion, ...",
      ],
      answer: 1,
      explanation:
        "\"If you ask me\" is informal, everyday speech. The other two are neutral and fine in formal writing.",
    },
    {
      type: "multiple-choice",
      prompt: "Which phrase asks someone else for their opinion?",
      options: [
        "Personally, I think ...",
        "As far as I'm concerned, ...",
        "What do you think?",
      ],
      answer: 2,
      explanation:
        "\"What do you think?\" invites the other person to share a view. The others state your own opinion.",
    },
    {
      type: "gap-fill",
      prompt: "In my ___, this is the best option we have. (opinion)",
      answer: "opinion",
      explanation:
        "The fixed phrase is \"in my opinion\" — never \"to my opinion\".",
    },
    {
      type: "gap-fill",
      prompt:
        "As far as I'm ___, the meeting was a waste of time. (it stresses your personal view)",
      answer: "concerned",
      explanation:
        "\"As far as I'm concerned\" stresses that this is your own view and others may disagree.",
    },
    {
      type: "gap-fill",
      prompt:
        "If you ___ me, they paid far too much for it. (asks for / introduces a frank opinion)",
      answer: "ask",
      explanation:
        "\"If you ask me\" is an informal way to introduce a frank, often strong opinion.",
    },
  ],
};
