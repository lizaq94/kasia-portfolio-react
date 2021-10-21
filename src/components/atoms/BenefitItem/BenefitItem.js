import React from 'react';
import { Wrapper, StyledParagraph } from 'components/atoms/BenefitItem/BenefitItem.styles';

const BenefitItem = ({ Icon, children }) => {
  return (
    <Wrapper>
      <Icon />
      <StyledParagraph>{children}</StyledParagraph>
    </Wrapper>
  );
};

export default BenefitItem;
