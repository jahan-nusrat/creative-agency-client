import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import ServiceCard from './ServiceCard';
import './serviceList.style.css';

const ServiceList = () => {
    const loggedIn = useSelector(state => state.userInfo)
    const [myOrders, setMyOrders] = useState([])
    useEffect(
        () => {
            fetch(`https://localhost:5000/my-orders/${loggedIn.email}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => response.json())
                .then((result) => {
                    setMyOrders(result);
                });
        },
        [loggedIn.email]
    );

    return (
        <div className="serviceList-section">
            <div className="row">
                {
                    myOrders.map(order => {
                        return <ServiceCard order={order} key={order._id} />
                    })
                }
            </div>
        </div>
    )
}

export default ServiceList
