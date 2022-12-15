// import React from "react";
// // import Auth from "../../utils/auth";
// // import { Link } from "react-router-dom";

// function Nav() {
//     return (
//         <h1> Nav Test</h1>
//     )
// };

// export default Nav;

import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        
        <div className="container">
            <div className = "row">

                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#"></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link to="/group">
                                <div class="col text-center"> <button class="custom-nav-button"> My Group </button> </div> <br></br>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/">
                                <div class="col text-center"> <button class="custom-nav-button">Create Group </button> </div> <br></br>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/network">
                                <div class="col text-center"> <button class="custom-nav-button"> My Network </button> </div> <br></br>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/conversation">
                                <div class="col text-center"> <button class="custom-nav-button"> Conversations </button> </div> <br></br>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/jobs">
                                <div class="col text-center"> <button class="custom-nav-button"> Job Hunt </button> </div> <br></br>
                            </Link>
                        </li>
                        </ul>
                    </div>
                </nav>

               </div>
        </div>


        
    )
};

export default Nav;
