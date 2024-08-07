import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Cssfile/Products.css';
import { FaRegStar, FaStar } from 'react-icons/fa6';
import { IoStarHalf } from "react-icons/io5";
import { MdCurrencyRupee } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {
  let [product, setProduct] = useState([]);

  let navigate = useNavigate();
  let token = localStorage.getItem('token')



  useEffect(() => {
    axios.get(`http://localhost:8081/honeydata`)
      .then((res) => {
        setProduct(res.data);
      }).catch((error) => {
        console.log(error.message);
      });
  }, []);


  const addToCart = (id) => {
    let userID;
    if (token) {
      const tokenDecode = jwtDecode(token)
      userID = tokenDecode.findUser._id
    }
    axios.put(`http://localhost:8081/cartitems/${userID}/${id}`)
      .then((res) => {
        const itemName = res.data.cart.find(item => item._id === id)
        toast.success(`${itemName.name} Item added successfully`)
      })
      .catch((error) => console.log(error.message));
  };

  let singleProduct = (id) => {
    navigate(`/honey/product/${id}`)
  }

  return (
    <div className='productcontainer'>
      <div className='trendingproducts'>
        Trending Products
      </div>
      <ToastContainer />
      <div className='popularproduct'>
        {product.map((res) => {
          return (
            <div className='popularcontainer' key={res._id} onClick={() => singleProduct(res._id)}>
              <div className='popularimage'>
                <img src={`${res.imagelink}`} alt="products" width='100px' />
              </div>
              <div className='populattitle'>
                {res.name}
                <span><MdCurrencyRupee />{res.price}</span>
                <div className='rating'>
                  <FaStar className='star' /><FaStar className='star' /><FaStar className='star' /><IoStarHalf className='star' /> <FaRegStar className='star' />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className='productdetailcontainer'>
        {product.map((res) => {
          return (
            <div className='productdetails' key={res._id}>

              <div className='divcontainer' onClick={() => singleProduct(res._id)}>

                <div className='product productimg'>
                  <img src={`${res.imagelink}`} alt="products" />
                </div>
                <div className='title'>
                  {res.name} <span><MdCurrencyRupee />{res.price}</span>
                </div>

                <div className='rating'>
                  <FaStar className='star' /><FaStar className='star' /><FaStar className='star' /><IoStarHalf className='star' /> <FaRegStar className='star' />
                </div>

                <div className='productdescription'>
                  {res.description}
                </div>

              </div>

              <div className='carticon'>
                {
                  token === null ?
                    <Link to='/honey/products' className='productbtn'><button >Buy Now</button></Link> :
                    <Link to='/honey/buyproduct' className='productbtn'><button >Buy Now</button></Link>
                }
                {
                  token === null ?
                    <button>Add to cart</button> :
                    <button onClick={() => addToCart(res._id)}>Add to cart</button>
                }
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
