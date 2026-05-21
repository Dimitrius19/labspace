import type { GovIdea } from "../types";
import { digitalGovernanceIdeas } from "./govtech/ministries/digital-governance";
import { financeAadeIdeas } from "./govtech/ministries/finance-aade";
import { justiceIdeas } from "./govtech/ministries/justice";
import { migrationAsylumIdeas } from "./govtech/ministries/migration-asylum";
import { healthIdeas } from "./govtech/ministries/health";
import { interiorIdeas } from "./govtech/ministries/interior";
import { nationalDefenceIdeas } from "./govtech/ministries/national-defence";
import { foreignAffairsIdeas } from "./govtech/ministries/foreign-affairs";
import { climateCivilProtectionIdeas } from "./govtech/ministries/climate-civil-protection";
import { citizenProtectionIdeas } from "./govtech/ministries/citizen-protection";
import { educationIdeas } from "./govtech/ministries/education";
import { labourSocialSecurityIdeas } from "./govtech/ministries/labour-social-security";
import { developmentIdeas } from "./govtech/ministries/development";
import { environmentEnergyIdeas } from "./govtech/ministries/environment-energy";
import { infrastructureTransportIdeas } from "./govtech/ministries/infrastructure-transport";
import { maritimeInsularIdeas } from "./govtech/ministries/maritime-insular";
import { ruralDevelopmentIdeas } from "./govtech/ministries/rural-development";
import { tourismIdeas } from "./govtech/ministries/tourism";
import { cultureIdeas } from "./govtech/ministries/culture";
import { socialCohesionFamilyIdeas } from "./govtech/ministries/social-cohesion-family";
import { stateCrossCuttingIdeas } from "./govtech/ministries/state-cross-cutting";

export const governmentIdeas: GovIdea[] = [
  ...digitalGovernanceIdeas,
  ...financeAadeIdeas,
  ...justiceIdeas,
  ...migrationAsylumIdeas,
  ...healthIdeas,
  ...interiorIdeas,
  ...nationalDefenceIdeas,
  ...foreignAffairsIdeas,
  ...climateCivilProtectionIdeas,
  ...citizenProtectionIdeas,
  ...educationIdeas,
  ...labourSocialSecurityIdeas,
  ...developmentIdeas,
  ...environmentEnergyIdeas,
  ...infrastructureTransportIdeas,
  ...maritimeInsularIdeas,
  ...ruralDevelopmentIdeas,
  ...tourismIdeas,
  ...cultureIdeas,
  ...socialCohesionFamilyIdeas,
  ...stateCrossCuttingIdeas,
];
