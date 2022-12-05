import React from "react";
import Login from './components/Login.js';
import Helmet from "react-helmet";

function App() {
  return (
    <>
    <Helmet>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="Laura Duffy, Mai Moua, Morgan Kelly, Rebecca Overton" />
    <title>Synapse</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
    <link rel="stylesheet" href='./index.css' />
    </Helmet>

    < Login />

    </>
  )
}

export default App;
