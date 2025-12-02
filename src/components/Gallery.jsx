import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { invitationData } from '../data/invitationData.js';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const { galleryImages } = invitationData;
  const cdnBaseUrl = 'https://my-wedding-ec9a0.web.app/images/';
  const [selectedImage, setSelectedImage] = useState(null);

  // Memisahkan gambar menjadi dua kolom (Ganjil & Genap)
  // Ini diperlukan untuk membuat efek kolom kanan turun (staggered)
  const column1Images = galleryImages.filter((_, i) => i % 2 === 0);
  const column2Images = galleryImages.filter((_, i) => i % 2 !== 0);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

  // --- VARIANTS ANIMASI ORNAMEN (Tetap Sesuai Kode Asli) ---
  const leaf5LeftVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 0.75, y: 0, scaleY: -1, transition: { duration: 1.5, ease: 'easeInOut' } },
  };
  const leaf5RightVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 0.75, y: 0, rotate: 180, transition: { duration: 1.5, ease: 'easeInOut' } },
  };
  const leaf10Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 0.9, x: 0, transition: { opacity: { duration: 1.5, ease: 'easeInOut' }, x: { duration: 1.5, ease: 'easeInOut' } }, rotate: [-142, -148] },
  };
  const leaf9Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 0.9, y: 0, transition: { opacity: { duration: 1.5, ease: 'easeInOut' }, y: { duration: 1.5, ease: 'easeInOut' } }, rotate: [170, 180] },
  };
  const leaf8Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 0.9, y: 0, transition: { opacity: { duration: 1.5, ease: 'easeInOut' }, y: { duration: 1.5, ease: 'easeInOut' } }, rotate: [-3, 4] },
  };
  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.4 } },
  };
  const titleChildVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div className="relative overflow-hidden bg-blue-200 py-16 px-4 sm:px-8 lg:px-8">
      
      {/* --- ORNAMEN --- */}
      <motion.img src={`${cdnBaseUrl}leaf-5.webp`} alt="Ornamen" className="absolute top-[50px] left-[-50px] w-[160px] h-auto z-0 scale-y-[-1] opacity-75" variants={leaf5LeftVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} />
      <motion.img src={`${cdnBaseUrl}leaf-5.webp`} alt="Ornamen" className="absolute top-[50px] right-[-50px] w-[160px] h-auto z-0 rotate-[180deg] opacity-75" variants={leaf5RightVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} />
      <img src={`${cdnBaseUrl}floral-bouquet-17.webp`} alt="Ornamen" className="absolute top-[-15px] left-0 w-[170px] h-auto z-0 scale-y-[-1]" />
      <img src={`${cdnBaseUrl}floral-bouquet-17.webp`} alt="Ornamen" className="absolute top-[-15px] right-0 w-[170px] h-auto z-0 rotate-[180deg]" />
      <img src={`${cdnBaseUrl}floral-straight-7.webp`} alt="Ornamen" className="fixed top-[-50px] left-1/2 -translate-x-1/2 w-[215px] h-auto z-10 opacity-90" />
      <img src={`${cdnBaseUrl}floral-straight-1.webp`} alt="Ornamen" className="fixed top-[-50px] left-0 w-[230px] h-auto z-0" />
      <img src={`${cdnBaseUrl}floral-straight-1.webp`} alt="Ornamen" className="fixed top-[-48px] right-0 w-[230px] h-auto z-0 rotate-180" />
      <motion.img src={`${cdnBaseUrl}leaf-branches-10.webp`} alt="Ornamen" className="absolute top-[545px] right-[0px] w-[143px] h-auto z-0 scale-x-[-1] -rotate-45 opacity-90 blur-[0.8px]" variants={leaf10Variants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} />
      <motion.img src={`${cdnBaseUrl}leaf-branches-9.webp`} alt="Ornamen" className="absolute bottom-[340px] left-[-13px] w-[143px] h-auto z-0 opacity-90 blur-[0.8px]" variants={leaf9Variants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} />
      <motion.img src={`${cdnBaseUrl}leaf-branches-8.webp`} alt="Ornamen" className="absolute bottom-0 right-0 w-[143px] h-auto z-0 opacity-90 translate-x-[40px] blur-[0.8px]" variants={leaf8Variants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} />

      {/* --- JUDUL --- */}
      <motion.div className="relative text-center mb-16 mt-[40px]" variants={titleContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
        <motion.h2 variants={titleChildVariants} className="font-display text-[32px] md:text-4xl text-gray-800 mt-5 font-medium">
          Gallery
        </motion.h2>
        <motion.p variants={titleChildVariants} className="font-sans mt-4 text-[18px]">
          Bagian dari tawa dan cinta yang membangun cerita kami.
        </motion.p>
      </motion.div>

      {/* --- GRID 2 KOLOM DENGAN OFFSET (TAPI UKURAN SAMA RATA) --- */}
      <div className="flex gap-4 max-w-5xl mx-auto items-start px-2">
        
        {/* KOLOM KIRI (Normal) */}
        <div className="flex flex-col gap-4 w-1/2">
          {column1Images.map((imgUrl, index) => (
            <motion.div
              key={`col1-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              // h-64 / md:h-80 MEMBUAT SEMUA CARD SAMA TINGGI
              className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-lg cursor-pointer group bg-white"
              onClick={() => setSelectedImage(imgUrl)}
            >
              {/* object-cover MEMASTIKAN FOTO MEMENUHI KOTAK TANPA RUSAK RASIO */}
              <img 
                src={imgUrl} 
                alt={`Gallery Left ${index}`} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* KOLOM KANAN (OFFSET / TURUN) */}
        {/* pt-12 (Mobile) & md:pt-24 (Desktop) MEMBUAT EFEK TURUN */}
        <div className="flex flex-col gap-4 w-1/2 pt-12 md:pt-24">
          {column2Images.map((imgUrl, index) => (
            <motion.div
              key={`col2-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              // h-64 / md:h-80 SAMA SEPERTI KIRI
              className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-lg cursor-pointer group bg-white"
              onClick={() => setSelectedImage(imgUrl)}
            >
              <img 
                src={imgUrl} 
                alt={`Gallery Right ${index}`} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

      </div>

      {/* --- MODAL FULLSCREEN (MENAMPILKAN UKURAN ASLI) --- */}
      {createPortal(
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              transition={{ duration: 0.3 }} 
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4" 
              onClick={() => setSelectedImage(null)}
            >
              {/* object-contain MENAMPILKAN FOTO UTUH SESUAI ASLINYA */}
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }} 
                animate={{ scale: 1, opacity: 1 }} 
                exit={{ scale: 0.8, opacity: 0 }} 
                transition={{ type: 'spring', stiffness: 300, damping: 30 }} 
                src={selectedImage} 
                alt="Fullscreen View" 
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" 
                onClick={(e) => e.stopPropagation()}
              />
              
              <button className="absolute top-5 right-5 text-white bg-white/20 rounded-full p-2 hover:bg-white/40 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};

export default Gallery;