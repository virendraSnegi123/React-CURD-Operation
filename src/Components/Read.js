import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark, setTabledark] = useState([]);

  function getdata() {
    axios
      .get("https://63fb9bd57a045e192b6c5850.mockapi.io/Crud-youtube")
      .then((res) => {
        console.log(res);
        setData(res.data);
      });
  }
  function handleDelete(id) {
    axios
      .delete(`https://63fb9bd57a045e192b6c5850.mockapi.io/Crud-youtube/${id}`)
      .then(() => {
        getdata();
      });
  }
  const SetToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id)
    localStorage.setItem("name", name)
    localStorage.setItem("email", email)

  }
  useEffect(() => {
    getdata();
  }, []);


  return (
    <>
      <div className='form-check form-switch'>
        <input type="checkbox" class="form-check-input"
        onClick={() => {
          if (tabledark === 'table-dark') setTabledark("");
          else setTabledark("table-dark");
        }}
        />
      </div>
      <div className='d-flex justify-content-between mt-3'>
        <h1>Read Operation</h1>
        <Link to="/">
          <button className='btn btn-primary btn-lg'>Create</button>
        </Link>
      </div>
      <table className= {`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <Link to='/update'>
                      <button className='btn btn-warning'
                        onClick={() => SetToLocalStorage(eachData.id, eachData.name, eachData.email)}
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button className='btn btn-danger'
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          )
        })
        }
      </table>
    </>
  )
}

export default Read