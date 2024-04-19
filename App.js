// src/App.js
import React, { useState } from 'react';
import profiles from './data';
import Profile from './Profile';
import ProfileMap from './ProfileMap';


function App() {
  const [activeProfile, setActiveProfile] = useState(null);

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
        {profiles.map(profile => (
          <Profile key={profile.id} profile={profile} onClick={setActiveProfile} />
        ))}
      </div>
      <ProfileMap profiles={profiles} activeProfile={activeProfile} />
    </div>
  );
}

export default App;
