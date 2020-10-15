import React from 'react'

const FeedbackCard = ({ feedback }) => {
    return (
        <div className="col-lg-4 reviewer">
            <div className="reviewer-details">
                <div className="reviewer-top d-flex align-items-center">
                    <img className="img-fluid" src={feedback.img} alt={feedback.name} />
                    <div className="reviewer-head">
                        <h4>{feedback.name}</h4>
                        <p>{feedback.company}</p>
                    </div>
                </div>
                <div className="review">
                    <p>{feedback.description.slice(0, 80)}...</p>
                </div>
            </div>
        </div>
    )
}

export default FeedbackCard
