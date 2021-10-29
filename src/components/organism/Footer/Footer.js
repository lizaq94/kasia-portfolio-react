import React from 'react';
import { Wrapper, StyledLogo, StyledNav, StyledLink } from './Footer.styles';

const resetScroll = () => {
  window.scrollTo(0, 0);
};

const Footer = ({ year }) => {
  return (
    <Wrapper>
      <StyledLogo>
        Kasia Domagała <span>{year}</span>
      </StyledLogo>
      <StyledNav>
        <StyledLink onClick={resetScroll} to="/about">
          O mnie
        </StyledLink>
        <StyledLink onClick={resetScroll} to="/offer">
          Oferta
        </StyledLink>
        <StyledLink onClick={resetScroll} to="/price">
          Cennik
        </StyledLink>
        <StyledLink onClick={resetScroll} to="/contact">
          Kontakt
        </StyledLink>
        <StyledLink onClick={resetScroll} to="#">
          Polityka prywatnosci
        </StyledLink>
        <StyledLink onClick={resetScroll} to="/free-pricing">
          Darmowa wycena
        </StyledLink>
      </StyledNav>
    </Wrapper>
  );
};

export default Footer;
