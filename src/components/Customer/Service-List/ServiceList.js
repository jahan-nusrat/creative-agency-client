import React, { useEffect } from 'react'
import { useState } from 'react';
import ServiceCard from './ServiceCard';
import './serviceList.style.css';
import LOading from '../../Loading/LOading'

const ServiceList = ({ user }) => {
    const [myOrders, setMyOrders] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch(`https://immense-sands-60151.herokuapp.com/my-orders`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setMyOrders(data)
                    setIsLoading(false)
                } 
            })
            .catch(err => console.log(err))
    }, [user.email])

    return (
        <div className="serviceList-section">
            {
                isLoading ? <LOading /> : <div className="row">
                {
                    myOrders.map(order => {
                        return <ServiceCard order={order} key={order._id} />
                    })
                }
            </div>
            }
        </div>
    )
}

export default ServiceList
