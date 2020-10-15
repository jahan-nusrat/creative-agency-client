import React from 'react'

const ServiceCard = ({ order }) => {
    return (
        <div className="col-lg-4 list">
            <div className="service-card">
                <div className="service-top d-flex justify-content-between">
                    <img className="img-fluid" src={order.icon} alt="icon" />
                    <button className={`btn px-4 ${order.decision}`}>{order.decision}</button>
                </div>
                <div className="service-bottom">
                    <h4>{order.service}</h4>
                    <p>{order.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard
