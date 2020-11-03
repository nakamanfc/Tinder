import React from 'react'
import Chat from './Chat'
import './Menu.css'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ScreenChat from './ScreenChat';
import UserInterfaceHeader from './UserInterfaceHeader';
import NavbarMenu from './NavbarMenu';
import Match from './Match';
import Scrollbars from 'react-custom-scrollbars';
import Profile from './Profile';

function Menu() {
    return (
    <div className='menu'>
    <Router>
        <NavbarMenu/>
        <Switch>
                <Route path='/user/message' exact component={ScreenChat}/>
                <Route path='/user/profile' exact component={Profile}/>
                <Route path='/user' exact component={Match}/>
        </Switch>
    </Router>
    </div>
    )
}

export default Menu