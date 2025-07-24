import gallery1 from '../assets/images/gallery-1.png';
import gallery2 from '../assets/images/gallery-2.png';
import gallery3 from '../assets/images/gallery-3.png';
import gallery4 from '../assets/images/gallery-4.png';
import gallery5 from '../assets/images/gallery-5.png';
import gallery6 from '../assets/images/gallery-6.png';
import groomPhoto from '../assets/images/groom.png';
import bridePhoto from '../assets/images/bride.png';

export const invitationData = {
  groom: "Nama Pria",
  bride: "Nama Wanita",
  weddingDate: {
    day: "Jumat",
    date: 27,
    fullDate: "2025-12-27T09:00:00",
    year: 2025,
    month: "Desember",
  },
  groomProfile: {
    fullName: "Nama Lengkap Pria",
    father: "Nama Ayah Pria",
    mother: "Nama Ibu Pria",
    photo: groomPhoto,
  },
  brideProfile: {
    fullName: "Nama Lengkap Wanita",
    father: "Nama Ayah Wanita",
    mother: "Nama Ibu Wanita",
    photo: bridePhoto,
  },
  events: [
    {
      name: "Resepsi Pernikahan",
      date: "Sabtu, 27 Desember 2025",
      time: "11:00 - 14:00 WIB",
      location: "Gedung Resepsi",
      address: "Jl. Contoh Alamat Resepsi No. 456, Kota",
      mapUrl: "https://maps.app.goo.gl/3EQ7w3E8LLU3XmyK6"
    }
  ],

  galleryImages: [
    gallery1, gallery2, gallery3, gallery4, gallery5, gallery6
  ],

  loveStory: [
    {
      date: "10 Januari 2022",
      title: "Pertama Bertemu",
      description: "Deskripsikan secara singkat momen pertama kali Anda bertemu. Di mana, bagaimana suasananya, dan apa yang membuat momen itu berkesan."
    },
    {
      date: "15 Mei 2023",
      title: "Memulai Hubungan",
      description: "Ceritakan saat Anda berdua memutuskan untuk menjalin hubungan yang lebih serius. Apa yang menjadi pemicunya?"
    },
    {
      date: "25 Desember 2024",
      title: "Lamaran",
      description: "Bagikan kisah di balik momen lamaran. Bagaimana prosesnya, di mana lokasinya, dan bagaimana perasaan Anda saat itu."
    },
    {
      date: "11 Juli 2025",
      title: "Menuju Halal",
      description: "Ungkapkan harapan dan doa Anda saat melangkah ke jenjang pernikahan, membangun keluarga yang sakinah, mawaddah, warahmah."
    }
  ]
};