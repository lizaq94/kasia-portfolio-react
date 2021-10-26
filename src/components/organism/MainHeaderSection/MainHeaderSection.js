import React from 'react';
import { MainTitle } from 'components/atoms/MainTitle/MainTitle';
import { StyledList, StyledListItem, Wrapper } from './MainHeaderSection.styles';
import { Button } from 'components/atoms/Button/Button';

const MainHeaderSection = () => {
  return (
    <Wrapper>
      <MainTitle>
        Kampania reklamowa na Facebooku <br /> i Instagramie dla małych firm
      </MainTitle>
      <StyledList>
        <StyledListItem>Współpraca całkowicie zdalna</StyledListItem>
        <StyledListItem>Testowa kampania już od 99zł</StyledListItem>
        <StyledListItem>Możliwość otrzymania Darmowej wyceny bez żadnych zobowiązań</StyledListItem>
        <StyledListItem>Start kampani nawet w 24H</StyledListItem>
        <StyledListItem>5-letnie doświadczenie w prowadzeniu kampani e-marketingowych</StyledListItem>
      </StyledList>
      <div>
        <Button isPrimary>Testowa kampania</Button>
        <Button>Mam pytanie</Button>
      </div>
    </Wrapper>
  );
};

export default MainHeaderSection;
