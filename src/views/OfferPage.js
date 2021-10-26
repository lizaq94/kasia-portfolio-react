import React from 'react';
import ViewWrapper from 'components/molecues/ViewWrapper/ViewWrapper';
import HeaderSection from 'components/organism/HeaderSection/HeaderSection';
import { HeaderParagraph } from 'components/atoms/HeaderParagraph/HeaderParagraph';
import SocialMediaBar from 'components/molecues/SocialMediaBar/SocialMediaBar';
import BenefitSection from 'components/organism/BenefitSection/BenefitSection';
import CampaignTypes from 'components/molecues/CampaignTypes/CampaignTypes';
import InfoSection from 'components/molecues/InfoSection/InfoSection';

const OfferPage = () => {
  return (
    <>
      <ViewWrapper>
        <HeaderSection title={'Kampanie reklamowe na \n facebooku i instagramie'} isButton={'Zobacz cennik'}>
          <HeaderParagraph>
            System reklamowy Facebook jest potężnym narzędziem, który <br /> pozwala osiągnąć cele biznesowe na wielu różnych płaszczyznach.
          </HeaderParagraph>
        </HeaderSection>
        <SocialMediaBar />
      </ViewWrapper>
      <ViewWrapper color={'lightGrey'}>
        <BenefitSection />
        <CampaignTypes />
      </ViewWrapper>
      <ViewWrapper>
        <InfoSection />
      </ViewWrapper>
    </>
  );
};

export default OfferPage;
