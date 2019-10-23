import React from "react";
import { Route } from "react-router-dom";

import Login from "./components/Login";
import UpdateUserProfile from "./components/UpdateUserProfile";
import SignUp from "./components/SignUp";
import UserHome from "./components/UserHome";
import PrivateRoute from "./components/PrivateRoute";

import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import FindFriends from "./components/FindFriends";

function App() {
  return (
    <div>
      {/* <h1>Friend Finder</h1> */}

      <Navbar/>

      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/findfriends" component={FindFriends} />


      {/* <Navbar />
      <Profile /> */}

      <Route path="/profile" component={Profile}/> 
      {/* <Route path="/friends" component={Friends}/> */}

      {/* <Navbar/> */}
      {/* <Profile/> */}


      
      


      {/* <Route exact path='/' component={}/>
    <Route path="/profile" component={Profile}/> 
    <Route path="/friends" component={Friends}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/login" component={Login}/> */}

      <Route path="/edit-profile" component={UpdateUserProfile} />

     
    
    



     

      <PrivateRoute path='/edit-profile/:id' component={UpdateUserProfile} />
      <PrivateRoute path='/users/:id' component={UserHome} />






    </div>
  );
}

export default App;
