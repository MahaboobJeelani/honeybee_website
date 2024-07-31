import React, { useState } from 'react'
import '../Cssfile/Adminmenu.css'
import AdminDashboard from '../Pages/AdminDashboard'
import { Link } from 'react-router-dom'
import { GiDrippingHoney } from 'react-icons/gi'
import { TiHome } from "react-icons/ti";
import { HiCurrencyDollar } from "react-icons/hi2";
import { BsCartCheckFill } from "react-icons/bs";
import { MdOutlineHelp } from "react-icons/md";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { AiFillProduct } from "react-icons/ai";
import AdminProducts from './AdminProducts'

const AdminMenu = () => {
    const [adminMenu, setAdminMenu] = useState('products');

    const renderMenu = () => {
        switch (adminMenu) {
            case 'dashboard':
                return <AdminDashboard />;
            case 'products':
                return <AdminProducts />;
            case 'orders':
                return <p>Orders</p>;
            case 'payments':
                return <p>Payments</p>;
            case 'help':
                return <p>Help</p>;
            default:
                return null;
        }
    }

    return (
        <div className='adminmenu'>
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

                <div className={`adminbtns ${adminMenu === 'dashboard' ? 'actived' : ''}`} onClick={() => setAdminMenu('dashboard')}>
                    <TiHome className='adminicons' />
                    <button className='adminbutton'>Dashboard</button>
                </div>

                <div className={`adminbtns ${adminMenu === 'products' ? 'actived' : ''}`} onClick={() => setAdminMenu('products')}>
                    <AiFillProduct className='adminicons' />
                    <button className='adminbutton'>Products</button>
                </div>

                <div className={`adminbtns ${adminMenu === 'orders' ? 'actived' : ''}`} onClick={() => setAdminMenu('orders')}>
                    <BsCartCheckFill className='adminicons' />
                    <button className='adminbutton'>Orders</button>
                </div>

                <div className={`adminbtns ${adminMenu === 'payments' ? 'actived' : ''}`} onClick={() => setAdminMenu('payments')}>
                    <HiCurrencyDollar className='adminicons' />
                    <button className='adminbutton'>Payments</button>
                </div>

                <div className={`adminbtns ${adminMenu === 'help' ? 'actived' : ''}`} onClick={() => setAdminMenu('help')}>
                    <MdOutlineHelp className='adminicons' />
                    <button className='adminbutton'>Help</button>
                </div>

                <div className={`adminbtns ${adminMenu === 'logout' ? 'actived' : ''}`} onClick={() => setAdminMenu('logout')}>
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
