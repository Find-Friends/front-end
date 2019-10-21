import React from "react";
import { Route } from "react-router-dom";


import Login from './components/Login';
import UpdateUserProfile from './components/UpdateUserProfile';
import SignUp from "./components/SignUp";

import Profile from './components/Profile'
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <h1>Friend Finder</h1>

      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />


      <Navbar/>
      <Profile/>

      {/*ROUTE PATHS */}

    {/* <Route exact path='/' component={}/>
    <Route path="/profile" component={Profile}/> 
    <Route path="/friends" component={Friends}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/login" component={Login}/> */}



     

      <Route path='/edit-profile' component={UpdateUserProfile} />





    </div>
  );
}

export default App;
