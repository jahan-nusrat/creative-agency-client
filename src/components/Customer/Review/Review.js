import React from 'react';
import './review.style.css';

const Review = () => {
    return (
        <div className="review-form">
            <div className="row">
                <div className="col-lg-6">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Your name "
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Company’s name, Designation" />
                        </div>
                        <div className="form-group">
                            <textarea
                                className="form-control"
                                cols="30"
                                rows="5"
                                placeholder="Description"
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-brand px-5">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Review
