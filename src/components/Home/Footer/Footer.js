import React from 'react'
import ContactForm from './ContactForm';
import './footer.style.css';

const Footer = () => {
    return (
        <div className="container footer-container">
            <div className="row justify-content-between">
                <div className="col-lg-4 footer-left">
                    <h3>Let us handle your project, professionally.</h3>
                    <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>
                <div className="col-lg-6 footer-right">
                    <ContactForm />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-5 secondary-footer">
                    <p>copyright Orange labs {new Date().getFullYear()}</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
