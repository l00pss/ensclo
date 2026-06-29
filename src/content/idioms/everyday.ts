import type { ReferenceGroup } from "../reference";
import type { Idiom } from "../types";
import { Sparkles } from "lucide-react";

export const idiomEveryday: ReferenceGroup<Idiom> = {
  id: "everyday",
  label: "Everyday Idioms",
  azLabel: "Gündəlik idiomlar",
  icon: Sparkles,
  description:
    "Very common, all-purpose English idioms used in daily conversation that are not tied to a single theme.",
  azDescription:
    "Bu qrup ingiliscədə gündəlik danışıqda ən tez-tez rast gəlinən, hər hansı konkret mövzuya bağlı olmayan ümumi idiomları əhatə edir. Bu ifadələr həm dostlarla söhbətdə, həm də adi gündəlik yazışmalarda təbii səslənir və onları bilmək canlı, doğma kimi danışmağa kömək edir. Sözbəsöz tərcümə etmək olmaz — hər birinin öz məcazi mənası var.",
  items: [
    {
      idiom: "once in a blue moon",
      level: "B1",
      meaning: "very rarely; almost never",
      azMeaning:
        "Çox nadir hallarda, demək olar ki, heç vaxt baş verən bir şey üçün işlənir. Sözbəsöz 'mavi ay olanda' deməkdir, amma əsl mənası 'ildə bir, çox seyrək' deməkdir. Bir hadisənin nə qədər az təkrarlandığını vurğulamaq üçün istifadə olunur.",
      example: "My brother lives abroad, so we only see each other once in a blue moon.",
      register: "informal",
      azNote:
        "Adətən cümlənin sonunda, tezliyi bildirən zərf kimi işlənir. 'Often' və ya 'always' sözlərinin əksidir.",
    },
    {
      idiom: "under the weather",
      level: "B1",
      meaning: "feeling slightly ill or unwell",
      azMeaning:
        "Özünü bir az xəstə, kefsiz və ya nasaz hiss etmək deməkdir. Ağır xəstəlik yox, yüngül soyuqdəymə, yorğunluq və ya halsızlıq nəzərdə tutulur. Birisi tam sağlam olmayanda, amma ciddi problem olmayanda işlədilir.",
      example: "I'm feeling a bit under the weather today, so I'll stay home and rest.",
      register: "informal",
      azNote:
        "Çox vaxt 'a bit' və ya 'a little' ilə birlikdə işlənir ki, vəziyyətin yüngül olduğunu göstərsin.",
    },
    {
      idiom: "piece of cake",
      level: "B1",
      meaning: "something very easy to do",
      azMeaning:
        "Çox asan, heç bir çətinlik olmadan görülən iş üçün işlənir. Sözbəsöz 'bir tikə tort' deməkdir, məcazi mənada isə 'su içmək kimi asan, asudə iş' deməkdir. Bir tapşırığın gözlənildiyindən qat-qat sadə olduğunu bildirmək üçün istifadə olunur.",
      example: "Don't worry about the test — it was a piece of cake for everyone in class.",
      register: "informal",
      azNote:
        "Adətən 'be' feili ilə işlənir: 'It's a piece of cake.' Çətin bir şeyin asan olduğunu vurğulamaq üçün əla deyimdir.",
    },
    {
      idiom: "hit the sack",
      level: "B1",
      meaning: "to go to bed; to go to sleep",
      azMeaning:
        "Yatmağa getmək, yorğan-döşəyə girmək deməkdir. Sözbəsöz 'kisəyə vurmaq' kimi səslənsə də, əsl mənası 'yatmaq, yuxuya getmək'dir. Adətən insan yorulanda və ya gecə olub yatmaq vaxtı çatanda işlədilir.",
      example: "It's almost midnight and I'm exhausted, so I think I'll hit the sack.",
      register: "informal",
      azNote:
        "Eyni mənada 'hit the hay' də işlənir. Hər ikisi qeyri-rəsmi danışıqda yatmaq üçün istifadə olunur.",
    },
    {
      idiom: "cost an arm and a leg",
      level: "B2",
      meaning: "to be very expensive",
      azMeaning:
        "Çox baha olmaq, böyük pul tələb etmək deməkdir. Sözbəsöz 'bir qol və bir ayağa başa gəlmək' kimi səslənir, məcazi mənada isə 'cibə ağır oturmaq, baha qiymət' deməkdir. Bir şeyin nə qədər bahalı olduğunu şişirtmə yolu ilə vurğulayır.",
      example: "I'd love that new phone, but it costs an arm and a leg.",
      register: "informal",
      azNote:
        "Çox vaxt 'cost' feili ilə işlənir, amma 'pay an arm and a leg' (baha pul ödəmək) variantı da mümkündür.",
    },
    {
      idiom: "out of the blue",
      level: "B2",
      meaning: "suddenly and unexpectedly, without any warning",
      azMeaning:
        "Birdən-birə, gözlənilmədən, heç bir xəbərdarlıq olmadan baş verən bir şey üçün işlənir. 'Göydəndüşmə kimi', 'qəfildən' mənasını verir. Adətən bir hadisə və ya xəbər heç gözlənilmədiyi halda gələndə istifadə olunur.",
      example: "We hadn't spoken for years, and then out of the blue she called me.",
      register: "neutral",
      azNote:
        "'a bolt out of the blue' (göydəndüşmə xəbər) ifadəsi də eyni fikirdən qaynaqlanır və gözlənilməz xəbəri bildirir.",
    },
    {
      idiom: "get cold feet",
      level: "B2",
      meaning: "to become nervous or hesitant about doing something planned",
      azMeaning:
        "Planlaşdırılmış bir işi görməzdən əvvəl qorxub fikrindən daşınmaq, ürəyini sıxmaq deməkdir. Sözbəsöz 'ayaqları soyumaq' kimi səslənir, məcazi mənada isə son anda qətiyyəti itirmək, tərəddüd etmək deməkdir. Adətən toy, çıxış və ya mühüm qərar kimi gərgin anlardan əvvəl işlənir.",
      example: "He wanted to ask her to marry him, but he got cold feet at the last minute.",
      register: "informal",
      azNote:
        "Çox vaxt 'at the last minute' (son anda) ifadəsi ilə birlikdə işlənir, çünki tərəddüd adətən son anda yaranır.",
    },
    {
      idiom: "the best of both worlds",
      level: "C1",
      meaning: "a situation in which you enjoy the advantages of two different things at the same time",
      azMeaning:
        "Bir vəziyyətdə iki fərqli şeyin üstünlüklərindən eyni anda faydalanmaq deməkdir. Yəni heç birindən imtina etmədən hər ikisinin yaxşı tərəfini götürmək. Adətən bir seçim insana sanki iki seçimin də qazancını verəndə işlədilir.",
      example: "Working from home two days a week gives me the best of both worlds: focus and flexibility.",
      register: "neutral",
      azNote:
        "Müsbət məna daşıyır və adətən 'have' və ya 'get' feili ilə işlənir: 'You can have the best of both worlds.'",
    },
  ],
  practice: [
    {
      type: "gap-fill",
      prompt: "We rarely go to the cinema; maybe once in a blue ___ .",
      answer: "moon",
      explanation:
        "'Once in a blue moon' çox nadir hallarda baş verən bir şey deməkdir.",
    },
    {
      type: "gap-fill",
      prompt: "I'm not coming to work today — I'm feeling a bit under the ___ .",
      answer: "weather",
      explanation:
        "'Under the weather' özünü yüngül xəstə və ya kefsiz hiss etmək deməkdir.",
    },
    {
      type: "gap-fill",
      prompt: "That new car must have cost an arm and a ___ .",
      answer: "leg",
      explanation:
        "'Cost an arm and a leg' bir şeyin çox baha olduğunu bildirir.",
    },
    {
      type: "multiple-choice",
      prompt: "What does 'a piece of cake' mean?",
      options: [
        "something very easy",
        "a delicious dessert",
        "something very expensive",
      ],
      answer: 0,
      explanation:
        "'A piece of cake' məcazi mənada çox asan iş deməkdir, hərfi mənada tort deyil.",
    },
    {
      type: "multiple-choice",
      prompt: "If a friend calls you 'out of the blue', it means they called...",
      options: [
        "suddenly and unexpectedly",
        "from a long distance",
        "to complain about something",
      ],
      answer: 0,
      explanation:
        "'Out of the blue' qəfildən, gözlənilmədən baş verən bir şey deməkdir.",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the best meaning of 'get cold feet'.",
      options: [
        "to become nervous and hesitate before doing something",
        "to feel physically cold",
        "to walk a very long way",
      ],
      answer: 0,
      explanation:
        "'Get cold feet' planlaşdırılan bir işdən son anda qorxub tərəddüd etmək deməkdir.",
    },
    {
      type: "gap-fill",
      prompt: "I'm really tired, so I'm going to hit the ___ and get some sleep.",
      answer: "sack",
      explanation:
        "'Hit the sack' qeyri-rəsmi danışıqda yatmağa getmək deməkdir.",
    },
  ],
};
