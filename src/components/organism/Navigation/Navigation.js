import React from 'react';
import { Wrapper, StyledLogo, StyledNav, StyledLink, SpecialStyledLink } from './Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <StyledLogo to="/">Kasia Domagała</StyledLogo>
      <StyledNav>
        <StyledLink to="/about">O mnie</StyledLink>
        <StyledLink to="#">Oferta</StyledLink>
        <StyledLink to="#">Cennik</StyledLink>
        <StyledLink to="#">Kontakt</StyledLink>
        <SpecialStyledLink to="#">Darmowa wycena</SpecialStyledLink>
      </StyledNav>
    </Wrapper>
  );
};

export default Navigation;
