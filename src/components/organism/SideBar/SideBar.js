import React from 'react';
import { Wrapper, StyledLink } from './SideBar.styles.js';

const SideBar = ({ hideSidebar }) => {
  return (
    <Wrapper>
      <nav>
        <StyledLink onClick={hideSidebar} exact to="/">
          Strona główna
        </StyledLink>
        <StyledLink onClick={hideSidebar} to="/about">
          O mnie
        </StyledLink>
        <StyledLink onClick={hideSidebar} to="/offer">
          Oferta
        </StyledLink>
        <StyledLink onClick={hideSidebar} to="/price">
          Cennik
        </StyledLink>
        <StyledLink onClick={hideSidebar} to="/contact">
          Kontakt
        </StyledLink>
        <StyledLink onClick={hideSidebar} to="/free-pricing">
          Darmowa wycena
        </StyledLink>
      </nav>
    </Wrapper>
  );
};

export default SideBar;
