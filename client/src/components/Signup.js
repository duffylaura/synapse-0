import React, { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { checkPassword, validateEmail } from '../utils/helpers';

//Style
import logo from '../assets/logo-grey-banner.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';


function Signup() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setPassword(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!checkPassword(password)) {
      setErrorMessage(
        `Choose a more secure password for the account: ${userName}`
      );
      return;
    }
    alert(`Hello ${userName}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setPassword('');
    setEmail('');
  };

    return (
        <div className="container">
        <div className="font">
            <div className="row">
                <div className="row"><br></br><br></br></div>
                <div className="col-1"></div>
                <div className="col-4"> 
                    <div className="hide-on-phone">
                        <div className="col-sm"><br></br></div>
                        <div className="col-sm"><img src={logo} className="img-fluid" alt='Synapse Logo'></img> </div>
                        <div className="col-sm"><br></br></div>
                    </div>
                </div>
                <div className="col-6">
                    <div>
                        <form className="form">
                            <div className="col text-center"><h2> Sign Up</h2></div><br></br>
                            <div className="col text-center">
                                <label>Username: 
                                <input value={userName} name="userName" 
                                onChange={handleInputChange} type="text" 
                                placeholder="Create your username."/>
                                </label>
                            </div><br></br>
                            <div className="col text-center">
                                <label>Email:
                                <input value={email} name="email" 
                                onChange={handleInputChange} type="email" 
                                placeholder="Enter email."/>
                                </label>
                            </div><br></br>
                            <div className="col text-center">
                                <label>Password:
                                <input value={password} name="password" 
                                onChange={handleInputChange} type="password" 
                                placeholder="Enter a password."/>
                                </label>
                            </div><br></br>
                            <div className="col text-center">
                                <button className="custom-button" type="button" onClick={handleFormSubmit}>Join the Community!</button>
                            </div>
                        </form>
                        {errorMessage && ( <div> <p className="error-text">{errorMessage}</p> </div>)}
                    </div>
                </div>
                <div className="col-1"></div>
            </div>

            <div className="hide-on-desktop">
                <div className="col-sm"><br></br></div>
                <div className="col-sm"><img src={logo} className="img-fluid" alt='Synapse Logo'></img> </div>
                <div className="col-sm"><br></br></div>
            </div>

        </div>
    </div>
);
}

export default Signup;