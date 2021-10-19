import React from 'react';
import BenefitItem from 'components/atoms/BenefitItem/BenefitItem';
import { ReactComponent as ClientIcon } from 'assets/icons/client-icon.svg';
import { ReactComponent as IncresaseIcon } from 'assets/icons/incresase-icon.svg';
import { ReactComponent as LikeIcon } from 'assets/icons/like-icon.svg';
import { ReactComponent as PeopleIcon } from 'assets/icons/people-icon.svg';
import { ReactComponent as SaleIcon } from 'assets/icons/sale-icon.svg';
import { ReactComponent as StarsIcon } from 'assets/icons/stars-icon.svg';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2.4rem 0;

  ${BenefitItem} {
    flex: 1;
  }
`;

const BenefitCards = () => {
  return (
    <Wrapper>
      <BenefitItem Icon={ClientIcon}>Rozszerzenie bazy potencjalnych klientów</BenefitItem>
      <BenefitItem Icon={IncresaseIcon}>Wzrost liczby osób odwiedzających stronę internetową/Twój lokalny sklep</BenefitItem>
      <BenefitItem Icon={SaleIcon}>Zwiększenie sprzedaży</BenefitItem>
      <BenefitItem Icon={LikeIcon}>Pogłębienie zaangażowania społeczności zgromadzonej wokół marki</BenefitItem>
      <BenefitItem Icon={StarsIcon}>Budowanie świadomości marki w sieci</BenefitItem>
      <BenefitItem Icon={PeopleIcon}>Dotarcie z promowanymi treściami/ produktami do większej liczby odbiorców</BenefitItem>
    </Wrapper>
  );
};

export default BenefitCards;
