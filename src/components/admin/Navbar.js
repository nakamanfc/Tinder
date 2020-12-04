import React from 'react';
import './Navbar.css';

function Navbar({active, List, Report}) {
    return (
        <div>
            {active?(<nav className='menuNav'>
                <div className='menuNav__item' onClick={List}>UserList</div>
                <div className='menuNav__item' onClick={Report}>Reported</div>
            </nav>):(<nav className='menuNav11'>
                <div className='menuNav__item11'>Notification</div>
            </nav>)}
        </div>
    )
}

export default Navbar