import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../Pages/Products'
import Contactus from '../Pages/Contactus'
import Navbar from './Navbar'

const Subroutes = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/products' element={<Products />} />
                <Route path='/contact' element={<Contactus />} />
            </Routes>
        </div>
    )
}

export default Subroutes
