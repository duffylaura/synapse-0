import React from "react";
import logo from '../assets/logo-grey-banner.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

function Landing() {
    return (
        <div class="container">
            <div class="row"> <br></br> <br></br></div>
            <div class="row align-items-center">
                <div class="col-sm"> </div>
                <div class="col-sm">
                    <img src={logo} class="img-fluid" alt='Synapse Logo'></img>
                    <div>
                        <div class="col text-center"> <button class="custom-button"> Login </button> </div> <br></br>
                        <div class="col text-center"><button class="custom-button"> Sign Up </button></div> <br></br>
                        <div class="col text-center"><button class="custom-button"> About </button></div> <br></br>
                    </div>
                </div>
                <div class="col-sm"> </div>
            </div>
        </div>
    );

}

export default Landing;