import '../Cssfile/Adminlogin.css'
import axios from 'axios'
import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    let [email, setEmail] = useState('guru123@gmail.com')
    let [password, setPassword] = useState('guru123@')

    let navigate = useNavigate()

    let loginAdmin = (e) => {
        e.preventDefault()
        let payload = {
            email: email,
            password: password
        }
        axios.post(`http://localhost:8081/login`, payload)
            .then((res) => {
                navigate('/')
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
