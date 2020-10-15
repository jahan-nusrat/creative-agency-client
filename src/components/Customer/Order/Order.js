import React, { useState } from 'react';
import './order.style.css';
import { useSelector } from 'react-redux';

const Order = () => {
    const loggedIn = useSelector(state => state.userInfo)
    const selectedOrder = useSelector(state => state.service)

    const [orderInfo, setOrderInfo] = useState({
        email: loggedIn.email,
        decision: 'pending',
        service: selectedOrder.service || '',
        icon: selectedOrder.icon,
        description: '',
        price: selectedOrder.price || '',
    })

    const handleInput = (e) => {
        setOrderInfo({
            ...orderInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderInfo)
        }).then((result) => {
            alert('Your Order Has Been Placed')
        });
    }

    return (
        <div className="order-form">
            <div className="row">
                <div className="col-lg-6">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" value={loggedIn.name} className="form-control" placeholder="Your name / company’s name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" value={loggedIn.email} className="form-control" placeholder="Your email address" required />
                        </div>
                        <div className="form-group">
                            <input type="text" name="service" onChange={handleInput} value={orderInfo.service} className="form-control" placeholder="Service" required />
                        </div>
                        <div className="form-group">
                            <textarea
                                className="form-control"
                                cols="30"
                                rows="3"
                                name="description"
                                onChange={handleInput}
                                placeholder="Project Details"
                                required
                            ></textarea>
                        </div>
                        <div className="d-flex form-price">
                            <div className="col-6">
                                <input type="number" name="price" onChange={handleInput} value={orderInfo.price} className="form-control" placeholder="Price" required />
                            </div>
                        </div>
                        <div className="form-group mt-4">
                            <button className="btn btn-brand px-5">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Order
