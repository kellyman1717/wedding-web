import { useState, useRef, useEffect } from 'react';
import Cover from './components/Cover.jsx';
import InvitationPage from './pages/InvitationPage.jsx';
import MusicPlayer from './components/MusicPlayer.jsx';
import backgroundMusic from './assets/music/background-music.mp3';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        // Menambahkan .catch() untuk menangani error jika audio gagal diputar
        audioRef.current.play().catch(e => console.error("Pemutaran audio gagal:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src={backgroundMusic} loop />
      {isOpened && <MusicPlayer isPlaying={isPlaying} onTogglePlay={togglePlayPause} />}

      {isOpened ? (
        <InvitationPage />
      ) : (
        <Cover onOpen={handleOpenInvitation} />
      )}
    </>
  );
}

export default App;
