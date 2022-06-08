import React, { useState, useEffect } from "react";
//import DarkFunc from "./components/DarkFunc";

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//import Index from "./pages/index.js";
import Home from "./Pages/Home";
import About from './Pages/about';
import Blogs from './Pages/blogs';
import SignUp from './Pages/signup';
import Contact from './Pages/contact';
import './App.css';


function App() {
  const storedDarkMode = localStorage.getItem("DARK_MODE");

  const [darkMode, setDarkMode] = useState(storedDarkMode);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem("DARK_MODE", darkMode);
  }, [darkMode]);

  return (
    <div className="App" data-theme={darkMode ? "dark" : "light"}>

      {darkMode && <button className="btn--dark" onClick={toggleDarkMode} style={{background: 'black',
        color: 'lightgrey'}}>
        {"Light Mode"}
      </button>}
      
      {!darkMode && <button className="btn--dark" onClick={toggleDarkMode} style={{background: 'grey',
        color: 'white'}}>
        {"Dark Mode"}
      </button>}

      <div className="">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/sign-up' element={<SignUp />} />
          </Routes>
        </Router>
      </div>
    
    </div>
  );
}

export default App;
