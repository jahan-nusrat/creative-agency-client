import React from 'react';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import './addservice.style.css';

const AddService = () => {
    return (
        <form onSubmit={(e) => e.preventDefault()} className="add-service">
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="">
                        <strong>Service Title</strong>
                    </label>
                    <input
                        required
                        className="form-control mb-4"
                        placeholder="Enter Title"
                    />
                    <label htmlFor="">
                        <strong>Description</strong>
                    </label>
                    <textarea
                        rows="5"
                        required
                        placeholder="Enter Description"
                        className="form-control mb-5"
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="">
                        <strong>Icon</strong>
                    </label>
                    <div className="">
                        <label htmlFor="coverImg" className="icon-upload px-4 py-2">
                            <FaCloudDownloadAlt className="cloud" /> Upload Image
                        </label>
                        <input
                            type="file"
                            accepts="image/*"
                            id="coverImg"
                            className="d-none"
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
