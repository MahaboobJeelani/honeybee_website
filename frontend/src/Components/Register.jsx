import React, { useState } from 'react'
import axios from 'axios'
import '../Cssfile/Register.css'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    let [username, setUsernamae] = useState('guruprasad')
    let [email, setEmail] = useState('guru123@gmail.com')
    let [password, setPassword] = useState('guru123@')
    let navigation = useNavigate()


    const registerUser = (e) => {
        e.preventDefault()
        const payload = {
            username: username,
            email: email,
            password: password,
            role: 'admin'
        }
        axios.post(`http://localhost:8081/register`, payload)
            .then((res) => {
                navigation('/adminlogin')
                console.log("Resgister successfully", res);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    return (
        <div className='registrationform'>
            <div className='registercontainer'>

                <div className='admincontent'>
                </div>

                <form action="" onSubmit={registerUser} className='formcontainer'>
                    <label htmlFor="">Username</label>
                    <input type="text" value={username} onChange={(e) => setUsernamae(e.target.value)} placeholder='username' />
                    <label htmlFor="">Email</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' />
                    <label htmlFor="">Password</label>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
                    <button type='submit'>submit</button>
                    <p>Already have an account <Link to='/adminlogin'>Sign in</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Register
