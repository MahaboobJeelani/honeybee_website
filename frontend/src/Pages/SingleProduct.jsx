import axios from 'axios';
import '../Cssfile/Singleproduct.css';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaRegStar, FaStar } from 'react-icons/fa6';
import { IoStarHalf } from 'react-icons/io5';
import { MdCurrencyRupee } from 'react-icons/md';
import { jwtDecode } from 'jwt-decode';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleProduct = () => {
    let [product, setProduct] = useState([]);

    let { id } = useParams();
    let token = localStorage.getItem('token')
    let userId;
    if (token) {
        const tokenDecode = jwtDecode(token)
        userId = tokenDecode.findUser._id;
    }

    useEffect(() => {
        axios.get(`http://localhost:8081/api/singleproduct/${id}`)
            .then((res) => {
                setProduct(res.data);
            }).catch((error) => { console.log(error.message); });
    }, [id]);

    const addToCart = () => {
        axios.put(`http://localhost:8081/api/cartitems/${userId}/${id}`)
            .then((res) => {
                toast.success(`Item added successfully`)
                console.log(res.data);
            })
            .catch((error) => console.log(error.message));
    };



    return (
        <div className='productContainer'>
            <div className='productdetail'>
                <div className='imagecontainer'>

                    <div className='imagedata'>
                        <img src={`${product.imagelink}`} alt="" />
                    </div>

                    <div className='buytext'>
                        <div className='buynow'>
                            {
                                token === null ?
                                    <Link to='/role'>
                                        <button>Buy Now</button>
                                    </Link> :
                                    <Link to='/honey/buyproduct' state={{ id }}>
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
                        <p>{product.name} </p> <span className='currency'><MdCurrencyRupee />{product.price}
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
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
