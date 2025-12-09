import { motion } from 'framer-motion';
import { invitationData } from '../data/invitationData.js';
import { Gem, Flower2, CalendarPlus } from 'lucide-react';

const iconMap = {
  Gem: Gem,
  Flower2: Flower2,
};

const EventCard = ({ events }) => {
  const sharedLocation = events.length > 0 ? events[0] : null;

  if (!sharedLocation) {
    return null;
  }

  const handleAddToCalendar = () => {
    const baseDate = new Date(invitationData.weddingDate.fullDate);
    const firstEventTime = events[0].time.split(' ')[0].split(':');
    const startHours = parseInt(firstEventTime[0]);
    const startMinutes = parseInt(firstEventTime[1]);

    const startDate = new Date(baseDate);
    startDate.setHours(startHours, startMinutes, 0);

    const endDate = new Date(startDate);
    endDate.setHours(13, 0, 0);

    const formatTime = (date) => date.toISOString().replace(/-|:|\.\d+/g, '');

    const title = `The Wedding of ${invitationData.bride} & ${invitationData.groom}`;
    
    let eventDetails = "Acara Pernikahan:\n";
    events.forEach((ev, idx) => {
        eventDetails += `${idx + 1}. ${ev.name}: ${ev.time}\n`;
    });
    eventDetails += `\nLokasi: ${sharedLocation.location}`;

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${formatTime(startDate)}/${formatTime(endDate)}&details=${encodeURIComponent(eventDetails)}&location=${encodeURIComponent(sharedLocation.location)}`;

    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <motion.div
      className="relative bg-white/20 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg p-8 w-full max-w-md md:max-w-4xl text-center flex flex-col items-center text-gray-700 mt-[-15px] mb-[20px]"
      style={{
        borderRadius: '10px',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="w-full flex flex-col md:flex-row md:justify-around md:gap-8">
        {events.map((event, index) => {
          const IconComponent = iconMap[event.icon] || iconMap.Default;
          return (
            <div key={index} className="w-full relative">
              <div className="mb-4 flex justify-center">
                <IconComponent size={48} className="text-brown-800" />
              </div>
              <h3 className="font-display text-4xl text-brown-800 mb-4">{event.name}</h3>
              <p className="font-sans font-semibold text-lg">{event.date}</p>
              <p className="font-sans mb-4">{event.time}</p>
              {index < events.length - 1 && (
                <hr className="my-8 border-gray-400 w-3/4 mx-auto md:hidden" />
              )}
              {index < events.length - 1 && (
                <div className="hidden md:block absolute right-0 top-4 bottom-4 border-r border-gray-400/50"></div>
              )}
            </div>
          );
        })}
      </div>

      <hr className="my-8 border-gray-400 w-full mx-auto" />

      <button 
        onClick={handleAddToCalendar}
        className="inline-flex items-center gap-2 bg-custom-blue-dark/10 hover:bg-custom-blue-dark/20 text-custom-blue-dark px-5 py-3 rounded-full text-sm font-semibold transition-colors mb-8 transform hover:scale-105 cursor-pointer"
      >
        <CalendarPlus size={18} />
        Simpan Tanggal Akad Nikah dan Resepsi
      </button>

      <div className="w-full">
        <p className="font-sans font-bold text-lg">Lokasi Acara:</p>
        <p className="font-sans mt-2">{sharedLocation.location}</p>
        <p className="font-sans">{sharedLocation.address}</p>
      </div>
    </motion.div>
  );
};

const EventDetails = () => {
  const { events } = invitationData;

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="py-16 px-6 bg-gradient-to-b from-white to-blue-200 flex justify-center">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={cardVariants}
        className="w-full flex justify-center"
      >
        <EventCard events={events} />
      </motion.div>
    </div>
  );
};

export default EventDetails;