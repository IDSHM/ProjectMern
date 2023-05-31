import React from 'react';
// import '../styles/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">Logo</a>
      </div>
      <ul className="nav-links" style={{color: 'white'}}>
        {/* <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li> */}
        <li><Link to={'/login'}>Login</Link></li>
        <li><Link to={'/register'}>Register</Link></li>
        <li><Link to={'/addproperty'}>Add Property</Link></li>

        
        <li><Link to={'/multer'}>Multer Add Property</Link></li>

        <li><Link to={'/addcat'}>Add Category</Link></li>
        <li><Link to={'/viewproperty'}>View Property</Link></li>
        {/* <li><Link to={'/bookappo/:id'}>Book Appointment</Link></li> */}
        <li><Link to={'/agentp_list'}>Agent</Link></li>
        <li><Link to={'/dashboard'}>Dashboard</Link></li>
        {/* <li><Link to={'/update/:id'}>Update</Link></li> */}
        <li><Link to={'/contact'}>Contact</Link></li>
        <li><Link to={'/getappo'}>Agent Appointments</Link></li>
        

      </ul>
    </nav>
  );
};

export default Navbar;
