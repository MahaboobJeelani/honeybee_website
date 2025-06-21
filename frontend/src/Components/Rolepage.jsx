import React from 'react'
import '../Cssfile/Rolepage.css'
import { RiAccountCircleFill } from "react-icons/ri";
import { MdManageAccounts } from "react-icons/md";
import { Link } from 'react-router-dom'

const Rolepage = () => {
    return (
        <div className='rolepage' >
            <div className='bgimage'>

            </div>
            <div className='admincontainer'>

                <div className='adminloginContainer'>
                    <Link to='/adminlogin' className='adminlink'>
                        <MdManageAccounts className='adminicon' />
                        <p>Admin</p>
                    </Link>
                </div>

                <div className='adminloginContainer'>
                    <Link to='/userlogin' className='adminlink'>
                        <RiAccountCircleFill className='adminicon' />
                        <p>User</p>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Rolepage