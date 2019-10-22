import React from "react";
import { Route } from "react-router-dom";


import Login from './components/Login';
import UpdateUserProfile from './components/UpdateUserProfile';
import SignUp from "./components/SignUp";
import UserHome from "./components/UserHome";

import Profile from './components/Profile'
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      {/* <h1>Friend Finder</h1> */}
      <Navbar/>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />

      <Route path="/profile" component={Profile}/> 
      {/* <Route path="/friends" component={Friends}/> */}

      {/* <Navbar/> */}
      {/* <Profile/> */}

      
      

     
    
    



     

      <Route path='/edit-profile/:id' component={UpdateUserProfile} />
      <Route path='/users/:id' component={UserHome} />





    </div>
  );
}

export default App;
