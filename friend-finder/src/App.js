import React from "react";
import { Route } from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div>
      <h1>Friend Finder</h1>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </div>
  );
}

export default App;
