import React from 'react';
import ViewWrapper from 'components/molecues/ViewWrapper/ViewWrapper';
import HeaderSection from 'components/organism/HeaderSection/HeaderSection';
import { HeaderParagraph } from 'components/atoms/HeaderParagraph/HeaderParagraph';
import ContactForm from 'components/organism/ContactForm/ContactForm';
import styled from 'styled-components';

const StyledHeaderParagraph = styled(HeaderParagraph)`
  @media (max-width: 700px) {
    padding: 0 5rem;
  }
`;

const ContactPage = () => {
  return (
    <ViewWrapper>
      <HeaderSection title={'Współpracuję zdalnie z firmami\nz całej Polski'} />
      <StyledHeaderParagraph>
        Masz pytanie? Napisz! Wypełnij poniższy formularz lub wyślij maila na: <br /> katarz.domagala@gmail.com
      </StyledHeaderParagraph>
      <ContactForm />
    </ViewWrapper>
  );
};

export default ContactPage;
