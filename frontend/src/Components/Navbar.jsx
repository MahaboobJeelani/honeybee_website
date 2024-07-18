import React, { useEffect, useState } from 'react';
import '../Cssfile/Navbar.css'
import { GiDrippingHoney } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { FaCartShopping, FaXmark } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
    let [displayprofile, setDisplayprofile] = useState(false)
    let [activelink, setActivelink] = useState('Home')

    useEffect(() => {
        let data = localStorage.getItem('login')
        if (data) {
            setDisplayprofile(data)
        }
    }, [])

    let handleClick = (link) => {
        setActivelink(link)
    }

    return (
        <div className='navbar custom-navbar'>

            <div className='logocontainer'>
                <Link to='/'>
                    <span className='logosvg'>
                        <GiDrippingHoney className='logomi' />
                        HoneyBee
                    </span>
                    <span className='farm'>Farm</span>
                </Link>
            </div>

            <div className='lines'>
                <IoIosMenu className='menulines' />
                {/* <FaXmark className='xmar' /> */}
            </div>

            <div className='menulist'>
                <ul>
                    <li>
                        <Link to='/' onClick={() => handleClick('Home')} className={activelink === 'Home' ? 'active-link' : 'inactive-link'}>Home</Link>
                    </li>
                    <li>
                        <Link onClick={() => handleClick('About')} className={activelink === 'About' ? 'active-link' : 'inactive-link'}>About</Link>
                    </li>
                    <li>
                        <Link to='/honey/products' onClick={() => handleClick('Products')} className={activelink === 'Products' ? 'active-link' : 'inactive-link'}>Products</Link>
                    </li>
                    <li>
                        <Link onClick={() => handleClick('Blogs')} className={activelink === 'Blogs' ? 'active-link' : 'inactive-link'}>Blogs</Link>
                    </li>
                    <li>
                        <Link to='/honey/contact' onClick={() => handleClick('Contact')} className={activelink === 'Contact' ? 'active-link' : 'inactive-link'}>Contact Us</Link>
                    </li>
                </ul>
            </div>

            <div className='logintextcontainer'>
                <FaCartShopping className='cart' />
                {displayprofile ?
                    (
                        <div className='profilepic'>
                            <Link>
                                <MdAccountCircle className='profileicon' />
                            </Link>
                        </div>
                    ) :
                    (
                        <div>
                            <Link to='/role' className='loginlink'>
                                <div className='login'>
                                    <CgProfile className='accountcircle' />
                                    <button>Login</button>
                                </div>
                            </Link>
                        </div>
                    )}

            </div>
        </div>
    );
}

export default Navbar;
