import '../../App.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faTimes  } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { faPen } from '@fortawesome/free-solid-svg-icons';

function Title({fullNumber,  confirmed}) {
  // console.log(fullNumber)
  const location = useLocation();

  return (
    <div className="title">
      <p className="reg">Registration</p>
      <p className="regText">Fill in the registration data. It will take a couple of minutes. <br/> All you need is a phone number and e-mail.</p>
      {(location.pathname === "/" || location.pathname === "/Register/EnterNumber" )? (
      <div className="privacyContainer">
        <FontAwesomeIcon icon={faLock}  style={{ color: 'gray', fontSize: '20px', margin: "5% 10px 0 15px"   }} />
        <p className="privacyMsg">
          We take privacy issues seriously. You can be sure that your personal data is securely protected.
        </p>
        <FontAwesomeIcon icon={faTimes}  style={{ color: 'gray', fontSize: '20px', margin: "5% 5% 0 2%"  }} />
      </div>) : (
        <div className="numberConfirm">
          <p className="phoneNumber">{fullNumber}</p>
          <p className="numberNotConf">{  confirmed !== "conf" ? "Number not confirmed yet" : "Number confirmed"}</p>
          {  confirmed !== "conf" 
          ? (<Link to="/Register/EnterNumber" state={ {fullNumber: fullNumber.slice(-9), reload: true}}><FontAwesomeIcon icon={faPen}  style={{ color: 'blue', fontSize: '20px', position: "absolute", bottom: "15px", right: "15px" }} /></Link>)
          : undefined}
        </div>
        )}
    </div>
  );
}

export default Title;