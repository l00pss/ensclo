import type { ReferenceGroup } from "../reference";
import type { FunctionalPhrase } from "../types";
import { Navigation } from "lucide-react";

export const fnDirections: ReferenceGroup<FunctionalPhrase> = {
  id: "directions",
  label: "Directions & Instructions",
  azLabel: "İstiqamət və təlimat",
  icon: Navigation,
  description:
    "Phrases for asking for and giving directions and for explaining step-by-step instructions — how to get somewhere and how to do something in order.",
  azDescription:
    "Bu qrup kiməsə yol soruşmaq, istiqamət göstərmək və hər hansı bir işi addım-addım izah etmək üçün lazım olan ifadələri əhatə edir. İngiliscə yol göstərərkən sözlərin ardıcıllığı və 'first…, then…, after that…' kimi bağlayıcılar çox vacibdir, çünki dinləyən hər addımı düzgün sırada başa düşməlidir. Burada həm küçədə yad adamdan nəzakətlə yol soruşmağı, həm də başqasına yolu və ya prosesi aydın, qarışıqlıq yaratmadan izah etməyi öyrənəcəksən.",
  items: [
    {
      phrase: "Could you tell me the way to...?",
      level: "B1",
      use: "a polite way to ask a stranger for directions to a place",
      azUse:
        "Tanımadığın bir adamdan, məsələn küçədə, hansısa yerə necə gedəcəyini nəzakətlə soruşmaq üçün ən təhlükəsiz ifadədir. 'Could you' ifadəni xahiş kimi yumşaldır, ona görə həm rəsmi, həm də gündəlik vəziyyətlərdə işlədə bilərsən. Ardınca yerin adı gəlir ('…the way to the station?'); bunu deməzdən əvvəl 'Excuse me' demək daha da nəzakətli səslənir.",
      example: "Excuse me, could you tell me the way to the train station?",
      register: "neutral",
    },
    {
      phrase: "How do I get to...?",
      level: "B1",
      use: "a simple, everyday way to ask how to reach a place",
      azUse:
        "Hansısa yerə necə çatacağını soruşmağın ən sadə və gündəlik yoludur; ardınca yerin adı gəlir ('How do I get to the museum?'). Qısa və təbii səsləndiyi üçün dostlar, satıcılar və ya yad adamlarla rahat işlənir. Çox rəsmi olmasa da kobud da deyil — sadəcə əvvəlinə 'Excuse me' əlavə etsən, daha nəzakətli olar.",
      example: "How do I get to the city centre from here?",
      register: "neutral",
    },
    {
      phrase: "Go straight on.",
      level: "B1",
      use: "to tell someone to continue forward without turning",
      azUse:
        "Kiməsə dönmədən düz irəli getməyi demək üçün işlənən sadə təlimat ifadəsidir. Britaniya ingiliscəsində 'go straight on', Amerika ingiliscəsində isə çox vaxt 'go straight ahead' deyilir — mənası eynidir. Yol göstərərkən çox tez-tez işlənir və adətən ardınca 'until…' və ya 'as far as…' ilə davam etdirilir ('Go straight on until you see the church').",
      example: "Go straight on for about two hundred metres and you'll see it.",
      register: "neutral",
    },
    {
      phrase: "Turn left at...",
      level: "B1",
      use: "to tell someone where to turn left",
      azUse:
        "Kiməsə harada sola dönəcəyini dəqiq göstərmək üçün işlənir; ardınca dönəcəyin yer gəlir ('Turn left at the traffic lights' — işıqforda sola dön). 'Turn right at…' eyni qaydada sağ tərəf üçün işlənir. Yol göstərmənin əsas ifadələrindəndir; istinad nöqtəsi (işıqfor, bank, küncdəki mağaza) əlavə etmək yolu daha asan tapılan edir.",
      example: "Turn left at the bank and the post office is on your right.",
      register: "neutral",
    },
    {
      phrase: "It's just around the corner.",
      level: "B2",
      use: "to say a place is very close, just past the nearby corner",
      azUse:
        "Hansısa yerin çox yaxın olduğunu, sadəcə yaxındakı küncü dönəndə görünəcəyini bildirmək üçün işlənən idiomatik ifadədir. Həm hərfi mənada (həqiqətən küncün arxasında), həm də 'lap yaxındadır, az qalıb' mənasında işlənə bilər. Qeyri-rəsmi və səmimi səslənir, ona görə gündəlik söhbətlərdə yol göstərəndə çox təbii olur.",
      example: "Don't worry, the pharmacy is just around the corner.",
      register: "informal",
    },
    {
      phrase: "First..., then...",
      level: "B1",
      use: "to give instructions in a clear, ordered sequence",
      azUse:
        "Bir işi addım-addım izah edərkən addımların sırasını aydın göstərmək üçün işlənir: 'First…' birinci addımı, 'then…' isə növbəti addımı bildirir. Həm yol göstərəndə, həm də hər hansı prosesi (resept, qaydalar, təlimat) izah edəndə çox faydalıdır. Neytraldır, ona görə həm dostcasına, həm də rəsmi izahlarda rahat işlənir; addımları qarışdırmamaq üçün açar bağlayıcılardır.",
      example: "First, log in to the website, then click on 'My account'.",
      register: "neutral",
    },
    {
      phrase: "Make sure you...",
      level: "B2",
      use: "to emphasise an important step that must not be forgotten",
      azUse:
        "Təlimat verərkən mütləq yerinə yetirilməli olan vacib bir addımı vurğulamaq, unudulmamasını xəbərdar etmək üçün işlənir ('Make sure you save the file' — faylı yadda saxlamağı unutma). Əmrdən daha qayğılı səslənir, çünki qarşı tərəfin xeyrinə deyilir. Həm gündəlik, həm də iş mühitində işlənir; xüsusən nəyisə səhv etməyin qarşısını almaq istədikdə faydalıdır.",
      example: "Make sure you turn off the lights before you leave.",
      register: "neutral",
    },
    {
      phrase: "Proceed along ... until you reach ...",
      level: "C1",
      use: "a formal way to instruct someone to continue along a route",
      azUse:
        "Bir marşrut boyunca müəyyən nöqtəyə çatana qədər davam etməyi rəsmi və dəqiq şəkildə bildirmək üçün işlənir. 'Proceed' 'go'-dan daha rəsmidir, ona görə yazılı təlimatlarda, rəsmi göstərişlərdə və ya tədbir təşkilatçılarının verdiyi yol təriflərində daha çox rast gəlinir. Gündəlik küçə söhbətində bir az təmtəraqlı səslənə bilər; orada 'keep going along… until…' daha təbii olar.",
      example:
        "Proceed along the main corridor until you reach the second set of doors.",
      register: "formal",
    },
    {
      phrase: "It's the second turning on the right.",
      level: "B2",
      use: "to identify exactly which turn someone should take by counting",
      azUse:
        "Yol göstərərkən dönəcəyin yeri saymaqla dəqiq bildirmək üçün işlənir: 'first/second/third turning on the right/left' — sağda (və ya solda) birinci/ikinci/üçüncü dönüş. Bu üsul küçə adını bilmədikdə çox faydalıdır, çünki qarşı tərəf sadəcə dönüşləri sayaraq düzgün yeri tapır. Neytral səslənir və həm gündəlik, həm də bir az rəsmi söhbətdə rahat işlənir; çaşqınlığın qarşısını almaq üçün 'on the right' hissəsini mütləq aydın deyin.",
      example: "Keep going down this road and it's the second turning on the right.",
      register: "neutral",
    },
    {
      phrase: "You can't miss it.",
      level: "B1",
      use: "to reassure someone that a place is very easy to find",
      azUse:
        "Kiməsə yol göstərəndən sonra həmin yerin tapılmasının çox asan olduğuna, onu mütləq görəcəyinə əmin etmək üçün işlənən idiomatik ifadədir; hərfi tərcüməsi 'onu qaçıra bilməzsən' olsa da, mənası 'tapmamağın mümkün deyil' deməkdir. Çox vaxt yol təriflərinin sonunda, qarşı tərəfi sakitləşdirmək üçün deyilir ('…it's the big red building, you can't miss it'). Səmimi və qeyri-rəsmi səsləndiyi üçün dostlar və yad adamlarla gündəlik söhbətdə təbii görünür.",
      example: "It's the tallest building on the street, you can't miss it.",
      register: "informal",
    },
    {
      phrase: "Head towards the...",
      level: "B2",
      use: "to tell someone to walk or drive in the direction of a landmark",
      azUse:
        "Kiməsə hansısa nişanə və ya istinad nöqtəsinin (körpü, qüllə, çay) istiqamətində hərəkət etməyi demək üçün işlənir; 'head' burada 'getmək, üz tutmaq' mənasındadır ('Head towards the river' — çaya tərəf get). Dəqiq küçə adı əvəzinə görünən böyük bir obyekti istiqamət kimi göstərmək istəyəndə çox faydalıdır. Neytraldır və həm piyada, həm də sürücü üçün yol göstərəndə təbii işlənir; adətən ardınca 'and then…' ilə növbəti addım gəlir.",
      example: "Head towards the cathedral and you'll find the café on your left.",
      register: "neutral",
    },
    {
      phrase: "Once you've done that, ...",
      level: "B2",
      use: "to move on to the next step after the previous one is finished",
      azUse:
        "Təlimat verərkən bir addım tamamlandıqdan sonra növbəti addıma keçidi bildirmək üçün işlənir: 'Once you've done that, …' — 'bunu edəndən sonra, …'. Addımlar arasında aydın əlaqə yaratdığı üçün resept, qaydalar və ya texniki göstərişləri izah edərkən çox faydalıdır. Neytraldır və 'after that' ifadəsinə yaxındır, lakin əvvəlki addımın bitməsini bir az daha çox vurğulayır; mərhələli izahlarda ardıcıllığı qarışdırmamağa kömək edir.",
      example: "Enter your password. Once you've done that, click the green button.",
      register: "neutral",
    },
    {
      phrase: "Kindly refer to the ... before proceeding.",
      level: "C1",
      use: "a formal way to tell someone to consult a resource before continuing",
      azUse:
        "Davam etməzdən əvvəl kiməsə hansısa mənbəyə (təlimat, sxem, sənəd) müraciət etməyi rəsmi və nəzakətli şəkildə bildirmək üçün işlənir; 'kindly' ifadəni daha nəzakətli, 'refer to' isə 'baxmaq, müraciət etmək' mənasında rəsmi səsləndirir. Əsasən yazılı təlimatlarda, istifadəçi bələdçilərində və ya rəsmi e-poçtlarda rast gəlinir. Gündəlik danışıqda bir az rəsmi səslənə bilər; orada 'have a look at the… first' daha təbii olar.",
      example:
        "Kindly refer to the safety diagram before proceeding to the next stage.",
      register: "formal",
    },
  ],
  practice: [
    {
      type: "multiple-choice",
      prompt: "Which phrase is the most polite way to ask a stranger for directions?",
      options: [
        "Could you tell me the way to the station?",
        "Go straight on.",
        "It's just around the corner.",
      ],
      answer: 0,
      explanation:
        "\"Could you tell me the way to...?\" is a polite question for asking directions. The other two are used when giving directions, not asking for them.",
    },
    {
      type: "multiple-choice",
      prompt: "Which phrase emphasises an important step that must not be forgotten?",
      options: [
        "First, log in to the website.",
        "Make sure you save the file.",
        "How do I get to the centre?",
      ],
      answer: 1,
      explanation:
        "\"Make sure you...\" stresses a key step so it isn't forgotten. \"First...\" simply orders steps, and \"How do I get to...?\" asks for directions.",
    },
    {
      type: "gap-fill",
      prompt: "Excuse me, could you tell me the ___ to the train station? (asking for directions)",
      answer: "way",
      explanation:
        "\"Could you tell me the way to...?\" is a polite way to ask how to reach a place.",
    },
    {
      type: "gap-fill",
      prompt: "Turn ___ at the bank and the post office is on your right. (give a direction)",
      answer: "left",
      explanation:
        "\"Turn left at...\" tells someone exactly where to turn left; \"turn right at...\" works the same way.",
    },
    {
      type: "gap-fill",
      prompt: "First, log in to the website, ___ click on 'My account'. (ordering steps)",
      answer: "then",
      explanation:
        "\"First..., then...\" gives instructions in a clear, ordered sequence.",
    },
    {
      type: "multiple-choice",
      prompt: "Which phrase is the most formal way to tell someone to continue along a route?",
      options: [
        "It's just around the corner.",
        "Go straight on.",
        "Proceed along the corridor until you reach the doors.",
      ],
      answer: 2,
      explanation:
        "\"Proceed along ... until you reach ...\" is formal and precise, suited to written instructions. The others are neutral or informal spoken directions.",
    },
  ],
};
