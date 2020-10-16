import React, { useEffect, useState } from 'react';
import './feedback.style.css';
import FeedbackCard from './FeedbackCard';

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    useEffect(() => {
        fetch('https://immense-sands-60151.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setFeedbacks(data.slice(0, 6))
            })
    }, [])

    return (
        <section className="container feedback-container">
            <h3>Clients <span style={{ color: '#7AB259' }}>Feedback</span></h3>
            <div className="row justify-content-center my-5">
                {
                    feedbacks.map(feedback => {
                        return <FeedbackCard feedback={feedback} key={feedback._id} />
                    })
                }
            </div>
        </section>
    )
}

export default Feedback
