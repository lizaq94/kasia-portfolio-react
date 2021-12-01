import emailjs from 'emailjs-com';
import { useRef } from 'react';

export const useSendEmail = () => {
  const form = useRef();

  const sendEmail = (e, template, form) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, template, form.current, process.env.REACT_APP_USER_ID).then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return { form, sendEmail };
};
