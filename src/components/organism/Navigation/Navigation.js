import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import { Wrapper, StyledLogo, StyledNav, StyledLink, SpecialStyledLink } from './Navigation.styles';
import { SidebarButton } from 'components/atoms/SidebarButton/SidebarButton';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hideSidebar = () => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <SidebarButton isOpen={isOpen} onClick={() => setIsOpen((prevState) => !prevState)}>
        <span />
        <span />
      </SidebarButton>
      <Wrapper>
        <StyledLogo to="/">
          <span>Kasia Domagała</span>
          Digital Marketing Manager
        </StyledLogo>
        <StyledNav>
          <StyledLink to="/about">O mnie</StyledLink>
          <StyledLink to="/offer">Oferta</StyledLink>
          <StyledLink to="/price">Cennik</StyledLink>
          <StyledLink to="/contact">Kontakt</StyledLink>
          <SpecialStyledLink to="/free-pricing">Darmowa wycena</SpecialStyledLink>
        </StyledNav>
      </Wrapper>
      {isOpen ? <SideBar hideSidebar={hideSidebar} /> : null}
    </>
  );
};

export default Navigation;
