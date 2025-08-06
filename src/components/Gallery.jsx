import { invitationData } from '../data/invitationData.js';
import useScrollFadeIn from '../hooks/useScrollFadeIn.js';

const Gallery = () => {
  const { galleryImages } = invitationData;
  const cdnBaseUrl = 'https://my-wedding-ec9a0.web.app/images/';

  const fadeIn1 = useScrollFadeIn("up", 0);
  const fadeIn2 = useScrollFadeIn("up", 200);
  const fadeIn3 = useScrollFadeIn("up", 400);
  const fadeIn4 = useScrollFadeIn("up", 500);

  return (
    <div className="relative bg-custom-blue-light py-16 px-8 sm:px-8 lg:px-8 overflow-hidden">
      {/* Ornamen Bunga */}
      <img src={`${cdnBaseUrl}leaf-5.webp`} alt="Ornamen" className="absolute top-[50px] left-[-50px] w-[160px] h-auto z-0 scale-y-[-1] opacity-75" />
      <img src={`${cdnBaseUrl}leaf-5.webp`} alt="Ornamen"  className="absolute top-[50px] right-[-50px] w-[160px] h-auto z-0 rotate-[180deg] opacity-75" />
      <img src={`${cdnBaseUrl}floral-bouquet-17.webp`} alt="Ornamen" className="absolute top-[-15px] left-0 w-[170px] h-auto z-0 scale-y-[-1]" />
      <img src={`${cdnBaseUrl}floral-bouquet-17.webp`} alt="Ornamen" className="absolute top-[-15px] right-0 w-[170px] h-auto z-0 rotate-[180deg]" />
      <img src={`${cdnBaseUrl}floral-straight-7.webp`} alt="Ornamen" className="fixed top-[-50px] left-1/2 -translate-x-1/2 w-[215px] h-auto z-10 opacity-90" />
      <img src={`${cdnBaseUrl}floral-straight-1.webp`} alt="Ornamen" className="fixed top-[-50px] left-0 w-[230px] h-auto z-0" />
      <img src={`${cdnBaseUrl}floral-straight-1.webp`} alt="Ornamen" className="fixed top-[-48px] right-0 w-[230px] h-auto z-0 rotate-180" />
      <img src={`${cdnBaseUrl}leaf-branches-9.webp`} className="absolute bottom-[340px] left-0 w-[143px] h-auto z-0 rotate-[100deg] scale-y-[-1] opacity-90 translate-x-[-40px]"/>
      <img src={`${cdnBaseUrl}leaf-branches-8.webp`} className="absolute bottom-0 right-0 w-[143px] h-auto z-0 opacity-90 translate-x-[40px]"/>
      <img src={`${cdnBaseUrl}leaf-branches-10.webp`} alt="Ornamen"className="absolute bottom-[585px] right-0 translate-x-[40px] w-[143px] h-auto z-0 scale-x-[-1] opacity-90"/>
      {/* Judul */}
      <div className="relative text-center mb-12 mt-10">
        <h2 className="font-display text-[32px] md:text-4xl text-custom-brown mt-5">Momen Bahagia Kami</h2>
        <p className="font-sans mt-4 text-[18px]">Bagian dari tawa dan cinta yang membangun cerita kami.</p>
      </div>

      {/* Grid Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-3 gap-y-[30px] gap-x-[20px] max-w-5xl mx-auto md:h-auto mb-[10px]">
        {galleryImages.length >= 4 && (
          <>
            <div {...fadeIn1} style={fadeIn1.style} className="col-span-2 md:col-span-2 md:row-span-2 rounded-lg overflow-hidden shadow-lg">
              <img src={galleryImages[0]} alt="Gallery moment 1"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
            </div>
            <div {...fadeIn2} style={fadeIn2.style} className="rounded-lg overflow-hidden shadow-lg">
              <img src={galleryImages[1]} alt="Gallery moment 2"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
            </div>
            <div {...fadeIn3} style={fadeIn3.style} className="md:row-span-2 rounded-lg overflow-hidden shadow-lg">
              <img src={galleryImages[2]} alt="Gallery moment 3"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
            </div>
            <div {...fadeIn4} style={fadeIn4.style} className="col-span-2 md:col-span-1 rounded-lg overflow-hidden shadow-lg">
              <img src={galleryImages[3]} alt="Gallery moment 4"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Gallery;
