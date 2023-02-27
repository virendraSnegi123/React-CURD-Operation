import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
// import ReactDOM from "react-dom/client";

const App = () => {
  return (
   <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Create />}></Route>
          <Route exact path="/read" element={<Read />}></Route>
          <Route exact path="/Update" element={<Update />}></Route>

        </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App

