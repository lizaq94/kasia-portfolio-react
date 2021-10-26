import React from 'react';
import { Wrapper } from './SocialIcon.styles';

const SocialIcon = ({ Icon, children }) => {
  return (
    <Wrapper>
      <Icon />
      {children}
    </Wrapper>
  );
};

export default SocialIcon;
