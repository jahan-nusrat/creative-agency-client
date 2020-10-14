import React from 'react'
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaRocketchat, FaNewspaper } from 'react-icons/fa'

const Sidebar = ({ location }) => {
    return (
        <nav className="row justify-content-center">
            <ul className="col-md-6 mt-5 nav flex-column sidebar-details">
                <li className="nav-item mb-3">
                    <Link className={` ${location === "order" ? "active" : "inactive"}`} to="/customer/order">
                        <FaShoppingCart className="icon" />    Order
                    </Link>
                </li>
                <li className="nav-item mb-3">
                    <Link className={`${location === "service list" ? "active" : "inactive"}`} to="/customer/service%20list"
                    >
                        <FaNewspaper className="icon" />  Service List
                    </Link>
                </li>
                <li className="nav-item mb-3">
                    <Link className={`${location === "review" ? "active" : "inactive"}`} to="/customer/review">
                        <FaRocketchat className="icon" />   Review
                </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar
