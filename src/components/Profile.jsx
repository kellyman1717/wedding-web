import { invitationData } from '../data/invitationData.js';

const ProfileCard = ({ name, fullName, father, mother, photo, isBride }) => (
    <div className="flex flex-col items-center gap-4">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img src={photo} alt={name} className="w-full h-full object-cover" />
        </div>
        <h3 className="font-display text-4xl italic text-custom-blue-dark">{name}</h3>
        <div className="text-center">
            <p className="font-semibold">{isBride ? 'Putri dari Pasangan' : 'Putra dari Pasangan'}</p>
            <p>{father}</p>
            <p>&</p>
            <p>{mother}</p>
        </div>
    </div>
);

const Profile = () => {
  const cdnBaseUrl = 'https://my-wedding-ec9a0.web.app/images/';
  return (
    <div className="relative overflow-hidden text-center py-16 px-10 bg-gradient-to-b from-custom-blue-light to-white">
        <img src={`${cdnBaseUrl}floral-bouquet-17.webp`} alt="Ornamen" className="absolute top-[-5px] left-[0px] w-[160px] h-auto z-10 scale-y-[-1]"/>
        <img src={`${cdnBaseUrl}floral-bouquet-18.webp`} alt="Ornamen" className="absolute top-[-5px] right-[0px] w-[160px] h-auto z-10 rotate-[180deg]"/>
        <img src={`${cdnBaseUrl}floral-straight-5.webp`} alt="Ornamen" className="fixed top-[-45px] right-0 w-[210px] h-auto z-10 scale-x-[-1]"/>
        <img src={`${cdnBaseUrl}floral-straight-5.webp`} alt="Ornamen" className="fixed top-[-45px] left-0 w-[210px] h-auto z-10"/>
        <img src={`${cdnBaseUrl}floral-straight-7.webp`} alt="Ornamen" className="fixed top-[-35px] left-1/2 -translate-x-1/2 w-[280px] h-auto z-10"/>
        <img src={`${cdnBaseUrl}floral-straight-11.webp`} alt="Ornamen" className="absolute top-[10px] left-0 w-[250px] h-auto z-0"/>
        <img src={`${cdnBaseUrl}floral-straight-11.webp`} alt="Ornamen" className="absolute top-[10px] right-0 w-[250px] h-auto z-0 scale-x-[-1]"/>
        <img src={`${cdnBaseUrl}bismillah.png`} alt="Bismillah" className="absolute top-[140px] left-1/2 -translate-x-1/2 w-[270px] h-auto z-10"/>
        <img src={`${cdnBaseUrl}leaf-branches-7.webp`} alt="Ornamen" className="absolute top-[21rem] left-[-80px] w-[200px] h-auto z-0 opacity-75 rotate-[-26deg]"/>
        <img src={`${cdnBaseUrl}leaf-branches-7.webp`} alt="Ornamen" className="absolute bottom-[20rem] right-[-85px] w-[200px] h-auto z-10 opacity-80 rotate-[-175deg] scale-y-[-1]"/>
        <img src={`${cdnBaseUrl}fern-1.webp`} alt="Ornamen" className="animate-wind-blow absolute bottom-0 left-[-10px] w-[350px] h-auto z-0 opacity-80"/>
        <img src={`${cdnBaseUrl}fern-2.webp`} alt="Ornamen" className="absolute bottom-[35px] right-[-45px] w-[320px] h-auto z-0 opacity-80 rotate-90"/>
      <p className="max-w-3xl mx-auto mb-12 mt-[150px]">
        Maha suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, kami bermaksud menyelenggarakan pernikahan putra-putri kami:
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
        <ProfileCard
          name={invitationData.brideExt}
          {...invitationData.brideProfile}
          isBride={true}
        />
        <span className="font-display text-5xl text-custom-blue-dark">&</span>
        <ProfileCard
          name={invitationData.groomExt}
          {...invitationData.groomProfile}
          isBride={false}
        />
      </div>
    </div>
  );
};

export default Profile;
