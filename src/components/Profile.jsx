import { motion } from 'framer-motion';
import { invitationData } from '../data/invitationData.js';

const ProfileCard = ({ name, father, mother, photo, isBride, variants }) => {
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.8
      }
    }
  };

  return (
    <motion.div className="flex flex-col items-center gap-4" variants={variants}>
      <motion.div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg" variants={childVariants}>
        <img src={photo} alt={name} className="w-full h-full object-cover" />
      </motion.div>
      <motion.h3 className="font-display text-4xl italic text-gray-700 mt-10" variants={childVariants}>
        {name}
      </motion.h3>
      <motion.div className="text-center text-gray-600 mt-5" variants={childVariants}>
        <p className="font-semibold">{isBride ? 'Putri dari Pasangan' : 'Putra dari Pasangan'}</p>
        <p>{father}</p>
        <p>&</p>
        <p>{mother}</p>
      </motion.div>
    </motion.div>
  );
};

const Profile = () => {
  const cdnBaseUrl = 'https://my-wedding-ec9a0.web.app/images/';
  const profileSectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.5
      }
    }
  };

  const profileItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const contentContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      }
    }
  };

  const contentChildVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut"
      }
    }
  };

  const leafLeftVariants = {
    hidden: { opacity: 0, x: -100, rotate: -26 },
    visible: {
      opacity: 0.75,
      x: 0,
      rotate: [-26, -29, -26],
      transition: {
        opacity: { duration: 1.5, ease: "easeInOut" },
        x: { duration: 1.5, ease: "easeInOut" },
        rotate: {
          delay: 1.5,
          duration: 9,
          ease: "easeInOut",
          repeat: Infinity,
        }
      }
    }
  };

  const leafRightVariants = {
    hidden: { opacity: 0, x: 100, rotate: -175, scaleY: -1 },
    visible: {
      opacity: 0.8,
      x: 0,
      scaleY: -1,
      rotate: [-175, -172, -175],
      transition: {
        opacity: { duration: 1.5, ease: "easeInOut" },
        x: { duration: 1.5, ease: "easeInOut" },
        rotate: {
          delay: 1.5,
          duration: 9.5,
          ease: "easeInOut",
          repeat: Infinity,
        }
      }
    }
  };

  const fern1Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 0.8, y: 0, rotate: [-2, 2, -2], x: ['-2%', '2%', '-2%'],
      transition: {
        opacity: { duration: 1.5, ease: 'easeOut' }, y: { duration: 1.5, ease: 'easeOut' },
        rotate: { delay: 1.5, duration: 9, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop', repeatDelay: 0.6 },
        x: { delay: 1.5, duration: 9, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop', repeatDelay: 0.6 }
      }
    }
  };
  const fern2Variants = {
    hidden: { opacity: 0, y: 50, rotate: 90 },
    visible: {
      opacity: 0.8, y: 0, rotate: [90, 88, 92, 90],
      transition: {
        opacity: { duration: 1.5, ease: 'easeOut' }, y: { duration: 1.5, ease: 'easeOut' },
        rotate: { delay: 1.5, duration: 8, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop', repeatDelay: 0.6 }
      }
    }
  };

  return (
    <div className="relative overflow-hiddenQl text-center py-16 px-10 bg-gradient-to-b from-blue-200 to-white">
      <img src={`${cdnBaseUrl}floral-bouquet-17.webp`} alt="Ornamen" className="absolute top-[-5px] left-[0px] w-[160px] h-auto z-10 scale-y-[-1]" />
      <img src={`${cdnBaseUrl}floral-bouquet-18.webp`} alt="Ornamen" className="absolute top-[-5px] right-[0px] w-[160px] h-auto z-10 rotate-[180deg]" />
      <img src={`${cdnBaseUrl}floral-straight-5.webp`} alt="Ornamen" className="fixed top-[-45px] right-0 w-[210px] h-auto z-10 scale-x-[-1]" />
      <img src={`${cdnBaseUrl}floral-straight-5.webp`} alt="Ornamen" className="fixed top-[-45px] left-0 w-[210px] h-auto z-10" />
      <img src={`${cdnBaseUrl}floral-straight-7.webp`} alt="Ornamen" className="fixed top-[-35px] left-1/2 -translate-x-1/2 w-[280px] h-auto z-10" />
      <img src={`${cdnBaseUrl}floral-straight-11.webp`} alt="Ornamen" className="absolute top-[10px] left-0 w-[250px] h-auto z-0" />
      <img src={`${cdnBaseUrl}floral-straight-11.webp`} alt="Ornamen" className="absolute top-[10px] right-0 w-[250px] h-auto z-0 scale-x-[-1]" />
      <motion.img
        src={`${cdnBaseUrl}leaf-branches-7.webp`}
        alt="Ornamen"
        className="absolute top-[26rem] left-[-80px] w-[180px] h-auto z-0 opacity-75"
        variants={leafLeftVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />
      <motion.img
        src={`${cdnBaseUrl}leaf-branches-7.webp`}
        alt="Ornamen"
        className="absolute bottom-[20rem] right-[-85px] w-[185px] h-auto z-10 opacity-80"
        variants={leafRightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />
      <motion.img
        src={`${cdnBaseUrl}fern-1.webp`}
        alt="Ornamen"
        className="absolute bottom-[-6px] left-[-20px] w-[330px] h-auto z-0 opacity-80"
        variants={fern1Variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />
      <motion.img
        src={`${cdnBaseUrl}fern-2.webp`}
        alt="Ornamen"
        className="absolute bottom-[32px] right-[-45px] w-[300px] h-auto z-0"
        variants={fern2Variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />
      
      <div className="max-w-5xl mx-auto relative z-20">
        <motion.div
          className="flex flex-col items-center gap-6 mt-[80px]"
          variants={contentContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.img
            src={`${cdnBaseUrl}bismillah.png`}
            alt="Bismillah"
            className="w-[270px] h-auto"
            variants={contentChildVariants}
            onError={(e) => e.target.style.display = 'none'}
          />
          <motion.p className="max-w-3xl mx-auto mb-12" variants={contentChildVariants}>
            Maha suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, kami bermaksud menyelenggarakan pernikahan kami.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24"
          variants={profileSectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <ProfileCard
            name={invitationData.brideExt}
            {...invitationData.brideProfile}
            isBride={true}
            variants={profileItemVariants}
          />
          <motion.span className="font-display text-5xl text-gray-700" variants={profileItemVariants}>
            &
          </motion.span>
          <ProfileCard
            name={invitationData.groomExt}
            {...invitationData.groomProfile}
            isBride={false}
            variants={profileItemVariants}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;