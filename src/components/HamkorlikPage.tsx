// src/pages/HamkorlikPage.tsx

import React from 'react';
import { HeroSection } from './HeroSection';
import { PartnerCategories } from './PartnerCategories';
import { PartnersGrid} from './PartnersGrid';
import { CollaborationBenefits} from './CollaborationBenefits';
import { PartnershipProcess} from './PartnershipProcess';
import { CTASection} from './CTASection';
import {FooterHamkorlik} from './FooterHamkorlik';

const HamkorlikPage = () => {
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
      <FooterHamkorlik />
    </div>
  );
};

export default HamkorlikPage;