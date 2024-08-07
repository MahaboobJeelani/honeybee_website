import React, { useState } from 'react'
import '../Cssfile/Userorder.css'
import { FaAngleLeft, FaArrowRight, FaCcVisa, FaCcMastercard } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { LuUser2 } from "react-icons/lu";
import { TfiDirectionAlt } from "react-icons/tfi";
import { BiSolidCity } from "react-icons/bi";
import { MdPhoneIphone, MdOutlineCurrencyRupee, MdOutlineLocationOn, MdOutlineMail } from "react-icons/md"
import { TbMapPinCode } from "react-icons/tb";
import { SiHdfcbank, SiIcicibank, SiAmericanexpress } from "react-icons/si";



const Userorder = () => {
  const navigate = useNavigate()

  const [address, setAddress] = useState('');
  const [street, setStreet] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div className='userorderdetails'>
      <div className='userorderdata'>
        <span onClick={() => navigate(-1)}><FaAngleLeft />Back to Cart</span>
        <hr />
        <div className='orderdetails'>
          <div className='orderdetailsinfo'>
            <h3>Checkout</h3>

            <div className='personalinfo'>
              <p>Personal Info</p>

              <div className='orderuserdetails'>
                <div className='orderinput '>
                  <LuUser2 /> <input type="text" placeholder='first Name' />
                </div>
                <div className='orderinput orderinputtext'>
                  <LuUser2 /> <input type="text" placeholder='last Name' />
                </div>
              </div>

              <div className='orderemail'>
                <MdOutlineMail /><input type="text" placeholder='email' />
              </div>
            </div>

            <div className='shippingaddress'>
              <h6>Shipping Address Info</h6>

              <div className='shippingdetails'>
                <div className='orderemail shippinginputs'>
                  <MdOutlineLocationOn /> <input type="text" placeholder='address' />
                </div>

                <div className='orderemail shippinginputs'>
                  <BiSolidCity /> <input type="text" placeholder='apartment, state etc...' />
                </div>

                <div className='orderuserdetails'>
                  <div className='orderinput'>
                    <TfiDirectionAlt /> <input type="text" placeholder='city' />
                  </div>
                  <div className='orderinput orderinputtext'>
                    <TfiDirectionAlt /> <input type="text" placeholder='country/region' />
                  </div>
                </div>

                <div className='orderuserdetails'>
                  <div className='orderinput '>
                    <TfiDirectionAlt /> <input type="text" placeholder='state' />
                  </div>
                  <div className='orderinput orderinputtext'>
                    <TbMapPinCode /> <input type="text" placeholder='zipcode' />
                  </div>
                </div>

                <div className='orderemail shippinginputs'>
                  <MdPhoneIphone /> <input type="text" placeholder='phone' />
                </div>
                <span> <input type="checkbox" /> save this information for next time</span>
              </div>


            </div>
          </div>

          <div className='orderdetailsinfo'>
            <div className='ordersummary'>
              <h3>Order Summary</h3>
              <div className='itemdata'>
                <div className='itemimage'>

                </div>
                <div className='itemtextcontainer'>
                  <p>Honey</p>
                  <div className='itemname'>
                    <p>Dhabur</p> <p><MdOutlineCurrencyRupee />300</p>
                  </div>
                </div>
              </div>

              <div className='itemsubtotal'>
                <span>
                  <p>Subtotal</p>
                  <p><MdOutlineCurrencyRupee />300</p>
                </span>

                <span>
                  <p>Shipping Charges</p>
                  <p><MdOutlineCurrencyRupee />50</p>
                </span>

                <span>
                  <p>Total</p>
                  <p><MdOutlineCurrencyRupee />300</p>
                </span>
              </div>
              <p>Delivery fee and taxes (if applicable) to be calculated during checkout</p>
              <aside>
                <button>Continue to Shipping</button>
              </aside>

              <p>Accepted secure payment methods</p>
              <p className='creditcardsicons'><FaCcVisa /> <FaCcMastercard /> <SiHdfcbank /> <SiIcicibank /> <SiAmericanexpress /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Userorder
