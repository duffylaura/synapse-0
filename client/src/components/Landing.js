import React from "react";
import logo from '../assets/logo-grey-banner.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function Landing() {
    return (
        <div>
        <img src={logo} class="img-fluid" alt='Synapse Logo'></img>
        </div>
    );
}

export default Landing;