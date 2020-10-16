import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'
import AddService from '../AddService/AddService';
import AllServices from '../AllServices/AllServices';
import LeftNav from '../LeftNav/LeftNav';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import '../../Customer/Customer/customer.style.css';

const Admin = () => {
    const { location } = useParams();
    const [user, setUser] = useState({})
    useEffect(() => {
        setUser(JSON.parse(sessionStorage.getItem('info')))
    }, [])
    return (
        <section className="customer-section container-fluid">
            <div className="py-3 px-5">
                <div className="row align-items-center">
                    <div className="col-md-3 col-3">
                        <Link to="/">
                            <img src={logo} alt="logo" className="img-fluid nav-logo" />
                        </Link>
                    </div>
                    <div className="col-md-9 col-9 d-flex customer-nav justify-content-between align-items-center">
                        <h4>{location}</h4>
                        <button className="btn shadow">{user.name}</button>
                    </div>
                </div>
            </div>
            <div className="customer">
                <div className="row">
                    <div className="col-md-3 col-sm-4 col-12 sidebar">
                        <LeftNav location={location} />
                    </div>
                    <div className="col-md-9 col-sm-8 col-12 customer-right pt-3 pl-4">
                        {
                            location === 'services list' && <AllServices />
                        }
                        {
                            location === 'add service' && <AddService />
                        }
                        {
                            location === 'make admin' && <MakeAdmin />
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Admin
