import React from 'react';
import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { MainTitle } from 'components/atoms/MainTitle/MainTitle';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  ${MainTitle} {
    margin: ${({ marginTop }) => marginTop || '9rem'} 0 4rem 0;
  }

  @media (max-width: 800px) {
    padding: 0rem 5rem;
  }
`;

const HeaderSection = ({ title, children, isButton, marginTop, pathButton = '' }) => {
  return (
    <Wrapper marginTop={marginTop}>
      <MainTitle>{title}</MainTitle>
      {children}
      {isButton ? (
        <Link to={pathButton}>
          <Button isPrimary>{isButton}</Button>
        </Link>
      ) : null}
    </Wrapper>
  );
};

export default HeaderSection;
