import './App.css';
import './contact.css';
import './pricing.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Home';
import Pricing from './Pricing';
import Contact from './Contact';


function App() {
    

  return (
    <Router>
        <Navbar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Pricing" element={<Pricing />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
        <Footer/>

    </Router>
  );
}

export default App;
