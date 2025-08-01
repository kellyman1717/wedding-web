const cdnBaseUrl = 'https://my-wedding-ec9a0.web.app/images/';

export const invitationData = {
  groom: "Nama Pria",
  bride: "Nama Wanita",
  weddingDate: {
    day: "Jumat",
    date: 27,
    month: "Desember",
    year: 2025,
    fullDate: "2025-12-27T09:00:00",
  },
  groomProfile: {
    fullName: "Nama Lengkap Pria",
    father: "Nama Ayah Pria",
    mother: "Nama Ibu Pria",
    photo: `${cdnBaseUrl}groom.png`, // Diperbarui
  },
  brideProfile: {
    fullName: "Nama Lengkap Wanita",
    father: "Nama Ayah Wanita",
    mother: "Nama Ibu Wanita",
    photo: `${cdnBaseUrl}bride.png`, // Diperbarui
  },
  events: [
    {
      name: "Resepsi Pernikahan",
      date: "Sabtu, 27 Desember 2025",
      time: "11:00 - 14:00 WIB",
      location: "Gedung Resepsi",
      address: "Jl. Contoh Alamat Resepsi No. 456, Kota",
      mapUrl: "https://maps.app.goo.gl/3EQ7w3E8LLU3XmyK6",
      icon: '💍'
    }
  ],
  // Path gambar galeri diperbarui ke URL CDN
  galleryImages: [
    `${cdnBaseUrl}gallery-1.png`,
    `${cdnBaseUrl}gallery-2.png`,
    `${cdnBaseUrl}gallery-3.png`,
    `${cdnBaseUrl}gallery-4.png`,
    `${cdnBaseUrl}gallery-5.png`,
    `${cdnBaseUrl}gallery-6.png`
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
  ],
};
