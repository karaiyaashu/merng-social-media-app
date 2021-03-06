import { BrowserRouter as Router, Route } from 'react-router-dom'
import React from 'react';
import { Container, Header } from 'semantic-ui-react'


import 'semantic-ui-css/semantic.min.css'

import './App.css';


import MenuBar from './components/MenuBar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'



function App() {
  return (
    <Router>
      <Container>
        <MenuBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Container>


    </Router>
  );
}

export default App;
