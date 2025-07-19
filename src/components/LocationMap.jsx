import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { invitationData } from "../data/invitationData.js";
import { useEffect } from "react";

// Ikon kustom untuk Akad (Merah) & Resepsi (Biru)
const akadIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -30],
});

const resepsiIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -30],
});

// Fungsi animasi bounce
const addBounceAnimation = (marker) => {
  if (!marker._icon) return;
  marker._icon.classList.add("leaflet-marker-bounce");
};

const LocationMap = () => {
  // Ambil data lokasi dari invitationData
  const locations = [
    {
      ...invitationData.events[0], // Akad
      position: [-6.1753924, 106.8271528], // Ganti dengan koordinat asli Akad
      icon: akadIcon,
    },
    {
      ...invitationData.events[1], // Resepsi
      position: [-6.177555, 106.828888], // Ganti dengan koordinat asli Resepsi
      icon: resepsiIcon,
    },
  ];

  useEffect(() => {
    // Tambah style animasi bounce ke CSS global
    const style = document.createElement("style");
    style.innerHTML = `
      .leaflet-marker-bounce {
        animation: bounce 0.8s ease;
      }
      @keyframes bounce {
        0% { transform: translateY(0); }
        30% { transform: translateY(-20px); }
        50% { transform: translateY(0); }
        70% { transform: translateY(-10px); }
        100% { transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="py-16 px-6 bg-white text-center">
      <h2 className="font-display text-4xl md:text-5xl text-custom-brown mb-6">
        Lokasi Acara
      </h2>
      <p className="mb-4 font-sans text-lg">Silakan pilih lokasi untuk melihat detail acara</p>

      <div className="max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
        <MapContainer
          center={locations[0].position}
          zoom={16}
          scrollWheelZoom={false}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {locations.map((loc, index) => (
            <Marker
              key={index}
              position={loc.position}
              icon={loc.icon}
              eventHandlers={{
                add: (e) => addBounceAnimation(e.target),
              }}
            >
              <Popup>
                <strong>{loc.name}</strong> <br />
                {loc.address}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
        {locations.map((loc, i) => (
          <a
            key={i}
            href={loc.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-custom-pink-dark text-white font-semibold py-2 px-6 rounded-md shadow-md hover:bg-pink-700 transition-all"
          >
            Buka {loc.name} di Google Maps
          </a>
        ))}
      </div>
    </div>
  );
};

export default LocationMap;
