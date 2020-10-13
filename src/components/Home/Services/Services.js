import React from 'react';
import './sevices.style.css';
import data from './data'
import ServiceItems from './ServiceItems';

const Services = () => {
    return (
        <section className="container service">
            <h3>Provide Awesome <span style={{color: '#7AB259'}}>Services</span> </h3>
            <div className="row">
            {
                data.map(service =>{
                    return <ServiceItems service={service} key={service.id} />
                })
            }
            </div>
        </section>
    )
}

export default Services
