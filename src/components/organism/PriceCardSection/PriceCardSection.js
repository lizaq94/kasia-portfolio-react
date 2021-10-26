import React from 'react';
import PriceCard from 'components/molecues/PriceCard/PriceCard';
import { priceCardsInfo } from 'data/data';
import { Wrapper } from './PriceCardSection.styles';

const PriceCardSection = ({ children, color, height }) => {
  return (
    <Wrapper color={color} height={height}>
      {priceCardsInfo.map((data) => (
        <PriceCard isPrice value={data} key={data.name} />
      ))}
      <PriceCard />
      {children}
    </Wrapper>
  );
};

export default PriceCardSection;
