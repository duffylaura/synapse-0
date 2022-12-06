import React from 'react'
import profilePlaceholder from '../assets/profile-placeholder.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

class ProfileForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Enter text here...'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Proifle was updated ' + this.state.value);
      event.preventDefault();
    }}


function Profile() {
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
                        <div class="col text-center"><h2> @Username</h2></div><br></br>
                        <div class="col text-center"><input type="text"/></div><br></br>
                        <div class="col text-center"><input type="text"/></div><br></br>
                        <div class="col text-center"><input type="text"/></div><br></br>

                        <form onSubmit={this.handleSubmit}>
                            <label> How do you define yourself? <textarea value={this.state.value} onChange={this.handleChange} /> </label>
                            <label> Details to share... <textarea value={this.state.value} onChange={this.handleChange} /> </label>
                            <input type="submit" value="Submit" />
                        </form>
                
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

export default Profile;