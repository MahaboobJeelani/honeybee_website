import React, { useState } from 'react'
import '../Cssfile/Contactus.css'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setName, setEmail, setPhone, setAddress, setState, resetForm } from '../Store/contactSlice'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contactus = () => {
    const dispatch = useDispatch()

    const [focus, setFocus] = useState(false);

    const { name, email, address, phone, state } = useSelector(state => state.contact)

    const handleContact = async (e) => {
        e.preventDefault()
        if (!name || !email || !phone || !address || !state) toast.warning('input fields are empty')
        let payload = {
            name: name,
            email: email,
            phone: phone,
            address: address,
            state: state
        }

        await axios.post(`http://localhost:8081/createuser`, payload)
            .then((res) => {
                dispatch(resetForm())
                toast.success("Data Created Successfully")
            }).catch((error) => {
                console.log(error.message);
            })
    }

    const content = () => {
        if (focus && !name || !email || !phone || !address || !state ) {
            return (<div className='formInputData'>Fill the fields</div>)
        }
    }

    return (
        <div className='contactcontainer'>

            <form action="submit" onSubmit={handleContact} className='formdata'>
                {content()}
                <div className='contacttext'>
                    <h3>Contact Us</h3>
                </div>
                <ToastContainer />
                <input type="text" onFocus={() => setFocus(true)} placeholder='Enter Name' value={name} onChange={(e) => dispatch(setName(e.target.value))} />
                <input type="email" onFocus={() => setFocus(true)} placeholder='Enter Email' value={email} onChange={(e) => dispatch(setEmail(e.target.value))} />
                <input type="tel" onFocus={() => setFocus(true)} placeholder='Enter Phone Number' value={phone} onChange={(e) => dispatch(setPhone(e.target.value))} />
                <input type="text" onFocus={() => setFocus(true)} placeholder='Enter Address' value={address} onChange={(e) => dispatch(setAddress(e.target.value))} />

                <select onChange={(e) => dispatch(setState(e.target.value))}>
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
