import { invitationData } from '../data/invitationData.js';
import fernGroup from '../assets/images/fern-group-1.png';

const Closing = () => {
    const { groom, bride } = invitationData;
    return (
        <div className="relative py-20 px-6 text-center bg-gradient-to-b from-white to-custom-blue">
            <img
                src={fernGroup}
                alt="Ornamen Fern Bawah"
                className="absolute bottom-[-4px] left-[0px] w-[300px] max-w-md h-auto z-0 scale-x-[-1]"
            />
            <img
                src={fernGroup}
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
            <p className="relative font-display text-4xl italic text-custom-blue-dark mb-10">{bride} & {groom}</p>
        </div>
    );
};
export default Closing;