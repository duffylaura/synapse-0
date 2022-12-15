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
                    <div>
                        <div class="col text-center">
                       <h2>@Alfia Bay</h2>
                        {/* <div
                            className="col-12 col-md-10 mb-3 p-3"
                            style={{ border: '1px dotted #1a1a1a' }}
                        >
                            <GroupForm />
                        <p> This is where we can import list of groups</p>
                        <p> and the number of members in each group. </p>
                        </div> */}
                    

                        </div>
                        </div>
                        </div>
                <div class="row row-cols-1 row-cols-md-3">
                        <div class="col mb-4 card" >
                            <img src={qqg} class="card-img-top" alt={profilePlaceholder}/> 
                            <div class="card-body">
                                <h5 class="card-title">Queer Quills Group</h5>
                                <p class="card-text">Writing to make a CHANGE!</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Afia Bay</li>
                                <li class="list-group-item">Arike Ogunbowale</li>
                                <li class="list-group-item">Satou Sabally</li>
                                <li class="list-group-item">Katie McCabe</li>
                                <li class="list-group-item">Allisha Gray</li>
                                <li class="list-group-item">Denise O'Sullivan</li>
                                <li class="list-group-item">Dijonai Carrington</li>
                                <li class="list-group-item">Jonquel Jones</li>
                                <li class="list-group-item">Brionna Jones</li>
                                <li class="list-group-item">Niamh Fahey</li>
                                <li class="list-group-item">Áine O'Gorman</li>
                            </ul>
                            <div class="card-body">
                                <a href="/" class="card-link">Card link</a>
                                <a href="/" class="card-link">Another link</a>
                            </div>
                        </div>
                        <div class="col mb-4 card" >
                            <img src={ucb} class="card-img-top" alt={profilePlaceholder}/> 
                            <div class="card-body">
                                <h5 class="card-title">Berkely Coding Bootcamp</h5>
                                <p class="card-text">"Farley, Asher, and Bacon!" said by the best Professor ever!</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Mai the Magical</li>
                                <li class="list-group-item">Charlie Rockstar</li>
                                <li class="list-group-item">Hari Hotstuff</li>
                                <li class="list-group-item">Dearica Hamby</li>
                                <li class="list-group-item">Rebecca Lucy</li>
                                <li class="list-group-item">Afia Blay</li>
                            </ul>
                            <div class="card-body">
                                <a href="/" class="card-link">Card link</a>
                                <a href="/" class="card-link">Another link</a>
                            </div>
                        </div>
                        <div class="col mb-4 card" >
                            <img src={logo} class="card-img-top" alt={profilePlaceholder}/> 
                            <div class="card-body">
                                <h5 class="card-title">Tester</h5>
                                <p class="card-text"></p>
                            </div>
                            {/* <ul class="list-group list-group-flush">
                                <li class="list-group-item">An item</li>
                                <li class="list-group-item">A second item</li>
                                <li class="list-group-item">A third item</li>
                            </ul>
                            <div class="card-body">
                                <a href="/" class="card-link">Card link</a>
                                <a href="/" class="card-link">Another link</a>
                            </div> */}
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