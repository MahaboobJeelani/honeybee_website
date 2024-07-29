import axios from 'axios';
import '../Cssfile/Singleproduct.css';
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FaRegStar, FaStar } from 'react-icons/fa6';
import { IoStarHalf } from 'react-icons/io5';
import { MdCurrencyRupee } from 'react-icons/md';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleProduct = () => {
    let [product, setProduct] = useState([]);
    let [count, setCount] = useState(1);
    let [price, setPrice] = useState(300);

    let { id } = useParams();
    let data = localStorage.getItem('token')

    useEffect(() => {
        axios.get(`http://localhost:8081/singleProduct/${id}`)
            .then((res) => {
                setProduct(res.data);
            }).catch((error) => { console.log(error.message); });
    }, [id]);

    const addToCart = () => {
        axios.put(`http://localhost:8081/cartitems/66a1dead30d2e041cdde8d91/${id}`)
            .then((res) => {
                toast.success(`Item added successfully`)
                console.log(res.data);
            })
            .catch((error) => console.log(error.message));
    };

    const countPriceHandleDecre = () => {
        setCount(count => count - 1);
        setPrice(price => price - 300);
    };

    const countPriceHandleIncre = (price) => {
        console.log(price);
        setCount(count => count + 1);
        setPrice(price => price + 300);
    };

    return (
        <div className='productContainer'>
            <div className='productdetail'>
                <div className='imagecontainer'>
                    <div className='imagedata'>
                        <img src={`${product.imagelink}`} alt="" width='470rem' />
                    </div>

                    <div className='buytext'>
                        <div className='buynow'>
                            {
                                data === null ? <Link to='/role'>
                                    <button>Buy Now</button>
                                </Link> : <Link to='/honey/buyproduct' state={{ id }}>
                                    <button>Buy Now</button>
                                </Link>
                            }
                        </div>

                        <div className='buynow addtocart'>
                            <button onClick={addToCart}>Add to cart</button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>

                <div className='textcontainer'>
                    <div className='productname'>
                        <p>{product.name} </p> <span className='currency'><MdCurrencyRupee />{price}
                            <nav>
                                Incl. of all taxes. Free shipping
                            </nav>
                        </span>
                    </div>

                    <div className='ratingstart'>
                        <FaStar className='' /><FaStar className='' /><FaStar className='' /><IoStarHalf className='' /> <FaRegStar className='' />
                    </div>
                    <div className='singleproductdescr'>
                        <p>{product.description}</p>
                    </div>
                    <div className='quantity'>
                        <p>Quantity</p>
                        <div className='quantitychange'>
                            <button onClick={countPriceHandleDecre}>-</button>
                            <p>{count}</p>
                            <button onClick={() => { countPriceHandleIncre(product.price); }}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
