import { invitationData } from '../data/invitationData.js';
import useScrollFadeIn from '../hooks/useScrollFadeIn.js';
import flowerTop from '../assets/images/flower-top.png';
import flowerBottom from '../assets/images/flower-bottom.png';

const LoveStory = () => {
  return (
    <div className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-custom-pink-light to-white">
      <img src={flowerTop} alt="Ornamen Atas" className="absolute top-4 left-4 w-20 opacity-40" />
      <img src={flowerBottom} alt="Ornamen Bawah" className="absolute bottom-4 right-4 w-20 opacity-40" />

      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl text-custom-brown">Kisah Cinta Kami</h2>
        <p className="font-sans mt-4 text-lg">Perjalanan yang membawa kami hingga ke titik ini.</p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 w-0.5 h-full bg-custom-pink-dark transform -translate-x-1/2"></div>

        {invitationData.loveStory.map((story, index) => {
          const fadeIn = useScrollFadeIn(index % 2 === 0 ? "left" : "right", index * 300);
          return (
            <div
              key={index}
              {...fadeIn}
              style={fadeIn.style}
              className={`relative mb-12 flex justify-between items-center w-full ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div
                  className={`p-4 rounded-lg shadow-lg bg-custom-pink-light hover:shadow-xl hover:scale-[1.02] transition-all duration-500 ${
                    index % 2 === 0 ? '' : 'md:ml-auto'
                  }`}
                >
                  <p className="font-bold font-sans text-custom-pink-dark">{story.date}</p>
                  <h3 className="text-xl font-display mt-1">{story.title}</h3>
                  <p className="font-sans text-sm mt-2">{story.description}</p>
                </div>
              </div>
              <div className="absolute left-1/2 w-5 h-5 bg-custom-pink-dark rounded-full transform -translate-x-1/2 border-4 border-white shadow-md"></div>
            </div>
          );
        })}
      </div>

      <p className="text-center mt-12 italic text-custom-brown max-w-xl mx-auto text-lg">
        "Setiap langkah kisah cinta ini adalah takdir terindah dari-Nya."
      </p>
    </div>
  );
};

export default LoveStory;
