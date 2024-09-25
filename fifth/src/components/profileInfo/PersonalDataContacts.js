import { useState } from 'react';
import { TextField, Autocomplete, Box } from '@mui/material';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSkype, faFacebook, faDiscord, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useUserInfo } from '../UserInfoContext';
import { useNavigate } from 'react-router-dom';
import Title from './Title.js';
import Header from '../Header';

function PersonalDataContacts() {
    const { userInfo, setUserInfo } = useUserInfo();
    const [email, setEmail] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [send, setSend] = useState(false);
    const [socialMediaFields, setSocialMediaFields] = useState([{}]);
    const [selectedSocialMedia, setSelectedSocialMedia] = useState({});
    const [fsocial, setFSocial] = useState({})
    const [ssocial, setSSocial] = useState({})
    const [tsocial, setTSocial] = useState({})
    const [foursocial, setFourSocial] = useState({})
    let choseSocMediaList = [];

    const navigate = useNavigate();

    const socialMediaArr = [
        {
            id: 0,
            name: "Skype",
            icon: faSkype,
            size: "25px",
        },
        {
            id: 1,
            name: "Facebook",
            icon: faFacebook,
            size: "25px",
        },
        {
            id: 2,
            name: "Discord",
            icon: faDiscord,
            size: "20px",
        },
        {
            id: 3,
            name: "Telegram",
            icon: faTelegram,
            size: "25px",
        },
    ];

    const handleRemoveField = (id) => {
        setSocialMediaFields(socialMediaFields.filter((field) => field.id !== id));
        setUserInfo((prevState) => ({
            ...prevState,
            socialMedia: prevState.socialMedia.filter((item) => item.id !== id),
        }));
    };

    const handleProfileChange = (fieldId, profileValue) => {
        setUserInfo((prevState) => {
            const updatedSocialMedia = prevState.socialMedia.map(item =>
                item.id === fieldId ? { ...item, profile: profileValue } : item
            );
            return {
                ...prevState,
                socialMedia: updatedSocialMedia
            };
        });
    };

    const handleSocialMediaChange = (fieldId, value) => {//add/remove socialmedia from user object and socialmedia list
        if (value === null) {
            setUserInfo((prevState) => {
                const updatedSocialMedia = prevState.socialMedia.filter(item => item.id !== fieldId);
                return {
                    ...prevState,
                    socialMedia: updatedSocialMedia
                };
            });
            handleRemoveField(fieldId);
        } else {
            setSelectedSocialMedia((prev) => ({ ...prev, [fieldId]: value }));

            setUserInfo((prevState) => {
                const existing = prevState.socialMedia ? prevState.socialMedia.filter(
                    (item) => item.id !== fieldId
                ) : [];

                return {
                    ...prevState,
                    socialMedia: [...existing, { id: fieldId, name: value.name, profile: "" }],
                };
            });
        }
    };

    if (userInfo.socialMedia.length === 0) {
        choseSocMediaList = socialMediaArr;
    } else {
        const selectedNames = userInfo.socialMedia.map(item => item.name);
        choseSocMediaList = socialMediaArr.filter(item => !selectedNames.includes(item.name));
    }

    const addSocialMediaField = () => {// add fields to choose socialmedia
        const uniqueId = Date.now();
        setSocialMediaFields([...socialMediaFields, { id: uniqueId }]);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        setSend(true);

        const allProfilesFilled = socialMediaFields.every((field) => field.profile !== "");

        if (email !== "" && contactNumber !== "" && allProfilesFilled) {

            setUserInfo((prevState) => ({
                ...prevState,
                contactEmail: email,
                contactNumber: contactNumber,
            }));
            navigate("/Register/DeliveryAdress");
        }
    };

    return (
        <>
            <Header pageNumber="firstsecond" />
            <Title/>
            <form className="personalDataForm" onSubmit={handleRegister}>
                <div className="regsNameContainer">
                    <p className="contactsTittle">Contacts</p>
                    <p className="contactsTip">These contacts are used to inform about orders</p>

                    <div className="iconContainer">
                        <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "20px", color: "gray", margin: "22px 10px 0 0" }} />
                        <TextField
                            error={send && email === ""}
                            label="Email"
                            helperText={`${send && email === "" ? "Required*" : ""}`}
                            variant="standard"
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{
                                marginBottom: '30px',
                                width: "90%",
                            }}
                        />
                    </div>

                    <div className="iconContainer">
                        <FontAwesomeIcon icon={faPhone} style={{ fontSize: "20px", color: "gray", margin: "22px 10px 0 0" }} />
                        <TextField
                            error={send && contactNumber === ""}
                            label="Contact number"
                            helperText={send && contactNumber === "" ? "Required*" : ""}
                            variant="standard"
                            type="number"
                            onChange={(e) => setContactNumber(e.target.value)}
                            sx={{
                                marginBottom: '30px',
                                width: "90%",
                            }}
                        />
                    </div>

                    <p className="contactsTittle">Social network</p>
                    <p className="contactsTip">Indicate the desired communication method</p>

                    {socialMediaFields.map((field) => (
                        <div className="socialMediaListContainer" key={field.id}>
                            <Autocomplete
                                id={`social-media-select-${field.id}`}
                                options={choseSocMediaList}
                                autoHighlight
                                getOptionLabel={(option) => option.name}
                                onChange={(e, value) => handleSocialMediaChange(field.id, value)}
                                sx={{ marginBottom: '30px', width: "47%", marginRight: "5%" }}
                                renderOption={(props, option) => (
                                    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                        <FontAwesomeIcon icon={option.icon} style={{ fontSize: option.size, marginRight: "15px" }} />
                                        {option.name}
                                    </Box>
                                )}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Choose social media"
                                        variant="standard"
                                        InputProps={{ ...params.InputProps, disableUnderline: true }}
                                        sx={{ width: "100%", borderBottom: "2px solid rgb(240, 240, 240)" }}
                                    />
                                )}
                                clearOnEscape
                            />
                            <TextField
                                error={send && email === ""}
                                label="@profile"
                                helperText={send && email === "" ? "Required*" : ""}
                                variant="standard"
                                onChange={(e) => handleProfileChange(field.id, e.target.value)}
                                sx={{ marginBottom: '30px', width: "47%" }}
                            />
                        </div>
                    ))}

                    <button type="button" className="addSocialmedia" style={{ display: `${userInfo.socialMedia.length === 4 ? "none" : "block"}` }} onClick={addSocialMediaField}>+ Add More</button>
                </div>
                <button type="submit" className="sendBtn">Go Next →</button>
            </form>
        </>
    );
}

export default PersonalDataContacts;
