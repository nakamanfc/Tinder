import React from 'react';
import {Link} from 'react-router-dom';
import './NavbarMenu.css';

function NavbarMenu() {
    return (
        <div>
            <nav className='menuNav'>
                <Link to='/user/profile' className='menuNav__item'>Profile</Link>
                <Link to='/user' className='menuNav__item'>Match</Link>
                <Link to='/user/message' className='menuNav__item'>Message</Link>
                <div class='animation'/>
            </nav>
        </div>
    )
}

export default NavbarMenu