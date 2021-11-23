import React from 'react';
import FormField from 'components/molecues/FormField/FormField';
import Checkbox from 'components/molecues/Checkbox/Checkbox';
import SendButton from 'components/atoms/SendButton/SendButton';
import DoubleFormField from 'components/molecues/DoubleFormField/DoubleFormField';
import PackageSelectionBar from 'components/molecues/PackageSelectionBar/PackageSelectionBar';
import { Wrapper } from 'components/organism/ContactForm/ContactForm.styles';
import SelectPackage from '../../molecues/SelectPackage/SelectPackage';

const FreePricingForm = () => {
  const numberOfCampaigns = [
    { value: '1-2', label: '1-2' },
    { value: '3-4', label: '3-4' },
    { value: '5-6', label: '5-6' },
    { value: '6+', label: 'Więcej niż 6' },
  ];

  const campaignBudget = [
    { value: '100-500', label: '100-500zł' },
    { value: '500-1000', label: '500-1000zł' },
    { value: '1000-5000', label: '1000-5000zł' },
    { value: '5000+', label: 'Więcej niż 5000zł' },
  ];

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
      <SelectPackage label={'Przewidywana liczba kampani'} options={numberOfCampaigns} placeholder={'Wybierz ilość kampanii'} />
      <PackageSelectionBar
        label={'Przewidywany miesięczny budżet reklamowy'}
        items={['100-500zł', '500-1000zł', '1000-5000zł', 'Więcej niż 5000zł']}
        isWhite
      />
      <SelectPackage label={'Przewidywany miesięczny budżet reklamowy'} options={campaignBudget} placeholder={'Wybierz budżet kampanii'} />

      <FormField isTextarea label={'Wiadomość*'} name={'message'} id={'message'} />
      <Checkbox name={'privacyPolitics'} id={'privacyPolitics'} label={'Przeczytałem i akceptuje politykę prywatności'} />
      <Checkbox name={'marketingAgree'} id={'marketingAgree'} label={'Wyrażam zgodę na kontakt marketingowy'} />
      <SendButton buttonText={'Wyślij'} />
    </Wrapper>
  );
};

export default FreePricingForm;
