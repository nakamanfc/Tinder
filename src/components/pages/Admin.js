import React from 'react'
import MenuAdmin from '../admin/left/MenuAdmin'
import InfoManage from '../admin/mid/InfoManage'
import MenuNotifi from '../admin/right/MenuNotifi'
import './Admin.css'

function Admin() {
    return (
        <>
            <div class='admin__interface'>
                <MenuAdmin/>
                <InfoManage/>
                <MenuNotifi/>
            </div>
        </>
    )
}

export default Admin
