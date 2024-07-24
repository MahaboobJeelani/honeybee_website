// import axios from 'axios'
// import '../Cssfile/Singleproduct.css'
// import React, { useEffect, useState } from 'react'
// import { Link, useLocation, useParams } from 'react-router-dom'
// import { FaRegStar, FaStar } from 'react-icons/fa6'
// import { IoStarHalf } from 'react-icons/io5'
// import { MdCurrencyRupee } from 'react-icons/md'


// const SingleProduct = () => {
//     let [product, setProduct] = useState([])
//     let [count, setCount] = useState(1)
//     let [price, setPrice] = useState(300)

//     let { id } = useParams()

//     useEffect(() => {
//         axios.get(`http://localhost:8081/singleProduct/${id}`)
//             .then((res) => {
//                 setProduct(res.data)
//                 console.log(res.data);
//             }).catch((error) => { console.log(error.message); })
//     }, [id])

//     return (
//         <div className='productContainer'>
//             <div className='productdetail'>
//                 <div className='imagecontainer'>
//                     <div className='imagedata'>
//                         <img src={`${product.imagelink}`} alt="" width='470rem' />
//                     </div>

//                     <div className='buytext'>

//                         <div className='buynow'>
//                             <Link to={`/honey/buyproduct`} state={{ id }}>
//                                 <button>Buy Now</button>
//                             </Link>
//                         </div>

//                         <div className='buynow addtocart'>
//                             <button>Add to cart</button>
//                         </div>

//                     </div>

//                 </div>

//                 <div className='textcontainer'>

//                     <div className='productname'>
//                         <p>{product.name} </p> <span className='currency'><MdCurrencyRupee />{price}
//                             <nav>
//                                 Incl. of all taxes. Free shipping
//                             </nav>
//                         </span>
//                     </div>

//                     <div className='ratingstart'>
//                         <FaStar className='' /><FaStar className='' /><FaStar className='' /><IoStarHalf className='' /> <FaRegStar className='' />
//                     </div>
//                     <div className='singleproductdescr'>
//                         <p>{product.description}</p>
//                     </div>
//                     <div className='quantity'>
//                         <p>Quantity</p>
//                         <div className='quantitychange'>
//                             <button onClick={() => { setCount(count => count - 1); setPrice(price => price - 300) }}>-</button>
//                             <p>{count}</p>
//                             <button onClick={() => { setCount(count => count + 1); setPrice(price => price + 300) }}>+</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default SingleProduct



import axios from 'axios';
import '../Cssfile/Singleproduct.css';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaRegStar, FaStar } from 'react-icons/fa6';
import { IoStarHalf } from 'react-icons/io5';
import { MdCurrencyRupee } from 'react-icons/md';

const SingleProduct = () => {
    let [product, setProduct] = useState([]);
    let [count, setCount] = useState(1);
    let [price, setPrice] = useState(300);

    let { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8081/singleProduct/${id}`)
            .then((res) => {
                setProduct(res.data);
                console.log(res.data);
            }).catch((error) => { console.log(error.message); });
    }, [id]);

    const addToCart = () => {
        axios.put(`http://localhost:8081/cartitems/66a09a34372786b1950510c6/${id}`)
            .then((res) => { console.log(res.data); })
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
                            <Link to='/honey/buyproduct' state={{ id }}>
                                <button>Buy Now</button>
                            </Link>
                        </div>

                        <div className='buynow addtocart'>
                            <button onClick={addToCart}>Add to cart</button>
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
