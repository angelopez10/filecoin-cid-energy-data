import { LatLng } from "leaflet";
import React from "react";
import { Marker, Popup, TileLayer } from "react-leaflet";
import { LocationIcon } from "./LocationIcon";
import { MapWrapper, PopUpParragraph, PopUpTitle } from "./Map.styles";
import "leaflet/dist/leaflet.css";

function Map({ data }: any) {
  return (
    <MapWrapper center={new LatLng(51.505, -0.09)} zoom={3}>
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {data[0] &&
        data.map(
          (miner: any) =>
            miner.lat &&
            miner.long && (
              <Marker position={[miner.lat, miner.long]} icon={LocationIcon}>
                <Popup>
                  <PopUpTitle>Miner: {miner.minerId}</PopUpTitle>
                 {!!miner.city &&  <PopUpParragraph>City: {miner.city}</PopUpParragraph>}
                  <PopUpParragraph>
                    High Bound: {miner.energyConsumption.highBoundKw} KW
                  </PopUpParragraph>
                  <PopUpParragraph>
                    Low Bound: {miner.energyConsumption.lowBoundKw} KW
                  </PopUpParragraph>
                  <PopUpParragraph>
                    Estimate: {miner.energyConsumption.estimateKw} KW
                  </PopUpParragraph>
                  {!!miner.totalDataStored && <PopUpParragraph>
                    Total data stored: {+(miner.totalDataStored/1024/1024).toFixed(2) } PiB
                  </PopUpParragraph>}
                </Popup>
              </Marker>
            )
        )}
    </MapWrapper>
  );
}

export default Map;
