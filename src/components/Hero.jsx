import { useState, useEffect } from 'react';
import { invitationData } from '../data/invitationData.js';
import heroBg from '../assets/images/hero-bg.jpg';
import useScrollFadeIn from '../hooks/useScrollFadeIn.js';
import CoupleNames from './CoupleNames.jsx';

const Hero = () => {
  const { groom, bride, weddingDate } = invitationData;
  const fadeInContent = useScrollFadeIn('up', 300);

  // State dan handler untuk efek parallax
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <div
      className="relative min-h-screen flex flex-col items-center justify-center text-center text-white p-6 overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundPositionY: offsetY * 0.5, // Menambahkan properti ini untuk efek parallax
      }}
    >
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      <div
        className="relative z-10 w-full h-full flex flex-col items-center justify-center"
        {...fadeInContent}
        style={fadeInContent.style}
      >
        <div className="relative z-10 flex flex-col gap-4">
          <p className="font-sans text-lg tracking-widest uppercase">The Wedding Of</p>
          <CoupleNames bride={bride} groom={groom} className="text-6xl md:text-8xl" />
          <p className="font-sans text-xl mt-4">
            {`${weddingDate.date}.${weddingDate.month}.${weddingDate.year}`}
          </p>
        </div>
        <div className="mt-8">
          <div className="flex items-center justify-center space-x-2 md:space-x-4 text-center font-sans animate-fade-up">
            {['days', 'hours', 'minutes', 'seconds'].map((unit, i) => (
              <div key={unit} className="p-2 md:p-4 bg-white/10 rounded-lg min-w-[60px] md:min-w-[80px] animate-bounce-smooth" style={{ animationDelay: `${i * 0.2}s` }}>
                <div className="text-3xl md:text-5xl font-bold">{String(timeLeft[unit] || '00').padStart(2, '0')}</div>
                <div className="text-xs md:text-sm uppercase tracking-widest">{unit === 'days' ? 'Hari' : unit === 'hours' ? 'Jam' : unit === 'minutes' ? 'Menit' : 'Detik'}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;