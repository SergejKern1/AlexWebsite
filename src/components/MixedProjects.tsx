import CorporateDesign from './carousels/CorporateDesign';
import MotionDesign from './carousels/MotionDesign';
import Illustration from './carousels/Illustrations';
import Kunden from './carousels/Kunden';
import GameArt from './carousels/GameArt';

const MixedProjects: React.FC = () => {
    return (
        <div> 
            <CorporateDesign /> 
            <MotionDesign /> 
            <Illustration /> 
            <Kunden /> 
            <GameArt /> 
        </div>
    );
}

export default MixedProjects;
