// ⚠️ BUILD-ONLY barrel — bütün topic-ləri STATİK idxal edir.
// App bunu idxal ETMƏMƏLİDİR (yoxsa kod bölmə pozulur). Yalnız Node
// skriptləri üçündür: `scripts/generate-manifest.ts` və `validate-content.ts`.
// App tərəfi: `./catalog` (metadata + lazy loader) idxal et.
import type { Topic } from "./types";
import { b1Travel } from "./topics/b1-travel";
import { b1Chocolate } from "./topics/b1-chocolate";
import { b1Dreams } from "./topics/b1-dreams";
import { b1Animals } from "./topics/b1-animals";
import { b1Festivals } from "./topics/b1-festivals";
import { b1SolarSystem } from "./topics/b1-solar-system";
import { b1Volcanoes } from "./topics/b1-volcanoes";
import { b1Inventions } from "./topics/b1-inventions";
import { b1Sleep } from "./topics/b1-sleep";
import { b1Money } from "./topics/b1-money";
import { b1Languages } from "./topics/b1-languages";
import { b2Work } from "./topics/b2-work";
import { b2Habits } from "./topics/b2-habits";
import { b2Internet } from "./topics/b2-internet";
import { b2Happiness } from "./topics/b2-happiness";
import { b2Ai } from "./topics/b2-ai";
import { b2Advertising } from "./topics/b2-advertising";
import { b2BodyLanguage } from "./topics/b2-body-language";
import { b2Music } from "./topics/b2-music";
import { b2FakeNews } from "./topics/b2-fake-news";
import { b2Cities } from "./topics/b2-cities";
import { b2AncientWonders } from "./topics/b2-ancient-wonders";
import { c1Environment } from "./topics/c1-environment";
// --- Yeni topic-lər (30) ---
import { b1StreetFood } from "./topics/b1-street-food";
import { b1Sport } from "./topics/b1-sport";
import { b1Hobbies } from "./topics/b1-hobbies";
import { b1Fashion } from "./topics/b1-fashion";
import { b1Family } from "./topics/b1-family";
import { b1Weather } from "./topics/b1-weather";
import { b1Homes } from "./topics/b1-homes";
import { b1HumanBody } from "./topics/b1-human-body";
import { b1Smartphones } from "./topics/b1-smartphones";
import { b1School } from "./topics/b1-school";
import { b2SocialMedia } from "./topics/b2-social-media";
import { b2MentalHealth } from "./topics/b2-mental-health";
import { b2RemoteWork } from "./topics/b2-remote-work";
import { b2RenewableEnergy } from "./topics/b2-renewable-energy";
import { b2SpaceExploration } from "./topics/b2-space-exploration";
import { b2Memory } from "./topics/b2-memory";
import { b2Minimalism } from "./topics/b2-minimalism";
import { b2Cinema } from "./topics/b2-cinema";
import { b2Nutrition } from "./topics/b2-nutrition";
import { b2CrimeJustice } from "./topics/b2-crime-justice";
import { b2Globalization } from "./topics/b2-globalization";
import { c1AiEthics } from "./topics/c1-ai-ethics";
import { c1Inequality } from "./topics/c1-inequality";
import { c1LanguageIdentity } from "./topics/c1-language-identity";
import { c1Bioethics } from "./topics/c1-bioethics";
import { c1DecisionMaking } from "./topics/c1-decision-making";
import { c1Sustainability } from "./topics/c1-sustainability";
import { c1Democracy } from "./topics/c1-democracy";
import { c1Art } from "./topics/c1-art";
import { c1Consciousness } from "./topics/c1-consciousness";

// Yeni topic əlavə etmək üçün: faylı yarat, idxal et və bu siyahıya əlavə et.
export const topics: Topic[] = [
  b1Travel,
  b1Chocolate,
  b1Dreams,
  b1Animals,
  b1Festivals,
  b1SolarSystem,
  b1Volcanoes,
  b1Inventions,
  b1Sleep,
  b1Money,
  b1Languages,
  b1StreetFood,
  b1Sport,
  b1Hobbies,
  b1Fashion,
  b1Family,
  b1Weather,
  b1Homes,
  b1HumanBody,
  b1Smartphones,
  b1School,
  b2Work,
  b2Habits,
  b2Internet,
  b2Happiness,
  b2Ai,
  b2Advertising,
  b2BodyLanguage,
  b2Music,
  b2FakeNews,
  b2Cities,
  b2AncientWonders,
  b2SocialMedia,
  b2MentalHealth,
  b2RemoteWork,
  b2RenewableEnergy,
  b2SpaceExploration,
  b2Memory,
  b2Minimalism,
  b2Cinema,
  b2Nutrition,
  b2CrimeJustice,
  b2Globalization,
  c1Environment,
  c1AiEthics,
  c1Inequality,
  c1LanguageIdentity,
  c1Bioethics,
  c1DecisionMaking,
  c1Sustainability,
  c1Democracy,
  c1Art,
  c1Consciousness,
];
