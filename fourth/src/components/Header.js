import '../App.css';
import { useLocation } from "react-router-dom"

function Header() {
  
  const location = useLocation().pathname;
  console.log(location)
  return (
    <div className={`header ${location === "/Categories" ? "Lefted" : ""}`}>
        <p className="blog">Our blog</p>
        <p className="headerSlogan">{location === "/Categories" ? "Recources and insights" : "The latest writings from our team" }</p>
        <p className="headerAbout">The latest news, interviews, technologies and resources.</p>
    </div>
  );
}

export default Header;