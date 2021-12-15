import emailjs from 'emailjs-com';
import { useContext, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AppContext } from '../AppContext';

export const useSendEmail = () => {
  const [isSend, setIsSend] = useState(false);
  const { setPackageSelection, setNumberOfCampaignsSelection, setCampaignBudgetSelection } = useContext(AppContext);
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const sendEmail = (template, form) => {
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, template, form.current, process.env.REACT_APP_USER_ID).then(
      (result) => {
        console.log(result);
        setIsSend(true);
        setInterval(() => setIsSend(false), 3000);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const onSubmit = (template, form) => {
    sendEmail(template, form);
    setPackageSelection('');
    setNumberOfCampaignsSelection('');
    setCampaignBudgetSelection('');
    reset();
  };

  return { form, isSend, register, handleSubmit, formState: { errors }, reset, onSubmit };
};
