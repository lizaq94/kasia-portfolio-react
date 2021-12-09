import React from 'react';
import { ItemWrapper, Wrapper } from './PackageSelectionBar.styles';
import { Label } from 'components/atoms/Label/Label';
import BarItem from 'components/atoms/BarItem/BarItem';

const PackageSelectionBar = ({ items, label = 'Pakiet*', isWhite, handleInputChange, inputValue, name, register }) => {
  const handleInput = (e) => {
    handleInputChange(e.target.value);
  };

  return (
    <Wrapper>
      <Label>{label}</Label>
      <ItemWrapper onChange={handleInput}>
        {items.map(({ label, value }, index) => (
          <BarItem key={index} id={index} isWhite={isWhite} value={value} name={name} checkedValue={inputValue || 'Test'} register={register}>
            {label}
          </BarItem>
        ))}
      </ItemWrapper>
    </Wrapper>
  );
};

export default PackageSelectionBar;
