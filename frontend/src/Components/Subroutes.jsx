import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../Pages/Products'
import Contactus from '../Pages/Contactus'
import Navbar from './Navbar'
import SingleProduct from '../Pages/SingleProduct'
import Buynow from '../Pages/Buynow'
import Profile from '../Pages/Profile'
import Errorpage from './Errorpage'
import Userorder from '../Pages/Userorder'
import Placedorder from '../Pages/Placedorder'
// import { jwtDecode } from 'jwt-decode';
// import { useAuth, AuthProvider } from '../Context/AuthContext';



// const accessToken = localStorage.getItem('token')
// let jwtDecodeToken;
// if (accessToken) {
//     jwtDecodeToken = jwtDecode(accessToken)
// }

// const role = jwtDecodeToken.findUser.role

// const PrivateRoute = ({ children }) => {
//     const { isAuthenticated } = useAuth();

//     if (isAuthenticated) {
//         return children
//     } else {
//         if (role === 'user') {
//             <Navigate to='/userlogin' />
//         }
//         if (role === 'admin') {
//             <Navigate to='/adminlogin' />
//         }
//     }
// }

const Subroutes = () => {
    return (
        <div >
            {/* <AuthProvider> */}
            <Navbar />
            <Routes>
                <Route path='/products' element={<Products />} />
                <Route path='/contact' element={<Contactus />} />
                <Route path='/product/:id' element={<SingleProduct />} />
                <Route path='/buyproduct' element={<Buynow />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/*' element={<Errorpage />} />
                <Route path='/order' element={<Userorder />} />
                <Route path='/orderitems' element={<Placedorder />} />
            </Routes>
            {/* </AuthProvider> */}
        </div>
    )
}

export default Subroutes
