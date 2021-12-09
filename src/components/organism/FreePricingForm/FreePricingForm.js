import React, { useContext } from 'react';
import FormField from 'components/molecues/FormField/FormField';
import Checkbox from 'components/molecues/Checkbox/Checkbox';
import SendButton from 'components/atoms/SendButton/SendButton';
import PackageSelectionBar from 'components/molecues/PackageSelectionBar/PackageSelectionBar';
import { DoubleFormFieldWrapper, Wrapper } from 'components/organism/ContactForm/ContactForm.styles';
import SelectPackage from '../../molecues/SelectPackage/SelectPackage';
import { AppContext } from '../../../AppContext';
import { useOnMobile } from '../../../utilities/useOnMobile';
import { useSendEmail } from '../../../utilities/useSendEmail';
import { MessagePopup } from '../../atoms/MessagePopup/MessagePopup';

const FreePricingForm = () => {
  const { numberOfCampaignsSelection, setNumberOfCampaignsSelection, campaignBudgetSelection, setCampaignBudgetSelection } = useContext(AppContext);
  const { isMobile } = useOnMobile();
  const {
    form,
    isSend,
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
  } = useSendEmail();

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
  // REACT_APP_TEMPLATE_FREE_PRICING_ID
  return (
    <Wrapper ref={form} onSubmit={handleSubmit(() => onSubmit(process.env.REACT_APP_TEMPLATE_FREE_PRICING_ID, form))}>
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

      <FormField
        label={'Strona internetowa / Strona na facebooku*'}
        name={'page'}
        id={'page'}
        register={register}
        errors={errors}
        placeholder={'Adres strony internetowej / Facebooka'}
      />

      {isMobile ? (
        <>
          <SelectPackage
            name={'numberOfCampaignsSelectBar'}
            label={'Przewidywana liczba kampani'}
            options={numberOfCampaigns}
            placeholder={'Wybierz ilość kampanii'}
          />
          <SelectPackage
            name={'campaignBudgetSelectBar'}
            label={'Przewidywany miesięczny budżet reklamowy'}
            options={campaignBudget}
            placeholder={'Wybierz budżet kampanii'}
          />
        </>
      ) : (
        <>
          <PackageSelectionBar
            name={'numberOfCampaignsSelectBar'}
            label={'Przewidywana liczba kampani'}
            items={numberOfCampaigns}
            inputValue={numberOfCampaignsSelection}
            handleInputChange={setNumberOfCampaignsSelection}
            isWhite
            register={register}
          />{' '}
          <PackageSelectionBar
            name={'campaignBudgetSelectBar'}
            label={'Przewidywany miesięczny budżet reklamowy'}
            items={campaignBudget}
            inputValue={campaignBudgetSelection}
            handleInputChange={setCampaignBudgetSelection}
            isWhite
            register={register}
          />
        </>
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

export default FreePricingForm;
