import React, { useEffect, useState } from 'react';
import '../Cssfile/Navbar.css'
import { GiDrippingHoney } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { IoIosMenu, IoMdHelpCircle } from "react-icons/io";
import { HiMiniXMark } from "react-icons/hi2";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { BsFillCartCheckFill } from "react-icons/bs";

const Navbar = () => {
    let [displayprofile, setDisplayprofile] = useState(null);
    let [activelink, setActivelink] = useState('Home');
    let [showMenu, setShowMenu] = useState(false);
    let [profile, setProfile] = useState(false);

    const navigate = useNavigate()

    let data = localStorage.getItem('token');

    useEffect(() => {
        if (data) {
            setDisplayprofile(data);
        }
    }, []);

    let handleClick = (link) => {
        setActivelink(link);
    }

    let toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    let profiledisplay = () => {
        setProfile(!profile)
    }

    const logout = () => {
        navigate('/')
        localStorage.removeItem('token')
    }

    return (
        <div className='navbar custom-navbar' >
            <div className='logocontainer'>
                <Link to='/'>
                    <span className='logosvg'>
                        <GiDrippingHoney className='logomi' />
                        HoneyBee
                    </span>
                    <span className='farm'>Farm</span>
                </Link>

                <div className={`lines`} >
                    <IoIosMenu className='menulines' onClick={toggleMenu} />
                </div>
            </div>

            <div className={`menulist ${showMenu ? 'show-menu' : 'hide-menu'}`}>
                <div className='ullist'>
                    <ul>
                        <li>
                            <Link to='/' onClick={() => handleClick('Home')} className={activelink === 'Home' ? 'active-link' : 'inactive-link'}>Home</Link>
                        </li>
                        <li>
                            <Link to='/' onClick={() => handleClick('About')} className={activelink === 'About' ? 'active-link' : 'inactive-link'}>About</Link>
                        </li>
                        <li>
                            <Link to='/honey/products' onClick={() => handleClick('Products')} className={activelink === 'Products' ? 'active-link' : 'inactive-link'}>Products</Link>
                        </li>
                        <li>
                            <Link to='/' onClick={() => handleClick('Blogs')} className={activelink === 'Blogs' ? 'active-link' : 'inactive-link'}>Blogs</Link>
                        </li>
                        <li>
                            <Link to='/honey/contact' onClick={() => handleClick('Contact')} className={activelink === 'Contact' ? 'active-link' : 'inactive-link'}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className='intimarkicon' onClick={toggleMenu}>
                    <HiMiniXMark />
                </div>
            </div>

            <div className='logintextcontainer'>
                {
                    data === null ?
                        <Link to='/'><FaCartShopping className='cart' /></Link> :
                        <Link to='/honey/buyproduct'><FaCartShopping className='cart' /></Link>
                }

                {
                    displayprofile ?
                        (
                            <div className='profilepic'>
                                <Link>
                                    <MdAccountCircle className='profileicon' onClick={profiledisplay} />
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
                        )
                }

                <div className={`${profile ? 'profiledisplay' : 'profilehide'}`}>
                    <div className='profilecontainer'>

                        <div className='profiletext' onClick={profiledisplay}>
                            <p><MdAccountCircle className='profileiconnav' /></p>
                            <p><Link to='/honey/profile'>Edit Profile</Link></p>
                        </div>

                        <div className='profiletext' onClick={profiledisplay}>
                            <p><BsFillCartCheckFill className='profileiconnav' /></p>
                            <p><Link to='/honey/orderitems'>Order</Link></p>
                        </div>

                        <div className='profiletext' onClick={profiledisplay}>
                            <p><IoMdHelpCircle className='profileiconnav' /></p>
                            <p><Link>Help & Support</Link></p>
                        </div>

                        <div className='profiletext' onClick={profiledisplay}>
                            <p><RiLogoutCircleRFill className='profileiconnav' /></p>
                            <p onClick={logout}><Link to='/'>Logout</Link></p>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
}

export default Navbar;

