import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../config/config'
import { signOut } from 'firebase/auth'
const Navbar = () => {
  
  const navigate = useNavigate()
  
  const logoutUser = () => {
  signOut(auth).then(() => {
    navigate('/login')
  }).catch((error) => {
    // An error happened.
  });
}









  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
      <div className="container-fluid">
        <h3> Todo App</h3>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse  " id="navbarTogglerDemo03">
          <ul className="navbar-nav m-auto   mb-2 mb-lg-0 ">
            <li className="nav-item ">
              <Link className="nav-link active" aria-current="page" to={'/'} >Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to={'login'} >Login</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to={'register'} >Register</Link>
            </li>
          </ul>
          <form className="d-flex">
            <button className="btn btn-outline-dark" onClick={logoutUser} type="submit">
              Logout
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar