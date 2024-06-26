import emailjs from '@emailjs/browser';

const PUBLIC_KEY =  process.env.REACT_APP_API_EMAILJS_PUBLIC_KEY;
const TEMPLATE_ID = process.env.REACT_APP_API_EMAILJS_TEMPLATE_ID;
const SERVICE_ID = process.env.REACT_APP_API_EMAILJS_SERVICE_ID; 


export const sendEmailJS = (form) => {


  console.log("Public Key:", PUBLIC_KEY);
  console.log("Template ID:", TEMPLATE_ID);
  console.log("Service ID:", SERVICE_ID);
    
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };