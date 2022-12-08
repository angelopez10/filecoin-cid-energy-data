import { LatLng } from "leaflet";
import React from "react";
import { Marker, Popup, TileLayer } from "react-leaflet";
import { LocationIcon } from "./LocationIcon";
import { MapWrapper } from "./Map.styles";
import "leaflet/dist/leaflet.css";

function Map() {
  return (
    <MapWrapper center={new LatLng(51.505, -0.09)} zoom={5}>
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={new LatLng(51.505, -0.09)} icon={LocationIcon}>
        <Popup>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ut
          ducimus perferendis reprehenderit asperiores accusantium fugit
          quibusdam. Nisi autem temporibus odit totam! Amet officia consequatur
          possimus exercitationem quas quam dignissimos?
        </Popup>
      </Marker>
    </MapWrapper>
  );
}

export default Map;
