import { invitationData } from '../data/invitationData.js';
import useScrollFadeIn from '../hooks/useScrollFadeIn.js';
import flowerTop1 from '../assets/images/floral-straight-1.png';
import flowerTop2 from '../assets/images/floral-straight-7.png';
import bouqet1 from '../assets/images/floral-bouquet-17.png';
import leaf1 from '../assets/images/leaf-5.png';
import leaf2 from '../assets/images/leaf-branches-8.png';
import leaf3 from '../assets/images/leaf-branches-9.png';
import leaf4 from '../assets/images/leaf-branches-10.png';

const Gallery = () => {
  const { galleryImages } = invitationData;
  
  const fadeIn1 = useScrollFadeIn("up", 0);
  const fadeIn2 = useScrollFadeIn("up", 200);
  const fadeIn3 = useScrollFadeIn("up", 400);
  const fadeIn4 = useScrollFadeIn("up", 500);

  return (
    <div className="py-16 px-8 sm:px-6 lg:px-8 bg-custom-blue-light">
      {/* Bunga Atas */}
      <img
        src={leaf1}
        alt="Ornamen Bunga Atas Tengah Kiri"
        className="absolute top-[50px] left-[-55px] w-[160px] max-w-md h-auto z-0 scale-y-[-1] opacity-75"
      />
      <img
        src={leaf1}
        alt="Ornamen Bunga Atas Tengah Kiri"
        className="absolute top-[50px] right-[-55px] w-[160px] max-w-md h-auto z-0 rotate-[180deg] opacity-75"
      />
      <img
        src={bouqet1}
        alt="Ornamen Bouqet Kiri"
        className="absolute top-[-15px] left-[-15px] w-[170px] max-w-md h-auto z-0 scale-y-[-1]"
      />
      <img
        src={bouqet1}
        alt="Ornamen Bouqet Kanan"
        className="absolute top-[-15px] right-[-15px] w-[170px] max-w-md h-auto z-0 rotate-[180deg]"
      />
      <img
        src={flowerTop2}
        alt="Ornamen Bunga Atas Tengah"
        className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[215px] max-w-md h-auto z-10 opacity-90"
      />
      <img
        src={flowerTop1}
        alt="Ornamen Bunga Atas Tengah Kiri"
        className="absolute top-[-50px] left-0 w-[230px] max-w-md h-auto z-0"
      />
      <img
        src={flowerTop1}
        alt="Ornamen Bunga Atas Tengah Kanan"
        className="absolute top-[-48px] right-[-23px] w-[230px] max-w-md h-auto z-0 rotate-180"
      />
      
      {/* Bunga Bawah */}
      <img
        src={leaf2}
        alt="Ornamen Leaf Kanan"
        className="absolute bottom-[-0px] right-[-0px] w-[143px] max-w-md h-auto z-0 rotate-[-0deg] opacity-90"
      />
      <img
        src={leaf3}
        alt="Ornamen Leaf Kiri"
        className="absolute bottom-[340px] left-[-40px] w-[143px] max-w-md h-auto z-0 rotate-[100deg] scale-y-[-1] opacity-90"
      />
      <img
        src={leaf4}
        alt="Ornamen Leaf Kanan"
        className="absolute bottom-[585px] right-[-40px] w-[143px] max-w-md h-auto z-0 rotate-[0deg] scale-x-[-1] opacity-90"
      />
      <div className="relative text-center mb-12">
        <h2 className="font-display text-4xl md:text-5xl text-custom-brown mt-5">Momen Bahagia Kami</h2>
        <p className="font-sans mt-4 text-lg">Bagian dari tawa dan cinta yang membangun cerita kami.</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-3 gap-y-[30px] gap-x-[20px] max-w-5xl mx-auto md:h-auto mb-[10px]">
        {galleryImages.length >= 4 && (
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
          </>
        )}
      </div>
    </div>
  );
};

export default Gallery;
