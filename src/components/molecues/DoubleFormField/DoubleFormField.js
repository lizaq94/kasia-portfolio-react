import React from 'react';
import styled from 'styled-components';
import FormField from 'components/molecues/FormField/FormField';

const Wrapper = styled.div`
  width: 100%;
  display: flex;

  div {
    flex: 1;

    &:first-child {
      margin-right: 2rem;
    }
  }
`;

const DoubleFormField = ({ firstField = {}, secondField = {} }) => {
  return (
    <Wrapper>
      <FormField label={firstField.label} placeholder={firstField.placeholder} type={firstField.type} id={firstField.name} name={firstField.name} />
      <FormField
        label={secondField.label}
        placeholder={secondField.placeholder}
        type={secondField.type}
        id={secondField.name}
        name={secondField.name}
      />
    </Wrapper>
  );
};

export default DoubleFormField;