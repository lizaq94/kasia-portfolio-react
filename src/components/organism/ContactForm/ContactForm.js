import React from 'react';
import FormField from 'components/molecues/FormField/FormField';
import Checkbox from 'components/molecues/Checkbox/Checkbox';
import SendButton from 'components/atoms/SendButton/SendButton';
import DoubleFormField from 'components/molecues/DoubleFormField/DoubleFormField';
import PackageSelectionBar from 'components/molecues/PackageSelectionBar/PackageSelectionBar';
import { Wrapper } from './ContactForm.styles';

const ContactForm = () => {
  return (
    <Wrapper>
      <DoubleFormField
        firstField={{ label: 'Imię*', placeholder: 'Podaj swoje imię', type: 'text', name: 'name' }}
        secondField={{ label: 'Email*', placeholder: 'Podaj swój adres email', type: 'email', name: 'email' }}
      />
      <PackageSelectionBar items={['Test', 'Start', 'Plus', 'Indywidualny', 'Nie wiem']} />
      <FormField isTextarea label={'Wiadomość*'} name={'message'} id={'message'} />
      <Checkbox name={'privacyPolitics'} id={'privacyPolitics'} label={'Przeczytałem i akceptuje politykę prywatności'} />
      <Checkbox name={'marketingAgree'} id={'marketingAgree'} label={'Wyrażam zgodę na kontakt marketingowy'} />
      <SendButton buttonText={'Wyślij'} />
    </Wrapper>
  );
};

export default ContactForm;
