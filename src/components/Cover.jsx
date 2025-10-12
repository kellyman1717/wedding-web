import { invitationData } from '../data/invitationData.js';
import { motion } from 'framer-motion';

const Cover = ({ onOpen, isBlurred, isFadingOut, guestName }) => {
  const cdnBaseUrl = 'https://my-wedding-ec9a0.web.app/images/';
  const bgCoverCdn = `${cdnBaseUrl}cover.webp`;
  const flowrCover = `${cdnBaseUrl}flwr-cover.webp`;

  // Varian untuk animasi bunga dengan durasi 3 detik
  const flwrVariants = {
    hidden: (isTop) => ({
      opacity: 0,
      x: isTop ? '100%' : '-100%',
      y: isTop ? '-100%' : '100%',
      rotate: isTop ? 180 : 0,
    }),
    visible: (isTop) => ({
      opacity: 0.8,
      x: 0,
      y: 0,
      rotate: isTop ? 180 : 0,
      transition: {
        duration: 3,          // Durasi diubah menjadi 3 detik
        ease: 'easeOut',
        delay: 0.8,
      },
    }),
  };

  return (
    <div
      className={`relative min-h-screen w-full overflow-hidden transition-[transform,opacity] duration-1000 
        ${isBlurred ? 'backdrop-blur-3xl scale-105' : ''} 
        ${isFadingOut ? 'animate-fadeout-scale-opacity' : ''} 
      `}
      style={{
        transitionProperty: 'transform, opacity',
        backdropFilter: isBlurred ? 'blur(24px)' : 'blur(0px)',
        transition: isBlurred
          ? 'backdrop-filter 80ms ease-in, transform 1s ease'
          : 'backdrop-filter 80ms ease-out, transform 1s ease',
      }}
    >
      {/* Background image */}
      <picture>
        <img
          src={bgCoverCdn}
          alt="Latar Belakang Undangan"
          className="absolute inset-0 z-0 object-cover w-full h-full"
          style={{ opacity: 1 }}
          loading="eager"
        />
      </picture>
      <div className="absolute inset-0 z-0 bg-white/30" aria-hidden="true"></div>

      {/* Flower Ornaments */}
      <motion.img
        src={flowrCover}
        alt="Ornamen Bunga Atas"
        className="absolute top-[-15px] right-[-15px] z-10 w-[300px] md:w-64 pointer-events-none"
        aria-hidden="true"
        custom={true}
        variants={flwrVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.img
        src={flowrCover}
        alt="Ornamen Bunga Bawah"
        className="absolute bottom-[-15px] left-[-15px] z-10 w-[300px] md:w-64 pointer-events-none"
        aria-hidden="true"
        custom={false}
        variants={flwrVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Konten utama */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen w-full p-8 text-center text-white">
        {/* Kontainer ini sekarang memiliki margin atas kondisional */}
        <div className={`flex flex-col items-center gap-12 transition-all duration-500 ${!guestName ? 'mt-16' : ''}`}>
          <p className="font-display text-2xl">Undangan Pernikahan</p>
          
          {guestName && (
            <div className="mt-4">
              <p className="font-display text-xl">Kepada</p>
              <p className="font-display text-2xl font-bold mt-4">{guestName}</p>
            </div>
          )}

          <div className="mt-18 flex flex-col items-center gap-3">
            <button
              onClick={onOpen}
              className="bg-custom-blue-dark text-white font-semibold py-3 px-8 rounded-md shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Buka Undangan
            </button>
            <a
              href={`https://wa.me/?text=${encodeURIComponent('Hai! Cek undangan kami di sini: https://namadomain.com')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-sm underline text-white hover:text-blue-800 transition"
            >
              Bagikan lewat WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;