import React,{useState, useEffect} from 'react'
import UserInterfaceHeader from '../userinterface/UserInterfaceHeader'
import TinderCards from '../userinterface/TinderCards'
import Menu from '../userinterface/Menu'
import './User.css'
import queryString from 'query-string';
import ScreenChat from '../userinterface/ScreenChat'
import Menu1 from '../userinterface/Menu1'
import FriendProfile from '../userinterface/FriendProfile'

function User({location}) {
    const[profile, setProfile] = useState(false)
    const[name, setName] = useState('')
    const[status, setStatus] = useState('')
    const [screenChat, setScreenChat] = useState(false)
    const {id} = queryString.parse(location.search);


    const activeProfile = () =>{
        setProfile(true);
    }
    const unactiveProfile = () =>{
        setProfile(false);
    }
    const activeScreenChat = (a,b) =>{
        setName(a)
        setStatus(b)
        setScreenChat(true);
    }
    const unActiveScreenChat = () =>{
        setScreenChat(false);
    }

    useEffect(() => {
        console.log(location);
        console.log(id);
    });
    return(
        <>
            {profile&&<FriendProfile unProfile={unactiveProfile}/>}
            <UserInterfaceHeader/>
            <div className='userDisplay'>
                <div className='Menu'>
                    <Menu activeScreenChat = {activeScreenChat}/>
                </div>
                <div className='swipeDisplay'>
                    {screenChat?(<ScreenChat unActiveScreenChat={unActiveScreenChat} name={name} status={status}/>):(<TinderCards profile={activeProfile}/>)}
                </div>
                <div className='Menu'>
                    <Menu1/>
                </div>
            </div>
        </>
    )
}

export default User;