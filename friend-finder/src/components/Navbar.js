import React from 'react'
import { NavLink } from "react-router-dom";

export default function Navbar () {

    return (

        <nav className='Navbar'>
             
            {/* <NavLink className="navlink" to="/">Home</NavLink> */}
            <a className="navlink" to="/">Edit Profile</a>
            <a className="navlink" to="/">Friends</a>
            <a className="navlink" to="/">Sign up</a>
            <a className="navlink" to="/">Login</a>

        </nav>

    )}

    