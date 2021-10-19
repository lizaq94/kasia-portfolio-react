import { Button } from 'components/atoms/Button/Button';
import CardItem from 'components/atoms/CardItem/CardItem';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  /* flex: 1; */
  width: 25.7rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #fff;
  border-radius: 2.4rem;
  padding: 3.2rem 2.4rem 2.4rem 2.4rem;
  margin-right: 2rem;
`;
const Title = styled.div`
  font-size: 2rem;
  padding-bottom: 2.4rem;
  text-align: left;
`;
const PriceItem = styled.div`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  padding-bottom: 4.8rem;

  span {
    font-size: 2.2rem;
    font-weight: 700;
  }
`;

const PriceItemBig = styled(PriceItem)`
  span {
    font-size: 4.8rem;
  }
`;

const PriceCard = ({ isPrice }) => {
  console.log(isPrice);
  return (
    <Wrapper>
      <Title>Pakiet Test</Title>
      {isPrice ? (
        <PriceItemBig>
          <span>299zł</span>/msc (Netto)
        </PriceItemBig>
      ) : (
        <PriceItem>
          <span>299zł</span>/msc (Netto)
        </PriceItem>
      )}
      <CardItem label={'Jednorazowa opłata aktywacyjna'} />
      <CardItem label={'Liczba Kampanii'} />
      <CardItem label={'Sugerowany budżet'} />
      <CardItem label={'Czas Trwania'} />
      <Button isPrimary>Wybieram</Button>
    </Wrapper>
  );
};

export default PriceCard;
