import React from 'react'
import profilePlaceholder from '../assets/profile-placeholder.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import logo from '../assets/logo-grey-banner.png';
// import { Link } from 'react-router-dom';
import NewGroupForm from './components/GroupForm/index';

function Group() {
    return (
        <div class="container">
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
                        <div class="col text-center">
                            <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
                            {userParam ? `${user.username}'s` : ''} Groups
                            </h2>
                        </div><br></br>
                    </div>
                    <div> 

                    {!userParam && (
                    <div
                        className="col-12 col-md-10 mb-3 p-3"
                        style={{ border: '1px dotted #1a1a1a' }}
                    >
                        <NewGroupForm />
                    </div>
                    )}


                    <p> This is where we can import list of groups</p>
                    <p> and the number of members in each group. </p>

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

export default Group;