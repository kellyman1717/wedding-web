import { useState, useEffect, useRef } from 'react';
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

  useEffect(() => {
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
        setShowNavbar(true);
    }, 1900);

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
      {isInitialLoading && (
        <div className="fixed inset-0 z-50 backdrop-blur-2xl animate-fadeout-blur1" />
      )}
      {showOverlay && (
        <div className="fixed inset-0 z-40 bg-white/60 backdrop-blur-2xl animate-fade-blur-white pointer-events-none" />
      )}

      {showCover && (
        <TransitionWrapper isVisible={showCover} animationClasses="scale-100 transition-transform duration-700 ease-in-out">
          <Cover onOpen={handleOpenInvitation} isBlurred={isBlurring} isFadingOut={isFadingOutCover} />
        </TransitionWrapper>
      )}

      {showHero && (
        <TransitionWrapper isVisible={showHero} animationClasses="translate-y-0" delay={2400}>
          <InvitationPage />
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
