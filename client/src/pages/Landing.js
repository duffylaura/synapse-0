import React from "react";
import logo from '../assets/logo-grey-banner.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { Link } from 'react-router-dom';
import Nav from '../components/NavBar';

function Landing() {
    return (
        <div class="container">
            <div class="row"> <br></br> <br></br></div>
            <div class="row align-items-center">
                <div class="col-sm"></div>
                <div class="col-sm">
                    <img src={logo} class="img-fluid" alt='Synapse Logo'></img>
                    <div>
                        <Link to="/login">
                            <div class="col text-center"> <button class="custom-button"> Login </button> </div> <br></br>
                        </Link>
                        <Link to="/signup">
                        <div class="col text-center"><button class="custom-button"> Sign Up </button></div> <br></br>
                        </Link>
                        <Link to='/about'>
                        <div class="col text-center"><button class="custom-button"> About </button></div> <br></br>
                        </Link>
                    </div>
                </div>
                <div class="col-sm"> </div>
            </div>
        </div>
    );

}

export default Landing;