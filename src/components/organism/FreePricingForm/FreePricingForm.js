import React from 'react';
import FormField from 'components/molecues/FormField/FormField';
import Checkbox from 'components/molecues/Checkbox/Checkbox';
import SendButton from 'components/atoms/SendButton/SendButton';
import DoubleFormField from 'components/molecues/DoubleFormField/DoubleFormField';
import PackageSelectionBar from 'components/molecues/PackageSelectionBar/PackageSelectionBar';
import { Wrapper } from 'components/organism/ContactForm/ContactForm.styles';

const FreePricingForm = () => {
  return (
    <Wrapper>
      <DoubleFormField
        firstField={{ label: 'Imię*', placeholder: 'Podaj swoje imię', type: 'text', name: 'name' }}
        secondField={{ label: 'Email*', placeholder: 'Podaj swój adres email', type: 'email', name: 'email' }}
      />
      <FormField
        label={'Strona internetowa / Strona na facebooku*'}
        name={'page'}
        id={'page'}
        placeholder={'Adres strony internetowej / Facebooka'}
      />
      <PackageSelectionBar label={'Przewidywana liczba kampani'} items={['1-2', '3-4', '5-6', 'Więcej niż 6']} isWhite />
      <PackageSelectionBar
        label={'Przewidywany miesięczny budżet reklamowy'}
        items={['100-500zł', '500-1000zł', '1000-5000zł', 'Więcej niż 5000zł']}
        isWhite
      />

      <FormField isTextarea label={'Wiadomość*'} name={'message'} id={'message'} />
      <Checkbox name={'privacyPolitics'} id={'privacyPolitics'} label={'Przeczytałem i akceptuje politykę prywatności'} />
      <Checkbox name={'marketingAgree'} id={'marketingAgree'} label={'Wyrażam zgodę na kontakt marketingowy'} />
      <SendButton buttonText={'Wyślij'} />
    </Wrapper>
  );
};

export default FreePricingForm;
