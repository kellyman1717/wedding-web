import { useState, useEffect } from 'react';
import { invitationData } from '../data/invitationData.js';

const Countdown = () => {
  const targetDate = new Date(invitationData.weddingDate.fullDate).getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="py-16 px-6 bg-custom-blue-light text-center">
      <h2 className="font-display text-4xl text-custom-brown mb-4">Menuju Hari Bahagia</h2>
      <div className="flex justify-center gap-6 text-custom-blue-dark font-display text-3xl">
        <div>{timeLeft.days} <p className="text-sm">Hari</p></div>
        <div>{timeLeft.hours} <p className="text-sm">Jam</p></div>
        <div>{timeLeft.minutes} <p className="text-sm">Menit</p></div>
        <div>{timeLeft.seconds} <p className="text-sm">Detik</p></div>
      </div>
    </div>
  );
};

export default Countdown;
