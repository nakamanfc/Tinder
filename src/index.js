import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import TinderCards from './components/userinterface/TinderCards'
import UserInterfaceHeader from './components/userinterface/UserInterfaceHeader';
import User from './components/pages/User';
import Menu from './components/userinterface/Menu'
import ScreenChat from './components/userinterface/ScreenChat';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
