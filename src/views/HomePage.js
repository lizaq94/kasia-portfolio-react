import React from 'react';
import ViewWrapper from 'components/molecues/ViewWrapper/ViewWrapper';
import { StyledList, StyledListItem, Wrapper } from './HomePage.styles';
import { Button } from 'components/atoms/Button/Button';
import { MainTitle } from 'components/atoms/MainTitle/MainTitle';
import { SecondTitle } from 'components/atoms/SecondTitle/SecondTitle';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import BenefitSection from 'components/organism/BenefitSection/BenefitSection';
import PriceCardSection from 'components/organism/PriceCardSection/PriceCardSection';

const HomePage = () => {
  return (
    <>
      <ViewWrapper color={'white'}>
        <Wrapper>
          <MainTitle>
            Kampania reklamowa na Facebooku <br /> i Instagramie dla małych firm
          </MainTitle>
          <StyledList>
            <StyledListItem>Współpraca całkowicie zdalna</StyledListItem>
            <StyledListItem>Testowa kampania już od 99zł</StyledListItem>
            <StyledListItem>MożStyledListItemwość otrzymania Darmowej wyceny bez żadnych zobowiązań</StyledListItem>
            <StyledListItem>Start kampani nawet w 24H</StyledListItem>
            <StyledListItem>5-letnie doświadczenie w prowadzeniu kampani e-marketingowych</StyledListItem>
          </StyledList>
          <div>
            <Button isPrimary>Testowa kampania</Button>
            <Button>Mam pytanie</Button>
          </div>
        </Wrapper>
      </ViewWrapper>
      <ViewWrapper color={'lightGrey'}>
        <SecondTitle>
          Kiedy warto zdecydować się na
          <br /> kampanie reklamową na facebooku?
        </SecondTitle>
        <Paragraph>
          Działania reklamowe w social mediach są w stanie przynieść korzyści każdej firmy na wielu różnych płaszczyznach. Sprawdzą się zarówno w
          sytuacjach wprowadzenia nowego produktu na rynek przez renomowane marki, jak również w przypadku budowania swojej obecności w sieci przez
          nowo-powstałe marki. Każdy moment rozwoju marki jest odpowiedni, aby rozpocząć kampanię reklamową na Facebooku i Instagramie.
        </Paragraph>
        <Button isPrimary>Dowiedz się więcej</Button>
        <BenefitSection />
      </ViewWrapper>
      <ViewWrapper color={'primaryBlue'}>
        <SecondTitle>Cennik kampani reklamowych</SecondTitle>
        <PriceCardSection />
      </ViewWrapper>
    </>
  );
};

export default HomePage;
