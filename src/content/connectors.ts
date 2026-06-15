// ---------------------------------------------------------------------------
// Connectors / linking words — app-ın YEGANƏ giriş nöqtəsi.
//
// Topic-lərdən fərqli: data azdır (~13 qrup, ~80 ifadə), ona görə hamısı
// birbaşa (eager) idxal olunur — lazy-load/manifest yoxdur. Yeni bağlayıcı
// əlavə etmək: müvafiq `connectors/*.ts` faylına bir obyekt əlavə et, vəssalam.
// ---------------------------------------------------------------------------
import {
  Plus,
  Scale,
  CircleHelp,
  MoveRight,
  ListOrdered,
  Lightbulb,
  Equal,
  RefreshCw,
  Flag,
  MessageCircle,
  Megaphone,
  Quote,
  GitBranch,
  Target,
  type LucideIcon,
} from "lucide-react";
import type { ConnectorFunction, ConnectorGroup } from "./types";

import { addition } from "./connectors/addition";
import { contrast } from "./connectors/contrast";
import { cause } from "./connectors/cause";
import { result } from "./connectors/result";
import { purpose } from "./connectors/purpose";
import { sequence } from "./connectors/sequence";
import { example } from "./connectors/example";
import { comparison } from "./connectors/comparison";
import { clarification } from "./connectors/clarification";
import { conclusion } from "./connectors/conclusion";
import { opinion } from "./connectors/opinion";
import { emphasis } from "./connectors/emphasis";
import { attribution } from "./connectors/attribution";
import { condition } from "./connectors/condition";

/**
 * Funksiya meta-sı — etiket (bilingual), ikon və göstərmə sırası.
 * Qrup faylları bunu TƏKRARLAMIR; ad/ikon burada bir yerdədir.
 */
export const FUNCTION_META: Record<
  ConnectorFunction,
  { label: string; azLabel: string; icon: LucideIcon; order: number }
> = {
  addition: { label: "Adding ideas", azLabel: "Əlavə etmə", icon: Plus, order: 1 },
  contrast: { label: "Contrast", azLabel: "Ziddiyyət", icon: Scale, order: 2 },
  cause: { label: "Cause / Reason", azLabel: "Səbəb", icon: CircleHelp, order: 3 },
  result: { label: "Result / Effect", azLabel: "Nəticə", icon: MoveRight, order: 4 },
  purpose: { label: "Purpose", azLabel: "Məqsəd", icon: Target, order: 5 },
  sequence: { label: "Sequence", azLabel: "Ardıcıllıq", icon: ListOrdered, order: 6 },
  example: { label: "Giving examples", azLabel: "Nümunə", icon: Lightbulb, order: 7 },
  comparison: { label: "Comparison", azLabel: "Müqayisə", icon: Equal, order: 8 },
  clarification: { label: "Clarifying", azLabel: "Aydınlaşdırma", icon: RefreshCw, order: 9 },
  conclusion: { label: "Concluding", azLabel: "Yekunlaşdırma", icon: Flag, order: 10 },
  opinion: { label: "Opinion", azLabel: "Fikir bildirmə", icon: MessageCircle, order: 11 },
  emphasis: { label: "Emphasis", azLabel: "Vurğu", icon: Megaphone, order: 12 },
  attribution: { label: "Reporting views", azLabel: "Başqasının fikri", icon: Quote, order: 13 },
  condition: { label: "Condition", azLabel: "Şərt", icon: GitBranch, order: 14 },
};

/** Bütün qruplar — FUNCTION_META sırasına görə düzülür. */
export const connectorGroups: ConnectorGroup[] = [
  addition,
  contrast,
  cause,
  result,
  purpose,
  sequence,
  example,
  comparison,
  clarification,
  conclusion,
  opinion,
  emphasis,
  attribution,
  condition,
].sort((a, b) => FUNCTION_META[a.id].order - FUNCTION_META[b.id].order);

/** id → qrup, O(1) axtarış. */
const groupById = new Map<ConnectorFunction, ConnectorGroup>(
  connectorGroups.map((g) => [g.id, g]),
);

export function getConnectorGroup(id: string): ConnectorGroup | undefined {
  return groupById.get(id as ConnectorFunction);
}

/** Lesson-da "bu task üçün faydalı bağlayıcılar" — istehsala (yazı/danışıq) yönəlik default dəst. */
export const DEFAULT_WRITING_FUNCTIONS: ConnectorFunction[] = [
  "opinion",
  "addition",
  "contrast",
  "example",
  "sequence",
  "conclusion",
];

/** Ümumi bağlayıcı sayı (dashboard üçün). */
export const totalConnectors = connectorGroups.reduce((n, g) => n + g.connectors.length, 0);
