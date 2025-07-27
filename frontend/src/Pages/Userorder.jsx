import React, { useEffect, useState } from 'react';
import '../Cssfile/Userorder.css';
import axios from 'axios';
import { FaAngleLeft, FaCcVisa, FaCcMastercard } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { LuUser2 } from "react-icons/lu";
import { TfiDirectionAlt } from "react-icons/tfi";
import { BiSolidCity } from "react-icons/bi";
import { MdPhoneIphone, MdOutlineCurrencyRupee, MdOutlineLocationOn, MdOutlineMail } from "react-icons/md";
import { TbMapPinCode } from "react-icons/tb";
import { SiHdfcbank, SiIcicibank, SiAmericanexpress } from "react-icons/si";
import { jwtDecode } from 'jwt-decode';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Userorder = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [street, setStreet] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const userData = localStorage.getItem('token');
    if (userData) {
      const decodedToken = jwtDecode(userData);
      const user = decodedToken.findUser;
      setUser(user);
      setFirstname(user.username);
      setEmail(user.email);

      axios.get(`http://localhost:8081/api/user/${user._id}`)
        .then((res) => {
          setCartItems(res.data.cart);
        })
        .catch((error) => {
          console.log(error.message);
          toast.error('Failed to load cart items.');
        });
    }
  }, []);

  const orderHandler = () => {
    if (!user) return;

    const payload = {
      address,
      street,
      state,
      city,
      zipcode,
      country,
      phone
    };

    if (address === '' || street === '' || state === '' || city === '' || zipcode === '' || country === '' || phone === '') {
      toast.warning('Address fields empty');
      // return;
    }
    else {
      axios.post(`http://localhost:8081/placeorder/${user._id}`)
        .then(() => {
          axios.post(` http://localhost:8081/address/${user._id}`, payload)
            .then(() => {
              toast.success("Order Placed Successfully");
              navigate('/honey/orderitems');
            })
            .catch((error) => {
              console.log(error.message);
              toast.error('Failed to save address.');
            });
        })
        .catch((error) => {
          console.log(error.message);
          toast.error(' Failed to place order.');
        });
    }
  };

  return (
    <div className='userorderdetails'>
      <ToastContainer />
      <div className='userorderdata'>
        <span onClick={() => navigate(-1)}><FaAngleLeft />Back to Cart</span>
        <hr />
        <div className='orderdetails'>
          <div className='orderdetailsinfo'>
            <h3>Checkout</h3>

            <div className='personalinfo'>
              <p>Personal Info</p>

              <div className='orderuserdetails'>
                <div className='orderinput'>
                  <LuUser2 /> <input type="text" placeholder='First Name' value={firstname} readOnly />
                </div>
                <div className='orderinput orderinputtext'>
                  <LuUser2 /> <input type="text" placeholder='Last Name (optional)' value={lastname} onChange={(e) => setLastname(e.target.value)} />
                </div>
              </div>

              <div className='orderemail'>
                <MdOutlineMail /><input type="text" placeholder='Email' value={email} readOnly />
              </div>
            </div>

            <div className='shippingaddress'>
              <h6>Shipping Address Info</h6>
              <div className='shippingdetails'>
                <div className='orderemail shippinginputs'>
                  <MdOutlineLocationOn />
                  <input type="text" placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className='orderemail shippinginputs'>
                  <BiSolidCity />
                  <input type="text" placeholder='Apartment, suite, etc...' value={street} onChange={(e) => setStreet(e.target.value)} />
                </div>
                <div className='orderuserdetails'>
                  <div className='orderinput'>
                    <TfiDirectionAlt /> <input type="text" placeholder='City' value={city} onChange={(e) => setCity(e.target.value)} />
                  </div>
                  <div className='orderinput orderinputtext'>
                    <TfiDirectionAlt /> <input type="text" placeholder='Country/Region' value={country} onChange={(e) => setCountry(e.target.value)} />
                  </div>
                </div>
                <div className='orderuserdetails'>
                  <div className='orderinput'>
                    <TfiDirectionAlt /> <input type="text" placeholder='State' value={state} onChange={(e) => setState(e.target.value)} />
                  </div>
                  <div className='orderinput orderinputtext'>
                    <TbMapPinCode /> <input type="text" placeholder='Zipcode' value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
                  </div>
                </div>
                <div className='orderemail shippinginputs'>
                  <MdPhoneIphone /> <input type="text" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <span><input type="checkbox" /> Save this information for next time</span>
              </div>
            </div>
          </div>

          <div className='orderdetailsinfo'>
            <div className='ordersummary'>
              <h3>Order Summary</h3>

              {cartItems.length > 0 && (
                <div className='itemdata'>
                  <div className='itemimage'>
                    <img src={cartItems[0].imagelink} alt={cartItems[0].name} />
                  </div>
                  <div className='itemtextcontainer'>

                    <p>{cartItems[0].name}</p>

                    <div className='itemname'>
                      <p>{cartItems[0].brand}</p>
                      <p><MdOutlineCurrencyRupee />{cartItems[0].price}</p>
                    </div>

                  </div>
                </div>
              )}

              <div className='itemsubtotal'>
                <span>
                  <p>Items Selected</p>
                  <p>{cartItems.length}</p>
                </span>
                <span>
                  <p>Subtotal</p>
                  <p><MdOutlineCurrencyRupee />{cartItems.reduce((total, item) => total + item.price, 0)}</p>
                </span>

                <span>
                  <p>Shipping Charges</p>
                  <p><MdOutlineCurrencyRupee />50</p>
                </span>

                <span>
                  <p>Total</p>
                  <p><MdOutlineCurrencyRupee />{cartItems.reduce((total, item) => total + item.price, 0) + 50}</p>
                </span>
              </div>
              <p>Delivery fee and taxes (if applicable) to be calculated during checkout</p>
              <aside onClick={orderHandler}>
                <button>Continue to Shipping</button>
              </aside>

              <p>Accepted secure payment methods</p>
              <p className='creditcardsicons'><FaCcVisa /> <FaCcMastercard /> <SiHdfcbank /> <SiIcicibank /> <SiAmericanexpress /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userorder;
