import { invitationData } from '../data/invitationData.js';

const Gallery = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-custom-pink-light">
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl md:text-5xl text-custom-brown">Momen Bahagia Kami</h2>
        <p className="font-sans mt-4 text-lg">Bagian dari tawa dan cinta yang membangun cerita kami.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {invitationData.galleryImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg aspect-w-1 aspect-h-1">
            <img 
              src={image} 
              alt={`Gallery moment ${index + 1}`} 
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;