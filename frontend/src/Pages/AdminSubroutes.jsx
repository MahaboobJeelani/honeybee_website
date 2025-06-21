import React from 'react'
import AdminMenu from './AdminMenu';
import { Route, Routes } from 'react-router-dom';


const AdminSubroutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<AdminMenu />} />
            </Routes>
        </div>
    )
}

export default AdminSubroutes
