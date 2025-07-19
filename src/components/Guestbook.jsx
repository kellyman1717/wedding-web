import { useState, useEffect } from 'react';
import { addGuestbookEntry, getGuestbookEntries } from '../services/guestbookService.js';

const Guestbook = () => {
    const [entries, setEntries] = useState([]);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [formMessage, setFormMessage] = useState('');

    useEffect(() => {
        const unsubscribe = getGuestbookEntries(setEntries);
        return () => unsubscribe(); // Cleanup listener on component unmount
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
        if(result.success) {
            setName('');
            setMessage('');
        }
        setIsLoading(false);
    };

    return (
        <div className="py-16 px-6 bg-white text-center">
            <h2 className="font-display text-4xl md:text-5xl text-custom-brown mb-8">Buku Tamu</h2>
            <div className="max-w-2xl mx-auto">
                <form onSubmit={handleSubmit} className="bg-custom-pink-light p-8 rounded-lg shadow-lg mb-8">
                    <div className="mb-4">
                        <input type="text" placeholder="Nama Anda" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <textarea placeholder="Tulis ucapan dan doa..." value={message} onChange={(e) => setMessage(e.target.value)} rows="4" className="w-full p-2 border rounded"></textarea>
                    </div>
                    <button type="submit" disabled={isLoading} className="bg-custom-pink-dark text-white w-full py-3 rounded-md font-semibold hover:bg-pink-700 transition-all disabled:bg-gray-400">
                        {isLoading ? 'Mengirim...' : 'Kirim Ucapan'}
                    </button>
                    {formMessage && <p className="mt-4 font-sans text-sm">{formMessage}</p>}
                </form>

                <div className="h-96 overflow-y-auto bg-gray-50 p-4 rounded-lg shadow-inner">
                    {entries.length > 0 ? entries.map(entry => (
                        <div key={entry.id} className="border-b border-gray-200 p-4 text-left">
                            <p className="font-bold font-display text-lg text-custom-pink-dark">{entry.name}</p>
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