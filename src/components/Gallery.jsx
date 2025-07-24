import { invitationData } from '../data/invitationData.js';
import useScrollFadeIn from '../hooks/useScrollFadeIn.js';

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
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl md:text-5xl text-custom-brown">Momen Bahagia Kami</h2>
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
