import { Button } from 'components/atoms/Button/Button';
import CardItem from 'components/atoms/CardItem/CardItem';
import React from 'react';
import styled from 'styled-components';
import { priceIndividual } from 'data/data';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #fff;
  border-radius: 2.4rem;
  padding: 3.2rem 2.4rem 2.4rem 2.4rem;
  margin-right: 2rem;
  box-shadow: 0px 15px 94px -20px rgba(20, 29, 74, 0.24);

  &:last-of-type {
    margin-right: 0;
  }
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
    width: 60%;
    font-size: 2.2rem;
    font-weight: 700;
    text-align: left;
  }
`;

const PriceItemBig = styled(PriceItem)`
  span {
    width: auto;
    padding-right: 1.5rem;
    font-size: 4.8rem;
  }
`;

const PriceCard = ({ value = priceIndividual, isPrice }) => {
  return (
    <Wrapper>
      <Title>Pakiet {value.name}</Title>
      {isPrice ? (
        <PriceItemBig>
          <span>{value.price}</span>/msc (Netto)
        </PriceItemBig>
      ) : (
        <PriceItem>
          <span>Ustalana indywidualnie</span>/msc (Netto)
        </PriceItem>
      )}
      <CardItem label={'Jednorazowa opłata aktywacyjna'} value={value.activationFee} />
      <CardItem label={'Liczba Kampanii'} value={value.numberCampaigns} />
      <CardItem label={'Sugerowany budżet'} value={value.budget} />
      <CardItem label={'Czas Trwania'} value={value.duration} />
      <Button isPrimary>Wybieram</Button>
    </Wrapper>
  );
};

export default PriceCard;
