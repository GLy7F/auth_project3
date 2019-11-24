import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import NaveBar from './components/NavBar/NaveBar'
import { Container } from 'semantic-ui-react';
import {   Route ,  BrowserRouter as Router } from 'react-router-dom'
import Landing from './components/container/Landing'
import Login from './components/container/Login'
import Register from './components/container/Register'
import Profile from './components/container/Profile'


function App() {
  return (
    // Router
    <Router>
    <div className="App">
      <NaveBar />
        <Route exact path='/' component={Landing} />
        <Container  className="main">
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/profile' component={Profile} />
      </Container>
    </div>
    </Router>
  );
}

export default App;
