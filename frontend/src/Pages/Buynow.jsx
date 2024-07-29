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
    }, [Subtotal]);

    useEffect(() => {
        const subtotal = cartItems.reduce((total, item) => {
            return total + (item.quantity * item.price)
        }, 0)
        setSubtotal(subtotal + productPrice)
    }, [cartItems])

    const deleteCartItem = (id) => {
        axios.delete(`http://localhost:8081/deletecartitem/${userId}/${id}`)
            .then((res) => {
                setCartItems(cartItems.filter(item => item._id !== id));
            })
            .catch((error) => { console.log(error); });
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
                                        <p>{product.quantity}</p>
                                    </div>
                                    <div className='billimage billprce'>
                                        <MdCurrencyRupee /> {product.price}
                                    </div>
                                    <div className='billimage'>

                                    </div>
                                </>
                            )}
                        </div>

                        <div className='cartcontainer'>
                            {cartItems.map((cartItem) => (
                                <div className='cartdetails' key={cartItem._id}>
                                    <div className='cartimg'>
                                        <img src={cartItem.imagelink} alt={cartItem.name} width='80px' />
                                    </div>
                                    <div className='cartimg cartname'>
                                        <h6>{cartItem.name}</h6>
                                    </div>
                                    <div className='cartimg cartquantity'>
                                        <p>{cartItem.quantity}</p>
                                    </div>
                                    <div className='cartimg'>
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

                <div className='containers card'>
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
