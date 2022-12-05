import React from 'react'
import logo from '../assets/logo-grey-banner.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';


function Signup() {
    return (
        <div class="container">
        <div class="font">
            <div class="row">
                <div class="row"><br></br><br></br></div>
                <div class="col-1"></div>
                <div class="col-4"> 
                    <div class="hide-on-phone">
                        <div class="col-sm"><br></br></div>
                        <div class="col-sm"><img src={logo} class="img-fluid" alt='Synapse Logo'></img> </div>
                        <div class="col-sm"><br></br></div>
                    </div>
                </div>
                <div class="col-6">
                    <div>
                        <div class="col text-center"><h2> Sign Up</h2></div><br></br>
                        <div class="col text-center"><label>Username: <input type="text"/> </label></div><br></br>
                        <div class="col text-center"><label>Email: <input type="text"/> </label></div><br></br>
                        <div class="col text-center"><label>Password: <input type="text"/> </label></div><br></br>
                   
                        <div class="col text-center"><p>I have read the Synapse Community Guidelines. I am included in the target audience for this community and agree to adhere to the guidelines.</p></div>
                        <div class="col text-center"><label>Electronic Signature: <input type="text"/></label></div><br></br>
                        <div class="col text-center"><button class="custom-button"> Join the Community! </button></div>
                    </div>
                </div>
                <div class="col-1"></div>
            </div>

            <div class="hide-on-desktop">
                <div class="col-sm"><br></br></div>
                <div class="col-sm"><img src={logo} class="img-fluid" alt='Synapse Logo'></img> </div>
                <div class="col-sm"><br></br></div>
            </div>


        </div>
    </div>
    );

}

export default Signup;