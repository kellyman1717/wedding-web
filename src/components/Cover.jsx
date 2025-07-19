import { invitationData } from '../data/invitationData.js';
import flowerTop from '../assets/images/flower-top.png';
import flowerBottom from '../assets/images/flower-bottom.png';

const Cover = ({ onOpen }) => {
  const { groom, bride, weddingDate } = invitationData;

  return (
    <div className="flex flex-col items-center justify-between min-h-screen w-full bg-gradient-to-b from-custom-pink-light to-custom-pink p-8 text-center text-custom-brown">
      <img src={flowerTop} alt="Ornamen Bunga Atas" className="w-[500px] md:w-[500px] h-auto" />
      <div className="flex flex-col items-center gap-6 my-8">
        <p className="font-display text-lg">Undangan Pernikahan</p>
        <h1 className="font-display text-5xl md:text-7xl italic flex flex-col md:flex-row items-center justify-center text-center leading-snug">
          <span>{bride}</span>
          <span className="md:hidden">&</span>
          <span className="md:hidden">{groom}</span>
          <span className="hidden md:inline px-5">&</span>
          <span className="hidden md:inline">{groom}</span>
        </h1>

        <div className="flex items-center gap-4 font-sans font-semibold">
          <span>{weddingDate.day}</span>
          <div className="w-px h-12 bg-custom-brown"></div>
          <span className="text-5xl">{weddingDate.date}</span>
          <div className="w-px h-12 bg-custom-brown"></div>
          <span>{weddingDate.month} <br/> {weddingDate.year}</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <button 
          onClick={onOpen}
          className="bg-custom-pink-dark text-white font-semibold py-3 px-8 rounded-md shadow-lg hover:bg-pink-700 transition-all duration-300"
        >
          Buka Undangan
        </button>
      </div>
      <img src={flowerBottom} alt="Ornamen Bunga Bawah" className="w-[500px] md:w-[500px] h-auto" />
    </div>
  );
};

export default Cover;