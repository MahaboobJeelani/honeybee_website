import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './Products'

const Subroutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/products' element={<Products />} />
            </Routes>
        </div>
    )
}

export default Subroutes
