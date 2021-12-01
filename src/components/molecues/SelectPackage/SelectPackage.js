import React from 'react';
import styled from 'styled-components';
import { Label } from '../../atoms/Label/Label';

import Select from 'react-select';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
`;

const customStyles = {
  option: () => ({
    textAlign: 'left',
    padding: '0 20px',
    margin: '0',
  }),
  control: () => ({
    background: '#f2f2f2',
    textAlign: 'left',
    display: 'flex',
    padding: '10px 20px',
    borderRadius: '1.6rem',
  }),
};

const SelectPackage = ({ name, options, placeholder, label }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Select name={name} options={options} styles={customStyles} placeholder={placeholder} />
    </Wrapper>
  );
};

export default SelectPackage;
