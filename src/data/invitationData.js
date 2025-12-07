const cdnBaseUrl = 'https://my-wedding-ec9a0.web.app/images/';

export const invitationData = {
  groomExt: "Ardian Syahrul Sulaiman",
  brideExt: "Yulia Ananda Septiani",
  groom: "Ardian",
  bride: "Yulia",
  audioUrl: 'https://my-wedding-ec9a0.web.app/audio/song.mp3',
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
    photo: `${cdnBaseUrl}groom.jpeg`,
  },
  brideProfile: {
    fullName: "Nama Lengkap Wanita",
    father: "Mochtar (alm)",
    mother: "Iwin Yuliani",
    photo: `${cdnBaseUrl}bride.jpeg`,
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
    `${cdnBaseUrl}prambanan.webp`,
    `${cdnBaseUrl}dieng.webp`,
    `${cdnBaseUrl}kursi-lamaran.webp`,
    `${cdnBaseUrl}lamaran.webp`,
    `${cdnBaseUrl}prewed1.webp`,
    `${cdnBaseUrl}prewed2.webp`,
    `${cdnBaseUrl}prewed3.webp`,
    `${cdnBaseUrl}gallery-7.webp`
  ],
  loveStory: [
    {
      date: "25 Januari 2023",
      title: "Pertama Bertemu",
      description: "Semua bermula dari sosial media. Kami kenal ketika saling tukar stiker di chat, obrolan singkat berubah jadi kebiasaan, sampai akhirnya jadi bagian dari keseharian.",
      image: `${cdnBaseUrl}our_first_meet.webp`
    },
    {
      date: "25 Februari 2023",
      title: "Memulai Hubungan",
      description: "Pada hari itu, perasaan yang sudah lama tumbuh akhirnya dinyatakan. Respon yang didapat sangat menenangkan. Sejak saat itu hubungan pun resmi dimulai.",
      image: `${cdnBaseUrl}memulai_hubungan.webp`
    },
    {
      date: "5 Juli 2025",
      title: "Lamaran",
      description: "Setelah lama kami menjalankan hubungan bersama, setelah itu saya menyatakan jika ingin membawa hubungan ini ke jenjang lebih serius. Kami lamaran di kediamannya.",
      image: `${cdnBaseUrl}lamaran3.webp`
    },
    {
      date: "27 Desember 2025",
      title: "Menuju Halal",
      description: "Setelah semua yang dilewati bareng, kini saatnya melangkah lebih serius. Semoga pernikahan ini jadi awal keluarga yang sakinah, mawaddah, warahmah.",
      image: `${cdnBaseUrl}kita-bg-biru.webp`
    }
  ],
};
