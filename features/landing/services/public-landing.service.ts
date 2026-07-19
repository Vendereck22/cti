import { landingContent } from "../content";
import type { PublicLandingContent } from "../types";

export interface PublicLandingService {
  getLandingContent: () => Promise<PublicLandingContent>;
}

export async function getPublicLandingContent(): Promise<PublicLandingContent> {
  return landingContent;
}
