import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Cssfile/Createproduct.css'

const CreateProduct = () => {
    let [name, setName] = useState('')
    let [description, setDescription] = useState('')
    let [price, setPrice] = useState('')
    let [brand, setBrand] = useState('')
    let [category, setCategory] = useState('')

    return (
        <>
            <div className='form-container'>
                <div className='form-conta'>
                    <h2>Create Products</h2>
                    <form className='createfrom'>
                        <input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} /> <br />
                        <input type="text" placeholder='Enter Price' value={price} onChange={(e) => setPrice(e.target.value)} /> <br />
                        <input type="text" placeholder='Enter Brand' value={brand} onChange={(e) => setBrand(e.target.value)} /> <br />
                        <input type="text" placeholder='Enter Category' value={category} onChange={(e) => setCategory(e.target.value)} /> <br />
                        <div className='productbtn'>
                            <button className='btn'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateProduct
