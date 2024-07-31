import React from 'react'
import '../Cssfile/Admindashboard.css'
import { MdOutlineCurrencyRupee } from "react-icons/md";
import Admintotal from '../Components/Admintotal';
import Statics from '../Components/Statics';

const AdminDashboard = () => {
  return (
    <div className='dashboard'>
      <div className='adminnav'>
        <p>Earnings <span>50,0000<MdOutlineCurrencyRupee /></span></p>
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
