import { motion } from 'framer-motion';
import { invitationData } from '../data/invitationData.js';

const EventCard = ({ name, date, time, location, address, icon }) => (
  <motion.div
    className="relative bg-white/20 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg p-8 w-full max-w-md text-center flex flex-col items-center text-gray-700 mt-[-15px] mb-[20px]"
    style={{
      borderRadius: '10px',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      backdropFilter: 'blur(10px)',
    }}
  >
    <span className="text-5xl mb-4">{icon}</span>
    <h3 className="font-display text-4xl text-brown-800 mb-4">{name}</h3>
    <p className="font-sans font-semibold text-lg">{date}</p>
    <p className="font-sans mb-4">{time}</p>
    <p className="font-sans font-bold">{location}</p>
    <p className="font-sans">{address}</p>
  </motion.div>
);

const EventDetails = () => {
  const receptionEvent = invitationData.events[0];

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
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={cardVariants}
      >
        {receptionEvent && <EventCard {...receptionEvent} />}
      </motion.div>
    </div>
  );
};

export default EventDetails;
