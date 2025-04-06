import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({toggleMode,mode}) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg bg-${mode === 'light' ? "info" : 'dark'} navbar-${mode === 'light' ? "light" : 'dark'} mb-5`}>
    <div className="container-fluid">
        <Link className="navbar-brand" to="/home">TextUtils</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/about">About Us</Link>
            </li>
        </ul>

        <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={toggleMode} role="switch" id="switchCheckDefault"/>
  <label className="form-check-label" style={{color: mode === 'light' ? "black" : 'white'}} htmlFor="switchCheckDefault">Enable DarkMode</label>
</div>
        </div>
  </div>
</nav>
    </div>
  )
}
