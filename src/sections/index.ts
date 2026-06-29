// Reference bölmələrinin REGİSTR-i — naviqasiya, routing və ana səhifə
// kartları bundan törəyir. Yeni bölmə əlavə etmək: konfiqurasiyanı yarat və
// bu siyahıya əlavə et (Open/Closed — səhifələr/route-lar dəyişmir).
import type { ReferenceSection } from "./types";
import { connectorSection } from "./connectors";
import { grammarSection } from "./grammar";
import { idiomsSection } from "./idioms";
import { functionalSection } from "./functional";

export const sections: ReferenceSection[] = [
  grammarSection,
  connectorSection,
  idiomsSection,
  functionalSection,
] as unknown as ReferenceSection[];

const byKey = new Map(sections.map((s) => [s.key, s]));

export function getSection(key: string | undefined): ReferenceSection | undefined {
  return key ? byKey.get(key) : undefined;
}
