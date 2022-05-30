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
              <legend>Select your browser :</legend>

              
              <div className="inlab--div">
                <input id="ham" type="checkbox" name="toppings" value="ham" />
                <label for="ham">Google</label><br/>
              </div>

              <div className="inlab--div">
                <input id="pepperoni" type="checkbox" name="toppings" value="pepperoni" />
                <label for="pepperoni">Firefox</label><br/>
              </div>

              <div className="inlab--div">
                <input id="mushrooms" type="checkbox" name="toppings" value="mushrooms" />
                <label for="mushrooms">Ecosia</label><br/>
              </div>

              <div className="inlab--div">
                <input id="olives" type="checkbox" name="toppings" value="olives" />
                <label for="olives">Qwant</label>
              </div>

            </fieldset> 



            <fieldset id="fieldset--second">
              <legend>Choose a shipping method:</legend>

              <div className="inlab--divtwo">
                <input id="overnight" type="radio" name="shipping" value="overnight" />
                <label for="overnight">Overnight</label><br/>
              </div>
              
              <div className="inlab--divtwo">
                <input id="twoday" type="radio" name="shipping" value="twoday" />
                <label for="twoday">Two day</label><br/>
              </div>
              
              <div className="inlab--divtwo">
                <input id="ground" type="radio" name="shipping" value="ground" />
                <label for="ground">Ground</label>
              </div>

            </fieldset>
          </div>

          <label for="favcity">Which is your favorite city?</label>
            <select id="favcity" name="select">
              <option value="1">Amsterdam</option>
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