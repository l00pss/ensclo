// Functional Phrases ("language for ...") — eager idxal. Bir fayl = bir funksiya.
import type { FunctionalPhrase } from "./types";
import type { ReferenceGroup } from "./reference";

import { fnOpinions } from "./functional/opinions";
import { fnAgreeing } from "./functional/agreeing";
import { fnRequests } from "./functional/requests";
import { fnApologising } from "./functional/apologising";
import { fnSuggestions } from "./functional/suggestions";
import { fnClarifying } from "./functional/clarifying";
import { fnEmail } from "./functional/email";
import { fnPhone } from "./functional/phone";
import { fnSmalltalk } from "./functional/smalltalk";
import { fnMeetings } from "./functional/meetings";

export const functionalGroups: ReferenceGroup<FunctionalPhrase>[] = [
  fnOpinions,
  fnAgreeing,
  fnRequests,
  fnApologising,
  fnSuggestions,
  fnClarifying,
  fnEmail,
  fnPhone,
  fnSmalltalk,
  fnMeetings,
];
