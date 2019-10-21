import React from 'react'
import { NavLink } from "react-router-dom";

export default function Navbar () {

    return (

        <nav className='Navbar'>
             
            {/* <NavLink className="navlink" to="/">Home</NavLink> */}
            <a className="navlink" to="/profile">Edit Profile</a>
            <a className="navlink" to="/friends">Friends</a>
            <a className="navlink" to="/signup">Sign up</a>
            <a className="navlink" to="/login">Login</a>

        </nav>

    )}

    