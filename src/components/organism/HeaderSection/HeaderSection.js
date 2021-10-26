import React from 'react';
import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { MainTitle } from 'components/atoms/MainTitle/MainTitle';

const Wrapper = styled.div`
  ${MainTitle} {
    margin: ${({ marginTop }) => marginTop || '9rem'} 0 4rem 0;
  }
`;

const HeaderSection = ({ title, children, isButton, marginTop }) => {
  return (
    <Wrapper marginTop={marginTop}>
      <MainTitle>{title}</MainTitle>
      {children}
      {isButton ? <Button isPrimary>{isButton}</Button> : null}
    </Wrapper>
  );
};

export default HeaderSection;
