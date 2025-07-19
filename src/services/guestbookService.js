import { db } from './firebaseConfig.js';
import { collection, addDoc, query, orderBy, onSnapshot } from 'firebase/firestore';

const guestbookCollection = collection(db, 'guestbook');

export const addGuestbookEntry = async (name, message) => {
  try {
    await addDoc(guestbookCollection, {
      name: name,
      message: message,
      timestamp: new Date()
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