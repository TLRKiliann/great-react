import React from 'react';
//import { useState } from 'react';
import "./style.css"

const SignUp = () => {
  //const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className="about--div">
      <h1>Sign Up</h1>

      <div id="form--div">

        <form onSubmit={(e) => handleSubmit(e)}>

          <legend>
            Please enter your informations below
          </legend>

          <label>
            <h4>Name</h4>
            <input id="name" type="text" name="name" value="" placeholder="name" />
          </label>

          <label>
            <h4>Lastname</h4>
            <input id="lastname" type="text" name="lastname" value="" placeholder="lastname" />
          </label>

          <label>
            <h4>e-mail</h4>
            <input id="email" type="e-mail" name="email" value="" placeholder="e-mail" />
          </label>

          <label>
            <h4>Password</h4>
            <input id="passwd" type="password" name="passwd" value="" placeholder="password" />
          </label>

          <label>
            <h4>Confirm Password</h4>
            <input id="confirm" type="password" name="confirm" value="" placeholder="confirm password" />
          </label>

          <div className="fieldset--div">
            <fieldset id="fieldset--first">
              <legend>Select your crawler :</legend>

              
              <div className="inlab--div">
                <input id="google" type="checkbox" name="toppings" value="google" />
                <label for="google">Google</label><br/>
              </div>

              <div className="inlab--div">
                <input id="firefox" type="checkbox" name="toppings" value="firefox" />
                <label for="firefox">Firefox</label><br/>
              </div>

              <div className="inlab--div">
                <input id="ecosia" type="checkbox" name="toppings" value="ecosia" />
                <label for="ecosia">Ecosia</label><br/>
              </div>

              <div className="inlab--div">
                <input id="qwant" type="checkbox" name="toppings" value="qwant" />
                <label for="qwant">Qwant</label>
              </div>

            </fieldset> 



            <fieldset id="fieldset--second">
              <legend>Choose your favorite code :</legend>

              <div className="inlab--divtwo">
                <input id="python" type="radio" name="language" value="python" />
                <label for="python">Python</label><br/>
              </div>
              
              <div className="inlab--divtwo">
                <input id="js" type="radio" name="language" value="js" />
                <label for="js">JavaScript</label><br/>
              </div>
              
              <div className="inlab--divtwo">
                <input id="java" type="radio" name="language" value="java" />
                <label for="java">Java</label>
              </div>

              <div className="inlab--divtwo">
                <input id="csharp" type="radio" name="language" value="csharp" />
                <label for="csharp">C#</label>
              </div>

              <div className="inlab--divtwo">
                <input id="cplus" type="radio" name="language" value="cplus" />
                <label for="cplus">C++</label>
              </div>

              <div className="inlab--divtwo">
                <input id="langc" type="radio" name="language" value="langc" />
                <label for="langc">C</label>
              </div>

            </fieldset>
          </div>

          <div id="select--div">
            <label for="favcity">Which is your favorite city?</label>

            <select id="favcity" name="select">
              <option value="1">Dallas</option>
              <option value="2">Buenos Aires</option>
              <option value="3">Delhi</option>
              <option value="4">Hong Kong</option>
              <option value="5">London</option>
              <option value="6">Los Angeles</option>
              <option value="7">Moscow</option>
              <option value="8">Mumbai</option>
              <option value="9">New York</option>
              <option value="10">São Paulo</option>
              <option value="11">Tokyo</option>
            </select>

          </div>


          <textarea id="textarea" type="text" name="textarea" placeholder="Write something here...">
          
          </textarea>

          <button type="submit" className="btn-signup">
            Submit
          </button>

        </form>

      </div>

    </div>
  );
};

export default SignUp;