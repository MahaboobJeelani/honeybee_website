import React, { useEffect, useState } from 'react'
import '../Cssfile/Orders.css'
import axios from 'axios';

const Orders = () => {
    let [ordersproducts, setOrderproducts] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8081/honeydata`)
            .then((res) => {
                // console.log(res.data);
                setOrderproducts(res.data);
            }).catch((error) => {
                console.log(error.message);
            });
    }, []);

    const newDate = new Date().toLocaleDateString()
    return (
        <div className='orders'>
            <p>New Orders</p>

            <div className='orderproducts'>
                <div className='productordernav'>
                    <span>#</span>
                    <span>Vendor Name</span>
                    <span>Order Number</span>
                    <span>No Products</span>
                    <span>Customer</span>
                    <span>Total Order</span>
                    <span>Date</span>
                    <span>Action</span>
                </div>
                {ordersproducts.map((item, no) => {
                    return (
                        <div className='productordernav orderproduct' key={item._id}>
                            <span>{no}</span>
                            <span>Dadant & Sons</span>
                            <span>YurTsHB</span>
                            <span>1</span>
                            <span>Paul k</span>
                            <span>{item.price}</span>
                            <span>{newDate}</span>
                            <span className='viewbtn'><button>View</button></span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Orders
