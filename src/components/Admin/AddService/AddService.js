import React, { useState } from 'react';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import './addservice.style.css';

const AddService = () => {
    const [info, setInfo] = useState({
        service: '',
        description: ''
    })
    const [file, setFile] = useState(null)
    const handleInput = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', file)
        formData.append('description', info.description)
        formData.append('serviceTitle', info.service)

        fetch('https://immense-sands-60151.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('New Service is added')
                }
            })
    }

    return (
        <form className="add-service" onSubmit={handleSubmit} >
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="">
                        <strong>Service Title</strong>
                    </label>
                    <input
                        type="text"
                        className="form-control mb-4"
                        placeholder="Enter Title"
                        name="service"
                        onChange={handleInput}
                        required
                    />
                    <label htmlFor="">
                        <strong>Description</strong>
                    </label>
                    <textarea
                        rows="5"
                        placeholder="Enter Description"
                        className="form-control mb-5"
                        name="description"
                        onChange={handleInput}
                        required
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="">
                        <strong>Icon</strong>
                    </label>
                    <div className="imgUpload">
                        <label htmlFor="coverImg" className="icon-upload px-4 py-2">
                            <FaCloudDownloadAlt className="cloud" /> Upload Image
                        </label>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className=""
                        />
                    </div>
                </div>
            </div>
            <button type="submit" className="btn px-4 my-3">
                Submit
            </button>
        </form>
    )
}

export default AddService
