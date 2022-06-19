import React from 'react';
import { Checmark, Wrapper } from './Checkbox.styles';
import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';
import { ErrorMessega } from '../../atoms/ErrorMessega/ErrorMessega';

const Checkbox = ({ name, id, label, register, isRequired, errors = {}, srcForLabel = '' }) => {
  return (
    <>
      <Wrapper>
        <Label htmlFor={id}>
          {!!srcForLabel ? <a href={srcForLabel}>{label}</a> : label}
          <Input type={'checkbox'} name={name} id={id} {...register(name, { required: isRequired })} />

          <Checmark />
        </Label>
        {errors[`${name}`] && <ErrorMessega>To pole jest wymagane</ErrorMessega>}
      </Wrapper>
    </>
  );
};

export default Checkbox;
