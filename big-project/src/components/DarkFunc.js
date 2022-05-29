import '../App.css';


function DarkFunc(props) {

  return (
    <div className="App" data-theme={props.darkMode ? "dark" : "light"}>

      {props.darkMode && <button onClick={props.toggleDarkMode} style={{background: 'black',
        color: 'lightgrey'}}>
        {"Switch to Light Mode"}
      </button>}
      
      {!props.darkMode && <button onClick={props.toggleDarkMode} style={{background: 'grey',
        color: 'white'}}>
        {"Switch to Dark Mode"}
      </button>}
    
    </div>
  );
}

export default DarkFunc;