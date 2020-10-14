import React from 'react';
import './feedback.style.css';
import data from './data'
import FeedbackCard from './FeedbackCard';

const Feedback = () => {
    return (
        <section className="container feedback-container">
            <h3>Clients <span style={{ color: '#7AB259' }}>Feedback</span></h3>
            <div className="row my-5">
                {
                    data.map(feedback => {
                        return <FeedbackCard feedback={feedback} key={feedback.id} />
                    })
                }
            </div>
        </section>
    )
}

export default Feedback
