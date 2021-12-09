import React, { useContext } from 'react';
import FormField from 'components/molecues/FormField/FormField';
import Checkbox from 'components/molecues/Checkbox/Checkbox';
import SendButton from 'components/atoms/SendButton/SendButton';
import PackageSelectionBar from 'components/molecues/PackageSelectionBar/PackageSelectionBar';
import { DoubleFormFieldWrapper, Wrapper } from './ContactForm.styles';
import SelectPackage from '../../molecues/SelectPackage/SelectPackage';
import { AppContext } from '../../../AppContext';
import { useOnMobile } from '../../../utilities/useOnMobile';
import { useSendEmail } from '../../../utilities/useSendEmail';
import { MessagePopup } from '../../atoms/MessagePopup/MessagePopup';

const ContactForm = () => {
  const { isMobile } = useOnMobile();
  const {
    form,
    isSend,
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
  } = useSendEmail();
  const { packageSelection, setPackageSelection } = useContext(AppContext);
  const packageOption = [
    { value: 'Test', label: 'Test' },
    { value: 'Start', label: 'Start' },
    { value: 'Plus', label: 'Plus' },
    { value: 'Indywidualny', label: 'Indywidualny' },
    { value: 'Nie wiem', label: 'Nie wiem' },
  ];

  return (
    <Wrapper ref={form} onSubmit={handleSubmit(() => onSubmit(process.env.REACT_APP_TEMPLATE_ID, form))}>
      <DoubleFormFieldWrapper>
        <FormField label={'Imię*'} name={'name'} id={'firstName'} register={register} isRequired errors={errors} placeholder={'Podaj swoje imię'} />
        <FormField
          label={'Email*'}
          type={'email'}
          name={'email'}
          id={'email'}
          register={register}
          isRequired
          errors={errors}
          placeholder={'Podaj swój adres email'}
        />
      </DoubleFormFieldWrapper>

      {isMobile ? (
        <SelectPackage
          name={'package'}
          options={packageOption}
          placeholder={'Wybierz Pakiet'}
          label={'Pakiet*'}
          defaultInputValue={packageSelection}
        />
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

      <FormField
        isTextarea
        label={'Wiadomość*'}
        name={'message'}
        id={'message'}
        register={register}
        isRequired
        errors={errors}
        placeholder={'Treść wiadomości'}
      />

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
    </Wrapper>
  );
};

export default ContactForm;
