import { useState, useEffect } from 'react';
import { invitationData } from '../data/invitationData.js';
import { motion } from 'framer-motion';

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

  const timelineContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const timelineItemVariants = {
    hidden: {
      opacity: 0,
      x: '-100%',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        opacity: { duration: 1.5, ease: "easeInOut" },
        x: { duration: 1.5, ease: "easeOut" },
      },
    },
  };

  const leaf5LoveStoryVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      scaleX: -1,
      transition: {
        opacity: { duration: 1.5, ease: "easeInOut" },
        y: { duration: 1.5, ease: "easeInOut" },
        rotate: {
          delay: 1.5,
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        },
      },
      rotate: [-40, -50],
    },
  };

  const leaf3Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 0.8,
      x: 0,
      rotate: 165,
      transition: {
        opacity: { duration: 1.5, ease: "easeInOut" },
        x: { duration: 1.5, ease: "easeInOut" },
        rotate: {
          delay: 1.5,
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        },
      },
      rotate: [162, 168],
    },
  };

  const leaf1Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        opacity: { duration: 1.5, ease: "easeInOut" },
        rotate: {
          delay: 1.5,
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        },
      },
      rotate: [2, 8],
    },
  };

  // Varian untuk gunungan wayang kiri
   const gununganLeftVariants = {
    hidden: { opacity: 0, x: -50, y: 50, rotate: 30 },
    visible: {
      opacity: 0.4,
      x: 0,
      y: 0,
      // Atur rentang rotasi di sini. [nilaiAwal, nilaiTengah, nilaiAkhir]
      rotate: [30, 35, 30], 
      transition: {
        // Transisi untuk opacity, x, dan y (saat pertama kali muncul)
        default: { duration: 1.5, ease: "easeInOut" },
        // Transisi khusus untuk rotasi (animasi melambai)
        rotate: {
          // Atur kecepatan di sini (dalam detik)
          duration: 5, 
          repeat: Infinity, // Membuat animasi berulang selamanya
          repeatType: "mirror", // Membuatnya bolak-balik (misal: 30 -> 35 -> 30)
          ease: "easeInOut"
        }
      }
    }
  };

  const gununganRightVariants = {
    hidden: { opacity: 0, x: 50, y: 50, rotate: -30 },
    visible: {
      opacity: 0.4,
      x: 0,
      y: 0,
      // Atur rentang rotasi di sini.
      rotate: [-30, -35, -30],
      transition: {
        default: { duration: 1.5, ease: "easeInOut" },
        rotate: {
          // Atur kecepatan di sini.
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }
      }
    }
  };


  return (
    <div className="relative  py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-200 to-white text-gray-700">
      {/* Ornamen */}
      <motion.img
        src={`${cdnBaseUrl}leaf-5.webp`}
        alt="Ornamen"
        className="absolute top-[300px] left-[-120px] w-[235px] h-auto z-0 scale-x-[-1] rotate-[115deg] opacity-50"
        onError={(e) => e.target.style.display = 'none'}
        variants={leaf5LoveStoryVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />
      <motion.img
        src={`${cdnBaseUrl}leaf-branches-3.webp`}
        alt="Ornamen"
        className="absolute top-[370px] left-[-43px] w-[190px] h-auto z-0 rotate-[165deg] opacity-80"
        onError={(e) => e.target.style.display = 'none'}
        variants={leaf3Variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />
      <motion.img
        src={`${cdnBaseUrl}leaf-branches-1 tuned.webp`}
        alt="Ornamen"
        className="absolute bottom-[160px] right-[-10px] w-[125px] h-auto z-0 opacity-80"
        onError={(e) => e.target.style.display = 'none'}
        variants={leaf1Variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />
      <img src={`${cdnBaseUrl}floral-bouquet-2.webp`} alt="Ornamen" className="absolute top-[115px] right-[20px] w-[200px] h-auto z-0 opacity-70" onError={(e) => e.target.style.display = 'none'}/>
      
      {/* Gunungan Kiri dengan Transisi */}
      <motion.img
        src={`${cdnBaseUrl}gunungan_wayang.webp`}
        alt="Gunungan Kiri"
        className="absolute bottom-[-65px] left-[-25px] w-[160px] h-auto z-0 transform-origin-bottom"
        onError={(e) => e.target.style.display = 'none'}
        variants={gununganLeftVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />
      
      {/* Gunungan Kanan dengan Transisi Berulang */}
      <motion.img
        src={`${cdnBaseUrl}gunungan_wayang.webp`}
        alt="Gunungan Kanan"
        className="absolute bottom-[-65px] right-[-25px] w-[160px] h-auto z-0 transform-origin-bottom"
        onError={(e) => e.target.style.display = 'none'}
        variants={gununganRightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />
      
      <div className="text-center mb-16">
        <h2 className="relative font-display text-4xl md:text-5xl text-gray-800">Kisah Cinta Kami</h2>
        <p className="relative font-sans mt-4 text-lg">Perjalanan yang membawa kami hingga ke titik ini.</p>
      </div>
      <motion.div 
        className="relative max-w-3xl mx-auto"
        variants={timelineContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="absolute left-6 md:left-1/2 w-0.5 h-full bg-black transform md:-translate-x-1/2 z-0"></div>
        
        {invitationData.loveStory.map((story, index) => {
          const isLeftOnDesktop = isDesktop && index % 2 === 0;
          const animationDirection = isDesktop ? (isLeftOnDesktop ? "left" : "right") : "right";

          return (
            <motion.div
              key={index}
              custom={animationDirection}
              variants={timelineItemVariants}
              className={`relative flex items-center mb-8 ${isDesktop ? (isLeftOnDesktop ? 'justify-start' : 'justify-end') : 'justify-start'}`}
            >
              <div className={`w-full pl-12 md:w-1/2 ${isLeftOnDesktop ? 'md:pr-6 md:pl-0' : 'md:pl-6'}`}>
                <div
                  className="p-6 rounded-lg shadow-lg bg-white bg-opacity-20 backdrop-blur-md border border-white/30 transform hover:scale-[1.02] hover:shadow-xl transition-all duration-500"
                  style={{
                    backdropFilter: 'blur(2px)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    background: 'rgba(255, 255, 255, 0.15)',
                  }}
                >
                  <p className="font-bold font-sans text-blue-800">{story.date}</p>
                  <h3 className="text-xl font-display mt-1 text-black">{story.title}</h3>
                  <p className="font-sans text-sm mt-2 text-blue-950">{story.description}</p>
                </div>
              </div>
              <div className="absolute top-1/2 left-6 md:left-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full border-2 border-white z-10"></div>
            </motion.div>
          );
        })}
      </motion.div>
      
      <p className="relative z-10 text-center mt-12 italic text-gray-800 max-w-xl mx-auto text-lg">
        "Setiap langkah kisah cinta ini adalah takdir terindah dari-Nya."
      </p>
    </div>
  );
};

export default LoveStory;