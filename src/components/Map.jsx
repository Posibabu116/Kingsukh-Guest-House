
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapSection = styled.div`
  padding: 50px;
  background-color: #f8f9fa;
  text-align: center;

  .map-container {
    height: 500px;
    width: 100%;
    margin: 0 auto;
  }
`;

const Map = () => {
  return (
    <MapSection>
      <h2>Our Location</h2>
      <MapContainer center={[22.5726, 88.3639]} zoom={13} className="map-container">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[22.5726, 88.3639]}>
          <Popup>Kingsouth Guest House</Popup>
        </Marker>
        <Marker position={[22.5800, 88.3700]}>
          <Popup>Bandra Railway Station</Popup>
        </Marker>
        <Marker position={[22.5600, 88.3500]}>
          <Popup>The Village Park</Popup>
        </Marker>
      </MapContainer>
    </MapSection>
  );
};

export default Map;
