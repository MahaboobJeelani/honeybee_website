import React from 'react';
import '../Components/Cssfile/Navbar.css';
import { GiDrippingHoney } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar custom-navbar'>
            <div className='logocontainer'>
                <Link to='/'><span className='logosvg'>
                    <GiDrippingHoney className='logomi' />
                    HoneyBee</span> <span className='farm'>Farm</span>
                </Link>
            </div>

            <div className='menulist'>
                <ul>
                    <li><Link>Home</Link></li>
                    <li><Link>About</Link></li>
                    <li><Link>Products</Link></li>
                    <li><Link>Blog</Link></li>
                    <li><Link>Contact Us</Link></li>
                </ul>
            </div>

            <div className='logintextcontainer'>
                <FaCartShopping className='cart' />
                <Link to='/role' className='loginlink'>
                    <div className='login'>
                        <CgProfile className='accountcircle' />
                        <button>Login</button>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
