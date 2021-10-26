import React from 'react';
import styled from 'styled-components';
import { SecondTitle } from 'components/atoms/SecondTitle/SecondTitle';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { Button } from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  padding-top: 6rem;
`;

const Section = ({ title, isButton, children, path = '' }) => {
  return (
    <Wrapper>
      <SecondTitle>{title}</SecondTitle>
      <Paragraph>{children}</Paragraph>
      {isButton ? (
        <Link to={path}>
          <Button isPrimary>{isButton}</Button>
        </Link>
      ) : null}
    </Wrapper>
  );
};

export default Section;
