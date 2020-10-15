import React, { useState, useEffect } from 'react';
import './sevices.style.css';
import ServiceItems from './ServiceItems';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(result => {
                setServices(result)
            })
    }, [])

    return (
        <section className="container service">
            <h3>Provide Awesome <span style={{color: '#7AB259'}}>Services</span> </h3>
            <div className="row mt-5">
            {
                    services.map(service => {
                        return <ServiceItems service={service} key={service._id} />
                })
            }
            </div>
        </section>
    )
}

export default Services;
