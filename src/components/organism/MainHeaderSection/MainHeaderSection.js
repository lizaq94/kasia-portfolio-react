import React, { useContext } from 'react';
import { MainTitle } from 'components/atoms/MainTitle/MainTitle';
import { StyledList, StyledListItem, Wrapper, StyledButton } from './MainHeaderSection.styles';
import { Button } from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { resetScroll } from '../../../utilities/resetScroll';
import { AppContext } from '../../../AppContext';

const MainHeaderSection = () => {
  const { setPackageSelection } = useContext(AppContext);
  return (
    <Wrapper imgUrl={process.env.PUBLIC_URL + '/background-image.png'}>
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
        <Link
          to="/contact"
          onClick={() => {
            resetScroll();
            setPackageSelection('Test');
          }}
        >
          <StyledButton isPrimary>Testowa kampania</StyledButton>
        </Link>
        <Link to="/contact" onClick={resetScroll}>
          <Button>Mam pytanie</Button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default MainHeaderSection;
