import '../Cssfile/Adminlogin.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    let navigate = useNavigate()

    let loginAdmin = (e) => {
        e.preventDefault()
        let payload = {
            email: email,
            password: password
        }
        axios.post(`http://localhost:8081/login`, payload)
            .then((res) => {
                console.log(res.data);
                const token = res.data.token
                if (token) {
                    localStorage.setItem('adminToken', res.data.token)
                    navigate('/admin')
                    toast(`${res.data.message}`);
                }
            }).catch((error) => {
                console.log(error.message);
            })
    }

    return (
        <div className='adminlogin'>
            <ToastContainer />
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
