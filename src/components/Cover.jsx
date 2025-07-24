import { invitationData } from '../data/invitationData.js';
import flower1 from '../assets/images/top-right-1.svg';
import flower2 from '../assets/images/flower-cover-top-right.svg';
import CoupleNames from './CoupleNames.jsx';
import bgCover from '../assets/images/bg-cover4.jpg';

const Cover = ({ onOpen }) => {
  const { groom, bride, weddingDate } = invitationData;
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgCover})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.59,
        }}
      ></div>

      {/* Ornamen Bunga Atas */}
      <img
        src={flower2}
        alt="Ornamen Bunga Atas"
        className="absolute top-[-60px] right-[-20px] w-[250px] max-w-md h-auto z-0"
      />
      <img
        src={flower1}
        alt="Ornamen Bunga Atas"
        className="absolute top-[-20px] right-[-20px] w-[330px] max-w-md h-auto z-0"
      />
      {/* Konten Utama */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full p-8 text-center text-custom-brown">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <p className="font-display text-lg">Undangan Pernikahan</p>
            <CoupleNames bride={bride} groom={groom} className="text-5xl md:text-7xl" />
            <div className="flex items-center gap-4 font-sans font-semibold">
              <span>{weddingDate.day}</span>
              <div className="w-px h-12 bg-custom-brown"></div>
              <span className="text-5xl">{weddingDate.date}</span>
              <div className="w-px h-12 bg-custom-brown"></div>
              <span>
                {weddingDate.month} <br /> {weddingDate.year}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={onOpen}
              className="bg-custom-blue-dark text-white font-semibold py-3 px-8 rounded-md shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Buka Undangan
            </button>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                'Hai! Cek undangan kami di sini: https://namadomain.com'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline text-custom-brown hover:text-blue-800 transition"
            >
              Bagikan lewat WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Ornamen Bunga Bawah */}
      <img
        src={flower2}
        alt="Ornamen Bunga Bawah"
        className="absolute bottom-[-60px] left-[-20px] w-[250px] max-w-md h-auto z-0 rotate-180"
      />
      <img
        src={flower1}
        alt="Ornamen Bunga Bawah"
        className="absolute bottom-[-20px] left-[-20px] w-[330px] max-w-md h-auto z-0 rotate-180"
      />
    </div>
  );
};

export default Cover;