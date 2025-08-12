import { useState, useEffect } from 'react';
import { invitationData } from '../data/invitationData.js';
import useScrollFadeIn from '../hooks/useScrollFadeIn.js';

const LoveStory = () => {
  const cdnBaseUrl = 'https://my-wedding-ec9a0.web.app/images/';
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative overflow-hidden py-[55px] px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-200 to-white">
      {/* Ornamen */}
      <img src={`${cdnBaseUrl}leaf-branches-3.webp`} alt="Ornamen" className="absolute top-[370px] left-[-43px] w-[190px] h-auto z-0 rotate-[165deg] opacity-80"/>
      <img src={`${cdnBaseUrl}leaf-branches-1.webp`} alt="Ornamen" className="absolute bottom-[160px] right-[-45px] w-[215px] h-auto z-0 rotate-[-155deg] opacity-80"/>
      <img src={`${cdnBaseUrl}floral-bouquet-2.webp`} alt="Ornamen" className="absolute top-[115px] right-[20px] w-[200px] h-auto z-0 opacity-70"/>
      <img src={`${cdnBaseUrl}leaf-5.webp`} alt="Ornamen" className="absolute top-[320px] left-[-100px] w-[235px] h-auto z-0 rotate-[35deg] transform scale-x-[-1] opacity-50"/>
      <img src={`${cdnBaseUrl}gunungan_wayang.png`} alt="Ornamen" className="z-1 absolute bottom-[-65px] left-[-25px] w-[160px] h-auto z-0 rotate-[30deg] opacity-40"/>
      <img src={`${cdnBaseUrl}gunungan_wayang.png`} alt="Ornamen" className="absolute bottom-[-65px] right-[-25px] w-[160px] h-auto z-0 rotate-[-30deg] opacity-40"/>
      
      <div className="text-center mb-16">
        <h2 className="relative font-display text-4xl md:text-5xl text-custom-brown">Kisah Cinta Kami</h2>
        <p className="relative font-sans mt-4 text-lg">Perjalanan yang membawa kami hingga ke titik ini.</p>
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
              <div className="w-full pl-12 md:w-1/5 md:px-8">
                <div
                  className="p-6 rounded-lg shadow-lg bg-white bg-opacity-20 backdrop-blur-md border border-white/30 transform hover:scale-[1.02] hover:shadow-xl transition-all duration-500"
                  style={{
                    backdropFilter: 'blur(2px)',  // Menambahkan efek blur untuk glassmorphism
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Bayangan lembut
                    background: 'rgba(255, 255, 255, 0.15)',  // Membuat latar belakang sedikit lebih gelap
                  }}
                >
                  <p className="font-bold font-sans text-custom-blue-dark">
                    {story.date}
                  </p>
                  <h3 className="text-xl font-display mt-1 text-black">
                    {story.title}
                  </h3>
                  <p className="font-sans text-sm mt-2 text-blue-950">
                    {story.description}
                  </p>
                </div>
              </div>
              
              <div className="absolute top-1/2 left-6 md:left-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-custom-blue-dark rounded-full border-2 border-white z-10"></div>
            </div>
          );
        })}
      </div>
      
      <p className="relative z-10 text-center mt-12 italic text-custom-brown max-w-xl mx-auto text-lg">
        "Setiap langkah kisah cinta ini adalah takdir terindah dari-Nya."
      </p>
    </div>
  );
};

export default LoveStory;
