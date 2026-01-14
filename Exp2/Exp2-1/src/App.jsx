import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import './App.css'



function App() {
  return (
    <div className="container mt-4">
      <h2 className="text-center">
        Learning Bootstrap
      </h2>
      <div className="card p-3 mt-3">
        <input type="text" className="form-control" placeholder='Enter Your Name' />
        <input type="text" className="form-control" placeholder='Enter Your Email' />
        <button className="btn btn-outline-primary mt-3">Submit</button>
      </div>
    </div>
  )
}

export default App
