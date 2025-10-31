import { useState, useEffect } from 'react';
import { addGuestbookEntry, getGuestbookEntries } from '../services/guestbookService.js';

const Guestbook = () => {
    const [entries, setEntries] = useState([]);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [formMessage, setFormMessage] = useState("");
    const cdnBaseUrl = 'https://my-wedding-ec9a0.web.app/images/';

    useEffect(() => {
        const unsubscribe = getGuestbookEntries(setEntries);
        return () => unsubscribe();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !message) {
            setFormMessage('Nama dan ucapan tidak boleh kosong.');
            return;
        }
        setIsLoading(true);
        const result = await addGuestbookEntry(name, message);
        setFormMessage(result.message);
        if (result.success) {
            setName("");
            setMessage("");
        }
        setIsLoading(false);
    };

  return (
    <div className="relative overflow-hidden py-16 px-6 bg-white text-center bg-gradient-to-b from-blue-200 to-white">
      <img src={`${cdnBaseUrl}fern-2.webp`} alt="Ornamen" className="absolute top-[10px] left-[0px] w-[250px] h-auto z-0 scale-x-[-1]"/>
        <img src={`${cdnBaseUrl}floral-bouquet-14.webp`} alt="Ornamen" className="absolute top-[-65px] right-[-50px] w-[200px] h-auto z-0 rotate-[-155deg] scale-x-[-1]"/>
        <img src={`${cdnBaseUrl}floral-straight-4.webp`} alt="Ornamen" className="fixed top-[-55px] left-[-20px] w-[280px] h-auto z-0"/>
        <img src={`${cdnBaseUrl}floral-straight-5.webp`} alt="Ornamen" className="fixed top-[-55px] right-0 translate-x-[-20px] w-[280px] h-auto z-0"/>
        <h2 className="font-display text-4xl md:text-5xl text-custom-brown mb-8 mt-7">Buku Ucapan</h2>
      <div className="max-w-2xl mx-auto">
        <form 
          onSubmit={handleSubmit} 
          className="p-8 mb-8 rounded-lg shadow-lg bg-blue-100 bg-opacity-30 backdrop-blur-md border border-white/20"
          style={{backdropFilter: 'blur(1px)',boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',}}>
          <div className="mb-4">
            <input type="text" placeholder="Nama Anda" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <textarea placeholder="Tulis ucapan dan doa..." value={message} onChange={(e) => setMessage(e.target.value)} rows="4" className="w-full p-2 border rounded"></textarea>
          </div>
          <button type="submit" disabled={isLoading}
            className="bg-custom-blue-dark text-white w-full py-3 rounded-md font-semibold hover:bg-blue-700 transition-all disabled:bg-gray-400 flex items-center justify-center gap-2 transform hover:scale-105"
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
              'Kirim Ucapan'
            )}
          </button>
          {formMessage && <p className="mt-4 font-sans text-sm">{formMessage}</p>}
        </form>
        <div className="h-96 overflow-y-auto bg-gray-50 p-4 rounded-lg shadow-inner backdrop-blur-md bg-opacity-30 border border-white/20">
          {entries.length > 0 ? entries.map(entry => (
            <div key={entry.id} className="border-b border-gray-200 p-4 text-left">
              <p className="font-bold font-display text-lg text-custom-blue-dark">{entry.name}</p>
              <p className="font-sans text-base my-1">{entry.message}</p>
              <p className="font-sans text-xs text-gray-400">{new Date(entry.timestamp.seconds * 1000).toLocaleString()}</p>
            </div>
          )) : (
            <p className="text-gray-500">Jadilah yang pertama memberikan ucapan!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Guestbook;