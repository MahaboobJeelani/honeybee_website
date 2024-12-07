import React, { useEffect, useState } from 'react'
import '../Cssfile/Editproduct.css'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const EditProduct = ({ id }) => {
    let [name, setName] = useState('')
    let [description, setDescription] = useState('')
    let [price, setPrice] = useState('')
    let [quantity, setQuantity] = useState('')
    let [brand, setBrand] = useState('')
    let [imagelink, setImagelink] = useState('')

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8081/singleproduct/${id}`)
            .then((res) => {
                const data = res.data
                setName(data.name);
                setDescription(data.description);
                setPrice(data.price);
                setQuantity(data.quantity);
                setBrand(data.brand);
                setImagelink(data.imagelink);
            })
            .catch((error) => console.log(error.message))
    }, [id])

    const editHandler = (e) => {
        e.preventDefault();
        let payload = {
            name: name,
            description: description,
            price: price,
            quantity: quantity,
            brand: brand,
            imagelink: imagelink
        }
        axios.put(`http://localhost:8081/productupdate/${id}`, payload)
            .then((res) => {
                navigate('/admin')
                toast.success("Product Updated Successfully")
            })
            .catch((error) => { console.log(error.message); })
    }

    return (
        <div className='admineditproduct'>
            <div className='backarrowicon' >
                <span onClick={() => navigate('/admin')}><FaArrowLeftLong /> back</span>
            </div>
            <hr />
            <div className='adminformcontainer'>
                <ToastContainer />
                <div className='adminformconta'>
                    <h2>Edit Products</h2>
                    <form action="submit" className='editfrom' onSubmit={editHandler} >
                        <input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="text" placeholder='Enter Description' value={description} onChange={(e) => setDescription(e.target.value)} />
                        <input type="text" placeholder='Enter Price' value={price} onChange={(e) => setPrice(e.target.value)} />
                        <input type="number" placeholder='Enter Quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                        <input type="text" placeholder='Enter Brand' value={brand} onChange={(e) => setBrand(e.target.value)} />
                        <input type="text" placeholder='Enter Image Link' value={imagelink} onChange={(e) => setImagelink(e.target.value)} />
                        <button type='submit' className='editbtn'>Update Product</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditProduct
