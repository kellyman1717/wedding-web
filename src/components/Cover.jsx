import { invitationData } from '../data/invitationData.js';
import CoupleNames from './CoupleNames.jsx';

const Cover = ({ onOpen }) => {
  const { groom, bride, weddingDate } = invitationData;

  const cdnBaseUrl = 'https://my-wedding-ec9a0.web.app/images/'; // Ganti dengan Hosting URL Firebase Anda

  // URL untuk format WebP
  const flower1WebpCdn = `${cdnBaseUrl}top-right-1.webp`;
  const flower2WebpCdn = `${cdnBaseUrl}flower-cover-top-right.webp`;
  const bgCoverWebpCdn = `${cdnBaseUrl}bg-cover4.webp`;

  // URL untuk format Fallback (SVG/JPG)
  const flower1FallbackCdn = `${cdnBaseUrl}top-right-1.svg`; // Asumsi SVG adalah fallback utama
  const flower2FallbackCdn = `${cdnBaseUrl}flower-cover-top-right.svg`; // Asumsi SVG adalah fallback utama
  const bgCoverFallbackCdn = `${cdnBaseUrl}bg-cover4.jpg`; // Asumsi JPG adalah fallback utama

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background - Menggunakan gambar <img> dengan absolute positioning untuk background */}
      {/* Ini lebih baik daripada background-image CSS untuk optimasi dan <picture> tag */}
      <picture>
        <source srcSet={bgCoverWebpCdn} type="image/webp" />
        <img
          src={bgCoverFallbackCdn} // Fallback ke JPG
          alt="Latar Belakang Undangan"
          className="absolute inset-0 z-0 object-cover w-full h-full"
          style={{ opacity: 0.59 }} // Terapkan opacity langsung pada img jika diperlukan
          loading="eager" // Load eager karena ini adalah LCP
        />
      </picture>


      {/* Ornamen Bunga Atas - flower2 */}
      <picture>
        <source srcSet={flower2WebpCdn} type="image/webp" />
        <img
          src={flower2FallbackCdn} // Fallback ke SVG
          alt="Ornamen Bunga Atas"
          className="animate-wind-blow absolute top-[-60px] right-[-20px] w-[250px] max-w-md h-auto z-0"
          loading="eager"
        />
      </picture>

      {/* Ornamen Bunga Atas - flower1 */}
      <picture>
        <source srcSet={flower1WebpCdn} type="image/webp" />
        <img
          src={flower1FallbackCdn} // Fallback ke SVG
          alt="Ornamen Bunga Atas"
          className="animate-wind-blow absolute top-[-20px] right-[-20px] w-[330px] max-w-md h-auto z-0"
          loading="eager"
        />
      </picture>

      {/* Konten Utama (tidak ada perubahan di sini) */}
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

      {/* Ornamen Bunga Bawah - flower2 */}
      <picture>
        <source srcSet={flower2WebpCdn} type="image/webp" />
        <img
          src={flower2FallbackCdn} // Fallback ke SVG
          alt="Ornamen Bunga Bawah"
          className="animate-wind-blow-rotated absolute bottom-[-60px] left-[-20px] w-[250px] max-w-md h-auto z-0 rotate-180"
          loading="eager"
        />
      </picture>

      {/* Ornamen Bunga Bawah - flower1 */}
      <picture>
        <source srcSet={flower1WebpCdn} type="image/webp" />
        <img
          src={flower1FallbackCdn} // Fallback ke SVG
          alt="Ornamen Bunga Bawah"
          className="animate-wind-blow-rotated absolute bottom-[-20px] left-[-20px] w-[330px] max-w-md h-auto z-0 rotate-180"
          loading="eager"
        />
      </picture>
    </div>
  );
};

export default Cover;