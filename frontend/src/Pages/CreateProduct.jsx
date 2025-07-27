import axios from 'axios'
import React, { useState } from 'react'
import '../Cssfile/Createproduct.css'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateProduct = () => {
    let [name, setName] = useState('')
    let [description, setDescription] = useState('')
    let [price, setPrice] = useState('')
    let [quantity, setQuantity] = useState('')
    let [brand, setBrand] = useState('')
    let [imagelink, setImagelink] = useState('')


    let navigate = useNavigate()


    const createHandler = (e) => {
        e.preventDefault()
        const payload = {
            name: name,
            description: description,
            price: price,
            quantity: quantity,
            brand : brand,
            imagelink: imagelink
        }
        axios.post(`http://localhost:8081/api/create`, payload)
            .then((res) => {
                toast.success("Product Created Successfully")
                setName('');
                setDescription('');
                setPrice('');
                setQuantity('');
                setBrand('')
                setImagelink('');
            })
            .catch((error) => console.log(error.message))
    }

    return (
        <div className='admincreateproduct'>
            <div className='backarrowicon' >
                <span onClick={() => navigate(-1)}><FaArrowLeftLong /> back</span>
            </div>
            <hr />
            <div className='form-container'>
                <ToastContainer />

                <div className='formconta'>
                    <h2>Create Products</h2>
                    <form action='button' className='createfrom' onSubmit={createHandler} >
                        <input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="text" placeholder='Enter Description' value={description} onChange={(e) => setDescription(e.target.value)} />
                        <input type="text" placeholder='Enter Price' value={price} onChange={(e) => setPrice(e.target.value)} />
                        <input type="number" placeholder='Enter Quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                        <input type="text" placeholder='Enter Brand' value={brand} onChange={(e) => setBrand(e.target.value)} />
                        <input type="text" placeholder='Enter Image Link' value={imagelink} onChange={(e) => setImagelink(e.target.value)} />
                        <button type='submit' className='createbtn'>Create Product</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateProduct
