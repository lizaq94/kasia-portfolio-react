import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 3rem 2rem;
`;

const StyledParagraph = styled.div`
  font-size: 2rem;
  font-weight: 600;
  line-height: 3.2rem;
  letter-spacing: -0.02em;
  padding-top: 3.2rem;
`;

const BenefitItem = ({ Icon, children }) => {
  return (
    <Wrapper>
      <Icon />
      <StyledParagraph>{children}</StyledParagraph>
    </Wrapper>
  );
};

export default BenefitItem;
