import { useState, useEffect } from 'react';
import { Home, HeartHandshake, CalendarCheck2, Image, Heart, MapPin, MessageCircle, BookOpenText } from 'lucide-react';

const navLinks = [
  { id: 'home', icon: Home, label: 'Beranda' },
  { id: 'profile', icon: HeartHandshake, label: 'Mempelai' },
  { id: 'event', icon: CalendarCheck2, label: 'Acara' },
  { id: 'gallery', icon: Image, label: 'Galeri' },
  { id: 'lovestory', icon: Heart, label: 'Kisah Cinta' },
  { id: 'location', icon: MapPin, label: 'Lokasi' },
  { id: 'rsvp', icon: MessageCircle, label: 'RSVP' },
  { id: 'guestbook', icon: BookOpenText, label: 'Buku Tamu' },
];

const BottomNavBar = ({ isVisible }) => {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(targetId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let currentSection = '';
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section && scrollPosition >= section.offsetTop) {
          currentSection = link.id;
        }
      }
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed bottom-0 left-0 z-30 w-full transform px-4 pb-4 transition-all duration-700 ease-in-out md:px-0 md:pb-0 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'} md:translate-y-0 md:pb-6`}>
      <div
        className="mx-auto flex h-16 items-center justify-start gap-2 overflow-x-auto rounded-full bg-white/20 p-2 shadow-lg backdrop-blur-lg scrollbar-none md:justify-center md:overflow-x-hidden">
        {navLinks.map((link) => (
          <a key={link.id} href={`#${link.id}`} title={link.label} onClick={(e) => handleNavClick(e, link.id)} className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${activeSection === link.id ? 'bg-custom-blue-dark text-white shadow-md' : 'text-black hover:bg-white/50'}`}>
            <link.icon size={24} />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavBar;