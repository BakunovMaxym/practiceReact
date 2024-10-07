import { useEffect, useState } from 'react';
import { TextField, Autocomplete, Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../Header';
import Title from './Title.js';
import { useUserInfo } from '../UserInfoContext';

function DeliveryAdress() {
    const location = useLocation();
    const { userInfo, setUserInfo } = useUserInfo();
    const [address, setAddress] = useState("");
    const [chosenCountry, setChosenCountry] = useState({ country: "Ukraine", cities: [] });
    const [chosenCity, setChosenCity] = useState("");
    const [postCode, setPostCode] = useState("");
    const [send, setSend] = useState(false);
    const [countryList, setCountryList] = useState([]);

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
            .catch(error => console.log(error));
    }, []);

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        setSend(true);
        if (address !== "" && postCode !== "" && chosenCountry.country !== "" && chosenCity !== "") {
            setUserInfo((prevState) => ({
                ...prevState,
                address: address,
                deliveryCountry: chosenCountry.country,
                deliveryCity: chosenCity,
                postCode: postCode,
            }));

            setTimeout(() => {
                console.log(userInfo);
                navigate("/UserInfoPage");
            }, 0);
        }
    };

    return (
        <>
            <Header pageNumber="firstsecondthird" />
            <Title confirmed="conf" />
            <form className="personalDataForm" onSubmit={handleRegister}>
                <div className="regsNameContainer">
                    <p className="contactsTittle">Delivery address</p>
                    <p className="contactsTip">Using for shipping orders</p>
                    <TextField
                        error={send && address === ""}
                        label="Address"
                        helperText={send && address === "" ? "Required*" : ""}
                        variant="standard"
                        onChange={(e) => setAddress(e.target.value)}
                        sx={{
                            fontSize: '0.9rem',
                            marginBottom: '30px',
                            width: "100%",
                            '& .MuiInputBase-root': {
                                padding: "0 0 0px 10px",
                            }
                        }}
                    />
                    <Autocomplete
                        id="country-select-demo"
                        options={countryList}
                        autoHighlight
                        disableClearable
                        getOptionLabel={(option) => option.country}
                    value={chosenCountry}
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
                                error={send && !chosenCountry.country}
                                helperText={send && !chosenCountry.country ? "Required*" : ""}
                                label="Country"
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
                                    }
                                }}
                            />
                        )}
                    />
                    <div className="socialMediaListContainer">
                        <Autocomplete
                            id="city-select-demo"
                            options={chosenCountry.cities}
                            autoHighlight
                            disableClearable
                            getOptionLabel={(option) => option}
                            onChange={(e, value) => setChosenCity(value)}
                            sx={{ width: "47%", marginRight: "5%" }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    error={send && chosenCity === ""}
                                    helperText={send && chosenCity === "" ? "Required*" : ""}
                                    label="City"
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
                                        }
                                    }}
                                />
                            )}
                        />
                        <TextField
                            error={send && postCode === ""}
                            label="Postal code"
                            helperText={send && postCode === "" ? "Required*" : ""}
                            variant="standard"
                            type="number"
                            onChange={(e) => setPostCode(e.target.value)}
                            sx={{
                                fontSize: '0.9rem',
                                marginBottom: '30px',
                                width: "47%",
                                '& .MuiInputBase-root': {
                                    padding: "0 0 0px 10px",
                                }
                            }}
                        />
                    </div>
                </div>
                <button type="submit" className="sendBtn">Go Next →</button>
            </form>
        </>
    );
}

export default DeliveryAdress;
