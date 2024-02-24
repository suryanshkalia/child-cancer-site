import React, { useState } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const Container = (props) => {
  const [map, setmap] = useState(null);

  const handleMapClick = (mapProps, map, clickEvent) => {
    setmap(clickEvent.latLng);
  };

  return (
    <div>
      <Map
        google={props.google}
        zoom={14}
        onClick={handleMapClick}
        initialCenter={{ lat: 30.900965, lng: 75.857277 }}
      >
        {map && <Marker position={map} />}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAXXtiT5Ey4-PAf__9jxseOrYfllOkiENk",
})(Container);
