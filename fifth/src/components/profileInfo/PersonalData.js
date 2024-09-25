import { useEffect, useState } from 'react';
import { PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { TextField, Autocomplete, Box } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../Header';
import Title from './Title.js';
import { useUserInfo } from '../UserInfoContext';

import { useAuth } from '../AuthContext';


function PersonalData({ auth }) {
    

    const location = useLocation();
    const { userInfo, setUserInfo } = useUserInfo();
    const [fName, setFName] = useState("")
    const [sName, setSName] = useState("")
    const [send, setSend] = useState(false);
    const [countryList, setCountryList] = useState([]);
    const [chosenCountry, setChosenCountry] = useState({ country: "Ukraine", cities: [] });
    const [chosenCity, setChosenCity] = useState("");
    const [date, setDate] = useState();

    useEffect(() => {
        fetch("https://countriesnow.space/api/v0.1/countries")
            .then(response => response.json())
            .then(data => {
                setCountryList(data.data);
                const selectedCountry = data.data.find(country => country.country === chosenCountry.country);
                if (selectedCountry) {
                    setChosenCountry(selectedCountry);
                }
            })
            .catch(error => console.log(error))
    }, [])

    const navigate = useNavigate();


    const handleRegister = (e) => {
        e.preventDefault();
        setSend(true);
        if (fName != "" && sName != "" && date != "" && chosenCountry.country != "") {
            setUserInfo((prevState) => ({
                ...prevState,
                firstName: fName,
                secondName: sName, 
                birthDay: date.format('MMM DD YYYY'),
                birthCountry: chosenCountry.country,
                city: chosenCity,
            }));

    setTimeout(() => {
            navigate("/Register/PersonalDataContacts");
        }, 0);

        }
    }

    return (
        <>
            <Header pageNumber="first" />
            <Title confirmed="conf" />
            <form className="personalDataForm" onSubmit={(e) => handleRegister(e)}>
                <div className="regsNameContainer">
                    <p className="contactsTittle">Personal data</p>
                    <p className="contactsTip">Specify exactly as in your passport</p>
                    <TextField
                        error={send && fName === ""}
                        id="standard-helperText"
                        label="First name"
                        helperText={`${send && fName === "" ? "Required*" : ""}`}
                        variant="standard"
                        onChange={(e) => setFName(e.target.value)}
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
                        error={send && sName === ""}
                        id="standard-helperText"
                        label="Second name"
                        helperText={send && sName === "" ? "Required*" : ""}
                        variant="standard"
                        onChange={(e) => setSName(e.target.value)}
                        sx={{
                            fontSize: '0.9rem',
                            marginBottom: '50px',
                            width: "100%",
                            '& .MuiInputBase-root': {
                                padding: "0 0 0px 10px",
                            }
                        }}
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs} locale={null}>
                        <DatePicker
                            label={"Date of Birth"}
                            views={['year', 'month', 'day']}
                            value={date}
                            onChange={(newDate) => setDate(dayjs(newDate))}
                            sx={{
                                fontSize: '0.9rem',
                                marginBottom: '30px',
                                width: "100%",
                                
                            }}
                        />
                    </LocalizationProvider>

                    <Autocomplete
                        id="country-select-demo"
                        options={countryList}
                        autoHighlight
                        disableClearable
                        getOptionLabel={(option) => option.country}
                        sx={{
                            fontSize: '0.9rem',
                            marginBottom: '30px',
                            width: "100%",
                            '& .MuiInputBase-root': {
                                padding: "0 0 0px 10px",
                            }
                        }}
                        onChange={(e, value) => setChosenCountry(value)}

                        renderInput={(params) => (
                            <TextField
                                {...params}
                                error={send && chosenCountry === ""}
                                helperText={send && chosenCountry === "" ? "Required*" : ""}
                                className="autocomplete-input"
                                label="Country of birth"
                                variant="standard"
                                InputProps={{
                                    ...params.InputProps,
                                    disableUnderline: true,
                                }}
                                sx={{
                                    marginBottom: "0px",
                                    '& .MuiInputBase-root': {
                                        padding: 0,
                                        width: "100%",
                                        borderBottom: "2px solid rgb(240, 240, 240)",
                                        textAlign: "right",
                                    }
                                }}
                            />
                            
                        )}
                    />
                    <Autocomplete
                        id="country-select-demo"
                        sx={{ width: "100%", border: "none" }}
                        options={chosenCountry.cities}
                        autoHighlight
                        disableClearable
                        getOptionLabel={(option) => option}
                        
                        onChange={(e, value) => { setChosenCity(value) }}

                        renderInput={(params) => (
                            <TextField
                                {...params}
                                error={send && chosenCity === ""}
                                helperText={send && chosenCity === "" ? "Required*" : ""}
                                className="autocomplete-input"
                                label="City of birth"
                                variant="standard"
                                InputProps={{
                                    ...params.InputProps,
                                    disableUnderline: true,
                                }}
                                sx={{
                                    '& .MuiInputBase-root': {
                                        padding: 0,
                                        width: "100%",
                                        borderBottom: "2px solid rgb(240, 240, 240)",
                                        textAlign: "right",
                                    }
                                }}
                            />
                        )}
                    />
                </div>
                <button type="submit" className="sendBtn">Go Next →</button>
            </form>

        </>
    );
}

export default PersonalData;
