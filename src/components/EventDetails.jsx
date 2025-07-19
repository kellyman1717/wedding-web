import { invitationData } from '../data/invitationData.js';

const EventCard = ({ name, date, time, location, address, mapUrl, icon }) => (
  <div className="bg-custom-pink-light rounded-lg shadow-lg p-8 w-full max-w-md text-center flex flex-col items-center">
    <span className="text-5xl mb-4">{icon}</span>
    <h3 className="font-display text-4xl text-custom-pink-dark mb-4">{name}</h3>
    <p className="font-sans font-semibold text-lg">{date}</p>
    <p className="font-sans mb-4">{time}</p>
    <p className="font-sans font-bold">{location}</p>
    <p className="font-sans mb-6">{address}</p>
    <a 
      href={mapUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-custom-pink-dark text-white font-semibold py-2 px-6 rounded-md shadow-md hover:bg-pink-700 transition-all"
    >
      Lihat Peta
    </a>
  </div>
);


const EventDetails = () => {
  return (
    <div className="py-16 px-6 bg-white">
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
            <EventCard {...invitationData.events[0]} icon="💍" />
            <EventCard {...invitationData.events[1]} icon="🎉" />
        </div>
    </div>
  );
};

export default EventDetails;