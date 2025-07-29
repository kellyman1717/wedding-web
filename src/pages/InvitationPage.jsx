import Hero from '../components/Hero.jsx';
import Profile from '../components/Profile.jsx';
import EventDetails from '../components/EventDetails.jsx';
import Gallery from '../components/Gallery.jsx';
import LoveStory from '../components/LoveStory.jsx';
import LocationMap from "../components/LocationMap.jsx";
import RSVP from '../components/RSVP.jsx';
import Guestbook from '../components/Guestbook.jsx';
import Closing from '../components/Closing.jsx';
import useScrollFadeIn from "../hooks/useScrollFadeIn.js";

const InvitationPage = () => {
  const fadeProfile = useScrollFadeIn();
  const fadeEvent = useScrollFadeIn();
  const fadeMap = useScrollFadeIn("up");
  const fadeGallery = useScrollFadeIn("left");
  const fadeLoveStory = useScrollFadeIn("right");
  const fadeRSVP = useScrollFadeIn("left");
  const fadeGuestbook = useScrollFadeIn("right");
  const fadeClosing = useScrollFadeIn();

  return (
    <main>
      <Hero />
      <div {...fadeProfile}><Profile /></div>
      <div {...fadeEvent}><EventDetails /></div>
      <div {...fadeGallery}><Gallery /></div>
      <div {...fadeLoveStory}><LoveStory /></div>
      <div {...fadeMap}><LocationMap /></div>
      <div {...fadeRSVP}><RSVP /></div>
      <div {...fadeGuestbook}><Guestbook /></div>
      <div {...fadeClosing}><Closing /></div>
      
    </main>
  );
};

export default InvitationPage;
