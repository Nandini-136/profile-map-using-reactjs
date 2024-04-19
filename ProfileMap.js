// src/ProfileMap.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const icon = new L.Icon({
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

function ProfileMap({ profiles, activeProfile }) {
  return (
    <MapContainer center={activeProfile ? [activeProfile.location.lat, activeProfile.location.lng] : [0, 0]} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {profiles.map(profile => (
        <Marker
          key={profile.id}
          position={[profile.location.lat, profile.location.lng]}
          icon={icon}
        >
          <Popup>{profile.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default ProfileMap;
