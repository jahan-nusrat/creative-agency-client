import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './review.style.css';

const Review = ({user}) => {
    const loggedIn = useSelector(state => state.userInfo);
    const [review, setReview] = useState({
        img: user.img,
        name: user.name,
        company: '',
        description: '',
    })

    const handleInput = (e) => {
        setReview({
            ...review,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://immense-sands-60151.herokuapp.com/addReviews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
        }).then((result) => {
            alert('Thanks for your feedback')
        });
    }

    return (
        <div className="review-form">
            <div className="row">
                <div className="col-lg-6">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name='name'
                                className="form-control"
                                placeholder="Your name "
                                value={review.name}
                            />
                        </div>
                        <div className="form-group">
                            <input onChange={handleInput} type="text" name="company" className="form-control" placeholder="Company’s name, Designation" />
                        </div>
                        <div className="form-group">
                            <textarea
                                className="form-control"
                                onChange={handleInput}
                                name="description"
                                cols="30"
                                rows="5"
                                placeholder="Description"
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-brand px-5">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Review
