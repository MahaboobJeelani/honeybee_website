import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../Cssfile/Products.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IoIosCart, IoIosStarOutline, IoMdStarHalf, IoMdStarOutline } from 'react-icons/io'
import { FaRegStar, FaRupeeSign, FaStar } from 'react-icons/fa6';
import { IoStarHalf } from "react-icons/io5";
import { MdCurrencyRupee } from 'react-icons/md';
const Products = () => {
  let [product, setProduct] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:8081/honeydata`)
      .then((res) => {
        setProduct(res.data)
        console.log(res.data);
      }).catch((error) => {
        console.log(error.message);
      })
  }, [])

  return (
    <div className='productcontainer'>

      <div className='popularproduct'>
        {product.map((res) => {
          return (
            <div className='popularcontainer'>

              <div className='popularimage'>
                <img src={`${res.imagelink}`} alt="products" width='100px' />
              </div>
              <div className='populattitle'>
                {res.name}
                <span><MdCurrencyRupee />300</span>
                <div className='rating'>
                  <FaStar className='star' /><FaStar className='star' /><FaStar className='star' /><IoStarHalf className='star' /> <FaRegStar className='star' />
                </div>
              </div>

            </div>
          )
        })}
      </div>

      <div className='productdetailcontainer'>

        {product.map((res) => {
          return (

            <div className='productdetails'>

              <div className='product productimg'>
                <img src={`${res.imagelink}`} alt="products" width='200px' />
              </div>

              <div className='title'>
                {res.name} <span><MdCurrencyRupee />300</span>
              </div>

              <div className='rating'>
                <FaStar className='star' /><FaStar className='star' /><FaStar className='star' /><IoStarHalf className='star' /> <FaRegStar className='star' />
              </div>

              <div className='productdescription'>
                {res.description}
              </div>

              <div className='carticon'>
                <button>By Now</button>
                <button>Add to cart</button>
              </div>

            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Products