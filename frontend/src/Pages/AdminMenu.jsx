import React, { useState } from 'react'
import '../Cssfile/Adminmenu.css'
import AdminDashboard from '../Pages/AdminDashboard'

const AdminMenu = () => {
    let [AdminMenu, setAdminMenu] = useState('dashboard')

    const menu = () => {
        switch (AdminMenu) {
            case 'dashboard':
                return (
                    <div>
                        <AdminDashboard />
                    </div>
                )

            case 'projects':
                return (
                    <div>
                        <p>This is projects page</p>
                    </div>
                )
            default:
                return null
        }
    }
    return (
        <div className='adminmenu'>
            <button onClick={() => { setAdminMenu("projects") }}>dashboard</button>
            <div>
                {menu()}
            </div>
        </div>
    )
}

export default AdminMenu
