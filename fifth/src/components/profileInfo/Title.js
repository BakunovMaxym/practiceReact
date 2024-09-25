import '../../App.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faTimes  } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Checkbox, FormControlLabel } from '@mui/material';


function Title({fullNumber,  confirmed}) {
  // console.log(fullNumber)
  const location = useLocation();

  return (
    <div className="title">
      <p className="reg">Profile info</p>
      <p className="regText">Fill in the data for profile. It will take a couple of minutes. <br/> You only need a passport.</p>
      {location.pathname==="/Register/EnterPersonalData" ? (
        <FormControlLabel control={<Checkbox/>} label="I agree with Terms of use" />
      ) : undefined }
    </div>
  );
}

export default Title;