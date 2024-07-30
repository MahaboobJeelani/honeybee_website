import React, { useEffect, useState } from 'react';
import '../Cssfile/Buynow.css';
import { FaArrowLeftLong, FaCcMastercard, FaCcPaypal, FaCcVisa } from 'react-icons/fa6';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { MdCurrencyRupee, MdOutlineDeleteForever } from 'react-icons/md';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';


const Buynow = () => {
    const [product, setProduct] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [Subtotal, setSubtotal] = useState(0)

    const navigate = useNavigate();
    const location = useLocation();
    const { id } = location.state || {};


    const defaultShippingCarges = 50

    let userData = localStorage.getItem('token')
    let decodeToken = jwtDecode(userData)
    const userId = decodeToken.findUser._id

    const newSubTotal = cartItems.length === 0 ? (product.length === 0 ? 0 : defaultShippingCarges) : defaultShippingCarges;
    const productPrice = product.length === 0 ? 0 : product.price

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8081/singleProduct/${id}`)
                .then((res) => {
                    setProduct(res.data);
                }).catch((error) => { console.log(error.message); });
        }
    }, [id]);

    useEffect(() => {
        axios.get(`http://localhost:8081/user/${userId}`)
            .then((res) => {
                setCartItems(res.data.cart);
            })
            .catch((error) => { console.log(error.message); });
    }, [userId]);

    useEffect(() => {
        const subtotal = cartItems.reduce((total, item) => {
            return total + (item.quantity * item.price)
        }, 0)
        setSubtotal(subtotal + productPrice)
    }, [cartItems, productPrice])

    const deleteCartItem = (id) => {
        axios.delete(`http://localhost:8081/deletecartitem/${userId}/${id}`)
            .then((res) => {
                setCartItems(cartItems.filter(item => item._id !== id));
            })
            .catch((error) => { console.log(error); });
    };

    const updateCartQuantity = (id, newQuantity) => {
        axios.put(`http://localhost:8081/changequantity/${userId}/${id}`, { quantity: newQuantity })
            .then((res) => {
                setCartItems(cartItems.map(item =>
                    item._id === id ? { ...item, quantity: newQuantity } : item
                ))
            }).catch((error) => console.log(error.message))
    }

    const countPriceHandleIncre = (id) => {
        const item = cartItems.find(item => item._id === id)
        if (item) {
            const newQuantity = item.quantity + 1
            updateCartQuantity(id, newQuantity)
        }
    };

    const countPriceHandleDecre = (id) => {
        const item = cartItems.find(item => item._id === id)
        if (item && item.quantity > 1) {
            const newQuantity = item.quantity - 1
            updateCartQuantity(id, newQuantity)
        }
    };


    return (
        <div className='buynowcontainer'>
            <div className='buynowcart'>

                <div className='containers'>

                    <div className='continueshopping'>
                        <FaArrowLeftLong className='arrowicon' onClick={() => navigate(-1)} /> <span>Continue Shopping</span>
                    </div>

                    <div className='shoppingcartprice'>
                        <AiOutlineShoppingCart className='shopcarticon' />
                        <p>Shopping Cart</p>
                    </div>

                    <div className='billproductcontainer'>
                        <div id='billproductdetails'>
                            {product && product.imagelink && (
                                <>
                                    <div className='billimage'>
                                        <img src={product.imagelink} alt={product.name} width='80px' />
                                    </div>
                                    <div className='billimage cartname'>
                                        <h6>{product.name}</h6>
                                    </div>
                                    <div className='billimage cartquantity'>
                                        <button className='cartbtns' onClick={() => countPriceHandleDecre(product._id)}>-</button>
                                        <p>{product.quantity}</p>
                                        <button className='cartbtns' onClick={() => countPriceHandleIncre(product._id)}>+</button>
                                    </div>
                                    <div className='billimage billprce'>
                                        <MdCurrencyRupee /> {product.price}
                                    </div>
                                    <div className='billimage'>

                                    </div>
                                </>
                            )}
                        </div>

                        <div className={`cartcontainer`}>
                            {cartItems.map((cartItem) => (
                                <div className='cartdetails' key={cartItem._id}>
                                    <div className='cartimg'>
                                        <img src={cartItem.imagelink} alt={cartItem.name} width='80px' />
                                    </div>
                                    <div className='cartimg cartname'>
                                        <h6>{cartItem.name}</h6>
                                    </div>
                                    <div className='cartimg cartquantity'>
                                        <button className='cartbtns' onClick={() => countPriceHandleDecre(cartItem._id)}>-</button>
                                        <p>{cartItem.quantity}</p>
                                        <button className='cartbtns' onClick={() => countPriceHandleIncre(cartItem._id)}>+</button>
                                    </div>
                                    <div className='cartimg cartprice'>
                                        <MdCurrencyRupee /> {cartItem.price}
                                    </div>
                                    <div className='cartimg'>
                                        <MdOutlineDeleteForever onClick={() => deleteCartItem(cartItem._id)} id='deleteicon' />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <nav className='carddetails'>
                        <div className='cardprofile'>
                            <div className='textcard'>Card Details</div>
                            <div><CgProfile className='cardprofileicon' /></div>
                        </div>
                        <div className='cardtype'>
                            <div><p className='cardtypetext'>Card Type</p></div>
                            <FaCcVisa /> <FaCcPaypal /> <FaCcMastercard />
                        </div>
                        <div className='cardholder'>
                            <input type="text" placeholder='CardHolders Name' />
                            <input type="text" placeholder='Card Number' />
                        </div>
                        <div className='expirationcvv'>
                            <input type="text" placeholder='Expiration' />
                            <input type="text" placeholder='CVV' />
                        </div>
                        <hr id='linesborder' />

                        <div className='billingtext'>
                            <div className='billcontainer'><span>Subtotal</span><span><MdCurrencyRupee />{Subtotal}</span></div>
                            <div className='billcontainer'><span>shipping</span><span><MdCurrencyRupee />{newSubTotal}</span></div>
                            <div className='billcontainer'><span>Total(incl.taxes)</span><span><MdCurrencyRupee />{Subtotal + newSubTotal}</span></div>
                        </div>

                        <div className='billbtn'>
                            <div className='billbtntext'>
                                <span>Payment</span>
                                <span><MdCurrencyRupee />{Subtotal + newSubTotal}</span>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Buynow;
