import type { ReferenceGroup } from "../reference";
import type { Idiom } from "../types";
import { Clock } from "lucide-react";

export const idiomTime: ReferenceGroup<Idiom> = {
  id: "time",
  label: "Time",
  azLabel: "Vaxt",
  icon: Clock,
  description:
    "Common English idioms about time, punctuality, deadlines and doing things at the right or wrong moment.",
  azDescription:
    "Bu qrupda vaxtla bağlı ən çox işlənən ingilis idiomları toplanıb: vaxtında gəlmək, son tarixə (deadline) çatdırmaq, gecikmək və ya bir işi düz (yaxud səhv) anda görmək. Bu ifadələr həm gündəlik söhbətdə, həm iş mühitində, həm də yazıda işlənir; məqsəd vaxtın necə idarə olunduğunu canlı və təbii şəkildə ifadə etməkdir. Hər idiomu nümunə cümlə içində görəcəksən ki, onu real kontekstdə necə işlətmək olduğunu öyrənəsən.",
  items: [
    {
      idiom: "in the nick of time",
      level: "B1",
      meaning: "at the very last moment, just before it is too late",
      azMeaning:
        "Son anda, lap son saniyədə, iş artıq gec olmadan tam vaxtında. Yəni hadisə baş verməyə az qalmış, kritik anda nəyəsə nail olmaq və ya bir problemin qarşısını almaq.",
      example: "The ambulance arrived in the nick of time and saved his life.",
      register: "neutral",
      azNote:
        "Çox vaxt müsbət, rahatlanma hissi ilə işlənir — təhlükə və ya uğursuzluq lap son anda önlənir. Sinonim ifadə: \"just in time\".",
    },
    {
      idiom: "beat the clock",
      level: "B2",
      meaning: "to finish something before the time runs out",
      azMeaning:
        "Vaxt bitməmiş bir işi bitirmək, saatla yarışıb qələbə çalmaq. Yəni qalan az vaxtın içinə sığışdırıb tapşırığı vaxtında tamamlamaq.",
      example: "We worked all night to beat the clock and submit the report by 9 a.m.",
      register: "informal",
      azNote:
        "Burada \"clock\" rəqib kimi təsvir olunur — sanki vaxtın özü ilə yarışırsan. Adətən deadline-larla bağlı işlənir.",
    },
    {
      idiom: "against the clock",
      level: "B2",
      meaning: "in a hurry to finish before a deadline",
      azMeaning:
        "Vaxta qarşı, yəni son tarixə az qalmış böyük tələsiklik içində işləmək. Saat sanki sənin əleyhinə işləyir və hər dəqiqə qiymətlidir.",
      example: "The team was working against the clock to fix the bug before launch.",
      register: "neutral",
      azNote:
        "\"beat the clock\" nəticəyə (vaxtında bitirməyə) fokuslanır; \"against the clock\" isə prosesin gərginliyini, təzyiq altında işləməyi vurğulayır.",
    },
    {
      idiom: "call it a day",
      level: "B1",
      meaning: "to stop working on something for the rest of the day",
      azMeaning:
        "Günün işini bitmiş saymaq, bu günlük işi dayandırmaq. Yəni daha kifayət qədər işlədiyini düşünüb istirahətə çəkilmək və ya işi sabaha saxlamaq.",
      example: "We've been at this for ten hours, so let's call it a day.",
      register: "informal",
      azNote:
        "Mütləq axşam olmasına ehtiyac yoxdur — sadəcə həmin işi həmin gün üçün dayandırmaq mənasını verir.",
    },
    {
      idiom: "around the clock",
      level: "B2",
      meaning: "all day and all night, without stopping",
      azMeaning:
        "Sutka boyu, gecə-gündüz dayanmadan, fasiləsiz. Yəni 24 saat ərzində fasiləsiz davam edən iş və ya fəaliyyət.",
      example: "Doctors worked around the clock to treat the flood victims.",
      register: "neutral",
      azNote:
        "Çox vaxt fədakar, ara vermədən görülən işi təsvir etmək üçün işlənir. \"round the clock\" forması da işlənir.",
    },
    {
      idiom: "at the eleventh hour",
      level: "C1",
      meaning: "at the last possible moment, almost too late",
      azMeaning:
        "Lap son anda, mümkün olan ən gec məqamda, demək olar ki, artıq gec olanda. Adətən qərar və ya razılaşma son dəqiqədə əldə olunanda işlənir.",
      example: "The two sides reached an agreement at the eleventh hour, avoiding a strike.",
      register: "formal",
      azNote:
        "Bir az rəsmi və dramatik çalara malikdir; xəbərlərdə və danışıqlarda tez-tez rast gəlinir. Mənbəyi İncildən gəlir.",
    },
    {
      idiom: "time flies",
      level: "B1",
      meaning: "time passes very quickly, often without you noticing",
      azMeaning:
        "Vaxt çox sürətlə keçir, çox vaxt hiss etmədən. Yəni xoş və ya məşğul anlarda zamanın necə ötdüyünü hiss etməmək.",
      example: "I can't believe she's already ten — time flies when you have kids!",
      register: "informal",
      azNote:
        "Tez-tez \"time flies when you're having fun\" şəklində tamamlanır: maraqlı işlə məşğul olanda vaxt daha tez keçir.",
    },
    {
      idiom: "drag your feet",
      level: "C1",
      meaning: "to do something slowly on purpose because you do not want to do it",
      azMeaning:
        "Bir işi qəsdən ləng və könülsüz görmək, sürünmək, ayağını sürümək. Yəni istəmədiyin işi bilərəkdən yubatmaq və ya gecikdirmək.",
      example: "Stop dragging your feet and send me the documents — the deadline is tomorrow.",
      register: "informal",
      azNote:
        "Tənqidi çalara malikdir: kimisə qəsdən gecikdirdiyinə, vaxtı uzatdığına görə qınayanda işlənir. \"drag one's heels\" forması da var.",
    },
  ],
  practice: [
    {
      type: "gap-fill",
      prompt: "The firefighters arrived in the nick of ___ and rescued the family.",
      answer: "time",
      explanation:
        "\"In the nick of time\" lap son anda, gec olmadan deməkdir — burada xilasetmə tam vaxtında baş verir.",
    },
    {
      type: "gap-fill",
      prompt: "We've been working for twelve hours; let's call it a ___ .",
      answer: "day",
      explanation:
        "\"Call it a day\" bu günlük işi dayandırmaq deməkdir.",
    },
    {
      type: "gap-fill",
      prompt: "The nurses worked around the ___ to care for the patients.",
      answer: "clock",
      explanation:
        "\"Around the clock\" gecə-gündüz, fasiləsiz işləmək deməkdir.",
    },
    {
      type: "multiple-choice",
      prompt: "What does \"at the eleventh hour\" mean?",
      options: [
        "at the very last possible moment",
        "exactly at 11 o'clock every day",
        "very early in the morning",
      ],
      answer: 0,
      explanation:
        "\"At the eleventh hour\" lap son anda, demək olar ki, artıq gec olanda deməkdir; konkret saatla əlaqəsi yoxdur.",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the best meaning of \"drag your feet\".",
      options: [
        "to walk a very long distance",
        "to delay doing something on purpose",
        "to finish a task ahead of time",
      ],
      answer: 1,
      explanation:
        "\"Drag your feet\" istəmədiyin işi qəsdən ləng görmək, gecikdirmək deməkdir.",
    },
    {
      type: "multiple-choice",
      prompt: "Which idiom means \"to finish something before time runs out\"?",
      options: ["beat the clock", "time flies", "call it a day"],
      answer: 0,
      explanation:
        "\"Beat the clock\" vaxt bitməmiş işi tamamlamaq deməkdir.",
    },
    {
      type: "gap-fill",
      prompt: "I can't believe the year is over already — time ___ !",
      answer: "flies",
      explanation:
        "\"Time flies\" vaxtın çox sürətlə keçməsini bildirir.",
    },
  ],
};
