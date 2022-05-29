import React, { useState, useEffect } from "react";
import DarkFunc from "./components/DarkFunc";
import MultiPage from "./components/MultiPage";
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
    <div>
      <DarkFunc id={darkMode} darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> 
      
      <MultiPage id={}/>

    <Router>
    <Navbar />
    <Routes>
      <Route path="/home" component={Home} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/blogs' element={<Blogs/>} />
      <Route path='/sign-up' element={<SignUp />} />
    </Routes>
    </Router>

    </div>

  );
}

export default App;