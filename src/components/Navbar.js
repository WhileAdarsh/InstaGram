import React from 'react'
import logo from '../img/logo.png'
import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='navbar'>
      <img src={logo} alt=''/>
      <ul className='nav-menu'>
        <Link to="/signup"><li>SignUp</li>
        </Link>
        <Link to="/signin"><li>SignIn</li>
        </Link >
        <Link to="profile"><li>Profile</li>
        </Link>
        <Link to="createPost"><li>CreatPost</li>
        </Link>
      </ul>
    </div>
  )
}

export default Navbar
