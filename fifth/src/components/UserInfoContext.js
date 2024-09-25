import { createContext, useState, useContext } from 'react';

const UserInfoContext = createContext();

export const useUserInfo = () => useContext(UserInfoContext);

export const UserInfoProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({
        fullNumber: "", 
        password: "",
        email: "",
        firstName: "", 
        secondName: "", 
        birthDay: "", 
        birthCountry: "", 
        city: "", 
        contactEmail: "", 
        contactNumber: "", 
        socialMedia: [], 
        address: "", 
        deliveryCity: "", 
        deliveryCountry: "",
        postCode: ""
    });

    return (
        <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserInfoContext.Provider>
    );
};