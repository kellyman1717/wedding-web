import { invitationData } from '../data/invitationData.js';

// Pastikan Anda sudah menempatkan gambar di path ini
import heroBg from '../assets/images/hero-bg.jpg';

const Hero = () => {
  const { groom, bride, weddingDate } = invitationData;

  return (
    <div 
      className="relative min-h-screen flex flex-col items-center justify-center text-center text-white p-6"
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Lapisan overlay gelap untuk membuat teks lebih mudah dibaca */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      {/* Konten akan berada di atas overlay */}
      <div className="relative z-10 flex flex-col gap-4">
        <p className="font-sans text-lg tracking-widest uppercase">The Wedding Of</p>
        <h1 className="font-display text-6xl md:text-8xl italic">
          {groom} & {bride}
        </h1>
        <p className="font-sans text-xl mt-4">
          {`${weddingDate.date} . ${weddingDate.month} . ${weddingDate.year}`}
        </p>
      </div>
    </div>
  );
};

export default Hero;