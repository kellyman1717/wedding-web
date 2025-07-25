import { useState, useEffect } from 'react';
import { invitationData } from '../data/invitationData.js';
import useScrollFadeIn from '../hooks/useScrollFadeIn.js';

const LoveStory = () => {
  // State untuk melacak apakah tampilan saat ini adalah desktop (lebar >= 768px)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // Effect untuk menambahkan dan membersihkan event listener saat ukuran layar berubah
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-custom-blue-light to-white">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl text-custom-brown">Kisah Cinta Kami</h2>
        <p className="font-sans mt-4 text-lg">Perjalanan yang membawa kami hingga ke titik ini.</p>
      </div>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-6 md:left-1/2 w-0.5 h-full bg-custom-blue-dark transform md:-translate-x-1/2 z-0"></div>
        
        {invitationData.loveStory.map((story, index) => {
          const isLeftOnDesktop = index % 2 === 0;
          const animationDirection = isDesktop ? (isLeftOnDesktop ? "left" : "right") : "right";
          const fadeIn = useScrollFadeIn(animationDirection, index * 180);

          return (
            <div
              key={index}
              {...fadeIn}
              style={fadeIn.style}
              className={`relative flex items-center mb-8 ${isLeftOnDesktop ? 'md:justify-start' : 'md:justify-end'}`}
            >
              <div className="w-full pl-12 md:w-1/2 md:px-8">
                <div
                  className="p-4 rounded-lg shadow-lg bg-custom-blue-light hover:shadow-xl hover:scale-[1.02] transition-all duration-500"
                >
                  <p className="font-bold font-sans text-custom-blue-dark">{story.date}</p>
                  <h3 className="text-xl font-display mt-1">{story.title}</h3>
                  <p className="font-sans text-sm mt-2">{story.description}</p>
                </div>
              </div>
              
              <div className="absolute top-1/2 left-6 md:left-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-custom-blue-dark rounded-full border-2 border-white z-10"></div>
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
