import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  margin: ${({ marginTop }) => marginTop || '10rem'} 0 ${({ marginBottom }) => marginBottom || '10rem'} 0;
  padding: 0 2rem 8rem 2rem;

  @media (max-width: 800px) {
    padding: 0 5rem 8rem 5rem;
  }
`;

const InfoSection = ({ children, buttonText, marginBottom, marginTop, pathButton = '' }) => {
  return (
    <Wrapper marginBottom={marginBottom} marginTop={marginTop}>
      {children}
      <Link to={pathButton}>
        <Button isPrimary>{buttonText}</Button>
      </Link>
    </Wrapper>
  );
};

export default InfoSection;
