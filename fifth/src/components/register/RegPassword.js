import { useState } from 'react';
import { PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { TextField } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../Header';
import Title from './Title.js';
import { useUserInfo } from '../UserInfoContext';

import { useAuth } from '../AuthContext';


function RegPassword({ auth }) {
    const { userInfo, setUserInfo } = useUserInfo();
    const location = useLocation();
    const { fullNumber } = location.state || {};
    const [errorMsg, setErrorMsg] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [send, setSend] = useState(false);

  const navigate = useNavigate();


  const handleRegister = (e) => {
    e.preventDefault(); 
    setSend(true);
    if(email !== "" && password !== "" && email.includes("@")) {
        setUserInfo((prevState) => ({
            ...prevState,
            fullNumber,
            password,
            email
        }));

    setTimeout(() => {
        navigate("/Register/EnterPersonalData");
    }, 0);
    }
};

    return (
        <>
            <Header pageNumber="firstsecondthird"/>
            <Title fullNumber={fullNumber} confirmed="conf" />
            <form className="regPassword" onSubmit={(e) => handleRegister(e) }>
                <div className="regPasswordContainer">
                    <TextField
                        error={send && (!email.includes("@") || email === "")}
                        id="standard-helperText"
                        label="Enter your email"
                        helperText={send ? (email === "" ? "Required*" : `${!email.includes("@") ? "Incorrect entry" : ""}`) : ""}
                        variant="standard"
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{
                            fontSize: '0.9rem',
                            marginBottom: '30px',
                            width: "100%",
                            '& .MuiInputBase-root': {
                                padding: "0 0 0px 10px",

                            }
                        }}
                    />
                    <TextField
                        error={send && password === ""}
                        id="standard-helperText"
                        label="Set a password"
                        helperText={send && password === "" ? "Required*" : ""}
                        variant="standard"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        sx={{
                            fontSize: '0.9rem',
                            width: "100%",
                            '& .MuiInputBase-root': {
                                padding: "0 0 0px 10px",
                            }
                        }}
                    />
                </div>
                <button type="submit" className="sendBtn regBtn">Register Now</button>
            </form>

        </>
    );
}

export default RegPassword;
