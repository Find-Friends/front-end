import React from 'react';
import { Route } from 'react-router-dom';

import Login from './components/Login';

function App() {
  return (
    <div >
      <h1>Friend Finder</h1>
      <Route path='/login' component={Login} />
    </div>
  );
}

export default App;
