import React from 'react';
import PriceCard from 'components/molecues/PriceCard/PriceCard';
import { priceCardsInfo } from 'data/data';
import { Wrapper } from './PriceCardSection.styles';

const PriceCardSection = () => {
  return (
    <Wrapper>
      {priceCardsInfo.map((data) => (
        <PriceCard isPrice value={data} key={data.name} />
      ))}
      <PriceCard />
    </Wrapper>
  );
};

export default PriceCardSection;
