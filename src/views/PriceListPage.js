import React from 'react';
import { HeaderParagraph } from 'components/atoms/HeaderParagraph/HeaderParagraph';
import ViewWrapper from 'components/molecues/ViewWrapper/ViewWrapper';
import HeaderSection from 'components/organism/HeaderSection/HeaderSection';
import PriceCardSection from 'components/organism/PriceCardSection/PriceCardSection';
import InfoSection from 'components/molecues/InfoSection/InfoSection';
import { InfoParagraph } from 'components/atoms/Paragraph/Paragraph';
import ContactForm from 'components/organism/ContactForm/ContactForm';
import styled from 'styled-components';
import { SecondTitleLowerCase } from 'components/atoms/SecondTitle/SecondTitle';
const Wrapper = styled.div`
  width: 100%;

  ${SecondTitleLowerCase} {
    margin-top: 2rem;
  }

  ${InfoParagraph} {
    margin-top: 1.8rem;
  }
`;

const PriceListPage = () => {
  return (
    <Wrapper>
      <ViewWrapper>
        <HeaderSection title={'Cennik kampani reklamowych na\nfacebooku i instagramie'}>
          <HeaderParagraph>
            Nie jesteś przekonana/y do kampanii w social w mediach, nie wiesz czy sprawdzą się w przypadku Twojej marki? Wybierz nasz pakiet TEST -
            pojedyncza kampania z darmową aktywacją.
          </HeaderParagraph>
        </HeaderSection>
        <PriceCardSection color={'lightGrey'} height={'90%'}>
          <InfoSection buttonText={'Chce darmową wycenę'} marginBottom={'0'}>
            <InfoParagraph>
              Pakiet Test, Start, Plus nie wpisują się w Twoje wymagania? Poproś o darmową wycenę, dzięki której zostanie stworzony pakiet
              indywidualny, idealnie dostosowany do Twoich potrzeb
            </InfoParagraph>
          </InfoSection>
        </PriceCardSection>
      </ViewWrapper>
      <ViewWrapper>
        <SecondTitleLowerCase>Kontakt</SecondTitleLowerCase>
        <ContactForm />
      </ViewWrapper>
    </Wrapper>
  );
};

export default PriceListPage;
