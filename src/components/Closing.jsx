import { invitationData } from '../data/invitationData.js';

const Closing = () => {
    const { groom, bride } = invitationData;
    return (
        <div className="py-20 px-6 text-center bg-custom-blue-light">
            <p className="max-w-2xl mx-auto mb-4">
                Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai.
            </p>
            <p className="max-w-2xl mx-auto mb-8">
                Atas kehadiran dan doa restu, kami ucapkan terima kasih.
            </p>
            <p className="font-sans text-lg mb-4">Wassalamualaikum Warahmatullahi Wabarakatuh</p>
            <p className="font-display text-4xl italic text-custom-blue-dark">{bride} & {groom}</p>
        </div>
    );
};
export default Closing;