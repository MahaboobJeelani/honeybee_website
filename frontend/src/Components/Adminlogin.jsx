import './Cssfile/Adminlogin.css'
import axios from 'axios'
import React, { useState } from 'react'

import { Link } from 'react-router-dom'

const Login = () => {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    let loginAdmin = () => {
        axios.post(`http://localhost:8081/login`)
            .then((res) => {
                console.log(res);
            }).catch((error) => {
                console.log(error.message);
            })
    }

    return (
        <div className='adminlogin'>

            <form onSubmit={loginAdmin} className='adminlogincont'>
                <label htmlFor="">Email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' />
                <label htmlFor="">Password</label>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
                <button type='submit'>submit</button>
                <p>Don't have account <Link to='/adminregister'>Register</Link></p>
            </form>

        </div>
    )
}

export default Login
