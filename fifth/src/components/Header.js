import '../App.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes  } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function Header({pageNumber}) {
  
  return (
    <div className="header">
      <div className="logo">
        <img src="/logo512.png" alt="logo"/>
        <p>COMPANY NAME</p>
      </div>
      <div className="progresBarContainer">
        <div className={`progresBarItemCircle ${pageNumber.includes("first") ? "activeIcon" : ""}`}/>
        <div className={`progresBarItemLine ${pageNumber.includes("second") ? "activeIcon" : ""}`}/>
        <div className={`progresBarItemCircle ${pageNumber.includes("second") ? "activeIcon" : ""}`}/>
        <div className={`progresBarItemLine ${pageNumber.includes("third") ? "activeIcon" : ""}`}/>
        <div className={`progresBarItemCircle ${pageNumber.includes("third") ? "activeIcon" : ""}`}/>
      </div>
      <FontAwesomeIcon icon={faTimes}  style={{ color: 'gray', fontSize: '40px', marginTop: "15px" }} />

    </div>
  );
}

export default Header;
