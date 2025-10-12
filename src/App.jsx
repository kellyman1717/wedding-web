import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import PropTypes from 'prop-types';
import Cover from './components/Cover';
import InvitationPage from './pages/InvitationPage';
import MusicPlayer from './components/MusicPlayer';
import audioFile from './assets/music/song.mp3';
import BottomNavBar from './components/BottomNavBar';

const INITIAL_LOAD_DURATION = 1800;
const TRANSITION_OVERLAY_DURATION = 2300;

const TransitionWrapper = ({ isVisible, animationClasses, delay = 0, children }) => (
  <div
    className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} ${animationClasses}`}
    style={{
      transitionProperty: 'opacity, transform',
      transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      transitionDelay: `${delay}ms`,
    }}
  >
    {children}
  </div>
);

TransitionWrapper.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  animationClasses: PropTypes.string,
  children: PropTypes.node.isRequired,
};

// Global Parallax Background Component
const GlobalParallaxBackground = ({ showHero }) => {
  const cdnBaseUrl = 'https://my-wedding-ec9a0.web.app/images/';
  
  // Track scroll of document body
  const { scrollY } = useScroll();
  
  // Create smooth spring animation
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Parallax transforms - adjust ranges based on your total page height
  const backgroundY = useTransform(smoothScrollY, [0, 3000], [0, -800]);
  const backgroundScale = useTransform(smoothScrollY, [0, 1500], [1, 1.3]);
  const overlayOpacity = useTransform(smoothScrollY, [0, 500, 1500], [0.2, 0.6, 0.9]);
  
  if (!showHero) return null;
  
  return (
    <>
      {/* Fixed parallax background */}
      <motion.div
        className="fixed inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${cdnBaseUrl}hero-bg.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: backgroundY,
          scale: backgroundScale,
          zIndex: -20,
        }}
      />
      
      {/* Fixed overlay */}
      <motion.div 
        className="fixed inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60 backdrop-blur-sm"
        style={{
          zIndex: -19,
        }}
      />
    </>
  );
};

function App() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [showCover, setShowCover] = useState(true);
  const [showHero, setShowHero] = useState(false);
  const [isBlurring, setIsBlurring] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isFadingOutCover, setIsFadingOutCover] = useState(false);
  const audioRef = useRef(new Audio(audioFile));
  const [showNavbar, setShowNavbar] = useState(false);
  const [guestName, setGuestName] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('to');
    if (name) {
      setGuestName(name);
    }

    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, INITIAL_LOAD_DURATION);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    return () => {
      audio.pause();
    };
  }, []);

  useEffect(() => {
    if (showHero) {
      const body = document.body;
      const handleFirstScroll = () => {
        setTimeout(() => {
          setShowNavbar(true);
        }, 1000);
        body.removeEventListener('scroll', handleFirstScroll);
      };
      body.addEventListener('scroll', handleFirstScroll);
      return () => {
        body.removeEventListener('scroll', handleFirstScroll);
      };
    }
  }, [showHero]);

  const handleOpenInvitation = () => {
    setIsBlurring(true);
    setIsFadingOutCover(true);
    audioRef.current.play().catch(err => console.error('Audio error', err));
    setIsMusicPlaying(true);
    setShowOverlay(true);
    
    setTimeout(() => {
      setShowCover(false);
      setShowHero(true);
      setShowOverlay(true);
    }, 1800);
    
    setTimeout(() => {
      setShowOverlay(false);
    }, TRANSITION_OVERLAY_DURATION + 5000);
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (isMusicPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsMusicPlaying(!isMusicPlaying);
  };

  return (
    <>
      {/* Global Parallax Background */}
      <GlobalParallaxBackground showHero={showHero} />
      
      {isInitialLoading && (
        <div className="fixed inset-0 z-50 backdrop-blur-2xl animate-fadeout-blur" />
      )}
      
      {showOverlay && (
        <div className="fixed inset-0 z-40 bg-white/60 backdrop-blur-2xl animate-fade-blur-white pointer-events-none" />
      )}
      
      {showCover && (
        <TransitionWrapper 
          isVisible={showCover} 
          animationClasses="scale-100 transition-transform duration-700 ease-in-out"
        >
          <Cover 
            onOpen={handleOpenInvitation} 
            isBlurred={isBlurring}
            isFadingOut={isFadingOutCover} 
            guestName={guestName}
          />
        </TransitionWrapper>
      )}
      
      {showHero && (
        <TransitionWrapper 
          isVisible={showHero}
          animationClasses="translate-y-0" 
          delay={2400}
        >
          <div className="relative z-10">
            <InvitationPage />
          </div>
        </TransitionWrapper>
      )}
      
      {showHero && (
        <>
          <MusicPlayer isPlaying={isMusicPlaying} onTogglePlay={toggleMusic} />
          <BottomNavBar isVisible={showNavbar} />
        </>
      )}
    </>
  );
}

export default App;