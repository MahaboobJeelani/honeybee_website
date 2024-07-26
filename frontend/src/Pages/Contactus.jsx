import React, { useState } from 'react'
import '../Cssfile/Contactus.css'
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contactus = () => {
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [phone, setPhone] = useState('')
    let [address, setAddress] = useState('')
    let [state, setState] = useState('')

    const handleContact = (e) => {
        e.preventDefault()
        let payload = {
            name: name,
            email: email,
            phone: phone,
            address: address,
            state: state
        }
        axios.post(`http://localhost:8081/createuser`, payload)
            .then((res) => {
                setName('')
                setEmail('')
                setPhone('')
                setAddress('')
                setState('')
                toast.success("Data Created Successfully")
            }).catch((error) => {
                console.log(error.message);
            })
    }

    return (
        <div className='contactcontainer'>

            <form action="submit" onSubmit={handleContact} className='formdata'>
                <div className='contacttext'>
                    <h3>Contact Us</h3>
                </div>
                <ToastContainer />
                <input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="tel" placeholder='Enter Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)} />
                <input type="text" placeholder='Enter Address' value={address} onChange={(e) => setAddress(e.target.value)} />

                <select onChange={(e) => setState(e.target.value)}>
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
