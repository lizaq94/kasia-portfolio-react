import React, { useContext } from 'react';
import { Button } from 'components/atoms/Button/Button';
import CardItem from 'components/atoms/CardItem/CardItem';
import { priceIndividual } from 'data/data';
import { Wrapper, Title, PriceItem, PriceItemBig } from './PriceCard.styles.js';
import { Link } from 'react-router-dom';
import { AppContext } from '../../../AppContext';
import { resetScroll } from '../../../utilities/resetScroll';

const PriceCard = ({ value = priceIndividual, isPrice }) => {
  const { setPackageSelection } = useContext(AppContext);

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
      <CardItem label={'Prowizja'} value={value.provision} />
      <Link
        to="/contact"
        onClick={() => {
          resetScroll();
          console.log('priceCard', value.value);
          setPackageSelection(value.value);
        }}
      >
        <Button isPrimary>Wybieram</Button>
      </Link>
    </Wrapper>
  );
};

export default PriceCard;
