import { db } from './firebaseConfig.js';
import { collection, addDoc } from 'firebase/firestore';

const rsvpCollection = collection(db, 'rsvps');

export const submitRsvp = async (name, attendance, guests) => {
  try {
    await addDoc(rsvpCollection, {
      name: name,
      attendance: attendance,
      guests: guests,
      timestamp: new Date()
    });
    return { success: true, message: "Terima kasih atas konfirmasinya!" };
  } catch (error) {
    console.error("Error adding document: ", error);
    return { success: false, message: "Terjadi kesalahan, coba lagi." };
  }
};