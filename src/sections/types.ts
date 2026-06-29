// ---------------------------------------------------------------------------
// Generic "reference section" presentation config.
//
// Connectors, Grammar, Idioms və Functional Phrases eyni quruluşa malikdir.
// Onları TƏKRARLAMAQ əvəzinə (DRY) bir generik model + generik səhifələr
// (ReferenceListPage / ReferenceDetailPage) işlədirik. Hər bölmə yalnız
// KONFİQURASİYA və öz `ItemCard` strategiyasını verir (Open/Closed).
//
// Domain tipləri (ReferenceItem/ReferenceGroup) `../content/reference`-dədir.
// ---------------------------------------------------------------------------
import type { ComponentType } from "react";
import type { LucideIcon } from "lucide-react";
import type { ReferenceGroup, ReferenceItem } from "../content/reference";

export type { ReferenceGroup, ReferenceItem };

/** Bir bölmənin tam konfiqurasiyası — generik səhifələr yalnız bunu bilir. */
export interface ReferenceSection<TItem extends ReferenceItem = ReferenceItem> {
  /** Kimlik + progress açarı + route bazası, məs. "connectors". */
  key: string;
  nav: { label: string; icon: LucideIcon };
  hero: { kicker: string; title: string; subtitle: string };
  /** Bir maddə üçün AZ isim (saylarda), məs. "ifadə", "qayda", "idiom". */
  unitAz: string;
  groups: ReferenceGroup<TItem>[];
  /** Bölməyə xas maddə kartı (Strategy pattern). */
  ItemCard: ComponentType<{ item: TItem }>;
  /** Maddə üçün stabil React key. */
  itemKey: (item: TItem) => string;
  /** id → qrup, O(1) axtarış (createSection doldurur). */
  groupsById: Map<string, ReferenceGroup<TItem>>;
  /** Ümumi maddə sayı (createSection doldurur). */
  totalItems: number;
}

type SectionInput<TItem extends ReferenceItem> = Omit<
  ReferenceSection<TItem>,
  "groupsById" | "totalItems"
>;

/** Törəmə sahələri (groupsById, totalItems) hesablayan factory. */
export function createSection<TItem extends ReferenceItem>(
  input: SectionInput<TItem>,
): ReferenceSection<TItem> {
  return {
    ...input,
    groupsById: new Map(input.groups.map((g) => [g.id, g])),
    totalItems: input.groups.reduce((sum, g) => sum + g.items.length, 0),
  };
}
