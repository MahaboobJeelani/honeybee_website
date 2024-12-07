import React, { useEffect, useState } from 'react';
import '../Cssfile/Adminproducts.css';
import { LuPlus } from "react-icons/lu";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { MdDeleteForever, MdModeEdit, MdOutlineCurrencyRupee } from "react-icons/md";
import CreateProduct from './CreateProduct';
import EditProduct from './EditProduct';
import { toast } from 'react-toastify';


const AdminProducts = () => {
    const [products, setProducts] = useState([]);
    const [productview, setProductview] = useState('');
    const [id, setId] = useState('')

    const navigate = useNavigate()

    const renderProduct = () => {
        switch (productview) {
            case 'createproduct':
                return <CreateProduct />;

            case 'editproduct':
                return <EditProduct id={id} />;

            default:
                return null;
        }
    };

    useEffect(() => {
        axios.get(`http://localhost:8081/honeydata`)
            .then((res) => {
                setProducts(res.data);
            }).catch((error) => {
                console.log(error.message);
            });
    }, []);


    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8081/deleteproduct/${id}`)
            .then((res) => {
                toast.success(res.data)
                navigate('/admin')
            })
            .catch((error) => {
                console.log(error.message);
            })
    }



    return (
        <>
            {productview === '' ? (
                <div className='adminproductsview'>
                    <main className='productgridtext'>
                        <p>Products grid</p>
                        <p>
                            <button onClick={() => setProductview('createproduct')} className='createlink'>
                                <LuPlus className='createiconreact' />Create New
                            </button>
                        </p>
                    </main>
                    <div className='productviewgrid'>
                        <div className='admingetproducts'>
                            <input type="text" placeholder='Search Products' />
                            <hr />
                        </div>
                        <div className='adminproductedit'>
                            {products.map((res) =>
                            (
                                <div className='adminproductcart' key={res._id}>
                                    <div className='adminimg'>
                                        <img src={res.imagelink} alt={res.name} />
                                    </div>
                                    <div className='adminproductname'>
                                        <p>{res.name}</p>
                                        <p><MdOutlineCurrencyRupee />{res.price}.00</p>
                                    </div>
                                    <div className='adminproductbtn'>
                                        <button onClick={() => { setProductview('editproduct'); setId(res._id) }}>
                                            <Link className='editicon'>
                                                <MdModeEdit /> Edit
                                            </Link>
                                        </button>

                                        <button className='deletebtnicon' onClick={() => deleteHandler(res._id)}>
                                            <Link to={`/deleteproduct/${res._id}`} className='editicon deleteiconbtn'>
                                                <MdDeleteForever />Delete
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                renderProduct()
            )}
        </>
    );
};

export default AdminProducts;
