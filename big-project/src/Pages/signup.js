import React from 'react';
import { useState } from 'react';
import "./style.css"

const SignUp = () => {
  const [name, setName] = useState("")
  const handleSubmit = () => {
    ;
  }
  return (
    <div className="about--div">
      <h1>Sign Up</h1>

      <div id="form--div">

        <form onSubmit={handleSubmit}>

          <legend>
            Please enter your informations below
          </legend>

          <label>
            <h4>Name</h4>
            <input id type="text" name value onChange />
          </label>

          <label>
            <h4>Lastname</h4>
            <input id type="text" name value onChange />
          </label>

          <label>
            <h4>e-mail</h4>
            <input id type="e-mail" name value onChange />
          </label>

          <label>
            <h4>Password</h4>
            <input id type="password" name value onChange />
          </label>

          <label>
            <h4>Confirm Password</h4>
            <input id type="password" name value onChange />
          </label>

          <textarea id name value placeholder>
            
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