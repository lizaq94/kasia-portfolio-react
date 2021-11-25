import React from 'react';
import styled from 'styled-components';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { SecondTitle } from 'components/atoms/SecondTitle/SecondTitle';
import BenefitCards from 'components/molecues/BenefitCards/BenefitCards';
import { Button } from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { resetScroll } from '../../../utilities/resetScroll';

const Wrapper = styled.div`
  padding: 10.4rem 0;

  @media (max-width: 800px) {
    padding: 5rem;
  }
`;

const BenefitSection = () => {
  return (
    <Wrapper>
      <SecondTitle>Co zyskasz prowadząc kampanię reklamową na facebooku i instagramie?</SecondTitle>
      <Paragraph>W zależności od celów biznesowych Twojej marki korzyści prowadzenie działań reklamowych w social mediach są następujące:</Paragraph>
      <BenefitCards />
      <Link to="free-pricing" onClick={resetScroll}>
        <Button isPrimary>Darmowa Wycena</Button>
      </Link>
    </Wrapper>
  );
};

export default BenefitSection;
