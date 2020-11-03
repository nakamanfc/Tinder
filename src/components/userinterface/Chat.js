import React from 'react'
import Inbox from './Inbox'
import './Chat.css'

function Chat() {
    return (
        <div className='inBox'>
            <Inbox
                name="Hải Yến"
                profilePic="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/67811245_2378785795734703_7959774147062530048_o.jpg?_nc_cat=110&_nc_sid=174925&_nc_ohc=ZQUkH_IBGiIAX8g1q71&_nc_ht=scontent.fhan3-1.fna&oh=fd0c075d702a3e4f5da2f49ecbdde1f1&oe=5FB0C777"
                message="Hi anh Hoàng"
                timestammp="1 minutes ago"
            />
            <Inbox
                name="Cẩm Nhung"
                profilePic="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-9/93679806_540891779906309_2397043989749432320_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=exMUqrr0RKcAX_Ha4ZT&_nc_ht=scontent.fhan4-1.fna&oh=6980396a667b8209c10de2aed8142180&oe=5FAB9C21"
                message="Hoàng ơi! Cậu làm đồ họa máy tính đến đâu rồi ?"
                timestammp="35 minutes ago"
            />
        </div>
    )
}

export default Chat
