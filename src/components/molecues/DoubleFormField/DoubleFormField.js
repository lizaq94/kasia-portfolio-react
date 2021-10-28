import React from 'react';
import styled from 'styled-components';
import FormField from 'components/molecues/FormField/FormField';

const Wrapper = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
  }

  div {
    flex: 1;
    @media (max-width: 800px) {
      margin-bottom: 3rem;
    }

    &:first-child {
      margin-right: 2rem;

      @media (max-width: 800px) {
        margin-right: 0;
      }
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
