// Idioms — eager idxal (data sərhədlidir). Bir fayl = bir tematik qrup.
import type { Idiom } from "./types";
import type { ReferenceGroup } from "./reference";

import { idiomEmotions } from "./idioms/emotions";
import { idiomSuccess } from "./idioms/success";
import { idiomMoney } from "./idioms/money";
import { idiomTime } from "./idioms/time";
import { idiomPeople } from "./idioms/people";
import { idiomCommunication } from "./idioms/communication";
import { idiomEffort } from "./idioms/effort";
import { idiomBody } from "./idioms/body";
import { idiomFood } from "./idioms/food";
import { idiomEveryday } from "./idioms/everyday";

export const idiomGroups: ReferenceGroup<Idiom>[] = [
  idiomEmotions,
  idiomSuccess,
  idiomMoney,
  idiomTime,
  idiomPeople,
  idiomCommunication,
  idiomEffort,
  idiomBody,
  idiomFood,
  idiomEveryday,
];
