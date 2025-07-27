import React, { useEffect, useState } from 'react';
import '../Cssfile/Orders.css';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const PlacedOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const userdata = localStorage.getItem('token');
        if (userdata) {
            const decodeToken = jwtDecode(userdata);
            const userId = decodeToken.findUser._id;

            axios.get(`http://localhost:8081/api/userorder/${userId}`)
                .then((res) => {
                    setOrders(res.data);
                }).catch((error) => {
                    console.log(error.message);
                });
        }
    }, []);

    const newDate = new Date().toLocaleDateString();
    let serialNumber = 1;

    return (
        <div className='orders userordersplaced'>
            <p>New Orders</p>

            <div className='orderproducts'>
                <div className='productordernav'>
                    <span>#</span>
                    <span>Product Name</span>
                    <span>Order ID</span>
                    <span>Vendor Name</span>
                    <span>No Products</span>
                    <span>Customer</span>
                    <span>Total</span>
                    <span>Date</span>
                    <span>Action</span>
                </div>
                {orders.map((order) => (
                    order.product.map((item) => {
                        const price = item.quantity * item.price;
                        const currentSerialNumber = serialNumber++;

                        const getStatusStyle = (colorstyle) => {
                            switch (colorstyle.toLowerCase()) {
                                case 'completed':
                                    return { color: 'green', backgroundColor: '#D1FFBD' }
                            }
                        }
                        return (
                            <div className='productordernav orderproduct' key={item._id}>
                                <span>{currentSerialNumber}</span>
                                <span>{item.name}</span>
                                <span>{order._id}</span>
                                <span>Dadant & Sons</span>
                                <span>{item.quantity}</span>
                                <span>Paul k</span>
                                <span>{price}</span>
                                <span>{newDate}</span>
                                <span className='viewbtn'><button style={getStatusStyle(order.status)}>{order.status}</button></span>
                            </div>
                        );
                    })
                ))}
            </div>
        </div>
    );
};

export default PlacedOrder;
