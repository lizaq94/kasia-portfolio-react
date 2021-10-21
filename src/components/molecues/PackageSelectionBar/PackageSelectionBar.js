import React, { useState } from 'react';
import { ItemWrapper, Wrapper } from './PackageSelectionBar.styles';
import { Label } from 'components/atoms/Label/Label';
import BarItem from 'components/atoms/BarItem/BarItem';

const PackageSelectionBar = ({ items }) => {
  const [state, setState] = useState({ selected: '0' });

  const handleInput = (e) => {
    setState({ selected: e.target.id });
  };

  return (
    <Wrapper>
      <Label>Pakiet*</Label>
      <ItemWrapper>
        {items.map((item, index) => (
          <BarItem key={index} id={index} onClick={handleInput} isActive={Number(state.selected) === index}>
            {item}
          </BarItem>
        ))}
      </ItemWrapper>
    </Wrapper>
  );
};

export default PackageSelectionBar;
