import React from 'react';
import google from '../../../images/logos/google.png';
import airbnb from '../../../images/logos/airbnb.png';
import netflix from '../../../images/logos/netflix.png';
import slack from '../../../images/logos/slack.png';
import uber from '../../../images/logos/uber.png';
import './partner.style.css'

const Partners = () => {
    return (
        <div className="container mt-5 partner">
            <div className="row justify-content-center">
                <div className="col-md col-sm-4 col-5 mb-2">
                    <img src={google} alt="google" className="img-fluid"/>
                </div>
                <div className="col-md col-sm-4 col-5 mb-2">
                    <img src={airbnb} alt="airbnb" className="img-fluid"/>
                </div>
                <div className="col-md col-sm-4 col-5 mb-2">
                    <img src={netflix} alt="netflix" className="img-fluid"/>
                </div>
                <div className="col-md col-sm-4 col-5 mb-2">
                    <img src={slack} alt="slack" className="img-fluid"/>
                </div>
                <div className="col-md col-sm-4 col-5 mb-2">
                    <img src={uber} alt="uber" className="img-fluid"/>
                </div>
            </div>
        </div>
    )
}

export default Partners
