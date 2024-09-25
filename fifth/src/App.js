import './App.css';
import { useEffect, useState } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { app } from "./firebase.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import EnterPhone from './components/register/EnterPhone.js';
import ConfirmCode from "./components/register/ConfirmCode.js";
import RegPassword from "./components/register/RegPassword.js";
import PersonalData from "./components/profileInfo/PersonalData.js";
import PersonalDataContacts from './components/profileInfo/PersonalDataContacts.js';
import UserInfoPage from './components/UserInfoPage.js';
import { AuthProvider } from './components/AuthContext';
import { UserInfoProvider } from './components/UserInfoContext.js';

import { auth } from './firebase.js';
import DeliveryAdress from './components/profileInfo/DeliveryAdress.js';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unSubscriber = onAuthStateChanged(auth, (curUser) => {
      if (curUser) {
        console.log("current user", curUser);
        setUser(curUser);
      } else {
        console.log("No user");
        setUser(null);
      }
    });

    return () => unSubscriber();
  }, [auth]);

  return (
    <Router>
        <AuthProvider>
          <UserInfoProvider>
        <div className="App">

          <Routes>
            <Route path="/*" element={<EnterPhone auth={auth} />} />
            <Route path="/Register/VerificationCode" element={<ConfirmCode auth={auth} />} />
            <Route path="/Register/SetPassword" element={<RegPassword auth={auth} />} />
            <Route path="/Register/EnterPersonalData" element={<PersonalData auth={auth} />} />
            <Route path="/Register/PersonalDataContacts" element={<PersonalDataContacts auth={auth} />} />
            <Route path="/Register/DeliveryAdress" element={<DeliveryAdress auth={auth} />} />
             <Route path="/UserInfoPage" element={<UserInfoPage />} />
          </Routes>
        </div>
          </UserInfoProvider>
    </AuthProvider>
      </Router>
  );
}

export default App;
