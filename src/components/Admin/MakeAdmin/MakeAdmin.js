import React, { useState } from 'react';
import './makeadmin.style.css'

const MakeAdmin = () => {
    const [email, setEmail] = useState({
        email: ''
    })

    const handleInput = (e) => {
        setEmail({
            ...email,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(email)
        })
            .then(res => res.json())
            .then(data => {
                alert("A New Admin is Added")
            })
    }

    return (
        <div className="row justify-content-center">
            <form onSubmit={handleSubmit} className="col-12">
                <div className="make-admin pt-4 px-4">
                    <label htmlFor="email">Email</label>
                    <br />
                    <input
                        type="email"
                        name="email"
                        onChange={handleInput}
                        placeholder="johnSmith@gmail.com"
                        className="py-1 px-3 w-50"
                        required
                    />
                    <button type="submit" class="btn btn-success px-4 ml-2">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default MakeAdmin
