import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../Pages/Products'
import Contactus from '../Pages/Contactus'
import Navbar from './Navbar'
import SingleProduct from '../Pages/SingleProduct'
import Buynow from '../Pages/Buynow'
import Profile from '../Pages/Profile'
import Errorpage from './Errorpage'

const Subroutes = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/products' element={<Products />} />
                <Route path='/contact' element={<Contactus />} />
                <Route path='/product/:id' element={<SingleProduct />} />
                <Route path='/buyproduct' element={<Buynow />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/*' element={<Errorpage />} />

            </Routes>
        </div>
    )
}

export default Subroutes
