import React from 'react';
import bg from '../../../images/logos/Frame.png';
import './hero.style.css'

const Hero = () => {
    return (
        <div className="container hero-container">
            <div className="row justify-content-around align-items-center">
                <div className="col-lg-4">
                    <h1>Let’s Grow Your Brand To The Next Level</h1>
                    <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    <button className="btn btn-brand px-4 mt-3">Hire us</button>
                </div>
                <div className="col-lg-6">
                    <img src={bg} alt="bg" className="img-fluid"/>
                </div>
            </div>
        </div>
    )
}

export default Hero
