import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Cover from './components/Cover';
import InvitationPage from './pages/InvitationPage';
import MusicPlayer from './components/MusicPlayer';

import audioFile from './assets/music/song.mp3';

const TransitionWrapper = ({ isVisible, animationClasses, children }) => (
  <div
    className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} ${animationClasses}`}
    style={{ 
      transitionProperty: 'opacity, transform',
      transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' 
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
  const [isCoverVisible, setIsCoverVisible] = useState(true);
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef(new Audio(audioFile));

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    return () => {
      audio.pause();
    };
  }, []);
  
  const handleOpenInvitation = () => {
    setIsCoverVisible(false);

    audioRef.current.play().catch(error => console.error("Audio play failed:", error));
    setIsMusicPlaying(true);

    setTimeout(() => {
      setIsContentLoaded(true);
    }, 500);
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
      {isCoverVisible && (
        <TransitionWrapper
          isVisible={isCoverVisible}
          animationClasses={!isCoverVisible ? 'scale-105' : 'scale-100'}
        >
          <Cover onOpen={handleOpenInvitation} />
        </TransitionWrapper>
      )}

      {!isCoverVisible && (
        <TransitionWrapper
          isVisible={isContentLoaded}
          animationClasses={isContentLoaded ? 'translate-y-0' : 'translate-y-10'}
        >
          <InvitationPage />
        </TransitionWrapper>
      )}

      {!isCoverVisible && (
         <MusicPlayer isPlaying={isMusicPlaying} onTogglePlay={toggleMusic} />
      )}
    </>
  );
}

export default App;
