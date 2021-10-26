import React from 'react';
import ViewWrapper from 'components/molecues/ViewWrapper/ViewWrapper';
import HeaderSection from 'components/organism/HeaderSection/HeaderSection';
import { HeaderParagraph } from 'components/atoms/HeaderParagraph/HeaderParagraph';
import SocialMediaBar from 'components/molecues/SocialMediaBar/SocialMediaBar';
import BenefitSection from 'components/organism/BenefitSection/BenefitSection';
import CampaignTypes from 'components/molecues/CampaignTypes/CampaignTypes';
import InfoSection from 'components/molecues/InfoSection/InfoSection';
import { InfoParagraph } from 'components/atoms/Paragraph/Paragraph';

const OfferPage = () => {
  return (
    <>
      <ViewWrapper>
        <HeaderSection title={'Kampanie reklamowe na \n facebooku i instagramie'} isButton={'Zobacz cennik'} pathButton={'/price'}>
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
        <InfoSection buttonText={'Dowiedz się więcej'}>
          <InfoParagraph>Nie jesteś przekonana/y do kampanii w social w mediach, nie wiesz czy sprawdzą się w przypadku Twojej marki?</InfoParagraph>
          <InfoParagraph>Wybierz nasz pakiet TEST -pojedyncza kampania z darmową aktywacją.</InfoParagraph>
        </InfoSection>
      </ViewWrapper>
    </>
  );
};

export default OfferPage;
