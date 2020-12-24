import React, {useState} from 'react'
import CardUser from './CardUser'

function Reported() {
    const [Data, setData] = useState([
        {
            name:'Lisa',
            profilePic: 'https://headlineplanet.com/home/wp-content/uploads/2019/07/Lisa-Instagram-e1562252580131.jpg',
            info: 'Hello',
        },
        {
            name:'Lisa BlackPink',
            profilePic:'https://kenh14cdn.com/2019/7/6/s11-15624058651631006795186.jpg',
            info:'leu leu leu leu',
        }
    ])
    return (
        <div>
            {Data.map((db) =>(
                <CardUser name={db.name} profilePic={db.profilePic} info={db.info} active={1}/>
            ))}
        </div>
    )
}

export default Reported