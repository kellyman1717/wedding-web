const CoupleNames = ({ bride, groom, className = "" }) => {
  return (
    <div className={`font-display italic flex flex-col md:flex-row items-center justify-center text-center leading-snug ${className}`}>
      <span>{bride}</span>
      <span className="md:hidden">&</span>
      <span className="md:hidden">{groom}</span>
      <span className="hidden md:inline px-5">&</span>
      <span className="hidden md:inline">{groom}</span>
    </div>
  );
};

export default CoupleNames;