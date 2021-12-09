import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  padding: 8px 0px;

  flex: 1;
  cursor: pointer;
  border-radius: 1.4rem;
`;

const Input = styled.input`
  display: none;

  &:checked + ${Label} {
    color: ${({ isWhite }) => (isWhite ? 'black' : 'white')};
    background-color: ${({ isWhite }) => (isWhite ? 'white' : ({ theme }) => theme.colors.primaryBlue)};
  }
`;

const BarItem = ({ register, ...props }) => {
  return (
    <>
      <Input
        id={props.value}
        defaultChecked={props.value === props.checkedValue}
        type="radio"
        name={props.name}
        value={props.value}
        isWhite={props.isWhite}
        {...register(props.name)}
      />
      <Label htmlFor={props.value}>{props.children}</Label>
    </>
  );
};

export default BarItem;
