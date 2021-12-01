import React from 'react';
import styled from 'styled-components';

// export const Wrapper = styled.div`
//   flex: 1;
//   max-width: 19.35rem;
// `;
// export const BarItemContent = styled.div`
//   width: 100%;
//   height: 4.5rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
//   border-radius: 1.6rem;
//   color: ${({ isActive }) => (isActive ? 'white' : 'black')};
//   background-color: ${({ isActive }) => (isActive ? ({ theme }) => theme.colors.primaryBlue : '#f2f2f2')};
// `;
//
// export const StyledBarItemContent = styled(BarItemContent)`
//   color: black;
//   background-color: ${({ isActive }) => (isActive ? ({ theme }) => theme.colors.white : '#f2f2f2')};
// `;

// const Wrapper = styled.div`
//   flex: 1;
//
//   input {
//     display: none;
//   }
//
//   input:checked ~ label {
//     background: red;
//   }
// `;
const Label = styled.label`
  padding: 8px 0px;

  flex: 1;
  cursor: pointer;
  border-radius: 1.4rem;
`;

const Input = styled.input`
  display: none;

  &:checked + ${Label} {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primaryBlue};
  }
`;

const BarItem = (props) => {
  return (
    <>
      <Input id={props.value} defaultChecked={props.value === props.checkedValue} type="radio" name={props.name} value={props.value} />
      <Label htmlFor={props.value}>{props.children}</Label>
    </>
  );
};

export default BarItem;
