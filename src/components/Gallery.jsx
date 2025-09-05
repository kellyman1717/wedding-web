import { invitationData } from '../data/invitationData.js';
import useScrollFadeIn from '../hooks/useScrollFadeIn.js';
import { motion } from 'framer-motion';

const Gallery = () => {
  const { galleryImages } = invitationData;
  const cdnBaseUrl = 'https://my-wedding-ec9a0.web.app/images/';

  const fadeIn1 = useScrollFadeIn("up", 0);
  const fadeIn2 = useScrollFadeIn("up", 200);
  const fadeIn3 = useScrollFadeIn("up", 400);
  const fadeIn4 = useScrollFadeIn("up", 500);

  // BARU: Varian untuk leaf-5.webp di kiri (dengan scaleY-1)
  const leaf5LeftVariants = {
    hidden: { opacity: 0, y: -50 }, // Muncul dari atas
    visible: {
      opacity: 0.75,
      y: 0,
      scaleY: -1, // Pertahankan flip vertikal
      transition: {
        opacity: { duration: 1.5, ease: "easeInOut" },
        y: { duration: 1.5, ease: "easeInOut" },
        rotate: {
          delay: 1.5, // Mulai animasi angin setelah fade-in
          duration: 7,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        },
      },
      rotate: [-5, 6], // Ayunan lembut di sekitar sumbu normal
    },
  };

  // BARU: Varian untuk leaf-5.webp di kanan (dengan rotate 180deg)
  const leaf5RightVariants = {
    hidden: { opacity: 0, y: -50 }, // Muncul dari atas
    visible: {
      opacity: 0.75,
      y: 0,
      rotate: 180, // Pertahankan rotasi 180 derajat
      transition: {
        opacity: { duration: 1.5, ease: "easeInOut" },
        y: { duration: 1.5, ease: "easeInOut" },
        rotate: {
          delay: 1.5, // Mulai animasi angin setelah fade-in
          duration: 7,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        },
      },
      // Ayunan lembut di sekitar 180 derajat
      rotate: [175, 186],
    },
  };

  const leaf10Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 0.9,
      x: 0,
      transition: {
        opacity: { duration: 1.5, ease: "easeInOut" },
        x: { duration: 1.5, ease: "easeInOut" },
        rotate: {
          delay: 1.5,
          duration: 9,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        },
      },
      // Animasi angin berayun di sekitar -45 derajat
      rotate: [-142, -148],
    },
  };

  // Untuk leaf-branches-9.webp (terbalik vertikal & rotasi 100deg)
  const leaf9Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 0.9,
      y: 0,
      // scaleY: -1 DIHAPUS, karena ini yang membuatnya terbalik
      transition: {
        opacity: { duration: 1.5, ease: "easeInOut" },
        y: { duration: 1.5, ease: "easeInOut" },
        rotate: {
          delay: 1.5,
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        },
      },
      // Rotasi disesuaikan agar ujung menunjuk ke atas/kiri
      rotate: [170, 180], // Mengatur rotasi awal di sekitar 170-180 derajat
    },
  };

  // Untuk leaf-branches-8.webp (tanpa flip)
  const leaf8Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 0.9,
      y: 0,
      transition: {
        opacity: { duration: 1.5, ease: "easeInOut" },
        y: { duration: 1.5, ease: "easeInOut" },
        rotate: {
          delay: 1.5,
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        },
      },
      rotate: [-3, 4],
    },
  };

  return (
    <div className="relative overflow-hidden bg-blue-200 py-16 px-8 sm:px-8 lg:px-8 overflow-hidden">
      {/* Ornamen Bunga */}
      <motion.img
        src={`${cdnBaseUrl}leaf-5.webp`}
        alt="Ornamen"
        className="absolute top-[50px] left-[-50px] w-[160px] h-auto z-0 scale-y-[-1] opacity-75"
        variants={leaf5LeftVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      />
      <motion.img
        src={`${cdnBaseUrl}leaf-5.webp`}
        alt="Ornamen"
        className="absolute top-[50px] right-[-50px] w-[160px] h-auto z-0 rotate-[180deg] opacity-75"
        variants={leaf5RightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      />
      <img src={`${cdnBaseUrl}floral-bouquet-17.webp`} alt="Ornamen" className="absolute top-[-15px] left-0 w-[170px] h-auto z-0 scale-y-[-1]" />
      <img src={`${cdnBaseUrl}floral-bouquet-17.webp`} alt="Ornamen" className="absolute top-[-15px] right-0 w-[170px] h-auto z-0 rotate-[180deg]" />
      <img src={`${cdnBaseUrl}floral-straight-7.webp`} alt="Ornamen" className="fixed top-[-50px] left-1/2 -translate-x-1/2 w-[215px] h-auto z-10 opacity-90" />
      <img src={`${cdnBaseUrl}floral-straight-1.webp`} alt="Ornamen" className="fixed top-[-50px] left-0 w-[230px] h-auto z-0" />
      <img src={`${cdnBaseUrl}floral-straight-1.webp`} alt="Ornamen" className="fixed top-[-48px] right-0 w-[230px] h-auto z-0 rotate-180" />
      <motion.img
        src={`${cdnBaseUrl}leaf-branches-10.webp`}
        alt="Ornamen"
        // PERUBAHAN DI SINI: Posisi dan rotasi diubah sesuai gambar
        className="absolute top-[545px] right-[0px] w-[143px] h-auto z-0 scale-x-[-1] -rotate-45 opacity-90"
        variants={leaf10Variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      />
      <motion.img
        src={`${cdnBaseUrl}leaf-branches-9.webp`}
        alt="Ornamen"
        className="absolute bottom-[340px] left-[-13px] w-[143px] h-auto z-0 opacity-90"
        variants={leaf9Variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      />
      <motion.img
        src={`${cdnBaseUrl}leaf-branches-8.webp`}
        alt="Ornamen"
        className="absolute bottom-0 right-0 w-[143px] h-auto z-0 opacity-90 translate-x-[40px]"
        variants={leaf8Variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      />

      {/* Judul */}
      <div className="relative text-center mb-12 mt-[40px]">
        <h2 className="font-display text-[32px] md:text-4xl text-gray-800 mt-5 font-medium">Gallery</h2>
        <p className="font-sans mt-4 text-[18px]">Bagian dari tawa dan cinta yang membangun cerita kami.</p>
      </div>

      {/* Grid Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-3 gap-y-[30px] gap-x-[20px] max-w-5xl mx-auto md:h-auto mb-[10px]">
        {galleryImages.length >= 4 && (
          <>
            <div {...fadeIn1} style={fadeIn1.style} className="col-span-2 md:col-span-2 md:row-span-2 rounded-lg overflow-hidden shadow-lg">
              <img src={galleryImages[0]} alt="Gallery moment 1"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
            </div>
            <div {...fadeIn2} style={fadeIn2.style} className="rounded-lg overflow-hidden shadow-lg">
              <img src={galleryImages[1]} alt="Gallery moment 2"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
            </div>
            <div {...fadeIn3} style={fadeIn3.style} className="md:row-span-2 rounded-lg overflow-hidden shadow-lg">
              <img src={galleryImages[2]} alt="Gallery moment 3"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
            </div>
            <div {...fadeIn4} style={fadeIn4.style} className="col-span-2 md:col-span-1 rounded-lg overflow-hidden shadow-lg">
              <img src={galleryImages[3]} alt="Gallery moment 4"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Gallery;