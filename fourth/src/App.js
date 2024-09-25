import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import BlogPage from './components/BlogPage';
import Categories from './components/Categories';
import Header from './components/Header';
import data from "./data/blogData.json"

function App() {
  
  let blogRoutsList = [];

  for(let i = 0; i < data.length; i++){
    blogRoutsList.push(
      <Route key={i} path={`/blog/${data[i].title}`} element={<BlogPage data={data[i]}/>} />
    )
  }

  return (
      <Router>
      <Navbar/>
      <Header/>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/BlogPage" element={<BlogPage />} />
          {blogRoutsList}
        </Routes>
    </Router>
  );
}

export default App;
