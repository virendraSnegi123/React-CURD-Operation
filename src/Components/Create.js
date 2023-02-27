import axios from 'axios';
import React, { useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Create = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("");

    const history = useNavigate();
    const header = { "Access-Control-Allow-Origin": "*" };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("click")
        axios.post('https://63fb9bd57a045e192b6c5850.mockapi.io/Crud-youtube', {
            name: name,
            email: email,
            header,
        })

            .then(() => {
                history("/read");
            });

    }
    return (
        <>
            <div className='container'>
                <form>
                    <div className='d-flex justify-content-between mt-3'>
                        <h1>Create</h1>
                        <Link to="/read">
                            <button className='btn btn-primary btn-lg'>Show Data</button>
                        </Link>
                    </div>

                    <div className="mb-3">
                        <label>Name</label>
                        <input type="text"
                            className="form-control"
                            onChange={(e) => setname(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label >Email address</label>
                        <input type="email" className="form-control"
                            aria-describedby="emailHelp"
                            onChange={(e) => setemail(e.target.value)}
                        />
                    </div>
                    {/* {name}
                        {email} */}
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default Create