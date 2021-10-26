import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin: 10rem 0 ${({ marginBottom }) => marginBottom || '10rem'} 0;
  padding: 0 2rem;
`;

const InfoSection = ({ children, buttonText, marginBottom }) => {
  return (
    <Wrapper marginBottom={marginBottom}>
      {children}
      <Button isPrimary>{buttonText}</Button>
    </Wrapper>
  );
};

export default InfoSection;
