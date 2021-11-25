import React from 'react';
import { ItemWrapper, Wrapper } from './PackageSelectionBar.styles';
import { Label } from 'components/atoms/Label/Label';
import BarItem from 'components/atoms/BarItem/BarItem';

const PackageSelectionBar = ({ items, label = 'Pakiet*', isWhite, handleInputChange, inputValue }) => {
  const handleInput = (e, value) => {
    handleInputChange({ selected: e.target.id, value: value });
  };
  console.log(inputValue);
  return (
    <Wrapper>
      <Label>{label}</Label>
      <ItemWrapper>
        {items.map(({ label, value }, index) => (
          <BarItem key={index} id={index} onClick={(e) => handleInput(e, value)} isActive={Number(inputValue.selected) === index} isWhite={isWhite}>
            {label}
          </BarItem>
        ))}
      </ItemWrapper>
    </Wrapper>
  );
};

export default PackageSelectionBar;
