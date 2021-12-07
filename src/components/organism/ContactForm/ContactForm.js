import React, { useContext } from 'react';
import FormField from 'components/molecues/FormField/FormField';
import Checkbox from 'components/molecues/Checkbox/Checkbox';
import SendButton from 'components/atoms/SendButton/SendButton';
import DoubleFormField from 'components/molecues/DoubleFormField/DoubleFormField';
import PackageSelectionBar from 'components/molecues/PackageSelectionBar/PackageSelectionBar';
import { DoubleFormFieldWrapper, Wrapper } from './ContactForm.styles';
import SelectPackage from '../../molecues/SelectPackage/SelectPackage';
import { AppContext } from '../../../AppContext';
import { useOnMobile } from '../../../utilities/useOnMobile';
import { useSendEmail } from '../../../utilities/useSendEmail';
import { useForm } from 'react-hook-form';
import { MessagePopup } from '../../atoms/MessagePopup/MessagePopup';

const ContactForm = () => {
  const { isMobile } = useOnMobile();
  const { form, sendEmail, isSend } = useSendEmail();
  const { packageSelection, setPackageSelection } = useContext(AppContext);
  const packageOption = [
    { value: 'Test', label: 'Test' },
    { value: 'Start', label: 'Start' },
    { value: 'Plus', label: 'Plus' },
    { value: 'Indywidualny', label: 'Indywidualny' },
    { value: 'Nie wiem', label: 'Nie wiem' },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    sendEmail(process.env.REACT_APP_TEMPLATE_ID, form);
    reset();
  };

  return (
    <Wrapper ref={form} onSubmit={handleSubmit(onSubmit)}>
      <DoubleFormFieldWrapper>
        <FormField label={'Imię*'} name={'name'} id={'firstName'} register={register} isRequired errors={errors} />
        <FormField label={'Email*'} type={'email'} name={'email'} id={'email'} register={register} isRequired errors={errors} />
      </DoubleFormFieldWrapper>

      {isMobile ? (
        <SelectPackage name={'package'} options={packageOption} placeholder={'Wybierz Pakiet'} label={'Pakiet*'} />
      ) : (
        <PackageSelectionBar
          name={'package'}
          items={packageOption}
          inputValue={packageSelection}
          handleInputChange={setPackageSelection}
          value={packageSelection}
          register={register}
        />
      )}

      <FormField isTextarea label={'Wiadomość*'} name={'message'} id={'message'} register={register} isRequired errors={errors} />

      <Checkbox
        name={'privacyPolitics'}
        id={'privacyPolitics'}
        label={'Przeczytałem i akceptuje politykę prywatności'}
        register={register}
        isRequired
        errors={errors}
      />
      <Checkbox name={'marketingAgree'} id={'marketingAgree'} label={'Wyrażam zgodę na kontakt marketingowy'} register={register} />
      <SendButton buttonText={'Wyślij'} />
      {isSend && (
        <MessagePopup>
          Dziękujemy!
          <br />
          Wiadomość została wysłana
        </MessagePopup>
      )}
      {/*<MessagePopup>Dziękujemy! Wiadomość została wysłana</MessagePopup>*/}
    </Wrapper>
  );
};

export default ContactForm;
