const invitationData = {
  groom: { name: 'Ahmad' },
  bride: { name: 'Aisyah' },
  weddingDate: 'Minggu, 12 Oktober 2025',
};

const Cover = ({ onOpen, isBlurred, isFadingOut, guestName }) => {
  const cdnBaseUrl = 'https://my-wedding-ec9a0.web.app/images/';
  const bgCoverCdn = `${cdnBaseUrl}cover.webp`; // Menggunakan cover.webp
  const flowrCoverTop = `${cdnBaseUrl}flwr-cover.webp`;
  const flowrCoverBottom = `${cdnBaseUrl}flwr-cover.webp`;

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
      <img
        src={flowrCoverTop}
        alt="Ornamen Bunga Atas"
        className="absolute top-[-15px] right-[-15px] z-10 w-[300px] md:w-64 pointer-events-none rotate-[180deg] opacity-80"
        aria-hidden="true"
      />
      <img
        src={flowrCoverBottom}
        alt="Ornamen Bunga Bawah"
        className="absolute bottom-[-15px] left-[-15px] z-10 w-[300px] md:w-64 pointer-events-none opacity-80"
        aria-hidden="true"
      />

      {/* Konten utama */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen w-full p-8 text-center text-white">
        <div className="flex flex-col items-center gap-4">
          <p className="font-display text-2xl">Undangan Pernikahan</p>
          
          {guestName && (
            <div className="mt-4">
              <p className="font-sans text-xl">Kepada</p>
              <p className="font-display text-2xl font-bold">{guestName}</p>
            </div>
          )}

          <div className="mt-6 flex flex-col items-center gap-3">
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
              className="text-sm underline text-white hover:text-blue-800 transition"
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

