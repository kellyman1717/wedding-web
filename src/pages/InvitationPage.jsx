import Hero from '../components/Hero.jsx';
import Profile from '../components/Profile.jsx';
import Countdown from '../components/Countdown.jsx';
import EventDetails from '../components/EventDetails.jsx';
import Gallery from '../components/Gallery.jsx';
import LoveStory from '../components/LoveStory.jsx';
import RSVP from '../components/RSVP.jsx';
import Guestbook from '../components/Guestbook.jsx';
import Closing from '../components/Closing.jsx';

const InvitationPage = () => {
  return (
    // Gunakan <main> sebagai pembungkus utama untuk seluruh konten halaman undangan.
    // Ini adalah satu-satunya tag <main> untuk halaman ini.
    <main>
      <Hero />
      <Profile />
      <Countdown />
      <EventDetails />
      <Gallery />
      <LoveStory />
      <RSVP />
      <Guestbook />
      <Closing />
    </main>
  );
};

export default InvitationPage;
