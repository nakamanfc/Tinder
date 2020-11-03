import React,{useState, useEffect} from 'react'
import UserInterfaceHeader from '../userinterface/UserInterfaceHeader'
import TinderCards from '../userinterface/TinderCards'
import Menu from '../userinterface/Menu'
import './User.css'
import Chat from '../userinterface/Chat'

function User() {
    return(
        <>
            <UserInterfaceHeader/>
            <div className='userDisplay'>
                <Menu/>
                <div className='swipeDisplay'>
                    <TinderCards/>
                </div>
            </div>
        </>
    )
}

export default User;