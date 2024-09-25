import React, { createContext, useState, useContext } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase.js';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [verificationId, setVerificationId] = useState(null);
  const navigate = useNavigate();

  const setupRecaptcha = () => {
    return new RecaptchaVerifier( auth, 'recaptcha-container', {
      size: 'invisible', // або 'normal', якщо потрібно
      callback: (response) => {
        // console.log('ReCAPTCHA verified:', response);
      },
      'expired-callback': () => {
        console.log('ReCAPTCHA expired');
      }
    },);
  };

  const handlePhoneNumberSubmit = async (fullNumber, page, setErrorMsg) => {
    const appVerifier = setupRecaptcha();

    try {
      const confirmationResult = await signInWithPhoneNumber(auth, fullNumber, appVerifier);
      setVerificationId(confirmationResult.verificationId);
      console.log('SMS sent.');

      if (page === "enterPhonePage") {
        setTimeout(() => {
          navigate("/Register/VerificationCode", { state: { fullNumber } });
        }, 1000);
      }
    } catch (error) {
      setErrorMsg("Invalid phone number or it doesn't exist on the list of test phones");
      console.error('Error during sign-in with phone number', error);
    }
    setTimeout(() => {
      let element = document.getElementById("recaptcha-container");
      if(element){
        element.remove();
        element = document.createElement('div');
        element.id = 'recaptcha-container'; 
        document.body.appendChild(element);
      }
    }, 1000);
    
  };

  return (
    <AuthContext.Provider value={{ handlePhoneNumberSubmit, setupRecaptcha, verificationId }}>
      {children}
    </AuthContext.Provider>
  );
};