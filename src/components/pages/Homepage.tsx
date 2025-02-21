import CorporateDesign from 'components/carousels/CorporateDesign';
import MotionDesign from 'components/carousels/MotionDesign';
import Illustration from 'components/carousels/Illustrations';
import Kunden from 'components/carousels/Kunden';
import GameArt from 'components/carousels/GameArt';

const Homepage: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <CorporateDesign />
      <MotionDesign />
      <Illustration />
      <Kunden />
      <GameArt />
    </div>
  );
}

export default Homepage;
