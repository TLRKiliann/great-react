import React from 'react';
import "./style.css"


/*
Miss to verify password (passwd and confirm)
*/



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
    //this.handleSubmit = this.handleSubmit.bind(this);
    //! e (event) for binding !
    this.Remove = this.Remove.bind(this);
  };

  componentDidMount() {
    const rememberMe = JSON.parse(localStorage.getItem('Remember')) === "true";
    const entryName = rememberMe ? JSON.parse(localStorage.getItem('Name')) : '';
    const entryLastName = rememberMe ? JSON.parse(localStorage.getItem('Lastname')) : '';
    const entryEmail = rememberMe ? JSON.parse(localStorage.getItem('email')) : '';
    const passwd = rememberMe ? JSON.parse(localStorage.getItem('Password')) : '';
    this.setState({ rememberMe, entryName, entryLastName, entryEmail, passwd });
  };

  handleSubmit = (e) => {
    //if (e.target.value passwd === e.target.value confirm)
    const { entryName, entryLastName, passwd, entryEmail, rememberMe } = this.state;
    localStorage.setItem('Name', JSON.stringify(entryName));
    localStorage.setItem('Lastname', JSON.stringify(entryLastName));
    localStorage.setItem('email', JSON.stringify(entryEmail));
    localStorage.setItem('Password', JSON.stringify(passwd));
    localStorage.setItem('Remember', JSON.stringify(rememberMe));
    e.preventDefault();
  };

  handleChange = (event) => {
    const input = event.target;
    this.setState({
      [input.name]: input.type === 'checkbox' ? input.checked : input.value
    });
    //console.log(event.target["name"])
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

            <div className="label--input">
              <label>
                <h4>Name</h4>
              </label>
              <input
                name="name"
                type="text"
                value={entryName}
                onChange={(e) => this.setState({entryName: e.target.value})}
                placeholder="name" 
                required
              />
            </div>

            <div className="label--input">            
              <label>
                <h4>Lastname</h4>
              </label>
              <input
                name="lastname"
                type="text"
                value={entryLastName}
                onChange={(e) => this.setState({entryLastName: e.target.value})}
                placeholder="lastname"
                required
              />
            </div>

            <div className="label--input">
              <label>
                <h4>e-mail</h4>
              </label>
              <input
                name="email"
                type="e-mail"
                value={entryEmail}
                onChange={(e) => this.setState({entryEmail: e.target.value})}
                placeholder="e-mail"
                required
              />
            </div>

            <div className="label--input">
              <label>
                <h4>Password</h4>
              </label>
              <input
                name="passwd"
                type="password"
                value={passwd}
                onChange={(e) => this.setState({passwd: e.target.value})}
                placeholder="password"
                required
              />
            </div>

            <div className="label--input">
              <label>
                <h4>Confirm Password</h4>
              </label>
              <input
                name="confirm"
                type="password"
                value={confirm}
                onChange={(e) => this.setState({confirm: e.target.value})}
                placeholder="confirm password"
                required
              />
            </div>


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

            <textarea
              name="textarea"
              type="text"
              placeholder="Write something here..."
            >
            </textarea>

            <div className="remember--div">
              <input
                name="rememberMe" 
                type="checkbox"
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
            <p>Name: {JSON.parse(localStorage.getItem('Name'))}</p>
            <p>Lastname: {JSON.parse(localStorage.getItem('Lastname'))}</p>
            <p>Email: {JSON.parse(localStorage.getItem('email'))}</p>
            <p>Password: {JSON.parse(localStorage.getItem('Password'))}</p>
            <p>Remember: {localStorage.getItem('Remember')}</p>
          </div>

          <div id="btn--rmlocalstorage">
            <legend>Remove localStorage</legend>
            <button onClick={this.Remove}>
              Remove
            </button>
          </div>

        </div>

      </div>
    );
  };
};

export default SignUp;
