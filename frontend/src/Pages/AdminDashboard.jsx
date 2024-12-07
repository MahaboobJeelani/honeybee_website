import React, { useEffect, useState } from 'react'
import '../Cssfile/Admindashboard.css'
import { MdOutlineCurrencyRupee } from "react-icons/md";
import Admintotal from '../Components/Admintotal';
import Statics from '../Components/Statics';
import { jwtDecode } from 'jwt-decode';


const AdminDashboard = () => {
  const [earnings, setEarnings] = useState(0)

  useEffect(() => {
    const accessToken = localStorage.getItem('adminToken');
    const tokenDecoder = jwtDecode(accessToken)
    setEarnings(tokenDecoder.findUser.earnings)
  }, [earnings])



  return (
    <div className='dashboard'>
      <div className='adminnav'>
        <p>Earnings <span>{earnings}<MdOutlineCurrencyRupee /></span></p>
        <p>admin</p>
      </div>
      <div className='dashboardmainmenu '>
        <Admintotal />
      </div>
      <div className='dashboardmainmenu'>
        <Statics />
      </div>
    </div>
  )
}

export default AdminDashboard
