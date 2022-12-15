import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import Github from '../../assets/github.png'

import ListGroup from 'react-bootstrap/ListGroup';

function Footer(){
    return(
        <footer className='footer m-auto'>
     <ListGroup horizontal>
      <ListGroup.Item><a href="https://github.com/duffylaura/project-3" target="_blank" rel="noreferrer"><img src={Github} alt="github icon" height="25px"></img></a></ListGroup.Item>
    </ListGroup>
      </footer>
      
    )
};

export default Footer;