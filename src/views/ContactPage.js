import React from 'react';
import ViewWrapper from 'components/molecues/ViewWrapper/ViewWrapper';
import HeaderSection from 'components/organism/HeaderSection/HeaderSection';
import { HeaderParagraph } from 'components/atoms/HeaderParagraph/HeaderParagraph';
import ContactForm from 'components/organism/ContactForm/ContactForm';

const ContactPage = () => {
  return (
    <ViewWrapper>
      <HeaderSection title={'Współpracuj zdalnie z firmami\nz całej Polski'}></HeaderSection>
      <HeaderParagraph>
        Masz pytanie? Napisz! Wypełnij poniższy formularz lub wyślij maila na: <br /> katarz.domagala@gmail.com
      </HeaderParagraph>
      <ContactForm />
    </ViewWrapper>
  );
};

export default ContactPage;
