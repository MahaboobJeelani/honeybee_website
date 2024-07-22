import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../Pages/Products'
import Contactus from '../Pages/Contactus'
import Navbar from './Navbar'
import SingleProduct from '../Pages/SingleProduct'
import Buynow from '../Pages/Buynow'

const Subroutes = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/products' element={<Products />} />
                <Route path='/contact' element={<Contactus />} />
                <Route path='/product/:id' element={<SingleProduct />} />
                <Route path='/buyproduct' element={<Buynow />} />
            </Routes>
        </div>
    )
}

export default Subroutes
