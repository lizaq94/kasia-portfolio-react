import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'components/atoms/Label/Label';
import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';
import { ErrorMessega } from '../../atoms/ErrorMessega/ErrorMessega';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FormField = ({ id, label, placeholder, type = 'text', name, isTextarea, register = {}, isRequired = false, errors }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      {isTextarea ? (
        <>
          <Input isTextarea as="textarea" placeholder={placeholder} type={type} name={name} id={id} {...register(name, { required: isRequired })} />
          {errors[`${name}`] && <ErrorMessega>To pole jest wymagane</ErrorMessega>}
        </>
      ) : (
        <>
          <Input placeholder={placeholder} type={type} nameInput={name} id={id} {...register(name, { required: isRequired })} />
          {errors[`${name}`] && <ErrorMessega>To pole jest wymagane</ErrorMessega>}
        </>
      )}
    </Wrapper>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
