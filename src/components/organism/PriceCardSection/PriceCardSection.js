import PriceCard from 'components/molecues/PriceCard/PriceCard';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 128rem;
  height: 54.3rem;
  display: flex;
  justify-content: center;
  border: 1px solid yellow;
`;

const PriceCardSection = () => {
  return (
    <Wrapper>
      <PriceCard isPrice />
      <PriceCard />
    </Wrapper>
  );
};

export default PriceCardSection;
