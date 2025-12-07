import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollContainer = document.getElementById('main-scroll-container');
    const locationSection = document.getElementById('location');

    const toggleVisibility = () => {
      if (scrollContainer && locationSection) {
        if (scrollContainer.scrollTop >= locationSection.offsetTop - 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', toggleVisibility);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', toggleVisibility);
      }
    };
  }, []);

  const scrollToTop = () => {
    const scrollContainer = document.getElementById('main-scroll-container');
    if (scrollContainer) {
      scrollContainer.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-28 right-6 z-[60] p-3 bg-custom-blue-dark text-white rounded-full shadow-lg border border-white/20 backdrop-blur-sm hover:bg-blue-800 transition-colors"
          aria-label="Kembali ke atas"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;