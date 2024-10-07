import { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../Header';
import Title from './Title.js';
import { countries } from "./Countries.tsx";
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { useAuth } from '../AuthContext';

function EnterPhone({ auth }) {
  const location = useLocation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState("+380");
  const [countryName, setCountryName] = useState("Ukraine");
  const [selectedCountry, setSelectedCountry] = useState(countries.find(c => c.code === "380"));
  const [errorMsg, setErrorMsg] = useState("");
  const [needsReload, setNeedsReload] = useState(false);
  const hasLoaded = useRef(false);

  let fullNumber = countryCode + phoneNumber;

  const { handlePhoneNumberSubmit } = useAuth();

  const setCountryData = (value) => {
    if (value) {
      setCountryCode("+" + value.code);
      setCountryName(value.name);
      setSelectedCountry(value);
    } else {
      setCountryCode("+380");
      setCountryName("Ukraine");
      setSelectedCountry(countries.find(c => c.code === "380"));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handlePhoneNumberSubmit(fullNumber, "enterPhonePage", setErrorMsg);

  };

  return (
    <>
      <Header pageNumber="first" />
      <Title />
      <div className="enterPhoneContainer">
        <form className="phoneForm" onSubmit={handleSubmit}>
          <div className="phoneFormContainer">
            <p className="enterPhone">Enter your phone number</p>
            <div className="phoneFormBody">
              <Autocomplete
                id="country-select-demo"
                sx={{ width: "200px", border: "none" }}
                options={countries}
                autoHighlight
                    value={selectedCountry}
                    disableClearable
                getOptionLabel={(option) => "+" + option.code}
                onChange={(e, value) => setCountryData(value)}
                filterOptions={(options, state) => options.filter((option) =>
                  option.name.toLowerCase().includes(state.inputValue.toLowerCase()) ||
                  option.code.includes(state.inputValue)
                )}
                renderOption={(props, option) => {
                  const { key, ...otherProps } = props;
                  return (
                    <Box
                      component="li"
                      sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                      key={`${option.code}-${option.abbr}`}
                      {...otherProps}
                    >
                      <img
                        loading="lazy"
                        width="20"
                        srcSet={`https://flagcdn.com/w40/${option.abbr.toLowerCase()}.png 2x`}
                        src={`https://flagcdn.com/w20/${option.abbr.toLowerCase()}.png`}
                        alt=""
                      />
                      +{option.code}
                    </Box>
                  );
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    className="autocomplete-input"
                    label={`${countryName}`}
                    variant="standard"
                    InputProps={{
                      ...params.InputProps,
                      disableUnderline: true,
                    }}
                    sx={{
                      '& .MuiInputBase-root': {
                        padding: 0,
                        width: "140px",
                        borderBottom: "2px solid rgb(240, 240, 240)",
                        textAlign: "right",
                      }
                    }}
                  />
                )}
              />
              <TextField
                id="outlined-number"
                label=" "
                variant="standard"
                className="text-field"
                type="number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                sx={{ marginLeft: '15px', width: '100%' }}
                value={phoneNumber}
              />
            </div>
            <p className={`errorMsg ${errorMsg ? "activeError" : ""}`}>{errorMsg}</p>
          </div>
          <button type="submit" className="sendBtn">Send Code</button>
        </form>
        <div id="recaptcha-container"></div>
      </div>
    </>
  );
}

export default EnterPhone;
