import { useState } from 'react';
import { submitRsvp } from '../services/rsvpService.js';
import floralStraight from '../assets/images/floral-straight-3.png';
import floralBouquet1 from '../assets/images/floral-bouquet-10.png';
import floralBouquet2 from '../assets/images/floral-bouquet-16.png';
import leaf1 from '../assets/images/leaf-branches-6.png';

const RSVP = () => {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState('Hadir');
  const [guests, setGuests] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      setMessage('Nama tidak boleh kosong.');
      return;
    }
    setIsLoading(true);
    const result = await submitRsvp(name, attendance, attendance === 'Hadir' ? guests : 0);
    setMessage(result.message);
    if (result.success) {
      setName("");
      setAttendance('Hadir');
      setGuests(1);
    }
    setIsLoading(false);
  };

  return (
    <div className="relative py-16 px-8 text-center bg-gradient-to-b from-white to-custom-blue">
      {/* Bunga Tengah */}
      <img
        src={leaf1}
        alt="Ornamen Bunga Kiri"
        className="absolute top-[-17px] left-[-34px] w-[143px] max-w-md h-auto z-0 rotate-[-5deg] opacity-55"
      />
      <img
        src={leaf1}
        alt="Ornamen Bunga Kanan"
        className="absolute top-[-125px] right-[-40px] w-[143px] max-w-md h-auto z-0 rotate-[58deg] scale-y-[-1] opacity-55"
      />
      {/* Bunga Lurus */}
      <img
        src={floralStraight}
        alt="Ornamen Bunga Kiri"
        className="absolute bottom-[-23px] left-[-50px] w-[350px] max-w-md h-auto z-0"
      />
      <img
        src={floralStraight}
        alt="Ornamen Bunga Kanan"
        className="absolute bottom-[-23px] right-[-70px] w-[350px] max-w-md h-auto z-0 scale-x-[-1]"
      />
      {/* Bunga Pojok */}
      <img
        src={floralBouquet1}
        alt="Ornamen Bunga Pojok Kiri"
        className="absolute bottom-[-23px] left-[-10px] w-[160px] max-w-md h-auto z-0 opacity-89"
      />
      <img
        src={floralBouquet2}
        alt="Ornamen Bunga Pojok Kanan"
        className="absolute bottom-[-12px] right-[-45px] w-[140px] max-w-md h-auto z-0 opacity-89 rotate-[-14deg] scale-x-[-1]"
      />
      <div className="relative z-10">
        <h2 className="font-display text-4xl md:text-5xl text-custom-brown mb-8">Konfirmasi Kehadiran</h2>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-left font-sans mb-1">Nama</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-left font-sans mb-1">Kehadiran</label>
            <div className="flex gap-4">
              <label className="flex items-center"><input type="radio" name="attendance" value="Hadir" checked={attendance === 'Hadir'} onChange={(e) => setAttendance(e.target.value)} className="mr-2" /> Hadir</label>
              <label className="flex items-center"><input type="radio" name="attendance" value="Tidak Hadir" checked={attendance === 'Tidak Hadir'} onChange={(e) => setAttendance(e.target.value)} className="mr-2" /> Tidak Hadir</label>
            </div>
          </div>
          {attendance === 'Hadir' && (
            <div className="mb-6">
              <label htmlFor="guests" className="block text-left font-sans mb-1">Jumlah Tamu (termasuk Anda)</label>
              <input type="number" id="guests" value={guests} min="1" onChange={(e) => setGuests(parseInt(e.target.value))} className="w-full p-2 border rounded" />
            </div>
          )}
          <button
            type="submit"
            disabled={isLoading}
            className="bg-custom-blue-dark text-white w-full py-3 rounded-md font-semibold hover:bg-blue-700 transition-all disabled:bg-gray-400 flex items-center justify-center gap-2 transform hover:scale-105" // Diperbarui
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Mengirim...</span>
              </>
            ) : (
              'Kirim Konfirmasi'
            )}
          </button>
          {message && <p className="mt-4 font-sans text-sm">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default RSVP;