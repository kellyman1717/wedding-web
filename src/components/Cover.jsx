import { invitationData } from '../data/invitationData.js';
import CoupleNames from './CoupleNames.jsx';

const Cover = ({ onOpen, isBlurred, isFadingOut  }) => {
  const { groom, bride, weddingDate } = invitationData;

  const cdnBaseUrl = 'https://my-wedding-ec9a0.web.app/images/';
  const flower1WebpCdn = `${cdnBaseUrl}top-right-1.webp`;
  const flower2WebpCdn = `${cdnBaseUrl}flower-cover-top-right.webp`;
  const bgCoverWebpCdn = `${cdnBaseUrl}bg-cover4.webp`;

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

      <picture>
        <source srcSet={bgCoverWebpCdn} type="image/webp" />
        <img
          src={bgCoverWebpCdn}
          alt="Latar Belakang Undangan"
          className="absolute inset-0 z-0 object-cover w-full h-full"
          style={{ opacity: 0.59 }}
          loading="eager"
        />
      </picture>

      {/* Ornamen bunga atas */}
      <picture>
        <source srcSet={flower2WebpCdn} type="image/webp" />
        <img
          src={flower2WebpCdn}
          alt="Ornamen Bunga Atas"
          className="animate-wind-blow absolute top-[-60px] right-[-20px] w-[250px] max-w-md h-auto z-0"
          loading="eager"
        />
      </picture>

      <picture>
        <source srcSet={flower1WebpCdn} type="image/webp" />
        <img
          src={flower1WebpCdn}
          alt="Ornamen Bunga Atas"
          className="animate-wind-blow absolute top-[-20px] right-[-20px] w-[330px] max-w-md h-auto z-0"
          loading="eager"
        />
      </picture>

      {/* Konten utama */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full p-8 text-center text-custom-brown">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <p className="font-display text-lg">Undangan Pernikahan</p>
          </div>

          <div className="flex flex-col items-center gap-4">
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
              className="text-sm underline text-custom-brown hover:text-blue-800 transition"
            >
              Bagikan lewat WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Ornamen bunga bawah */}
      <picture>
        <source srcSet={flower2WebpCdn} type="image/webp" />
        <img
          src={flower2WebpCdn}
          alt="Ornamen Bunga Bawah"
          className="animate-wind-blow-rotated absolute bottom-[-60px] left-[-20px] w-[250px] max-w-md h-auto z-0 rotate-180"
          loading="eager"
        />
      </picture>

      <picture>
        <source srcSet={flower1WebpCdn} type="image/webp" />
        <img
          src={flower1WebpCdn}
          alt="Ornamen Bunga Bawah"
          className="animate-wind-blow-rotated absolute bottom-[-20px] left-[-20px] w-[330px] max-w-md h-auto z-0 rotate-180"
          loading="eager"
        />
      </picture>
    </div>
  );
};

export default Cover;
