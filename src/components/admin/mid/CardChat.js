import { Avatar } from '@material-ui/core'
import React, {useState} from 'react'
import './CardChat.css'


function CardChat({name, profilePic, activeScreenChat}){
    // const click = () =>{
    //     activeScreenChat(name,timestammp)
    // }
    return (
        <div className='boxChat'>
            <Avatar className='boxChat__image' alt={name} src={profilePic}/>
            <div className='boxChat__details'>
                <h2>{name}</h2>
            </div>
        </div>
    )
}

export default CardChat
