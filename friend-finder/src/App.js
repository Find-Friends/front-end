import React from 'react';
import { Route } from 'react-router-dom';

import Login from './components/Login';
import UpdateUserProfile from './components/UpdateUserProfile';

function App() {
  return (
    <div >
      <h1>Friend Finder</h1>
      <Route path='/login' component={Login} />
      <Route path='/edit-profile' component={UpdateUserProfile} />
    </div>
  );
}

export default App;
