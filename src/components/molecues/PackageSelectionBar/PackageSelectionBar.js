import React, { useState } from 'react';
import { ItemWrapper, Wrapper } from './PackageSelectionBar.styles';
import { Label } from 'components/atoms/Label/Label';
import BarItem from 'components/atoms/BarItem/BarItem';

const PackageSelectionBar = ({ items, label = 'Pakiet*', isWhite }) => {
  const [state, setState] = useState({ selected: '0' });

  const handleInput = (e) => {
    setState({ selected: e.target.id });
  };

  return (
    <Wrapper>
      <Label>{label}</Label>
      <ItemWrapper>
        {items.map((item, index) => (
          <BarItem key={index} id={index} onClick={handleInput} isActive={Number(state.selected) === index} isWhite={isWhite}>
            {item}
          </BarItem>
        ))}
      </ItemWrapper>
    </Wrapper>
  );
};

export default PackageSelectionBar;
