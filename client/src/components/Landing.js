import React from "react";
import logo from '../assets/logo-grey-banner.png';

const styles = {
    nav: {
        background: 'pink',
    },
    header: {
        background: 'blue',
    },
    section: {
        background: 'yellow',
    }, 

}

function Landing() {
    return (
        <div>
        <img src={logo} alt='Synapse Logo'></img>
        </div>
    );
}

export default Landing;