import './Home.scss'
import {Link} from 'react-router-dom'
import { useState } from 'react'

function Home() {

    const invoiceBox = [
        { receiptNo: 'RT545', date: '19 Aug 2023', clientName: 'Jason Kidd', price: '356.00', status: 'Paid'},
        { receiptNo: 'US535', date: '20 Sept 2023', clientName: 'Mario', price: '483.00', status: 'Pending'},
        { receiptNo: 'YA493', date: '25 Dec 2023', clientName: 'Yannick', price: '833.00', status: 'Draft'},
        { receiptNo: 'YA669', date: '01 Dec 2023', clientName: 'johnny', price: '250.00', status: 'Pending'},
        { receiptNo: 'JA896', date: '31 Jul 2023', clientName: 'Janice Ng', price: '250.00', status: 'Draft'},
        { receiptNo: 'TG001', date: '02 Feb 2023', clientName: 'Marc Antoine', price: '250.00', status: 'Paid'}
    ]

    const filteringStatus = [
        {id: 1, status: 'Draft'},
        {id: 2, status: 'Pending'},
        {id: 3, status: 'Paid'}
    ]

    // const [invoices, setInvoices] = useState([])
    const [invoices, setInvoices] = useState(invoiceBox)
    const [selectedStatus, setSelectedStatus] = useState([])

    const [filterBox, setFilterBox] = useState(false)

    const handleFilterBoxState = () => {
        setFilterBox(!filterBox);
    }

    const handleFilterStatus = (event) => {
        if(event.target.target) {
            console.log()
        }
    
    }

    const filterInvoices = (status) => {
        setInvoices((prev) => {
            return prev.filter(invoice => {
                return invoice.status == status
            })
        })
    }

    selectedStatus.map(status => {
        console.log(status)
    })
    const filtertest = ({status}) => {
        // console.log(status)
        // setInvoices((prev) => {
        //     return prev.filter(invoice => {
        //         // return invoice.status == status
        //     })
        // })
    }

    // console.log(selectedStatus)

    return (
        <div className="home">
            <div className='home-container'>
                <div className='header'>
                    <div className='invoice'>
                        <h1>Invoices</h1>
                        <p>There are 4 total invoices</p>
                        {/* <p>No invoices</p> */}
                    </div>
                    <div className='status'>
                        <div className='filter-status'>
                            <span onClick={handleFilterBoxState}>
                                Filter by status
                            </span>
                            <img src='/starter-code/assets/icon-arrow-down.svg' />
                            {filterBox && <div className='select-status'>
                                <form>
                                    {filteringStatus.map(status => {
                                        return (
                                            <div key={status.id} className='status-checkbox'>
                                                <label onChange={(e) => {
                                                    if(e.target.checked) {
                                                        setSelectedStatus([
                                                            ...selectedStatus,
                                                            {status: status.status}
                                                        ])
                                                        filterInvoices(status.status)
                                                        // filtertest(...selectedStatus)

                                                        // console.log(selectedStatus.length)
                                                    } else {
                                                        setInvoices(invoiceBox)
                                                        setSelectedStatus(
                                                            selectedStatus.filter(status => status == status.status)
                                                        )
                                                    }
                                                        // console.log(selectedStatus)

                                                }}>
                                                    <input type='checkbox' />
                                                    {status.status}
                                                </label>
                                            </div>
                                        )
                                    })}
                                    {/* <div className='pending-checkbox'>
                                        <label>
                                            <input type='checkbox' onChange={(e) => {
                                                if(e.target.checked) {
                                                    filterInvoices('Pending')
                                                } else {
                                                    setInvoices(invoiceBox)
                                                }
                                            }} />
                                            Pending
                                        </label>
                                    </div> */}
                                    {/* <div className='paid-checkbox'>
                                        <label>
                                            <input type='checkbox' />
                                            Paid
                                        </label>
                                    </div> */}
                                </form>
                            </div>}
                        </div>
                        <div className='add-invoice-btn'>
                            <div className='arrow-plus-wrapper'>
                                <img src='/starter-code/assets/icon-plus.svg' />
                            </div>
                            <span>New Invoice</span>
                        </div>
                    </div>
                </div>
                <div className='invoices-wrapper'>
                    <div className='zero-invoices-section' style={{display: 'none'}}>
                        <img src='/starter-code/assets/illustration-empty.svg' />
                        <div className='text-content'>
                            <h2>There is nothing here</h2>
                            <p>Create an invoive by clicking the <b>New invoice</b> button and get started</p>
                        </div>
                    </div>
                    <div className='user-invoices'>
                        {invoices && invoices.map(invoice => {
                            return (
                                <Link key={invoice.receiptNo} to='/invoice/12'>
                                    <div className='invoice-box'>
                                        <div className='details1'>
                                            <div className='invoice-receipt-no'>
                                                <p> <span>#</span>{invoice.receiptNo} </p>
                                            </div>
                                            <div className='invoice-due-date'>
                                                <p>Due {invoice.date}</p>
                                            </div>
                                            <div className='invoice-client-name'>
                                                <p>{invoice.clientName}</p>
                                            </div>
                                        </div>
                                        <div className='details2'>
                                            <div className='invoice-price'>
                                                <p>${invoice.price}</p>
                                            </div>
                                            {/* <div className='invoice-status paid'> */}
                                            <div className={`invoice-status ${invoice.status.toLowerCase()}`}>
                                                <span className='dot'></span>
                                                <p>{invoice.status}</p>
                                            </div>
                                            <img src='/starter-code/assets/icon-arrow-right.svg' /> 
                                        </div>
                                    </div>
                                </Link> 
                            )
                        }) }
                        {/* <Link to='/invoice/12'>
                            <div className='invoice-box'>
                                <div className='details1'>
                                    <div className='invoice-receipt-no'>
                                        <p> <span>#</span>RT3080 </p>
                                    </div>
                                    <div className='invoice-due-date'>
                                        <p>Due 19 Aug 2021</p>
                                    </div>
                                    <div className='invoice-client-name'>
                                        <p>Jensen Huang</p>
                                    </div>
                                </div>
                                <div className='details2'>
                                    <div className='invoice-price'>
                                        <p>$334.40</p>
                                    </div>
                                    <div className='invoice-status paid'>
                                        <span className='dot'></span>
                                        <p>Paid</p>
                                    </div>
                                    <img src='/starter-code/assets/icon-arrow-right.svg' /> 
                                </div>
                            </div>
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home