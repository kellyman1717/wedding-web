import { useState, useEffect, useRef, useCallback  } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import PropTypes from 'prop-types';
import Cover from './components/Cover';
import InvitationPage from './pages/InvitationPage';
import MusicPlayer from './components/MusicPlayer';

const INITIAL_LOAD_DURATION = 1800;
const TRANSITION_OVERLAY_DURATION = 2300;

const TransitionWrapper = ({ isVisible, animationClasses, delay = 0, children }) => (
  <div
    className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} ${animationClasses}`}
    style={{transitionProperty: 'opacity, transform', transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', transitionDelay: `${delay}ms`}}>
    {children}
  </div>
);

TransitionWrapper.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  animationClasses: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const GlobalParallaxBackground = ({ showHero }) => {
  const cdnBaseUrl = 'https://my-wedding-ec9a0.web.app/images/';
  const { scrollY } = useScroll();

  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const backgroundY = useTransform(smoothScrollY, [0, 3000], [0, -800]);
  const backgroundScale = useTransform(smoothScrollY, [0, 1500], [1, 1.3]);
  
  if (!showHero) return null;
  return (
    <>
      <motion.div
        className="fixed inset-0 w-full h-full"
        style={{backgroundImage: `url(${cdnBaseUrl}gallery-4.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', y: backgroundY, scale: backgroundScale, zIndex: -20}}
      />
      <motion.div 
        className="fixed inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60 backdrop-blur-sm" style={{zIndex: -19}}
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
  const [volume, setVolume] = useState(0.4);

  const audioFileUrl = 'https://my-wedding-ec9a0.web.app/audio/lagu.mp3';
  const audioRef = useRef(new Audio(audioFileUrl));
  const audioContextRef = useRef(null);
  const gainNodeRef = useRef(null);
  const isAudioChainInitializedRef = useRef(false);
  
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
    audio.crossOrigin = 'anonymous';
    audio.volume = 0.4;
    return () => {
      audio.pause();
      if (audioContextRef.current) {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, []);

  const initializeAudioChain = useCallback(async () => {
    if (isAudioChainInitializedRef.current) return;
    isAudioChainInitializedRef.current = true;
  }, []);

  const handleOpenInvitation = () => {
    setIsBlurring(true);
    setIsFadingOutCover(true);
    
    setTimeout(() => {
      initializeAudioChain().finally(() => {
        audioRef.current.play().catch(err => console.error('Audio error', err));
      });
      setIsMusicPlaying(true);
    }, 3400);

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
      initializeAudioChain().finally(() => {
        if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
          audioContextRef.current.resume().catch(err => console.error('Audio resume error', err));
        }
        audio.play().catch(err => console.error('Audio error', err));
      });
    }
    setIsMusicPlaying(!isMusicPlaying);
  };

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  return (
    <>
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
          <MusicPlayer 
            isPlaying={isMusicPlaying} 
            onTogglePlay={toggleMusic}
            currentVolume={volume}
            onVolumeChange={handleVolumeChange} 
          />
        </>
      )}
    </>
  );
}

export default App;