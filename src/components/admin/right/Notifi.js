import { Avatar, Button, IconButton } from '@material-ui/core';
import React, {useState} from 'react';
import { blue, yellow } from '@material-ui/core/colors';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import './Notifi.css';


function Notifi({name, profilePic}){
    return (
        <div className='CardNotifi'>
            <div className='CardNotifi__info'>
                <Avatar className='CardNotifi__image' alt={name} src={profilePic}/>
                <div className='CardNotifi__details'>
                    <p>{name} đã gửi cho bạn một thông báo</p>
                </div>
            </div>
            <VolumeUpIcon style={{color: blue[500]}}/>
        </div>
    )
}

export default Notifi