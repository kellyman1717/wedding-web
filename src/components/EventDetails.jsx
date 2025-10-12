import { motion } from 'framer-motion';
import { invitationData } from '../data/invitationData.js';

const EventCard = ({ events }) => (
  <motion.div
    className="relative bg-white/20 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg p-8 w-full max-w-md text-center flex flex-col items-center text-gray-700 mt-[-15px] mb-[20px]"
    style={{
      borderRadius: '10px',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      backdropFilter: 'blur(10px)',
    }}
  >
    {events.map((event, index) => (
      <div key={index} className="w-full">
        <span className="text-5xl mb-4">{event.icon}</span>
        <h3 className="font-display text-4xl text-brown-800 mb-4">{event.name}</h3>
        <p className="font-sans font-semibold text-lg">{event.date}</p>
        <p className="font-sans mb-4">{event.time}</p>
        <p className="font-sans font-bold">{event.location}</p>
        <p className="font-sans">{event.address}</p>
        {index < events.length - 1 && (
          <hr className="my-8 border-gray-400 w-3/4 mx-auto" />
        )}
      </div>
    ))}
  </motion.div>
);

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
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={cardVariants}
      >
        <EventCard events={events} />
      </motion.div>
    </div>
  );
};

export default EventDetails;