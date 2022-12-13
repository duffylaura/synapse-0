import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

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

function NewPost() {

    return (
        <div className="container">
            <div className="font">
                <div className="row">
                    <div className="row"><br></br><br></br></div>
                    <div className="col-1"></div>
                    <div className="col-4">
                        <div className="hide-on-phone">
                            <div className="col-sm"><br></br></div>
                            <div className="col-sm"><img src={profilePlaceholder} className="img-fluid" alt='Profile'></img> </div>
                            <div className="col-sm"><br></br></div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div>
                            <div className="col text-center"><h2> Create a New Post</h2></div><br></br>
                        </div>
                        <div>
                            {/* associated comments are appended, should be an input area with button to append a new comment */}
                            <div>
                                <textarea></textarea>
                                <div className="col text-center"> <button className="custom-button"> Create</button> </div> <br></br>
                            </div>
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

};

export default NewPost;