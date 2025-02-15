import React, { useState } from 'react'
import '../Cssfile/Contactus.css'
import axios from 'axios'

const Contactus = () => {
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [phone, setPhone] = useState('')
    let [address, setAddress] = useState('')

    const handleContact = () => {
        axios.get(``)

    }

    return (
        <div className='contactcontainer'>

            <form action="submit" onSubmit={handleContact} className='formdata'>
                <div className='contacttext'>
                    <h3>Contact Us</h3>
                </div>
                <input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="tel" placeholder='Enter Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)} />
                <input type="text" placeholder='Enter Address' value={address} onChange={(e) => setAddress(e.target.value)} />

                <select>
                    <option>Select State</option>
                    <option>Karnataka</option>
                    <option>Kerala</option>
                    <option>Andhra Pradesh</option>
                    <option>Tamil Nadu</option>
                    <option>Hyderabad</option>
                </select>
                <div className='btncontainer'>
                    <button type='submit' className='contactbtn'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contactus
