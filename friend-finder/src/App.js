import React from 'react';

import ProfileFriends from './components/ProfileFriends'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <h1>Friend Finder</h1>
      <Navbar/>
      <ProfileFriends/>

      
    </div>
  );
}

export default App;
