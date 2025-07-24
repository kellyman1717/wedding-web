import { invitationData } from '../data/invitationData.js';

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
    <div className="text-center py-16 px-6 bg-custom-blue-light">
      <p className="font-sans mb-4">Assalamualaikum Warahmatullahi Wabarakatuh</p>
      <p className="max-w-3xl mx-auto mb-12">
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
