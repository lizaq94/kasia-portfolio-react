import React from 'react';
import Navigation from 'components/organism/Navigation/Navigation';
import Footer from 'components/organism/Footer/Footer';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainTemplate = ({ children }) => {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <Wrapper>
      <Navigation />
      {children}
      <Footer year={year} />
    </Wrapper>
  );
};

export default MainTemplate;
