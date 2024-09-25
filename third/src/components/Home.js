import Pallete from "./Pallete";
import data from "../data/pallete.json"
import '../App.css'; 
import { Link, useLocation, Routes, Route  } from "react-router-dom";
import transition from "../transition";

function Home() {
  const location = useLocation();

  const PalleteList = [];

  for(let i = 0; i < data.length; i++){
    PalleteList.push(
      <Link className="palleteLink" to={`/pallete/${data[i].id}`}><Pallete colorArr={data[i]} styleClass="tiny"/></Link>
    );
  }

  return (
    <div>
      <header className="appHeader">
        <p className='headerLeft'>FLAT UI COLORS 2</p>
        <div className="headerRight" >
          <a href="" alt="">
            <div>Designer Inspiration 
              <p>NEW</p>
              </div>
            </a>
          <a href="" alt="">Subscribe</a>
        </div>
      </header>
      <div className="palleteContainer">
        {PalleteList}
      </div>
      
    </div>
  );
}

export default transition(Home);
