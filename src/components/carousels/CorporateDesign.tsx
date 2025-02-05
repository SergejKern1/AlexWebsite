import { NavLink } from "react-router-dom";
import InfiniteCarousel from "components/InfiniteCarousel";

const CorporateDesign : React.FC = () => {
    return (
        <div className="carousel-container-row"> 
            <InfiniteCarousel autoPlayVelocity={1} debugName="CorporateDesign">
                <NavLink className="px-2" to="/corporate-design"><img src="/text/corporate-design.png" /></NavLink>
                {/* todo: overlay doesn not work in infinite carousel
                <ImageOverlay className="p-2" src="CorporateDesign/cover-elayn-01.png" href="" style={{width:'590px'}}/> */}
                <NavLink className="px-2" to="/corporate-design/elayn"><img src="/CorporateDesign/cover-elayn-01.jpg" /></NavLink>
                <NavLink className="px-2" to="/corporate-design/do-it-rtr"><img src="/CorporateDesign/cover-Do-it-rtr.jpg" /></NavLink>
                <NavLink className="px-2" to="/corporate-design/go-for-it"><img src="/CorporateDesign/cover-goforit.jpg" /></NavLink>
                <NavLink className="px-2" to="/corporate-design/ippen"><img src="/CorporateDesign/cover-ippen.jpg" /></NavLink>
                <NavLink className="px-2" to="/corporate-design/ingame"><img src="/CorporateDesign/cover-ingame.jpg" /></NavLink>
            </InfiniteCarousel> 
        </div>
    );
}

export default CorporateDesign;