import React from 'react'
import { Link } from 'react-router-dom';
import { FaPlus, FaUserPlus, FaNewspaper } from 'react-icons/fa';

const LeftNav = ({ location }) => {
    return (
        <nav className="row justify-content-center">
            <ul className="col-md-6 mt-5 nav flex-column sidebar-details">
                <li className="nav-item mb-3">
                    <Link className={` ${location === "services list" ? "active" : "inactive"}`} to="/admin/services%20list">
                        <FaNewspaper className="icon" />Services List
                    </Link>
                </li>
                <li className="nav-item mb-3">
                    <Link className={`${location === "add service" ? "active" : "inactive"}`} to="/admin/add%20service"
                    >
                        <FaPlus className="icon" /> Add Service
                    </Link>
                </li>
                <li className="nav-item mb-3">
                    <Link className={`${location === "make admin" ? "active" : "inactive"}`} to="/admin/make%20admin">
                        <FaUserPlus className="icon" />  Make Admin
                </Link>
                </li>
            </ul>
        </nav>
    )
}

export default LeftNav
