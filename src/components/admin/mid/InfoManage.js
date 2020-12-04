import React from 'react'
import BoxChat from './BoxChat'
import './InfoManage.css'
import InfoUser from './InfoUser'
import Message from './Message'

function InfoManage() {
    return (
        // <div className='info__screen'>
        //     <InfoUser/>
        // </div>
        // <div className='box__chat'>
        //     <BoxChat name='Lisa'/>
        // </div>
        <div className='list__chat'>
            <Message/>
        </div>
    )
}

export default InfoManage
