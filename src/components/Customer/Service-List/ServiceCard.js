import React from 'react'

const ServiceCard = ({ order }) => {
    return (
        <div className="col-lg-5 list mb-3">
            <div className="service-card">
                <div className="service-top">
                    <img className="img-fluid" src={order.icon} alt="icon" />
                    <button className={`btn ${order.decision}`}>{order.decision}</button>
                </div>
                <div className="service-bottom">
                    <h4>{order.service}</h4>
                    <p>{order.description.slice(0, 75)}...</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard
