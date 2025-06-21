import '../Cssfile/Adminlogin.css'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const Login = () => {
    let [email, setEmail] = useState('guru@gmail.com')
    let [password, setPassword] = useState('guru@')

    // let { login } = useAuth()
    let navigate = useNavigate()

    let loginAdmin = (e) => {
        e.preventDefault()
        let payload = {
            email: email,
            password: password
        }
        axios.post(`http://localhost:8081/login`, payload)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                toast.success('Login Successfully');
                navigate('/')
            }).catch((error) => {
                console.log(error.message);
            })
    }

    return (
        <div className='adminlogin'>

            <form onSubmit={loginAdmin} className='userlogincont'>
                <label htmlFor="">Email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' />
                <label htmlFor="">Password</label>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
                <button type='submit'>submit</button>
                <p>Don't have account <Link to='/userregister'>Register</Link></p>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Login
