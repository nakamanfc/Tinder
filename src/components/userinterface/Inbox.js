import { Avatar } from '@material-ui/core'
import React from 'react'
import './Inbox.css'


function Inbox({name, profilePic, message, timestammp}) {
    return (
        <div className='boxChat'>
            <Avatar className='boxChat__image' alt={name} src={profilePic}/>
            <div className='boxChat__details'>
                <h2>{name}</h2>
                <p>{message}</p>
            </div>
            <p className='boxChat__timestamp'>{timestammp}</p>
        </div>
    )
}

export default Inbox
