//need to query the users groups 
//need to query the groups users 

//need to query the users groups 

import React from 'react'
import Nav from '../components/NavBar';
import profilePlaceholder from '../assets/profile-placeholder.png';
import NetworkImage from '../assets/network.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import logo from '../assets/logo-grey-banner.png';

function Network() {
    return (
        <div class="container">
                        <Nav />
        <div class="font">
            <div class="row">
                <div class="row"><br></br><br></br></div>
                <div class="col-1"></div>
                <div class="col-4"> 
                    <div class="hide-on-phone">
                        <div class="col-sm"><br></br></div>
                        <div class="col-sm"><img src={profilePlaceholder} class="img-fluid" alt='Profile Image'></img> </div>
                        <div class="col-sm"><br></br></div>
                    </div>
                </div>
                <div class="col-6">
                    <div>
                        <div class="col text-center"><h2> @Afia Blay</h2></div><br></br>
                    </div>
                    <div> 
                    <img src={NetworkImage} class="img-fluid" alt='Network'></img>
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

export default Network;