import React, { useState, useEffect } from "react";
//import DarkFunc from "./components/DarkFunc";

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages';
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
          <Route path="/home" component={Home} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
        </Router>
      </div>

      <div className="home--div">
        <h3>Welcome on my project React. There are many things...</h3>
        <nav>
          <ul>
            <li>
              <a>
                Multiple pages
              </a>
            </li>
            <li>
              <a>
                Darkmode
              </a>
            </li>
            <li>
              <a>
                Form to login (sign-up)
              </a>
            </li>
            <li>
              <a>
                Contact (img + react icons)
              </a>
            </li>
          </ul>
        </nav>
      </div>
    
    </div>
  );
}

export default App;
