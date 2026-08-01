import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
  borderRadius: "20px",
};

const center = {
  lat: 11.0168,
  lng: 76.9558,
};

export default function Map() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBHVIceUVY0cnbCzVjnjt9Yu61QVdzhOQI">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}