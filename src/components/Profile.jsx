import { invitationData } from '../data/invitationData.js';
import profileBg from '../assets/images/profile-bg.png';
import bismillah from '../assets/images/bismillah.png';
import flowerStraight1 from '../assets/images/floral-straight-11.png';
import flowerStraight2 from '../assets/images/floral-straight-7.png';
import flowerStraight3 from '../assets/images/floral-straight-5.png';
import flowerCorner1 from '../assets/images/floral-bouquet-18.png';
import flowerCorner2 from '../assets/images/floral-bouquet-17.png';
import flower from '../assets/images/leaf-branches-7.png';
import fern from '../assets/images/fern-1.png';
import fern2 from '../assets/images/fern-2.png';

const ProfileCard = ({ name, fullName, father, mother, photo, isBride }) => (
  <div className="flex flex-col items-center gap-4">
    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
      <img src={photo} alt={name} className="w-full h-full object-cover" />
    </div>
    <h3 className="font-display text-4xl italic text-custom-blue-dark">{name}</h3>
    <p className="font-sans text-lg">{fullName}</p>
    <div className="text-center">
      <p className="font-semibold">{isBride ? 'Putri dari Pasangan' : 'Putra dari Pasangan'}</p>
      <p>{father}</p>
      <p>&</p>
      <p>{mother}</p>
    </div>
  </div>
);

const Profile = () => {
  return (
    <div className="text-center py-16 px-6 bg-custom-blue-light" style={{ backgroundImage: `url(${profileBg})` }}>
      {/* Bagian Bunga Atas*/}
      <img
        src={flowerCorner2}
        alt="Ornamen Bunga Atas Tengah"
        className="absolute top-[-5px] left-[0px] w-[160px] max-w-md h-auto z-10 scale-y-[-1]"
      />
      <img
        src={flowerCorner1}
        alt="Ornamen Bunga Atas Tengah"
        className="absolute top-[-5px] right-[0px] w-[160px] max-w-md h-auto z-10 rotate-[180deg]"
      />
      <img
        src={flowerStraight3}
        alt="Ornamen Bunga Atas Tengah"
        className="absolute top-[-45px] right-[-40px] w-[210px] max-w-md h-auto z-10 scale-x-[-1]"
      />
      <img
        src={flowerStraight3}
        alt="Ornamen Bunga Atas Tengah"
        className="absolute top-[-45px] left-[-40px] w-[210px] max-w-md h-auto z-10 scale-x-[-1]"
      />
      <img
        src={flowerStraight2}
        alt="Ornamen Bunga Atas Tengah"
        className="absolute top-[-35px] left-1/2 -translate-x-1/2 w-[280px] max-w-md h-auto z-10"
      />
      <img
        src={flowerStraight1}
        alt="Ornamen Bunga Atas Tengah"
        className="absolute top-[10px] left-0 w-[250px] max-w-md h-auto z-0"
      />
      <img
        src={flowerStraight1}
        alt="Ornamen Bunga Atas Tengah"
        className="absolute top-[10px] right-0 w-[250px] max-w-md h-auto z-0"
      />
      <img
        src={bismillah}
        alt="Bismillah"
        className="absolute top-[140px] left-1/2 -translate-x-1/2 w-[270px] max-w-md h-auto z-10"
      />
      
      {/* Bagian Bunga Bawah*/}
      <img
        src={flower}
        alt="Ornamen Bunga Bawah Kiri"
        className="absolute bottom-[35rem] left-[-70px] w-[200px] max-w-md h-auto z-0 opacity-75 rotate-[-26deg]"
      />
      <img
        src={flower}
        alt="Ornamen Bunga Bawah Kanan"
        className="absolute bottom-[20rem] right-[-80px] w-[200px] max-w-md h-auto z-10 opacity-80 rotate-[-75deg]"
      />
      <img
        src={fern}
        alt="Ornamen Pakis Bawah Kiri"
        className="animate-wind-blow absolute bottom-0 left-[-10px] w-[350px] max-w-md h-auto z-0 opacity-80"
      />
      <img
        src={fern2}
        alt="Ornamen Pakis Bawah Kanan"
        className="absolute bottom-[35px] right-[-45px] w-[320px] max-w-md h-auto z-0 opacity-80 rotate-90 "
      />

      <p className="max-w-3xl mx-auto mb-12 mt-[150px]">
        Maha suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, kami bermaksud menyelenggarakan pernikahan putra-putri kami:
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
        <ProfileCard
          name={invitationData.bride}
          {...invitationData.brideProfile}
          isBride={true}
        />
        <span className="font-display text-5xl text-custom-blue-dark">&</span>
        <ProfileCard
          name={invitationData.groom}
          {...invitationData.groomProfile}
          isBride={false}
        />
      </div>
    </div>
  );
};

export default Profile;
