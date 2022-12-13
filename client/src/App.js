import React from "react";
import Helmet from "react-helmet";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   // createHttpLink,
// } from '@apollo/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import { setContext } from '@apollo/client/link/context';

import Landing from './pages/Landing';
import Login from './pages/Login.js';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Group from './pages/Group';
import Network from './pages/Network';
import Nav from './components/NavBar/index';
import NoMatch from './pages/NoMatch';
import Conversation from './pages/Conversation';



// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

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
    <ApolloProvider client={client}>
      <Router>
        <div>
        <Nav />
        <Routes>
        <Route 
                path="/" 
                element={<Landing />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route 
                path="/profile" 
                element={<Profile />} 
              />
              <Route 
                path="/group" 
                element={<Group />} 
              />
              <Route 
                path="/conversation" 
                element={<Conversation />} 
              />
              <Route 
                // path="/group/:id"
                path="/network" 
                element={<Network />} 
              />
              <Route 
                path="*" 
                element={<NoMatch />} 
              />
        </Routes>
        </div>
      </Router>
    </ApolloProvider>
    

    </>
  )
}

export default App;
