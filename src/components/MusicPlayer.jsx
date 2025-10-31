const MusicPlayer = ({ isPlaying, onTogglePlay, currentVolume, onVolumeChange }) => {
  
  const handleSliderChange = (e) => {
    onVolumeChange(Number(e.target.value));
  };

  return (
    <div className="fixed bottom-[80px] right-[25px] z-50 flex flex-col items-center gap-3">
      <input
        type="range"
        min="0"
        max="1"
        step="0.05"
        value={currentVolume}
        onChange={handleSliderChange}
        // [-webkit-appearance:slider-vertical] (untuk Chrome/Safari)
        // [writing-mode:vertical-lr] (untuk Firefox)
        className="h-[95px] w-3 cursor-pointer accent-custom-blue-dark transform-gpu rotate-180 [-webkit-appearance:slider-vertical] [writing-mode:vertical-lr]"
        aria-label="Volume control"
        orient="vertical"
      />
      <button
        onClick={onTogglePlay}
        className={`w-12 h-12 bg-custom-blue-dark text-white rounded-full flex items-center justify-center shadow-lg focus:outline-none transition-all transform hover:scale-110 ${
          isPlaying ? 'animate-pulse' : ''
        }`}
        aria-label="Play/Pause Music"
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
            <line x1="17" y1="9"x2="23" y2="15"></line>
          </svg>
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;