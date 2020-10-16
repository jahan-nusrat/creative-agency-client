import React, { useState, useEffect } from 'react';
import './sevices.style.css';
import ServiceItems from './ServiceItems';
import LOading from '../../Loading/LOading';

const Services = () => {
    const [services, setServices] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(result => {
                setServices(result.slice(0, 6))
                setIsLoading(false)
            })
    }, [])

    return (
        <section className="container service">
            <h3>Provide Awesome <span style={{color: '#7AB259'}}>Services</span> </h3>
            {
                isLoading ? <LOading /> : <div className="row justify-content-center mt-5">
            {
                    services.map(service => {
                        return <ServiceItems service={service} key={service._id} />
                })
            }
            </div>
            }
        </section>
    )
}

export default Services;
