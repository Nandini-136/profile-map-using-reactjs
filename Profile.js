// src/Profile.js
import React from 'react';

function Profile({ profile, onClick }) {
  return (
    <div style={{ margin: "10px", border: "1px solid #ccc", padding: "20px", borderRadius: "8px", cursor: "pointer" }} onClick={() => onClick(profile)}>
      <img src={profile.imageUrl} alt={profile.name} style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
      <h2>{profile.name}</h2>
      <p>{profile.description}</p>
    </div>
  );
}

export default Profile;
