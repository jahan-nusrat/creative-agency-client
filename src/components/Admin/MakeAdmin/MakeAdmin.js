import React from 'react'

const MakeAdmin = () => {
    return (
        <form onSubmit={(e) => e.preventDefault()} className="p-5">
            <label htmlFor="email">Email</label>
            <br />
            <input
                type="email"
                required
                name="email"
                placeholder="jon@gmail.com"
                className="py-1 px-3 w-50"
            />
            <button type="submit" class="btn btn-success px-4 ml-2 mb-1">
                Submit
            </button>
        </form>
    )
}

export default MakeAdmin
