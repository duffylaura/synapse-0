import logo from '../assets/logo-grey-banner.png';
import Footer from '../components/Footer'
import Nav from '../components/NavBar';


function About() {
    return (
        <div class="container">
            <div class="row"> <br></br> <br></br></div>
            <div class="row align-items-center">
                <div class="col-sm"> <Nav /></div>
                <div class="col-sm">
                    <img src={logo} class="align-center" alt='Synapse Logo' width='700px'></img>
                    <div>

                        <div className='text-center'><p>Synapse is a forum for women in tech. We wanted to create a place where meaningful connections are made and resources are shared, to build a <strong>community</strong> among its members.
                            We are all women who are breaking into the tech world with various professional experiences. While we have had the opportunity to <strong>connect</strong> through this bootcamp, we wanted to create a resource where women from all backgrounds and in various locations can interact and strengthen their <strong>network</strong>!</p></div>
                    </div>
                </div>
                <div><p className='text-center'>Click on the link below to learn more about this application and its contributors!</p></div>
                <div class="col-sm"> </div>
            </div>
            <Footer />
        </div>
        
    );

}

export default About;