import React from "react";

import LandingPageCatalogue from "./landing-page-catalogue";
import LandingPageFooter from "./landing-page-footer";
import LandingPageHeader from "./landing-page-header";
import LandingPageHeaderHover from "./landing-page-header-hover";
import LandingPageHero from "./landing-page-hero";
import LandingPageTestimony from "./landing-page-testimony";
import LandingPageWhatsapp from "./landing-page-whatsapp";

export default function LandingPage(): React.ReactNode {
  return (
    <>
      <LandingPageHeader />
      <LandingPageHeaderHover />

      <LandingPageHero />

      <LandingPageCatalogue />
      <LandingPageTestimony />
      <LandingPageFooter />

      <LandingPageWhatsapp />
    </>
  );
}
