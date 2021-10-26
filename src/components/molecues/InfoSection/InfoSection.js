import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import styled from 'styled-components';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';

const Wrapper = styled.div`
  width: 100%;
  margin: 10rem 0 13.4rem 0;
  padding: 0 2rem;
  ${Paragraph} {
    font-weight: 600;
    font-size: 36px;
    line-height: 64px;
    letter-spacing: -0.03em;
    margin: 3rem 0;

    &:last-of-type {
      margin-bottom: 4rem;
    }
  }
`;

const InfoSection = () => {
  return (
    <Wrapper>
      <Paragraph>Nie jesteś przekonana/y do kampanii w social w mediach, nie wiesz czy sprawdzą się w przypadku Twojej marki?</Paragraph>
      <Paragraph>Wybierz nasz pakiet TEST - pojedyncza kampania z darmową aktywacją.</Paragraph>
      <Button isPrimary>Dowiedz się więcej </Button>
    </Wrapper>
  );
};

export default InfoSection;
