import React from 'react';
import './order.style.css';
import { FaCloudDownloadAlt } from 'react-icons/fa'

const Order = () => {
    const orderId = window.location.search.slice(1)
    return (
        <div className="order-form">
            <div className="row">
                <div className="col-lg-6">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your name / company’s name" />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Your email address" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Company’s name, Designation" />
                        </div>
                        <div className="form-group">
                            <textarea
                                className="form-control"
                                cols="30"
                                rows="3"
                                placeholder="Project Details"
                            ></textarea>
                        </div>
                        <div className="d-flex form-price">
                            <div className="col-6">
                                <input type="number" className="form-control" placeholder="Price" />
                            </div>
                            <div className="col-6">
                                <label htmlFor="coverImg" className="upload py-2 px-3">
                                    <FaCloudDownloadAlt className="icon" />    Upload project file
                                </label>
                                <input
                                    type="file"
                                    accepts="image/*"
                                    id="coverImg"
                                    className="d-none"
                                />
                            </div>
                        </div>
                        <div className="form-group mt-4">
                            <button className="btn btn-brand px-5">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Order
