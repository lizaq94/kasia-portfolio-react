import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';

export const useSendEmail = () => {
  const [isSend, setIsSend] = useState(false);
  const form = useRef();

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

  return { form, sendEmail, isSend };
};
