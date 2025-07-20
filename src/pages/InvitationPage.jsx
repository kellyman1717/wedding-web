import Hero from '../components/Hero.jsx';
import Profile from '../components/Profile.jsx';
import EventDetails from '../components/EventDetails.jsx';
import Gallery from '../components/Gallery.jsx';
import LoveStory from '../components/LoveStory.jsx';
import RSVP from '../components/RSVP.jsx';
import Guestbook from '../components/Guestbook.jsx';
import Closing from '../components/Closing.jsx';
import LocationMap from "../components/LocationMap.jsx";
import useScrollFadeIn from "../hooks/useScrollFadeIn.js";

const InvitationPage = () => {
  const fadeProfile = useScrollFadeIn();
  const fadeEvent = useScrollFadeIn();
  const fadeGallery = useScrollFadeIn("left");
  const fadeLoveStory = useScrollFadeIn("right");
  const fadeRSVP = useScrollFadeIn("left");
  const fadeGuestbook = useScrollFadeIn("right");
  const fadeClosing = useScrollFadeIn();
  const fadeMap = useScrollFadeIn("up");

  return (
    // Hapus className="overflow-x-hidden" dari tag main ini
    <main>
      <Hero />
      <div {...fadeProfile} style={fadeProfile.style}><Profile /></div>
      <div {...fadeEvent} style={fadeEvent.style}><EventDetails /></div>
      <div {...fadeGallery} style={fadeGallery.style}><Gallery /></div>
      <div {...fadeLoveStory} style={fadeLoveStory.style}><LoveStory /></div>
      <div {...fadeRSVP} style={fadeRSVP.style}><RSVP /></div>
      <div {...fadeGuestbook} style={fadeGuestbook.style}><Guestbook /></div>
      <div {...fadeClosing} style={fadeClosing.style}><Closing /></div>
      <div {...fadeMap} style={fadeMap.style}><LocationMap /></div>
    </main>
  );
};

export default InvitationPage;