import { Avatar, Button, IconButton } from '@material-ui/core';
import React, {useState} from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import StarRateIcon from "@material-ui/icons/StarRate";
import ForumIcon from '@material-ui/icons/Forum';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import './CardUser.css';


function CardUser({name, profilePic, info, active}){
    return (
        <div className='cardFriend'>
            <div className='cardFriend__info'>
                <Avatar className='cardFriend__image' alt={name} src={profilePic}/>
                <div className='cardFriend__details'>
                    <h2>{name}</h2>
                    <p>{info}</p>
                </div>
            </div>
            <div className='cardFriend__button'>
                {active?(
                    <IconButton className='cardFriend__superStar'>
                        <MailOutlineIcon/>
                    </IconButton>
                ):(
                    <IconButton className='cardFriend__superLike'>
                        <MoreHorizIcon/>
                    </IconButton>
                )}
            </div>
        </div>
    )
}

export default CardUser