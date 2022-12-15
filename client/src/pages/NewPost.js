

import React from 'react'
// import { Navigate, useParams } from 'react-router-dom';
import profilePlaceholder from '../assets/profile-placeholder.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import logo from '../assets/logo-grey-banner.png';
import qqg from '../assets/qqg.jpeg';
import ucb from '../assets/ucb.jpeg';
// import { Link } from 'react-router-dom';
import GroupForm from '../components/GroupForm/index';
// import {QUERY_USER} from '../utils/queries';
import Nav from '../components/NavBar';

function Group() {
    // const { username: userParam } = useParams();

    // // const { loading, data } = useQuery(userParam ? QUERY_USER : {
    // // variables: { username: userParam },
    // // });

    // // const user = data?.me || data?.user || {};

    // if (loading) {
    //     return <div><p>Loading...</p></div>;
    //   }
    
    //   if (!user?.username) {
    //     return (
    //       <h4>
    //         You need to be logged in to see this. Use the navigation links above to
    //         sign up or log in!
    //       </h4>
    //     );
    //   }

    return (
        <div class="container">
            <Nav />
        <div class="font">
            <div class="row">
                <div class="row"><br></br><br></br></div>
                <div class="col-1"></div>
                <div class="col-3"> 
                    <div class="hide-on-phone">
                        <div class="col-sm"><br></br></div>
                        <div class="col-sm"><img src={profilePlaceholder} class="img-fluid" alt='Profile Image'></img> </div>
                        <div class="col-sm"><br></br></div>
                    </div>
                </div>
                <div class="col-8">
                    <div>
                        <div class="col text-center">
                       
                        <div
                            className="col-12 col-md-10 mb-3 p-3"
                            style={{ border: '1px dotted #1a1a1a' }}
                        >
                            <GroupForm />
                        <p> This is where we can import list of groups</p>
                        <p> and the number of members in each group. </p>
                        </div>
                    

                        </div>
                        </div>
                        
                    
                    </div>
                    </div>

                </div>
            
            <div class="hide-on-desktop">
                <div class="col-sm"><br></br></div>
                <div class="col-sm"><img src={logo} class="img-fluid" alt='Synapse Logo'></img> </div>
                <div class="col-sm"><br></br></div>
            </div>

        </div>
  
 
    );

}

export default Group;