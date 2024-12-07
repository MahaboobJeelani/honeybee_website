import React, { useState } from 'react'
import '../Cssfile/Adminmenu.css'
import AdminDashboard from '../Pages/AdminDashboard'
import { Link, useNavigate } from 'react-router-dom'
import { GiDrippingHoney } from 'react-icons/gi'
import { TiHome } from "react-icons/ti";
import { HiCurrencyDollar } from "react-icons/hi2";
import { BsCartCheckFill } from "react-icons/bs";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { AiFillProduct } from "react-icons/ai";
import AdminProducts from './AdminProducts'
import Orders from './Orders'
import Payment from './Payment'

const AdminMenu = () => {
    const [adminMenu, setAdminMenu] = useState('dashboard');
    const [logout, setLogout] = useState()

    const navigate = useNavigate()

    const renderMenu = () => {
        switch (adminMenu) {
            case 'dashboard':
                return <AdminDashboard />;
            case 'products':
                return <AdminProducts />;
            case 'orders':
                return <Orders />;
            case 'payments':
                return <Payment />;
            default:
                return null;
        }
    }

    const logoutHandler = () => {
        const adminToken = localStorage.getItem('adminToken')
        if (adminToken) {
            navigate('/')
            localStorage.removeItem('adminToken')
        }
    }

    return (
        <div className='adminmenu'>
            <div className={`${logout === 'logout' ? 'adminlogoutyes' : 'adminloginno'}`}>
                <div className='adminlogoutdashboard'>
                    <h3>Logout Account</h3>
                    <p>Are You Sure Your Want to Logout</p>
                    <div className='logoutbtns'>
                        <button onClick={() => setLogout(adminMenu)}>Cancel</button>
                        <button onClick={logoutHandler}>Sign Out</button>
                    </div>
                </div>
            </div>
            <div className='adminmenubtns'>
                <div className='adminlogo'>
                    <Link to='/admin'>
                        <span className='logosvg'>
                            <GiDrippingHoney className='logomi' />
                            HoneyBee
                        </span>
                        <span className='farm'>Farm</span>
                    </Link>
                </div>

                <div className={`adminbtns ${adminMenu === 'dashboard' ? 'actived' : ''}`} onClick={() => { setAdminMenu('dashboard'); setLogout('dashboard') }}>
                    <TiHome className='adminicons' />
                    <button className='adminbutton'>Dashboard</button>
                </div>

                <div className={`adminbtns ${adminMenu === 'products' ? 'actived' : ''}`} onClick={() => { setAdminMenu('products'); setLogout('products') }}>
                    <AiFillProduct className='adminicons' />
                    <button className='adminbutton'>Products</button>
                </div>

                <div className={`adminbtns ${adminMenu === 'orders' ? 'actived' : ''}`} onClick={() => { setAdminMenu('orders'); setLogout('orders') }}>
                    <BsCartCheckFill className='adminicons' />
                    <button className='adminbutton'>Orders</button>
                </div>

                <div className={`adminbtns ${adminMenu === 'payments' ? 'actived' : ''}`} onClick={() => { setAdminMenu('payments'); setLogout('payments') }}>
                    <HiCurrencyDollar className='adminicons' />
                    <button className='adminbutton'>Payments</button>
                </div>

                <div className={`adminbtns ${adminMenu === 'logout' ? 'actived' : ''}`} onClick={() => setLogout('logout')}>
                    <RiLogoutCircleRFill className='adminicons' />
                    <button className='adminbutton'>Logout</button>
                </div>
            </div>

            <div className='contentdashboard'>
                {renderMenu()}
            </div>
        </div>
    )
}

export default AdminMenu
