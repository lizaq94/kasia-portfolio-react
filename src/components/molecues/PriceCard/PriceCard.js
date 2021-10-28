import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import CardItem from 'components/atoms/CardItem/CardItem';
import { priceIndividual } from 'data/data';
import { Wrapper, Title, PriceItem, PriceItemBig } from './PriceCard.styles.js';

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
