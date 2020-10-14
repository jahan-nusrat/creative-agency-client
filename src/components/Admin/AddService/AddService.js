import React from 'react'

const AddService = () => {
    return (
        <form onSubmit={(e) => e.preventDefault()} className="addService__form">
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
                        className="form-control mb-4"
                    />
                </div>
                <div className="col-md-6 ">
                    <label htmlFor="">
                        <strong>Icon</strong>
                    </label>
                    <div className="my-2 p-3">
                        <label htmlFor="coverImg" className="uploadImg">
                            <i class="fas fa-cloud-upload-alt"></i> Upload Image
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
            <button type="submit" className="btn px-4 my-3 btn-success">
                SUBMIT
            </button>
        </form>
    )
}

export default AddService
