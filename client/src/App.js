import React from "react";
// import Helmet from "react-helmet";
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

import NoMatch from './pages/NoMatch';
import Conversation from './pages/Conversation';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>

    <ApolloProvider client={client}>
      <Router>
        <div>
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
