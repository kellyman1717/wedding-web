import { invitationData } from '../data/invitationData.js';

const Closing = () => {
  const { groom, bride } = invitationData;
  const cdnBaseUrl = 'https://my-wedding-ec9a0.web.app/images/';

  return (
    <div className="relative overflow-hidden y-20 px-6 text-center bg-gradient-to-b from-white to-blue-300">
      <img
        src={`${cdnBaseUrl}fern-group-1.webp`}
        alt="Ornamen Fern Bawah"
        className="absolute bottom-[-4px] left-[0px] w-[300px] max-w-md h-auto z-0 scale-x-[-1]"
      />
      <img
        src={`${cdnBaseUrl}fern-group-1.webp`}
        alt="Ornamen Fern Bawah"
        className="absolute bottom-[-4px] right-[-100px] w-[300px] max-w-md h-auto z-0"
      />
      <p className="max-w-2xl mx-auto mb-4">
        Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai.
      </p>
      <p className="max-w-2xl mx-auto mb-8">
        Atas kehadiran dan doa restu, kami ucapkan terima kasih.
      </p>
      <p className="font-sans text-lg mb-4">Wassalamualaikum Warahmatullahi Wabarakatuh</p>
      <div className="flex flex-col items-center font-display italic text-custom-blue-dark mb-[150px]">
        <p style={{ fontSize: '32px' }}>{bride}</p>
        <p className="text-3xl my-2">&</p>
        <p style={{ fontSize: '32px' }}>{groom}</p>
      </div>
    </div>
  );
};

export default Closing;
