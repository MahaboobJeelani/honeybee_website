import React, { useEffect, useState } from 'react'
import '../Cssfile/Admintotal.css'
import { FaUsersLine, FaXmark } from "react-icons/fa6";
import { IoCartSharp, IoReloadOutline } from "react-icons/io5";
import { MdOutlineCurrencyRupee, MdPeople } from 'react-icons/md';
import { IoIosWallet } from "react-icons/io";
import { FaChartPie } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';


const Admintotal = () => {
    const [isActived, setIsActived] = useState(0)
    const [earnings, setEarnings] = useState(0)

    useEffect(() => {
        const accessToken = localStorage.getItem('adminToken');
        const tokenDecoder = jwtDecode(accessToken)
        setEarnings(tokenDecoder.findUser.earnings)

        axios.get(`http://localhost:8081/api/activeusers`)
            .then((res) => setIsActived(res.data.length))
            .catch(error => console.log(error.message))
    }, [isActived, earnings])


    return (
        <div className='admintotal'>
            <div className='dashboardmenu totalusers'>
                <p>{isActived} <br /> <span>Total Users</span></p>
                <p><FaUsersLine /></p>
            </div>
            <div className='dashboardmenu totalorder'>
                <p>47 <br /> <span>Total Order</span></p>
                <p><IoCartSharp /></p>
            </div>
            <div className='dashboardmenu totalreturnorder'>
                <p>2 <br /> <span>Total Return Orders</span></p>
                <p><IoReloadOutline /></p>
            </div>
            <div className='dashboardmenu cancelledorder'>
                <p>10 <br /> <span>Total Cancelled Orders</span></p>
                <p><FaXmark /></p>
            </div>

            <div className='dashboardmenu totalmenulist cancelledorder'>
                <p><MdPeople /></p>
                <p>20 <br /> <span>Total Vendors</span></p>
            </div>
            <div className='dashboardmenu totalmenulist totalreturnorder'>
                <p><IoIosWallet /></p>
                <p>47 <br /> <span>Total Request in Process</span></p>
            </div>
            <div className='dashboardmenu totalmenulist totalorder'>
                <p><FaChartPie /></p>
                <p>5,000 <MdOutlineCurrencyRupee /> <br /> <span>Total Value of Sale</span></p>
            </div>
            <div className='dashboardmenu totalmenulist totalusers'>
                <p><SlGraph /></p>
                <p>{earnings}<MdOutlineCurrencyRupee /> <br /> <span>Your Balances</span></p>
            </div>
        </div>
    )
}

export default Admintotal
