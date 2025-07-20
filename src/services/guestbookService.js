import { db } from './firebaseConfig.js';
import { collection, addDoc, query, orderBy, onSnapshot, where, getDocs } from 'firebase/firestore';

const guestbookCollection = collection(db, 'guestbook');

export const addGuestbookEntry = async (name, message) => {
  try {
    let ip = await getPublicIP();
    // Bypass di development mode
    if (import.meta.env.MODE === 'development') {
      ip = `${ip}-dev-${Math.random().toString(36).substring(2, 6)}`;
    }
    console.log("Your IP is:", ip);

    const guestbookRef = collection(db, 'guestbook');

    const q = query(guestbookRef, where('ip', '==', ip));
    
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      return { success: false, message: "Anda sudah mengirim ucapan hari ini." };
    }

    await addDoc(guestbookRef, {
      name,
      message,
      timestamp: new Date(),
      ip,
    });
    return { success: true, message: "Ucapan Anda telah berhasil dikirim!" };
  } catch (error) {
    console.error("Error adding document: ", error);
    return { success: false, message: "Terjadi kesalahan, coba lagi." };
  }
};

export const getGuestbookEntries = (callback) => {
  const q = query(guestbookCollection, orderBy('timestamp', 'desc'));
  return onSnapshot(q, (querySnapshot) => {
    const entries = [];
    querySnapshot.forEach((doc) => {
      entries.push({ id: doc.id, ...doc.data() });
    });
    callback(entries);
  });
};

export const getPublicIP = async () => {
  try {
    const res = await fetch("https://api.ipify.org?format=json");
    const data = await res.json();
    return data.ip;
  } catch (err) {
    console.error("Gagal mendapatkan IP", err);
    return null;
  }
};