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
    photo: `${cdnBaseUrl}groom.webp`,
  },
  brideProfile: {
    fullName: "Nama Lengkap Wanita",
    father: "Mochtar (alm)",
    mother: "Iwin Yuliani",
    photo: `${cdnBaseUrl}bride.webp`,
  },
  events: [
    {
      name: "Akad Nikah",
      date: "Sabtu, 27 Desember 2025",
      time: "07:30 WIB - Selesai",
      location: "Desa Tawangrejo RT 06/RW 02 Kec. Takeran. Kab. Magetan",
      address: "",
      mapUrl: "https://maps.app.goo.gl/3EQ7w3E8LLU3XmyK6",
      icon: 'Gem'
    },
    {
      name: "Resepsi Pernikahan",
      date: "Sabtu, 27 Desember 2025",
      time: "9:30 WIB - Selesai",
      location: "Desa Tawangrejo RT 06/RW 02 Kec. Takeran. Kab. Magetan",
      address: "",
      mapUrl: "https://maps.app.goo.gl/3EQ7w3E8LLU3XmyK6",
      icon: 'Flower2'
    }
  ],

  galleryImages: [
    `${cdnBaseUrl}gallery-1.webp`,
    `${cdnBaseUrl}gallery-6.webp`,
    `${cdnBaseUrl}gallery-5.webp`,
    `${cdnBaseUrl}gallery-8.webp`,
    `${cdnBaseUrl}gallery-3.webp`,
    `${cdnBaseUrl}gallery-2.webp`
  ],
  loveStory: [
    {
      date: "25 Januari 2023",
      title: "Pertama Bertemu",
      description: "Semua bermula dari sosial media. Kami kenal ketika saling tukar stiker di chat, obrolan singkat berubah jadi kebiasaan, sampai akhirnya jadi bagian dari keseharian. "
    },
    {
      date: "25 Februari 2023",
      title: "Memulai Hubungan",
      description: "Hari itu aku nyatain perasaan ke dia. Gak pakai drama, langsung sat set. Untungnya, dia bilang iya dan sejak itu kami mulai serius."
    },
    {
      date: "5 Juli 2025",
      title: "Lamaran",
      description: "Setelah lama kami menjalankan hubungan bersama, setelah itu saya menyatakan jika ingin membawa hubungan ini ke jenjang lebih serius. Kami lamaran di kediamannya, saat itu suasananya sangat romantis, dan orang orang pun yang hadir ikut senang."
    },
    {
      date: "27 Desember 2025",
      title: "Menuju Halal",
      description: "Setelah semua yang dilewati bareng, kini saatnya melangkah lebih serius. Semoga pernikahan ini jadi awal keluarga yang sakinah, mawaddah, warahmah."
    }
  ],
};
