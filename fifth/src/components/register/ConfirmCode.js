import { useState } from 'react';
import { PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { TextField } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../Header';
import Title from './Title.js';

import { useAuth } from '../AuthContext';


function ConfirmCode({ auth }) {
  const location = useLocation();
  const { fullNumber } = location.state || {};
  const [verificationCode, setVerificationCode] = useState("");
  const [errorMsg, setErrorMsg] = useState("")
  const [isSendedAgain, setIsSendedAgain] = useState(false);


  const { handlePhoneNumberSubmit, verificationId } = useAuth();
  const navigate = useNavigate();

  const handleVerificationCodeSubmit = (e) => {
    console.log('User signed in:');
    e.preventDefault();
    const credential = PhoneAuthProvider.credential(verificationId, verificationCode);

    signInWithCredential(auth, credential)
      .then((userCredential) => {
        setErrorMsg("");
        navigate("/Register/SetPassword", { state: { fullNumber: fullNumber} });
      })
      .catch((error) => {
        if (verificationCode.length === 0) {
          setErrorMsg("Please enter code!");
        } else {
          setErrorMsg("Invalid code!");
        }
        console.error('Error during verification code submission', error);
      });
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
    <>
      <Header pageNumber="firstsecond" />
      <Title fullNumber={fullNumber}/>
      <div className="confirmCodeContainer">
        <form onSubmit={handleVerificationCodeSubmit} className="codeSubmitForm">
          <TextField
            id="outlined-number"
            label="Confirmation code"
            variant="standard"
            className="text-field"
            type="number"
            onChange={(e) => setVerificationCode(e.target.value)}
            sx={{
              fontSize: '0.9rem',
              '& .MuiInputBase-root': {
                padding: "0 0 0px 10px",
                borderBottom: "2px solid rgb(240, 240, 240)",
                width: "100%",
              }
            }}
          />
          <button onClick={(e) => {
            e.preventDefault();
            handlePhoneNumberSubmit(fullNumber, "", setErrorMsg);
            if(errorMsg === ""){
              setIsSendedAgain(true)
              setTimeout(() => {
                setIsSendedAgain(false)
              }, 2000);
            }
          }} className="sendAgain">{isSendedAgain ? "Sended ✔️" : "↻ Send again"}</button>
          <p className="confirmTip">Confirm phone with code from SMS message</p>
          <p className={`errorMsg ${errorMsg ? "activeError" : ""}`}>{errorMsg}</p>
          <button type="submit" className="sendBtn">Confirm</button>
        </form>
        <div id="recaptcha-container"></div>

      </div>
    </>
  );
}

export default ConfirmCode;
