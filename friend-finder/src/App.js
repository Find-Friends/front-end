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
import FriendRequest from "./components/FriendRequest";
import Friends from "./components/Friends";
import FriendRequestSent from "./components/FriendRequestSent";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Route path="/" component={Navbar} />

      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/users/:id/addFriend" component={FindFriends} />

      <Route path="/profile" component={Profile} />

      <PrivateRoute path="/edit-profile/:id" component={UpdateUserProfile} />
      <PrivateRoute exact path="/users/:id" component={UserHome} />
      <PrivateRoute path="/friend-request/:id" component={FriendRequest} />
      <PrivateRoute path="/friend-request-sent/:id" component={FriendRequestSent} />
      <PrivateRoute path="/friends/:id" component={Friends} />
      <Route path='/' component={Footer} />
    </div>
  );
}

export default App;
