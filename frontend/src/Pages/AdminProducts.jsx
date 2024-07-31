import React, { useEffect, useState } from 'react'
import '../Cssfile/Adminproducts.css'
import { LuPlus } from "react-icons/lu";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdDeleteForever, MdModeEdit } from "react-icons/md";

const AdminProducts = () => {
    let [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8081/honeydata`)
            .then((res) => {
                setProducts(res.data);
            }).catch((error) => {
                console.log(error.message);
            });
    }, [])
    return (
        <div className='adminproductsview'>
            <main className='productgridtext'>
                <p>Products grid</p>
                <p><button> <LuPlus />Create New</button></p>
            </main>
            <div className='productviewgrid'>
                <div className='admingetproducts'>
                    <input type="text" placeholder='Search Products' />
                    <hr />
                </div>
                <div className='adminproductedit'>
                    {products.map((res) => {
                        return (
                            <div className='adminproductcart'>
                                <div className='adminimg'>
                                    <img src={res.imagelink} alt={res.name} />
                                </div>
                                <div className='adminproductname'>
                                    <p>{res.name}</p>
                                    <p>{res.price}</p>
                                </div>
                                <div className='adminproductbtn'>
                                    <button><Link><MdModeEdit />Edit</Link></button>
                                    <button><Link><MdDeleteForever />Delete</Link></button>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default AdminProducts
