import React, { useState, useMemo } from 'react'
import Navbar from '../Navbar'
import '../left/MenuAdmin.css'
import Notifi from './Notifi'

function MenuNotifi() {
    const [data, setData] = useState([
        {
            id: '1',
            name: 'Hoàng',
            profilePic: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/95569662_1105829716451378_5436510620490924032_o.jpg?_nc_cat=111&ccb=2&_nc_sid=174925&_nc_ohc=Y3n__0yOQ8sAX9qGDJE&_nc_ht=scontent.fhan3-1.fna&oh=59e6a770d62a6c9eb5a4b7a5a88c729a&oe=5FEC4409',
        },
        {
            id: '2',
            name: 'Linh Ka',
            profilePic: 'https://storage.oxii.vn/thumbnail/OXII-720-2019-10-29/linh-ka-3.jpg',
        }
    ])

    return (
        <div className='menu__admin'>
            <Navbar />
            <div className='list__notifi'>
                {data.map((db) => (
                    <Notifi
                    name={db.name}
                    profilePic={db.profilePic}
                    />
                ))}
            </div>
        </div>
    )
}

export default MenuNotifi