import { invitationData } from '../data/invitationData.js';

const EventCard = ({ name, date, time, location, address, icon }) => (
  <div className="mt-[-38px] bg-custom-blue-light rounded-lg shadow-lg p-8 w-full max-w-md text-center flex flex-col items-center">
    <span className="text-5xl mb-4">{icon}</span>
    <h3 className="font-display text-4xl text-custom-brown-dark mb-4">{name}</h3>
    <p className="font-sans font-semibold text-lg">{date}</p>
    <p className="font-sans mb-4">{time}</p>
    <p className="font-sans font-bold">{location}</p>
    <p className="font-sans">{address}</p>
  </div>
);

const EventDetails = () => {
    const receptionEvent = invitationData.events[0];
    const cdnBaseUrl = 'https://my-wedding-ec9a0.web.app/images/';

    return (
        <div className="py-16 px-6 bg-white">
            <div className="flex justify-center items-stretch">
                {receptionEvent && <EventCard {...receptionEvent} />}
            </div>
        </div>
    );
};

export default EventDetails;
