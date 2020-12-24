import React,{useState} from 'react'
import CardChat from './CardChat'

function Message() {
    const [Data, setData] = useState([
        {
            name:'Lisa',
            profilePic: 'https://headlineplanet.com/home/wp-content/uploads/2019/07/Lisa-Instagram-e1562252580131.jpg',
        },
        {
            name:'Lisa BlackPink',
            profilePic:'https://kenh14cdn.com/2019/7/6/s11-15624058651631006795186.jpg',
        }
    ])
    return (
        <div>
            {Data.map((db)=>(
                <CardChat name={db.name} profilePic={db.profilePic}/>
            ))}
        </div>
    )
}

export default Message
