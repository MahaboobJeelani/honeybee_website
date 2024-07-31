import React from 'react'
import AdminMenu from './AdminMenu';
import { Route, Routes } from 'react-router-dom';
// import CreateProduct from './CreateProduct';


const AdminSubroutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<AdminMenu />} />
                {/* <Route path='/createproduct' element={<CreateProduct />} /> */}
            </Routes>
        </div>
    )
}

export default AdminSubroutes
