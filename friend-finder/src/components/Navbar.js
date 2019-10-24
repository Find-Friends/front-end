import React from 'react'
import { NavLink } from "react-router-dom";

// Styling CSS
import './Navbar.css'

export default function Navbar (props) {

    const pathname = props.location.pathname.split('/');
    const userId = Number(pathname[pathname.length - 1 ]);
    console.log(userId);

    return (
        
        <nav className='Navbar'>
            <div className='Title'>
            <h1>Friend Finder</h1>
            {/* {console.log('props', props)}  */}
            </div>
            
            <div className="navbaritems">
            <NavLink className="navlink" exact to="/">Home</NavLink>
            <NavLink className="navlink" to="/profile">Profile</NavLink>
            {/* <NavLink className="navlink" to="/friends">Friends</NavLink> */}
            <NavLink className="navlink" to="/signup">Sign Up</NavLink>
            <NavLink className="navlink" to="/login">Login</NavLink>
            <NavLink className="navlink" to={`/friends/${userId}`}>Friends</NavLink>
            <NavLink className="navlink" to={`/edit-profile/${userId}`}>Update Profile</NavLink>
            <NavLink className="navlink" to="/login">Delete Profile</NavLink>
            <NavLink className="navlink" to={`/friend-request/${userId}`}>View Friend Requests</NavLink>
            </div>

        </nav>

    )}

    