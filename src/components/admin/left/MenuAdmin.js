import { Report } from '@material-ui/icons'
import React, {useState} from 'react'
import Navbar from '../Navbar'
import './MenuAdmin.css'
import Reported from './Reported'
import UserList from './UserList'

function MenuAdmin() {
    const [list, setList] = useState(true);
    const clickList = () =>{
        setList(true);
    }
    const clickReport = () =>{
        setList(false);
    }
    return (
        <div className='menu__admin'>
            <Navbar active='0' List={clickList} Report={clickReport}/>
            {list?(<UserList/>):(<Reported/>)}
        </div>
    )
}

export default MenuAdmin