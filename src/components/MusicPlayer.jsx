const MusicPlayer = ({ isPlaying, onTogglePlay, currentVolume, onVolumeChange }) => {
  
  const handleSliderChange = (e) => {
    onVolumeChange(Number(e.target.value));
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex items-center gap-3 rounded-full border border-white/30 bg-white/20 px-4 py-2 shadow-lg backdrop-blur-md">
        <button
          onClick={onTogglePlay}
          className={`flex h-12 w-12 items-center justify-center rounded-full bg-custom-blue-dark text-white shadow-lg transition-transform duration-200 hover:scale-110 focus:outline-none ${
            isPlaying ? 'animate-pulse' : ''
          }`}
          aria-label="Play/Pause Music"
          type="button"
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <line x1="23" y1="9" x2="17" y2="15"></line>
              <line x1="17" y1="9" x2="23" y2="15"></line>
            </svg>
          )}
        </button>
        <div className="w-32 sm:w-40">
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={currentVolume}
            onChange={handleSliderChange}
            className="music-player__slider"
            aria-label="Volume control"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;