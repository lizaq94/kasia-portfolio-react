import { Button } from 'components/atoms/Button/Button';
import { MainTitle } from 'components/atoms/MainTitle/MainTitle';
import ViewWrapper from 'components/molecues/ViewWrapper/ViewWrapper';
import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 22px;
  line-height: 48px;
  letter-spacing: -0.03em;
`;

const AboutPage = () => {
  return (
    <ViewWrapper>
      <MainTitle>Cześć, nazywam się Kasia Domagała</MainTitle>
      <Paragraph>
        Pracuję jako Digital Marketing Manager. Posiadam wieloletnie doświadczenie w prowadzeniu kampanie e-marketingowych. Pracowałam zarówno w
        agencjach reklamowych, jak i bezpośrednio po stronie klienta. Centrum moich zainteresowań są działania reklamowe na Facebooku i Instagramie i
        wyłącznie na nich obecnie się skupiam. Planuje i optymalizuje kampanie, które realizują konkretne cele biznesowe.
      </Paragraph>
      <Paragraph>Sprawdź, co mogę zrobić właśnie dla Ciebie.</Paragraph>
      <Button isPrimary>Sprawdź</Button>
    </ViewWrapper>
  );
};

export default AboutPage;
