import React from 'react';
import { Wrapper, StyledLogo, StyledNav, StyledLink } from './Footer.styles';

const Footer = ({ year }) => {
  return (
    <Wrapper>
      <StyledLogo>
        Kasia Domagała <span>{year}</span>
      </StyledLogo>
      <StyledNav>
        <StyledLink to="/about">O mnie</StyledLink>
        <StyledLink to="/offer">Oferta</StyledLink>
        <StyledLink to="/price">Cennik</StyledLink>
        <StyledLink to="/contact">Kontakt</StyledLink>
        <StyledLink to="#">Polityka prywatnosci</StyledLink>
        <StyledLink to="/free-pricing">Darmowa wycena</StyledLink>
      </StyledNav>
    </Wrapper>
  );
};

export default Footer;
