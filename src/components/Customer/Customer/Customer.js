import React from 'react'
import { Link, useParams } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'
import Order from '../Order/Order';
import Review from '../Review/Review';
import ServiceList from '../Service-List/ServiceList';
import Sidebar from '../Sidebar/Sidebar';
import './customer.style.css';

const Customer = () => {
    const { location } = useParams();

    return (
        <section className="customer-section container-fluid">
            <div className="py-3 px-5">
                <div className="row align-items-center">
                    <div className="col-md-3">
                        <Link to="/">
                            <img src={logo} alt="logo" className="img-fluid nav-logo" />
                        </Link>
                    </div>
                    <div className="col-md-9 d-flex customer-nav justify-content-between align-items-center">
                        <h4>{location}</h4>
                        <p>Nusrat</p>
                    </div>
                </div>
            </div>
            <div className="customer">
                <div className="row">
                    <div className="col-md-3 sidebar">
                        <Sidebar location={location} />
                    </div>
                    <div className="col-md-9 customer-right pt-4 pl-5">
                        {
                            location === 'order' && <Order />
                        }
                        {
                            location === 'review' && <Review />
                        }
                        {
                            location === 'service-List' && <ServiceList />
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Customer
