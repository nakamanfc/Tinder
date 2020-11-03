import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Footer from './components/Footer';
import NavbarMenu from './components/userinterface/NavbarMenu';
import User from './components/pages/User';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/user' exact component={User}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
