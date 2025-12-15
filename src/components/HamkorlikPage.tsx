// src/pages/HamkorlikPage.tsx

import React from 'react';
import { HeroSection } from './HeroSection';
import { PartnerCategories } from './PartnerCategories';
import { PartnersGrid} from './PartnersGrid';
import { CollaborationBenefits} from './CollaborationBenefits';
import { PartnershipProcess} from './PartnershipProcess';
import { CTASection} from './CTASection';
import {Footer} from './Footer';
import { useLayoutEffect } from 'react';

const HamkorlikPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0); // ⚡ Darhol yuqoriga
  }, []);
  return (
    <div>
      {/* Sahifa kontenti — kerakli ketma-ketlikda */}
      <HeroSection />
      <PartnerCategories />
      <PartnersGrid />
      <CollaborationBenefits />
      <PartnershipProcess/>
      <CTASection />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HamkorlikPage;