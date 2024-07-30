import React from 'react'
import { Navigate } from 'react-router-dom'

const AuthContext = ({ Child }) => {
    const adminToken = localStorage.getItem('adminToken')

    const verifycProtect = () => {
        if (adminToken == null) {
            return false
        } else {
            return true
        }
    }

    return (
        <div>
            {verifycProtect() ? <Child /> : <Navigate to='/adminlogin' />}
        </div>
    )

}

export default AuthContext
