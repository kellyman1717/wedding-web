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
  const fadeProfile = useScrollFadeIn("up", 0, 0.1);
  const fadeEvent = useScrollFadeIn();
  const fadeMap = useScrollFadeIn("up");
  const fadeGallery = useScrollFadeIn("left");
  const fadeLoveStory = useScrollFadeIn("left");
  const fadeRSVP = useScrollFadeIn("left");
  const fadeGuestbook = useScrollFadeIn("left");
  const fadeClosing = useScrollFadeIn();

  return (
    <main>
      <div id="home"><Hero /></div>
      <div id="profile" {...fadeProfile}><Profile /></div>
      <div id="event" {...fadeEvent}><EventDetails /></div>
      <div id="gallery" {...fadeGallery}><Gallery /></div>
      <div id="lovestory" {...fadeLoveStory}><LoveStory /></div>
      <div id="location" {...fadeMap}><LocationMap /></div>
      <div id="rsvp" {...fadeRSVP}><RSVP /></div>
      <div id="guestbook" {...fadeGuestbook}><Guestbook /></div>
      <div {...fadeClosing}><Closing /></div>
    </main>
  );
};

export default InvitationPage;