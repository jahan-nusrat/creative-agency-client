import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import './nav.style.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/">
                <img className="img-fluid nav-logo" src={logo} alt="logo"/>
            </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-4">
                    <Link to="/home">Home</Link>
                </li>
                <li className="nav-item mr-4">
                    <Link to="/home">Our Portfolio</Link>
                </li>
                <li className="nav-item mr-4">
                    <Link to="/home">Out Team</Link>
                </li>
                <li className="nav-item mr-4">
                    <Link to="/home">Contact Us</Link>
                </li>
                <li className="nav-item mr-4">
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
        </nav>
    )
}

export default Navbar