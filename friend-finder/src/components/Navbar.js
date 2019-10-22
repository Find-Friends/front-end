import React from 'react'
import { NavLink } from "react-router-dom";
import './Navbar.css'

export default function Navbar () {

    return (

        <nav className='Navbar'>
            <div className='Title'>
            <h1>Friend Finder</h1>
            </div>
            
             <div className="navbaritems">
            <NavLink className="navlink" to="/">Home</NavLink>
            <NavLink className="navlink" to="/profile">Edit Profile</NavLink>
            <NavLink className="navlink" to="/friends">Friends</NavLink>
            <NavLink className="navlink" to="/signup">Sign Up</NavLink>
            <NavLink className="navlink" to="/login">Login</NavLink>
            </div>

        </nav>

    )}

    