import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { invitationData } from '../data/invitationData.js';
import useScrollFadeIn from '../hooks/useScrollFadeIn.js';
import CoupleNames from './CoupleNames.jsx';

const Hero = () => {
  const { groom, bride, weddingDate } = invitationData;
  const fadeInContent = useScrollFadeIn('up', 900);

  // Get global scroll for content parallax
  const { scrollY } = useScroll();
  
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Content moves slower than background for parallax effect
  const contentY = useTransform(smoothScrollY, [0, 1000], [0, -100]);
  const contentOpacity = useTransform(smoothScrollY, [0, 300, 600], [1, 0.8, 0.3]);

  const calculateTimeLeft = () => {
    const difference = +new Date(invitationData.weddingDate.fullDate) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center text-white p-6">
      {/* Content with parallax movement and fade effect */}
      <motion.div
        className="relative z-10 w-full h-full flex flex-col items-center justify-center"
        style={{ 
          y: contentY,
          opacity: contentOpacity
        }}
        {...fadeInContent}
      >
        <div className="relative z-10 flex flex-col gap-4">
          <motion.p 
            className="font-sans text-lg tracking-widest uppercase drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            The Wedding Of
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
            className="drop-shadow-2xl"
          >
            <CoupleNames bride={bride} groom={groom} className="text-5xl md:text-8xl" />
          </motion.div>
          
          <motion.p 
            className="font-sans text-xl mt-4 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {`${weddingDate.date}.${weddingDate.month}.${weddingDate.year}`}
          </motion.p>
        </div>

        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="flex items-center justify-center space-x-2 md:space-x-4 text-center font-sans">
            {['days', 'hours', 'minutes', 'seconds'].map((unit, i) => (
              <motion.div 
                key={unit} 
                className="p-2 md:p-4 bg-white/10 rounded-lg min-w-[60px] md:min-w-[80px] backdrop-blur-md border border-white/20 shadow-lg"
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  delay: 1.8 + (i * 0.1), 
                  duration: 0.6,
                  ease: "backOut"
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                }}
              >
                <motion.div 
                  className="text-3xl md:text-5xl font-bold"
                  key={timeLeft[unit] || '00'}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {String(timeLeft[unit] || '00').padStart(2, '0')}
                </motion.div>
                <div className="text-xs md:text-sm uppercase tracking-widest opacity-80">
                  {unit === 'days' ? 'Hari' : 
                   unit === 'hours' ? 'Jam' : 
                   unit === 'minutes' ? 'Menit' : 'Detik'}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;