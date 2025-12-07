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
  const cdnBaseUrl = 'https://my-wedding-ec9a0.web.app/images/';
  const receptionLocation = {
    ...invitationData.events[0],
    position: [-7.681279, 111.498453],
    icon: resepsiIcon,
  };

  return (
    <div className="relative overflow-hidden py-16 px-6 bg-white text-center">
        <img src={`${cdnBaseUrl}floral-bouquet-18.webp`} alt="Ornamen" className="absolute top-[-10px] right-0 w-[150px] h-auto z-0 rotate-[180deg]"/>
        <img src={`${cdnBaseUrl}floral-bouquet-19.webp`} alt="Ornamen" className="absolute top-[-10px] left-0 w-[150px] h-auto z-0 scale-y-[-1]"/>
        <img src={`${cdnBaseUrl}leaf-2.webp`} alt="Ornamen" className="absolute top-[-15px] left-[-20px] w-[160px] h-auto z-0 rotate-[-180deg] scale-x-[-1] opacity-50"/>
        <img src={`${cdnBaseUrl}leaf-3.webp`} alt="Ornamen" className="absolute top-[17px] left-[-40px] w-[120px] h-auto z-0 rotate-[-270deg] scale-x-[-1]"/>
        <img src={`${cdnBaseUrl}floral-straight-2.webp`} alt="Ornamen" className="fixed top-[-80px] left-0 w-[260px] h-auto z-0"/>
        <img src={`${cdnBaseUrl}floral-straight-2.webp`} alt="Ornamen" className="fixed top-[-80px] right-0 w-[260px] h-auto z-0 scale-x-[-1]"/>
        <img src={`${cdnBaseUrl}floral-bouquet-12.webp`} alt="Ornamen" className="fixed top-[-28px] left-1/2 -translate-x-1/2 w-[230px] h-auto z-0 rotate-[180deg]"/>
      <h2 className="py-5 font-display text-4xl md:text-5xl text-custom-brown mb-[10px] mt-7">Lokasi Acara</h2>
      <p className="mb-4 font-sans text-lg">Peta lokasi acara pernikahan kami.</p>
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
          className="inline-block bg-custom-blue-dark text-white font-semibold py-2 px-6 rounded-md shadow-md hover:bg-blue-700 transition-all transform hover:scale-105"
        >
          Buka di Google Maps
        </a>
      </div>
    </div>
  );
};

export default LocationMap;