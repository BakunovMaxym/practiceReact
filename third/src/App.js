import Pallete from "./components/PalletePage";
import data from "./data/pallete.json"
import './App.css'; 
import { Link, useLocation, Routes, Route  } from "react-router-dom";
import Home from "./components/Home"
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const RoutesList = [];

  for(let i = 0; i < data.length; i++){
    RoutesList.push(
      <Route path={`/pallete/${data[i].id}`} element={<Pallete  color={data[i]}/>}/>
    );
  }

  return (
    <div className="container" style={{backgroundImage: `url("/images/bgImg.jpg")`, backgroundSize: '50% auto', backgroundRepeat: "repeat", minHeight: "100vh"}}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          {RoutesList}
        </Routes>
      </AnimatePresence>
      
    </div>
  );
}

export default App;
