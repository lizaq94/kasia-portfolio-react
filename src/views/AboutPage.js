import React from 'react';
import HeaderSection from 'components/organism/HeaderSection/HeaderSection';
import { HeaderParagraph } from 'components/atoms/HeaderParagraph/HeaderParagraph';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 128rem;
  padding-bottom: 3rem;
  @media (max-width: 1280px) {
    max-width: 102.4rem;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding-bottom: 3rem;
  }

  h1 {
    text-align: left;
  }

  ${HeaderParagraph} {
    @media (max-width: 800px) {
      padding: 0;
    }
  }
`;
const AboutPage = () => {
  return (
    <Wrapper>
      <HeaderSection title={'Cześć, nazywam się Kasia Domagała'} isButton={'Sprawdź'} marginTop={'7rem'} pathButton={'/offer'}>
        <HeaderParagraph>
          Pracuję jako Digital Marketing Manager. Posiadam wieloletnie doświadczenie w prowadzeniu kampanie e-marketingowych. Pracowałam zarówno w
          agencjach reklamowych, jak i bezpośrednio po stronie klienta. Centrum moich zainteresowań są działania reklamowe na Facebooku i Instagramie
          i wyłącznie na nich obecnie się skupiam. Planuje i optymalizuje kampanie, które realizują konkretne cele biznesowe.
        </HeaderParagraph>
        <HeaderParagraph>Sprawdź, co mogę zrobić właśnie dla Ciebie.</HeaderParagraph>
      </HeaderSection>
    </Wrapper>
  );
};

export default AboutPage;
