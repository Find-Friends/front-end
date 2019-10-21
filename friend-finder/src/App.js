import React from 'react';

import Profile from './components/Profile'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <h1>Friend Finder</h1>
      <Navbar/>
      <Profile/>

      {/*ROUTE PATHS */}

    {/* <Route exact path='/' component={}/>
    <Route path="/profile" component={Profile}/> 
    <Route path="/friends" component={Friends}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/login" component={Login}/> */}

    </div>
  );
}

export default App;
