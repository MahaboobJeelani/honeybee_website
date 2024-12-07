import React, { useState } from 'react'
import '../Cssfile/Payment.css'
import { LiaNewspaperSolid, LiaFileInvoiceSolid } from "react-icons/lia";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";
import invoicesdata from '../Components/invoices.json'

const Payment = () => {
    let [invoice, setInvoices] = useState(invoicesdata)


    return (
        <div className='adminpayment'>
            <div className='totalinvoices'>
                <h3>Invoices</h3>
                <div className='invoicesdetails'>

                    <div className='invoices'>
                        <div className='invoicestext'>
                            <p><span>582</span><span>Total Invoices</span></p>
                        </div>
                        <div className='invoiceicon1 totalinvoiceicon'>
                            <LiaNewspaperSolid />
                        </div>
                    </div>

                    <div className='invoices'>
                        <div className='invoicestext'>
                            <p><span>346</span><span>Paid Invoices</span></p>
                        </div>
                        <div className='invoiceicon1 invoicepaid'>
                            <IoCheckmarkDoneCircleOutline />
                        </div>
                    </div>
                    <div className='invoices'>
                        <div className='invoicestext'>
                            <p><span>236</span><span>Unpaid Invoices</span></p>
                        </div>
                        <div className='invoiceicon1 uppaid'>
                            <RxCrossCircled />
                        </div>
                    </div>
                    <div className='invoices'>
                        <div className='invoicestext'>
                            <p><span>126</span><span>Invoices Sent</span></p>
                        </div>
                        <div className='invoiceicon1 invoicesend'>
                            <LiaFileInvoiceSolid />
                        </div>
                    </div>

                </div>
            </div>
            <p className='paymenthistory'>Payment History</p>

            <div className='customerinvoices'>

                <div className='billingnav'>
                    <span>ID invoice</span>
                    <span>Date</span>
                    <span>Recipient</span>
                    <span>Email</span>
                    <span>Total Amount</span>
                    <span>Status</span>
                </div>
                {invoice.map((item, no) => {
                    const getStatusStyle = (statuscolor) => {
                        switch (statuscolor.toLowerCase()) {
                            case 'paid':
                                return { color: 'green', backgroundColor: '#D1FFBD' };
                            case 'overdue':
                                return { color: 'red', backgroundColor: '#FFB3B2' };
                            default:
                                return {};
                        }
                    }
                    return (
                        <div className='billingnav invoiceproduct' key={no}>
                            <span>{item.IDVoices}</span>
                            <span>{item.Date}</span>
                            <span>{item.Recipient}</span>
                            <span>{item.Email}</span>
                            <span>{item.TotalAmount}</span>
                            <span className='invoicebtn'><button style={getStatusStyle(item.Status)}>{item.Status}</button></span>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Payment
