import React from 'react';
//import { useState } from 'react';
import "./style.css"


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entryName: "",
      entryLastName: "",
      passwd: "",
      confirm: "",
      entryEmail: "",
      rememberMe: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.Remove = this.Remove.bind(this);
  };

  componentDidMount() {
    const rememberMe = localStorage.getItem('Remember') === 'true';
    const entryName = rememberMe ? localStorage.getItem('Name') : '';
    const entryLastName = rememberMe ? localStorage.getItem('Lastname') : '';
    const entryEmail = rememberMe ? localStorage.getItem('email') : '';
    const passwd = rememberMe ? localStorage.getItem('Password') : '';
    this.setState({ rememberMe, entryName, entryLastName, entryEmail, passwd });
  };

  handleSubmit = (e) => {
    const { entryName, entryLastName, passwd, entryEmail, rememberMe } = this.state;
    localStorage.setItem('Name', JSON.stringify(entryName));
    localStorage.setItem('Lastname', JSON.stringify(entryLastName));
    localStorage.setItem('email', JSON.stringify(entryEmail));
    localStorage.setItem('Password', JSON.stringify(passwd));
    localStorage.setItem('Remember', JSON.stringify(rememberMe));
  };

  handleChange = (e) => {
    const input = e.target;
    this.setState({
      [input.name]: input.type === 'checkbox' ? input.checked : input.value
    });
  };

  Remove = () => {
    localStorage.removeItem('Name')
    localStorage.removeItem('Lastname');
    localStorage.removeItem('email');
    localStorage.removeItem('Password');
  };
  render() {
    const {entryName, entryLastName, passwd, confirm, entryEmail, rememberMe} = this.state;
    return (
      <div className="about--div">
        <h1>Sign Up</h1>

        <div id="form--div">

          <form onSubmit={(e) => this.handleSubmit(e)}>

            <legend>
              Please enter your informations below
            </legend>

            <label>
              <h4>Name</h4>
              <input
                id="name"
                type="text"
                name="name"
                value={entryName}
                onChange={this.handleChange}
                placeholder="name" />
            </label>

            <label>
              <h4>Lastname</h4>
              <input
                id="lastname"
                type="text"
                name="lastname"
                value={entryLastName}
                onChange={this.handleChange}
                placeholder="lastname" />
            </label>

            <label>
              <h4>e-mail</h4>
              <input
                id="entryEmail"
                type="e-mail"
                name="email"
                value={entryEmail}
                onChange={this.handleChange}
                placeholder="e-mail" />
            </label>

            <label>
              <h4>Password</h4>
              <input
                id="passwd"
                type="password"
                name="passwd"
                value={passwd}
                onChange={(e) => this.setState({passwd: e.target.value})}
                placeholder="password" />
            </label>

            <label>
              <h4>Confirm Password</h4>
              <input
                id="confirm"
                type="password"
                name="confirm"
                value={confirm}
                onChange={(e) => this.setState({confirm: e.target.value})}
                placeholder="confirm password" />
            </label>

            <div className="fieldset--div">
              <fieldset id="fieldset--first">
                <legend>Select your crawler :</legend>

                
                <div className="inlab--div">
                  <input id="google" type="checkbox" name="toppings" value="google" />
                  <label htmlFor="google">Google</label><br/>
                </div>

                <div className="inlab--div">
                  <input id="firefox" type="checkbox" name="toppings" value="firefox" />
                  <label htmlFor="firefox">Firefox</label><br/>
                </div>

                <div className="inlab--div">
                  <input id="ecosia" type="checkbox" name="toppings" value="ecosia" />
                  <label htmlFor="ecosia">Ecosia</label><br/>
                </div>

                <div className="inlab--div">
                  <input id="qwant" type="checkbox" name="toppings" value="qwant" />
                  <label htmlFor="qwant">Qwant</label>
                </div>

              </fieldset> 



              <fieldset id="fieldset--second">
                <legend>Choose your favorite code :</legend>

                <div className="inlab--divtwo">
                  <input id="python" type="radio" name="language" value="python" />
                  <label htmlFor="python">Python</label><br/>
                </div>
                
                <div className="inlab--divtwo">
                  <input id="js" type="radio" name="language" value="js" />
                  <label htmlFor="js">JavaScript</label><br/>
                </div>
                
                <div className="inlab--divtwo">
                  <input id="java" type="radio" name="language" value="java" />
                  <label htmlFor="java">Java</label>
                </div>

                <div className="inlab--divtwo">
                  <input id="csharp" type="radio" name="language" value="csharp" />
                  <label htmlFor="csharp">C#</label>
                </div>

                <div className="inlab--divtwo">
                  <input id="cplus" type="radio" name="language" value="cplus" />
                  <label htmlFor="cplus">C++</label>
                </div>

                <div className="inlab--divtwo">
                  <input id="langc" type="radio" name="language" value="langc" />
                  <label htmlFor="langc">C</label>
                </div>

              </fieldset>
            </div>

            <div id="select--div">
              <label htmlFor="favcity">Which is your favorite city?</label>

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

            <div className="remember--div">
              <input
                type="checkbox"
                name="remember" 
                checked={rememberMe} 
                onChange={this.handleChange}
              />
              <label htmlFor="remember">Remember me ?</label>
            </div>

            <button type="submit" className="btn-signup">
              Submit
            </button>

          </form>
          
          <div>
            <p>Name: {localStorage.getItem('Name')}</p>
            <p>Lastname: {localStorage.getItem('Lastname')}</p>
            <p>Email: {localStorage.getItem('email')}</p>
            <p>Password: {localStorage.getItem('Password')}</p>
            <p>Remember: {localStorage.getItem('Remember')}</p>
          </div>

        </div>

      </div>
    );
  };
};

export default SignUp;
