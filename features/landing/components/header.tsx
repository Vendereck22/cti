import { landingContent } from "../content";
import { SiteHeader } from "./site-header";

export function Header() {
  return <SiteHeader content={landingContent.header} />;
}
