import { motion } from 'framer-motion';
import { invitationData } from '../data/invitationData.js';
import { Gem, Flower2 } from 'lucide-react'; // Pastikan ikon diimpor

// Peta Ikon
const iconMap = {
  Gem: Gem,
  Flower2:Flower2
};

const EventCard = ({ events }) => {
  // Ambil detail lokasi dari acara pertama (karena lokasinya sama)
  const sharedLocation = events.length > 0 ? events[0] : null;

  if (!sharedLocation) {
    return null; // Tidak menampilkan apa-apa jika tidak ada event
  }

  return (
    <motion.div
      className="relative bg-white/20 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg p-8 w-full max-w-md text-center flex flex-col items-center text-gray-700 mt-[-15px] mb-[20px]"
      style={{
        borderRadius: '10px',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Tampilkan detail setiap acara di sini */}
      {events.map((event, index) => {
        const IconComponent = iconMap[event.icon] || iconMap.Default;
        return (
          <div key={index} className="w-full">
            <div className="mb-4 flex justify-center">
              <IconComponent size={48} className="text-brown-800" />
            </div>
            <h3 className="font-display text-4xl text-brown-800 mb-4">{event.name}</h3>
            <p className="font-sans font-semibold text-lg">{event.date}</p>
            <p className="font-sans mb-4">{event.time}</p>

            {/* Hanya tampilkan pemisah jika bukan acara terakhir */}
            {index < events.length - 1 && (
              <hr className="my-8 border-gray-400 w-3/4 mx-auto" />
            )}
          </div>
        );
      })}

      {/* Tampilkan alamat satu kali saja di bagian bawah */}
      <hr className="my-8 border-gray-400 w-full mx-auto" />
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
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={cardVariants}
      >
        {/* Sekarang kita panggil EventCard satu kali dan kirim semua events */}
        <EventCard events={events} />
      </motion.div>
    </div>
  );
};

export default EventDetails;