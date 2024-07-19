import React from 'react'
import Navbar from './Navbar'
import '../Cssfile/Main.css'
import Body from './Body'
import Footercom from './Footercom'

const Main = () => {
    return (
        <div className='mainpage'>
            <header className='navbarcontainer'>
                <Navbar />
            </header>
            <div className='bodycontainer'>
                <Body />
            </div>
            <div className='footer'>
                <Footercom />
            </div>
        </div>
    )
}

export default Main
