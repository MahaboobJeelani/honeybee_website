import React, { useState } from 'react'
import axios from 'axios'
import '../Cssfile/Register.css'
import { Link, useNavigate } from 'react-router-dom'

const Userregister = () => {
    let [username, setUsernamae] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    let navigation = useNavigate()

    const registerUser = (e) => {
        e.preventDefault()
        const payload = {
            username: username,
            email: email,
            password: password,
            role: 'user'
        }
        axios.post(`http://localhost:8081/api/register`, payload)
            .then((res) => {
                navigation('/userlogin')
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
                    <input type="text" value={username} onChange={(e) => setUsernamae(e.target.value)} placeholder='Username' />
                    <label htmlFor="">Email</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                    <label htmlFor="">Password</label>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                    <button type='submit'>submit</button>
                    <div>
                        <p>Already have an account <Link to='/userlogin'>Sign in</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Userregister
