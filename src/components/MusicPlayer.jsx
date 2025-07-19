const MusicPlayer = ({ isPlaying, onTogglePlay }) => {
  return (
    <button
      onClick={onTogglePlay}
      className="fixed bottom-5 right-5 z-50 w-12 h-12 bg-custom-pink-dark text-white rounded-full flex items-center justify-center shadow-lg focus:outline-none"
      aria-label="Play/Pause Music"
    >
      {isPlaying ? (
        // Ikon Pause (SVG)
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
      ) : (
        // Ikon Play (SVG)
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
      )}
    </button>
  );
};

export default MusicPlayer;