import React from 'react'

const ServiceItems = ({ service }) => {
    return (
        <div className="col-lg-4">
            <div className="service-box">
                <div className="service-icon">
                    <img src={service.icon} alt="" />
                </div>
                <div className="service-details">
                    <h4>{service.service}</h4>
                    <p>{service.description}</p>
                </div>
            </div>

        </div>
    )
}

export default ServiceItems
