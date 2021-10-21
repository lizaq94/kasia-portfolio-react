import React from 'react';
import { Wrapper, StyledLogo, StyledNav, StyledLink } from './Footer.styles';

const Footer = ({ year }) => {
  return (
    <Wrapper>
      <StyledLogo>
        Kasia Domagała <span>{year}</span>
      </StyledLogo>
      <StyledNav>
        <StyledLink to="#">O mnie</StyledLink>
        <StyledLink to="#">Oferta</StyledLink>
        <StyledLink to="#">Cennik</StyledLink>
        <StyledLink to="#">Kontakt</StyledLink>
        <StyledLink to="#">Polityka prywatnosci</StyledLink>
        <StyledLink to="#">Darmowa wycena</StyledLink>
      </StyledNav>
    </Wrapper>
  );
};

export default Footer;
