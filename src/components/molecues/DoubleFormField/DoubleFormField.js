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

    &:first-child {
      margin-right: 2rem;

      @media (max-width: 800px) {
        margin: 0 0 3rem 0;
      }
    }
  }
`;

const DoubleFormField = ({ firstField = {}, secondField = {}, register, isRequired, errors }) => {
  return (
    <Wrapper>
      <FormField
        label={firstField.label}
        placeholder={firstField.placeholder}
        type={firstField.type}
        id={firstField.name}
        name={firstField.name}
        register={register}
        isRequired={isRequired}
        errors={errors}
      />

      <FormField
        label={secondField.label}
        placeholder={secondField.placeholder}
        type={secondField.type}
        id={secondField.name}
        name={secondField.name}
        register={register}
        isRequired={isRequired}
        errors={errors}
      />
    </Wrapper>
  );
};

export default DoubleFormField;
