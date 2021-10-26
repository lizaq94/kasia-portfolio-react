import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  margin: 10rem 0 ${({ marginBottom }) => marginBottom || '10rem'} 0;
  padding: 0 2rem;
`;

const InfoSection = ({ children, buttonText, marginBottom, pathButton = '' }) => {
  return (
    <Wrapper marginBottom={marginBottom}>
      {children}
      <Link to={pathButton}>
        <Button isPrimary>{buttonText}</Button>
      </Link>
    </Wrapper>
  );
};

export default InfoSection;
