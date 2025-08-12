import { motion } from 'framer-motion';
import { invitationData } from '../data/invitationData.js';

const EventCard = ({ name, date, time, location, address, icon }) => (
  // Div terluar sekarang adalah motion.div, ia akan mewarisi varian dari parent-nya
  <motion.div className="relative overlay-hidden mt-[-38px] bg-blue-100 rounded-lg shadow-lg p-8 w-full max-w-md text-center flex flex-col items-center text-gray-700">
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
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="py-16 px-6 bg-white flex justify-center">
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
