import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { invitationData } from "../data/invitationData.js";

const resepsiIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -30],
});

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const LocationMap = () => {
  const receptionLocation = {
    ...invitationData.events[1],
    position: [-7.681279, 111.498453],
    icon: resepsiIcon,
  };

  return (
    <div className="py-16 px-6 bg-white text-center">
      <h2 className="font-display text-4xl md:text-5xl text-custom-brown mb-6">
        Lokasi Acara
      </h2>
      <p className="mb-4 font-sans text-lg">Peta lokasi acara resepsi pernikahan kami.</p>
      <div className="max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
        <MapContainer
          center={receptionLocation.position}
          zoom={16}
          scrollWheelZoom={false}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={receptionLocation.position}
            icon={receptionLocation.icon}
          >
            <Popup>
              <strong>{receptionLocation.name}</strong> <br />
              {receptionLocation.address}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="mt-6 flex justify-center">
        <a
          href={receptionLocation.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-custom-pink-dark text-white font-semibold py-2 px-6 rounded-md shadow-md hover:bg-pink-700 transition-all transform hover:scale-105" // Diperbarui
        >
          Buka {receptionLocation.name} di Google Maps
        </a>
      </div>
    </div>
  );
};

export default LocationMap;