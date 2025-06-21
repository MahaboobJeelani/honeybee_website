import React from 'react'
import { GiDrippingHoney } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import '../Cssfile/Footer.css'
import { ImFacebook2 } from "react-icons/im";
import { FaInstagramSquare, FaPinterestSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaMapLocationDot, FaArrowRightLong } from "react-icons/fa6";
import { MdOutlinePhoneAndroid, MdAttachEmail } from "react-icons/md";


const Footercom = () => {
    return (
        <footer className='footercontainer'>

            <div className='footerbox'>

                <Link to='/'>
                    <span className='footerlogo'>
                        <GiDrippingHoney className='footerlogomi' />
                        HoneyBee
                    </span>

                    <span className='footerfarm'>
                        Farm
                    </span>
                </Link>

                <nav>
                    Experience our HoneyBee farm’s premium honey, made with dedication for your delight, health benefits, and everyday pleasure, bringing you pure, natural sweetness from our hives.
                </nav>

                <div className='socialicons'>
                    <ImFacebook2 className='icons' />
                    <FaInstagramSquare className='icons' />
                    <BsLinkedin className='icons' />
                    <FaPinterestSquare className='icons' />
                </div>
            </div>

            <div className='footerbox footercollection '>
                <h5>LATEST COLLECTION</h5>
                <p>Fresh original honey</p>
                <p>Mango Flower Honey</p>
                <p>Mustard Flower Honey</p>
                <p>Queen Bee Honey</p>
            </div>

            <div className='footerbox footercollection'>
                <h5>EXPLORE</h5>
                <p><Link to='/'>Home</Link></p>
                <p><Link to='/'>About</Link></p>
                <p><Link to='/honey/products'>Products</Link></p>
                <p><Link to='/'>Blog</Link></p>
                <p><Link to='/honey/contact'>Contact</Link></p>
            </div>

            <div className='footerbox footercollection'>
                <h5>OUR ADDRESS</h5>
                <div className='locationcontainer'>
                    <FaMapLocationDot className='locationicon' />
                    <span className='address'>4th main, BTM Layout 2nd stage, bangalore, karnataka</span>
                </div>
                <div className='locationcontainer'>
                    <MdOutlinePhoneAndroid className='phoneicon' />
                    <span className='address'>+91 99988 87776</span>
                </div>
                <div className='locationcontainer'>
                    <MdAttachEmail className='phoneicon' />
                    <span className='address'>contact@honeybee.gmail.com</span>
                </div>

                <div className='newletter'>
                    <input type="email" placeholder='Email Address' />
                    <div className='mailsendicon'>
                        <FaArrowRightLong className='mailicon' />
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footercom
