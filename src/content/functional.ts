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
// --- Yeni funksiyalar (12) ---
import { fnThanking } from "./functional/thanking";
import { fnGreetings } from "./functional/greetings";
import { fnInvitations } from "./functional/invitations";
import { fnComplaints } from "./functional/complaints";
import { fnPermission } from "./functional/permission";
import { fnLikes } from "./functional/likes";
import { fnDirections } from "./functional/directions";
import { fnNegotiating } from "./functional/negotiating";
import { fnCertainty } from "./functional/certainty";
import { fnSympathy } from "./functional/sympathy";
import { fnShopping } from "./functional/shopping";
import { fnInterviews } from "./functional/interviews";

export const functionalGroups: ReferenceGroup<FunctionalPhrase>[] = [
  fnGreetings,
  fnSmalltalk,
  fnOpinions,
  fnAgreeing,
  fnLikes,
  fnSuggestions,
  fnRequests,
  fnPermission,
  fnInvitations,
  fnThanking,
  fnApologising,
  fnComplaints,
  fnClarifying,
  fnCertainty,
  fnNegotiating,
  fnSympathy,
  fnDirections,
  fnShopping,
  fnPhone,
  fnEmail,
  fnMeetings,
  fnInterviews,
];
