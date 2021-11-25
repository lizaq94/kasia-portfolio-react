import React, { useContext, useRef } from 'react';
import FormField from 'components/molecues/FormField/FormField';
import Checkbox from 'components/molecues/Checkbox/Checkbox';
import SendButton from 'components/atoms/SendButton/SendButton';
import DoubleFormField from 'components/molecues/DoubleFormField/DoubleFormField';
import PackageSelectionBar from 'components/molecues/PackageSelectionBar/PackageSelectionBar';
import { Wrapper } from './ContactForm.styles';
import SelectPackage from '../../molecues/SelectPackage/SelectPackage';
import emailjs from 'emailjs-com';
import { AppContext } from '../../../AppContext';

const ContactForm = () => {
  const { packageSelection, setPackageSelection } = useContext(AppContext);
  const packageOption = [
    { value: 'test', label: 'Test' },
    { value: 'start', label: 'Start' },
    { value: 'plus', label: 'Plus' },
    { value: 'individual', label: 'Indywidualny' },
    { value: 'notKnow', label: 'Nie wiem' },
  ];
  const env = process.env.REACT_APP_SERVICE_ID;

  console.log('env', env);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID).then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <Wrapper ref={form} onSubmit={sendEmail}>
      <DoubleFormField
        firstField={{ label: 'Imię*', placeholder: 'Podaj swoje imię', type: 'text', name: 'name' }}
        secondField={{ label: 'Email*', placeholder: 'Podaj swój adres email', type: 'email', name: 'email' }}
      />
      <PackageSelectionBar
        name={'packageBar'}
        items={packageOption}
        inputValue={packageSelection}
        handleInputChange={setPackageSelection}
        value={packageSelection}
      />
      <SelectPackage name={'package'} options={packageOption} placeholder={'Wybierz Pakiet'} label={'Pakiet*'} />
      <FormField isTextarea label={'Wiadomość*'} name={'message'} id={'message'} />
      <Checkbox name={'privacyPolitics'} id={'privacyPolitics'} label={'Przeczytałem i akceptuje politykę prywatności'} />
      <Checkbox name={'marketingAgree'} id={'marketingAgree'} label={'Wyrażam zgodę na kontakt marketingowy'} />
      <SendButton buttonText={'Wyślij'} />
    </Wrapper>
  );
};

export default ContactForm;
