import React from 'react';
import { Wrapper, StyledLogo, StyledNav, StyledLink, SpecialStyledLink } from './Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <StyledLogo to="/">Kasia Domagała</StyledLogo>
      <StyledNav>
        <StyledLink to="/about">O mnie</StyledLink>
        <StyledLink to="/offer">Oferta</StyledLink>
        <StyledLink to="/price">Cennik</StyledLink>
        <StyledLink to="/contact">Kontakt</StyledLink>
        <SpecialStyledLink to="/free-pricing">Darmowa wycena</SpecialStyledLink>
      </StyledNav>
    </Wrapper>
  );
};

export default Navigation;
