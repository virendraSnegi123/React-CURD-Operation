import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Update = () => {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState(" ");

    const Navigate = useNavigate();


    useEffect(() => {
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setEmail(localStorage.getItem('email'));
    }, [])




    const handleUpdate = (e) => {
        e.preventDefault();
        axios
            .put(`https://63fb9bd57a045e192b6c5850.mockapi.io/Crud-youtube/${id}`, {
                name: name,
                email: email,
            })
            .then(() => {
                Navigate("/read")
            });
    }

    return (
        <>
            <div className='container'>
                <form>
                    <h1>Update</h1>
                    <div className="mb-3">
                        <label>Name</label>
                        <input type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label >Email address</label>
                        <input type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <button type="submit"
                        className="btn btn-primary me-2"
                        onClick={handleUpdate}
                    >
                        Submit
                    </button>
                    <Link to='/read'>
                        <button type="submit"
                            className="btn btn-secondary ms-2"
                        >
                            ← Back
                        </button>
                    </Link>
                </form>
            </div>
        </>
    )
}

export default Update