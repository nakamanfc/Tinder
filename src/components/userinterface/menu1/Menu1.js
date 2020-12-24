import React, {useState} from 'react'
import '../menu/Menu.css'
import NavbarMenu from '../NavbarMenu';
import Profile from './Profile';
import Notification from './Notification';

function Menu1({changeProfile}) {
    const [profile, setProfile] = useState(true)
    const [notification, setNotification] = useState(false)

    const clickToProfile = () =>{
        setProfile(true);
        setNotification(false);
    }
    const clickToNotification = () =>{
        setProfile(false);
        setNotification(true);
    }

    return (
    <div className='menu'>
        <NavbarMenu profile={clickToProfile} notification={clickToNotification}/>
        <div className={profile ? 'active__profile' : 'nonactive__profile'}>
            <Profile changeProfile={changeProfile}/>
        </div>
        <div className={notification ? 'active__notification' : 'nonactive__notification'}>
            <Notification/>
        </div>
    </div>
    )
}

export default Menu1