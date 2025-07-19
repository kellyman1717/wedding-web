// wedding-invitation/src/components/Hero.jsx

import { useState, useEffect } from 'react';
import { invitationData } from '../data/invitationData.js';
import heroBg from '../assets/images/hero-bg.jpg';
import useScrollFadeIn from '../hooks/useScrollFadeIn.js';

const Hero = () => {
  const { groom, bride, weddingDate } = invitationData;
  const fadeInContent = useScrollFadeIn('up', 300);

  // Fungsi untuk menghitung sisa waktu
  const calculateTimeLeft = () => {
    const difference = +new Date(invitationData.weddingDate.fullDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // useEffect untuk memperbarui hitung mundur setiap detik
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center text-center text-white p-6"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* EFEK BARU: Menghilangkan 'kotak' dan membuat gambar 'pudar' */}
      {/* Lapisan ini memberikan warna hitam yang sangat transparan (20%) dan efek blur pada gambar di belakangnya. */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

      <div
        className="relative z-10 w-full h-full flex flex-col items-center justify-center"
        {...fadeInContent}
        style={fadeInContent.style}
      >
        <div className="relative z-10 flex flex-col gap-4">
          <p className="font-sans text-lg tracking-widest uppercase">The Wedding Of</p>
          <h1 className="font-display text-6xl md:text-8xl italic">
            {groom} & {bride}
          </h1>
          <p className="font-sans text-xl mt-4">
            {`${weddingDate.date}.${weddingDate.month}.${weddingDate.year}`}
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mt-8">
          <div className="flex items-center justify-center space-x-2 md:space-x-4 text-center font-sans">
            <div className="p-2 md:p-4 bg-white/10 rounded-lg min-w-[60px] md:min-w-[80px]">
              <div className="text-3xl md:text-xl font-bold">{String(timeLeft.days || '00').padStart(2, '0')}</div>
              <div className="text-xs md:text-sm uppercase tracking-widest">Hari</div>
            </div>
            <div className="text-3xl md:text-xl font-bold">:</div>
            <div className="p-2 md:p-4 bg-white/10 rounded-lg min-w-[60px] md:min-w-[80px]">
              <div className="text-3xl md:text-xl font-bold">{String(timeLeft.hours || '00').padStart(2, '0')}</div>
              <div className="text-xs md:text-sm uppercase tracking-widest">Jam</div>
            </div>
            <div className="text-3xl md:text-xl font-bold">:</div>
            <div className="p-2 md:p-4 bg-white/10 rounded-lg min-w-[60px] md:min-w-[80px]">
              <div className="text-3xl md:text-xl font-bold">{String(timeLeft.minutes || '00').padStart(2, '0')}</div>
              <div className="text-xs md:text-sm uppercase tracking-widest">Menit</div>
            </div>
            <div className="text-3xl md:text-xl font-bold">:</div>
            <div className="p-2 md:p-4 bg-white/10 rounded-lg min-w-[60px] md:min-w-[80px]">
              <div className="text-3xl md:text-xl font-bold">{String(timeLeft.seconds || '00').padStart(2, '0')}</div>
              <div className="text-xs md:text-sm uppercase tracking-widest">Detik</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
