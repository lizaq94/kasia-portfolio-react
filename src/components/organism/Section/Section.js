import React from 'react';
import { SecondTitle } from 'components/atoms/SecondTitle/SecondTitle';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { Button } from 'components/atoms/Button/Button';

const Section = ({ title, isButton, children }) => {
  return (
    <>
      <SecondTitle>{title}</SecondTitle>
      <Paragraph>{children}</Paragraph>
      {isButton ? <Button isPrimary>{isButton}</Button> : null}
    </>
  );
};

export default Section;
