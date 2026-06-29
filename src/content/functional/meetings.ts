import type { ReferenceGroup } from "../reference";
import type { FunctionalPhrase } from "../types";
import { Presentation } from "lucide-react";

export const fnMeetings: ReferenceGroup<FunctionalPhrase> = {
  id: "meetings",
  label: "Meetings & Discussions",
  azLabel: "İclas və müzakirə",
  icon: Presentation,
  description:
    "Useful English phrases for running and taking part in meetings: opening, interrupting politely, changing the topic, summarising, and postponing decisions.",
  azDescription:
    "Bu qrup iş iclaslarını və qrup müzakirələrini idarə etmək üçün lazım olan ən vacib ingilis ifadələrini toplayır. Burada iclası açmaq, kiminsə sözünü nəzakətlə kəsib öz fikrini əlavə etmək, mövzunu dəyişmək, danışılanları yekunlaşdırmaq və qərarı sonraya saxlamaq kimi funksiyalar əhatə olunur. Bu ifadələr əsasən rəsmi və neytral üslubdadır, çünki iş mühitində həm aydın, həm də nəzakətli olmaq vacibdir; onları öyrənmək iclasda özünü inamlı və peşəkar göstərməyə kömək edir.",
  items: [
    {
      phrase: "Let's get started.",
      level: "B1",
      use: "a clear, friendly way to open a meeting and signal that work is beginning",
      azUse:
        "iclası rəsmi şəkildə başlamaq, iştirakçıların diqqətini toplamaq və 'artıq işə keçirik' siqnalı vermək üçün işlənir. Adətən iclasa sədrlik edən şəxs deyir və həm rəsmi, həm də yarı-rəsmi mühitdə təbii səslənir. Mənası 'gəlin başlayaq' demədir və çox vaxt 'Right,' və ya 'OK, everyone' kimi sözlərdən sonra gəlir.",
      example: "OK, everyone, it's nine o'clock, so let's get started.",
      register: "neutral",
    },
    {
      phrase: "The main purpose of today's meeting is to ...",
      level: "B2",
      use: "to state the goal of the meeting clearly at the beginning so everyone is focused",
      azUse:
        "iclasın əsas məqsədini əvvəldən aydın şəkildə bildirmək üçün işlənən rəsmi ifadədir. İştirakçıların hamısının nəyə görə toplaşdıqlarını və hansı nəticəyə gəlmək istədiklərini başa düşməsinə kömək edir. Adətən iclasın açılışından dərhal sonra, gündəliyi (agenda) təqdim edərkən deyilir və peşəkar, mütəşəkkil təəssürat yaradır.",
      example:
        "The main purpose of today's meeting is to agree on the budget for next year.",
      register: "formal",
    },
    {
      phrase: "Could I just add something here?",
      level: "B2",
      use: "a polite way to interrupt and contribute your own point without sounding rude",
      azUse:
        "kiminsə danışdığı anda söhbətə nəzakətlə qoşulub öz fikrini əlavə etmək üçün işlənir. 'Just' sözü ifadəni daha yumşaq və təvazökar edir, sanki 'bircə kiçik bir şey deyəcəyəm' mənasını verir, ona görə kobud səslənmir. İş iclaslarında başqasının sözünü kəsmək lazım gələndə təhlükəsiz və nəzakətli seçimdir.",
      example:
        "Sorry to interrupt — could I just add something here? I think we're missing one point.",
      register: "neutral",
    },
    {
      phrase: "Sorry, could I finish my point?",
      level: "B2",
      use: "to politely ask to keep speaking when someone has interrupted you",
      azUse:
        "kimsə sözünü kəsdikdə fikrinizi tamamlamağa icazə istəmək üçün nəzakətli ifadədir. 'Sorry' sözü ifadəni yumşaldır və qarşı tərəfi incitmədən danışmağa davam etmək imkanı verir. İclaslarda öz mövqeyinizi qətiyyətlə, lakin nəzakətli müdafiə etmək lazım gələndə çox faydalıdır; çox sərt yox, balanslı səslənir.",
      example:
        "Sorry, could I finish my point? I'll only be a moment, then I'd love to hear your view.",
      register: "neutral",
    },
    {
      phrase: "Let's move on to the next item.",
      level: "B1",
      use: "to change the subject and go to the next point on the agenda",
      azUse:
        "bir mövzunu bitirib gündəlikdəki növbəti məsələyə keçmək üçün işlənir. Adətən iclasa sədrlik edən şəxs deyir və müzakirənin nizamlı şəkildə irəliləməsini təmin edir. 'Item' burada gündəlikdəki bənd (müzakirə mövzusu) deməkdir; bu ifadə vaxtı səmərəli istifadə etmək və söhbətin uzanmasının qarşısını almaq üçün vacibdir.",
      example:
        "I think we've covered that, so let's move on to the next item on the agenda.",
      register: "neutral",
    },
    {
      phrase: "Let's not get sidetracked.",
      level: "C1",
      use: "to bring the discussion back on topic when people drift away from the point",
      azUse:
        "müzakirə əsas mövzudan yayınanda söhbəti yenidən düz yola qaytarmaq üçün işlənir. 'Get sidetracked' əsas mövzudan kənara çıxmaq, başqa şeylərlə yayınmaq deməkdir, ona görə inkar forması 'gəlin mövzudan uzaqlaşmayaq' mənasını verir. Yarı-rəsmi və rəsmi iclaslarda nəzakətli, lakin qətiyyətli şəkildə diqqəti toplamaq üçün uyğundur.",
      example:
        "That's an interesting question, but let's not get sidetracked — we can discuss it afterwards.",
      register: "neutral",
    },
    {
      phrase: "Let's table that for now.",
      level: "C1",
      use: "to postpone a topic and deal with it at a later time",
      azUse:
        "bir mövzunu hələlik kənara qoyub sonraya saxlamaq üçün işlənir; yəni 'bunu indi yox, sonra müzakirə edək' deməkdir. Diqqət: Britaniya və Amerika ingiliscəsində 'table' feilinin mənası fərqli ola bilər, amma iş kontekstində adətən 'sonraya saxlamaq, təxirə salmaq' mənasında başa düşülür. Vaxt çatmayanda və ya mövzu mürəkkəb olanda nəzakətlə qərarı təxirə salmaq üçün işlənir.",
      example:
        "We don't have time to decide this today, so let's table that for now and return to it next week.",
      register: "formal",
    },
    {
      phrase: "To sum up, ...",
      level: "B2",
      use: "to briefly review the main points and conclusions at the end of a discussion",
      azUse:
        "müzakirənin sonunda əsas məqamları və alınan qərarları qısaca yekunlaşdırmaq üçün işlənir. İştirakçıların hamısının eyni nəticəni başa düşməsini təmin edir və iclası səliqəli şəkildə bağlamağa kömək edir. 'In summary' və 'to summarise' ifadələri ilə oxşar mənalıdır; rəsmi və neytral kontekstdə, xüsusən təqdimat və iclasların sonunda çox işlənir.",
      example:
        "To sum up, we've agreed on the new deadline and Sarah will send the report by Friday.",
      register: "neutral",
    },
  ],
  practice: [
    {
      type: "gap-fill",
      prompt: "OK everyone, it's nine o'clock, so let's get ___ .",
      answer: "started",
      explanation:
        "'Let's get started' iclası başlamaq üçün işlənən təbii ifadədir, ona görə boşluğa 'started' gəlir.",
    },
    {
      type: "multiple-choice",
      prompt: "Which phrase politely interrupts to add your own point?",
      options: [
        "Could I just add something here?",
        "Let's move on to the next item.",
        "To sum up, we've finished.",
      ],
      answer: 0,
      explanation:
        "'Could I just add something here?' başqasının sözünü nəzakətlə kəsib öz fikrini əlavə etmək üçün işlənir.",
    },
    {
      type: "gap-fill",
      prompt:
        "I think we've covered that, so let's ___ on to the next item. (move)",
      answer: "move",
      explanation:
        "'Let's move on to the next item' mövzunu dəyişib gündəlikdəki növbəti bəndə keçmək deməkdir.",
    },
    {
      type: "multiple-choice",
      prompt: "What does 'Let's table that for now' mean in a meeting?",
      options: [
        "Let's postpone it and discuss it later.",
        "Let's vote on it immediately.",
        "Let's put it on a real table.",
      ],
      answer: 0,
      explanation:
        "İş kontekstində 'table that' bir mövzunu sonraya saxlamaq, təxirə salmaq deməkdir.",
    },
    {
      type: "gap-fill",
      prompt:
        "To ___ up, we've agreed on the deadline and Sarah will send the report. (summarise the main points)",
      answer: "sum",
      explanation:
        "'To sum up' müzakirənin sonunda əsas məqamları qısaca yekunlaşdırmaq üçün işlənir.",
    },
    {
      type: "multiple-choice",
      prompt:
        "Someone keeps drifting away from the topic. Which phrase brings the discussion back?",
      options: [
        "Let's not get sidetracked.",
        "The main purpose of today's meeting is to relax.",
        "Sorry, could I finish my point?",
      ],
      answer: 0,
      explanation:
        "'Let's not get sidetracked' söhbəti əsas mövzuya qaytarmaq, mövzudan uzaqlaşmamaq üçün işlənir.",
    },
    {
      type: "gap-fill",
      prompt:
        "The main ___ of today's meeting is to agree on the budget. (goal / aim)",
      answer: "purpose",
      explanation:
        "'The main purpose of today's meeting is to ...' iclasın məqsədini əvvəldən aydın bildirmək üçün işlənir.",
    },
  ],
};
