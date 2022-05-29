

import React, { useState, useEffect } from "react";
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
      <h1>React Toggle Dark Mode</h1>
      <h2>Persistant DarkMode with useEffect() and localStorage !</h2>
      
      {darkMode && <button onClick={toggleDarkMode} style={{background: 'black',
        color: 'lightgrey'}}>
        {"Switch to Light Mode"}
      </button>}
      
      {!darkMode && <button onClick={toggleDarkMode} style={{background: 'grey',
        color: 'white'}}>
        {"Switch to Dark Mode"}
      </button>}


      
    </div>
  );
}

export default App;
