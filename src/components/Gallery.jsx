import { invitationData } from '../data/invitationData.js';
import useScrollFadeIn from '../hooks/useScrollFadeIn.js';
import flowerTop from '../assets/images/floral-straight-1.png';
import gunungan from '../assets/images/gunungan_wayang.png';
import bouqet1 from '../assets/images/floral-bouquet-5.png';
import bouqet2 from '../assets/images/floral-bouquet-6.png';
import leaf1 from '../assets/images/leaf-3.png';

const Gallery = () => {
  const { galleryImages } = invitationData;
  
  const fadeIn1 = useScrollFadeIn("up", 0);
  const fadeIn2 = useScrollFadeIn("up", 100);
  const fadeIn3 = useScrollFadeIn("up", 200);
  const fadeIn4 = useScrollFadeIn("up", 300);
  const fadeIn5 = useScrollFadeIn("up", 400);
  const fadeIn6 = useScrollFadeIn("up", 500);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-custom-blue-light">
      {/* Bagian Ornamen Bunga Atas*/}
      <img
        src={flowerTop}
        alt="Ornamen Bunga Atas Tengah Kiri"
        className="absolute top-[-50px] left-0 w-[230px] max-w-md h-auto z-0"
      />
      <img
        src={flowerTop}
        alt="Ornamen Bunga Atas Tengah Kanan"
        className="absolute top-[-48px] right-[-23px] w-[230px] max-w-md h-auto z-0 rotate-180"
      />
      <img
        src={leaf1}
        alt="Ornamen Bouqet Kiri"
        className="absolute top-[35px] left-[-83px] w-[220px] max-w-md h-auto z-0 rotate-[270deg] transform scale-y-[-1] opacity-40"
      />
      <img
        src={bouqet1}
        alt="Ornamen Bouqet Kiri"
        className="absolute top-[-50px] left-[-10px] w-[135px] max-w-md h-auto z-0"
      />
      
      <img
        src={bouqet2}
        alt="Ornamen Bouqet Kanan"
        className="absolute top-[-50px] right-[-37px] w-[143px] max-w-md h-auto z-0 rotate-[-20deg] transform scale-y-[-1]"
      />
      
      <div className="text-center mb-12">
        {/* Bagian Ornamen Gunungan Atas*/}
        <img
          src={gunungan}
          alt="Ornamen Gunungan Kiri"
          className="absolute top-[70px] left-[-20px] w-[140px] max-w-md h-auto z-0 opacity-30 rotate-[30deg]"
        />
        <img
          src={gunungan}
          alt="Ornamen Gunungan Kanan"
          className="absolute top-[100px] right-[-20px] w-[140px] max-w-md h-auto z-0 opacity-30 rotate-[-30deg]"
        />
        <h2 className="font-display text-4xl md:text-5xl text-custom-brown mt-5">Momen Bahagia Kami</h2>
        <p className="font-sans mt-4 text-lg">Bagian dari tawa dan cinta yang membangun cerita kami.</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-3 gap-4 max-w-5xl mx-auto md:h-auto">
        {galleryImages.length >= 6 && (
          <>
            <div {...fadeIn1} style={fadeIn1.style} className="col-span-2 md:col-span-2 md:row-span-2 rounded-lg overflow-hidden shadow-lg">
              <img src={galleryImages[0]} alt="Gallery moment 1" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
            </div>
            <div {...fadeIn2} style={fadeIn2.style} className="rounded-lg overflow-hidden shadow-lg">
              <img src={galleryImages[1]} alt="Gallery moment 2" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
            </div>
            <div {...fadeIn3} style={fadeIn3.style} className="md:row-span-2 rounded-lg overflow-hidden shadow-lg">
              <img src={galleryImages[2]} alt="Gallery moment 3" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
            </div>
            <div {...fadeIn4} style={fadeIn4.style} className="col-span-2 md:col-span-1 rounded-lg overflow-hidden shadow-lg">
              <img src={galleryImages[3]} alt="Gallery moment 4" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
            </div>
            <div {...fadeIn5} style={fadeIn5.style} className="md:col-span-2 rounded-lg overflow-hidden shadow-lg">
              <img src={galleryImages[4]} alt="Gallery moment 5" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
            </div>
            <div {...fadeIn6} style={fadeIn6.style} className="rounded-lg overflow-hidden shadow-lg">
              <img src={galleryImages[5]} alt="Gallery moment 6" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Gallery;
