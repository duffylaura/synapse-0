import React from 'react'; 
import Nav from '../components/NavBar';

//import { Navigate, useParams } from 'react-router-dom';
//import { useQuery } from '@apollo/client';
//import Auth from '../utils/auth';

//import { QUERY_USERS, QUERY_USER } from '../utils/queries';


import profilePlaceholder from '../assets/profile-placeholder.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import logo from '../assets/logo-grey-banner.png';
import { Link } from 'react-router-dom';

const Profile = () => {
    // const { username: userParam } = useParams();
  
    // // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
    // const { loading, data } = useQuery(
    //   userParam ? QUERY_USERS : QUERY_USER,
    //   {
    //     variables: { username: userParam },
    //   }
    // );
      // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
  // const user = data?.user || data?.users|| {};

//   // Use React Router's `<Navigate />` component to redirect to personal profile page if username is yours
//   if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
//     return <Navigate to="/profile" />;
//   }

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!user?.name) {
//     return (
//       <h4>
//         You need to be logged in to see your profile page. Use the navigation
//         links above to sign up or log in!
//       </h4>
//     );
//   }

  // class ProfileForm extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       value: 'Enter text here...'
  //     };
  
  //     this.handleChange = this.handleChange.bind(this);
  //     this.handleSubmit = this.handleSubmit.bind(this);
  //   }
  
  //   handleChange(event) {
  //     this.setState({value: event.target.value});
  //   }
  
  //   handleSubmit(event) {
  //     alert('Proifle was updated ' + this.state.value);
  //     event.preventDefault();
  //   }}



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
                        <div class="col-sm"><img src={profilePlaceholder} class="img-fluid" alt='Profile'></img> </div>
                        <div class="col-sm"><br></br></div>
                    </div>
                </div>
                <div class="col-6">
                    <div>
                        <div class="col text-center"><p> How do you define yourself? </p><input type="text"/></div><br></br>
                        <div class="col text-center"><p> Details to share... </p><input type="text"/></div><br></br>
                        <div class="col text-center"><p> Link to your LinkedIn: </p><input type="text"/></div><br></br>
                        <div class="col text-center"><p> Link to your Github: </p><input type="text"/></div><br></br>

                        {/* <form onSubmit={this.handleSubmit}>
                            <label> How do you define yourself? <textarea value={this.state.value} onChange={this.handleChange} /> </label>
                            <label> Details to share... <textarea value={this.state.value} onChange={this.handleChange} /> </label>
                            <label> Link to your LinkedIn: <textarea value={this.state.value} onChange={this.handleChange}/></label>
                            <input type="submit" value="Submit" />
                        </form> */}

                        <Link to="/Network">
                        <div class="col text-center"><button class="custom-button"> Link to Groups </button></div> <br></br>
                        </Link>
                
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

export default Profile;