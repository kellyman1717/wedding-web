import { invitationData } from '../data/invitationData.js';

const LoveStory = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl text-custom-brown">Kisah Cinta Kami</h2>
        <p className="font-sans mt-4 text-lg">Perjalanan yang membawa kami hingga ke titik ini.</p>
      </div>

      <div className="relative max-w-2xl mx-auto">
        {/* Garis Timeline Vertikal */}
        <div className="absolute left-1/2 w-0.5 h-full bg-custom-pink transform -translate-x-1/2"></div>

        {invitationData.loveStory.map((story, index) => (
          <div key={index} className="relative mb-8 flex justify-between items-center w-full">
            {/* Mengatur posisi card ke kiri atau kanan */}
            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:text-right'}`}>
              <div className={`p-4 rounded-lg shadow-lg bg-custom-pink-light ${index % 2 === 0 ? '' : 'md:ml-auto'}`}>
                <p className="font-bold font-sans text-custom-pink-dark">{story.date}</p>
                <h3 className="text-xl font-display mt-1">{story.title}</h3>
                <p className="font-sans text-sm mt-2">{story.description}</p>
              </div>
            </div>
            
            {/* Titik di Timeline */}
            <div className="absolute left-1/2 w-4 h-4 bg-custom-pink-dark rounded-full transform -translate-x-1/2 border-4 border-white"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoveStory;