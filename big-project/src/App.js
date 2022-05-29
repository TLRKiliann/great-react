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
      
      <MultiPage />


    </div>

  );
}

export default App;
