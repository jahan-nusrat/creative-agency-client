import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'
import Order from '../Order/Order';
import Review from '../Review/Review';
import ServiceList from '../Service-List/ServiceList';
import Sidebar from '../Sidebar/Sidebar';
import './customer.style.css';

const Customer = () => {
    const { location } = useParams();
    const [user, setUser] = useState({})
    useEffect(() => {
        setUser(JSON.parse(sessionStorage.getItem('info')))
    }, [])
    return (
        <section className="customer-section container-fluid">
            <div className="py-3 px-5">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-3 col-sm-4 col-12">
                        <Link to="/">
                            <img src={logo} alt="logo" className="img-fluid nav-logo" />
                        </Link>
                    </div>
                    <div className="col-md-9 col-sm-9 col-9 d-flex customer-nav justify-content-between align-items-center">
                        <h4>{location}</h4>
                        <button className="btn shadow">{user.name}</button>
                    </div>
                </div>
            </div>
            <div className="customer">
                <div className="row justify-content-center">
                    <div className="col-md-3 col-sm-8 col-10 sidebar">
                        <Sidebar location={location} />
                    </div>
                    <div className="col-md-9 col-sm-12 col-12 customer-right pt-5 pl-5">
                        {
                            location === 'order' && <Order user={user} />
                        }
                        {
                            location === 'review' && <Review user={user} />
                        }
                        {
                            location === 'service list' && <ServiceList user={user} />
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Customer
