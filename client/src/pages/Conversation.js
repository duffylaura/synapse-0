import React from 'react';
import { Link } from 'react-router-dom';

// import { Navigate, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import Auth from '../utils/auth';

// import { QUERY_USERS, QUERY_USER } from '../utils/queries';


import profilePlaceholder from '../assets/profile-placeholder.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import logo from '../assets/logo-grey-banner.png';

// const Conversation = () => {
//     const { username: userParam } = useParams();

//     // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
//     const { loading, data } = useQuery(
//       userParam ? QUERY_USERS : QUERY_USER,
//       {
//         variables: { username: userParam },
//       }
//     );
//       // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
//   const user = data?.user || data?.users|| {};

//   // Use React Router's `<Navigate />` component to redirect to personal profile page if username is yours
//   if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
//     return <Navigate to="/conversation" />;
//   }

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!user?.name) {
//     return (
//       <h4>
//         You need to be logged in to participate in a conversation. Use the navigation
//         links above to sign up or log in!
//       </h4>
//     );
//   }

function Conversation() {

    return (
        <div class="container">
            <div class="font">
                <div class="row">
                    <div class="row"><br></br><br></br></div>
                    <div class="col-1"></div>
                    <div class="col-4">
                        <div class="hide-on-phone">
                            <div class="col-sm"><br></br></div>
                            <div class="col-sm"><img src={profilePlaceholder} class="img-fluid" alt='Profile'></img> </div>
                            <div class="col-sm"><br></br></div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div>
                            <div class="align-right"><Link to="/new-post">
                                <div class="col text-center"> <button class="custom-button"> Create New Post </button> </div> <br></br>
                            </Link></div>
                            <div class="col text-center"><h2> Conversation Page</h2></div><br></br>
                        </div>
                        <div>
                            <p> This is where we see the ongoing conversations</p>
                            <p> and the associated comments </p>
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

};

export default Conversation;