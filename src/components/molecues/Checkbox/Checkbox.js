import React from 'react';
import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';

const Checmark = styled.span`
  position: absolute;
  top: 50%;
  left: -4rem;
  transform: translateY(-50%);
  width: 2.4rem;
  height: 2.4rem;
  border: 2px solid rgba(13, 13, 13, 0.48);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;

  &::after {
    content: '';
    position: absolute;
    left: 1rem;
    top: 0.5rem;
    width: 0.5rem;
    height: 1rem;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
    display: none;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${Input} {
    opacity: 0;
    width: 0;
    margin: 0;

    &:checked ~ ${Checmark} {
      background-color: ${({ theme }) => theme.colors.primaryBlue};
      border: none;
    }
    &:checked ~ ${Checmark}::after {
      display: block;
    }
  }
  ${Label} {
    position: relative;
    font-size: 1.6rem;
    font-weight: 400;
    cursor: pointer;
    padding: 0;
  }
`;

const Checkbox = ({ name, id, label }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>
        {label}
        <Input type={'checkbox'} name={name} id={id} />
        <Checmark />
      </Label>
    </Wrapper>
  );
};

export default Checkbox;
