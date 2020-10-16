import React from 'react';
import load from '../../images/load.gif'

const LOading = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-4 text-center">
                    <img className="img-fluid" src={load} alt="load" />
                    <h4>Loading...</h4>
                </div>
            </div>
        </div>
    )
}

export default LOading;
