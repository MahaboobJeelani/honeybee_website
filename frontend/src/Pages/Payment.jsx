import React from 'react'
import '../Cssfile/Payment.css'
import { LiaNewspaperSolid, LiaFileInvoiceSolid } from "react-icons/lia";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";

const Payment = () => {

    return (
        <div className='adminpayment'>
            <div className='totalinvoices'>
                <h3>Invoices</h3>
                <div className='invoicesdetails'>

                    <div className='invoices'>
                        <div className='invoicestext'>
                            <p><span>582</span><span>Total Invoices</span></p>
                        </div>
                        <div className='invoiceicon'>
                            <LiaNewspaperSolid />
                        </div>
                    </div>


                    <div className='invoices'>
                        <div className='invoicestext'>
                            <p><span>346</span><span>Paid Invoices</span></p>
                        </div>
                        <div className='invoiceicon'>
                            <IoCheckmarkDoneCircleOutline />
                        </div>
                    </div>
                    <div className='invoices'>
                        <div className='invoicestext'>
                            <p><span>236</span><span>Unpaid Invoices</span></p>
                        </div>
                        <div className='invoiceicon'>
                            <RxCrossCircled />
                        </div>
                    </div>
                    <div className='invoices'>
                        <div className='invoicestext'>
                            <p><span>126</span><span>Invoices Sent</span></p>
                        </div>
                        <div className='invoiceicon'>
                            <LiaFileInvoiceSolid />
                        </div>
                    </div>






                </div>
            </div>
        </div>
    )
}

export default Payment
