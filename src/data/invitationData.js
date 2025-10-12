const cdnBaseUrl = 'https://my-wedding-ec9a0.web.app/images/';

export const invitationData = {
  groomExt: "Ardian Syahrul Sulaiman",
  brideExt: "Yulia Ananda Septiani",
  groom: "Ardian",
  bride: "Yulia",
  weddingDate: {
    day: "Jumat",
    date: 27,
    month: "Desember",
    year: 2025,
    fullDate: "2025-12-27T09:00:00",
  },
  groomProfile: {
    fullName: "Nama Lengkap Pria",
    father: "Chaidir",
    mother: "Atih Maryatih",
    photo: `${cdnBaseUrl}groom.png`,
  },
  brideProfile: {
    fullName: "Nama Lengkap Wanita",
    father: "Mochtar",
    mother: "Iwin Yuliani",
    photo: `${cdnBaseUrl}bride.png`,
  },
  events: [
    {
      name: "Akad Nikah",
      date: "Sabtu, 27 Desember 2025",
      time: "07:30 WIB - 10:00 WIB",
      location: "Desa Tawangrejo RT 06/RW 02 Kec. Takeran. Kab. Magetan",
      address: "",
      mapUrl: "https://maps.app.goo.gl/3EQ7w3E8LLU3XmyK6",
      icon: '💍'
    },
    {
      name: "Resepsi Pernikahan",
      date: "Sabtu, 27 Desember 2025",
      time: "9:30 WIB - Selesai",
      location: "Desa Tawangrejo RT 06/RW 02 Kec. Takeran. Kab. Magetan",
      address: "",
      mapUrl: "https://maps.app.goo.gl/3EQ7w3E8LLU3XmyK6",
      icon: '💍'
    }
  ],

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
