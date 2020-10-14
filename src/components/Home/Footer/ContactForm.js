import React from 'react'

const ContactForm = () => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Your email address"
                />
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Your name / company’s name" />
            </div>
            <div className="form-group">
                <textarea
                    className="form-control"
                    cols="30"
                    rows="10"
                    placeholder="Your message"
                ></textarea>
            </div>
            <div className="form-group">
                <button className="btn btn-brand px-5">Send</button>
            </div>
        </form>
    )
}

export default ContactForm
