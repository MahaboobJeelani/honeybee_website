import React from 'react'
import '../Cssfile/Errorpage.css'
import { Link } from 'react-router-dom'
const Errorpage = () => {
    return (
        <div className='notfound'>
            <p>404 Page Not Found</p>
            <p> Navigate the Home page <Link to='/'>Home Page</Link></p>
        </div>
    )
}

export default Errorpage
