import { NavLink } from "react-router-dom";
import InfiniteCarousel from "components/InfiniteCarousel";

const GameArt : React.FC = () => {
    return (
        <div className="carousel-container-row"> 
            <InfiniteCarousel debugName="GameArt">
                <NavLink className="px-2" to="/game-art/into-the-cold"><img src="/GameArt/cover-intothecold.png" /></NavLink>
                <NavLink className="px-2" to="/game-art/"><img src="/text/gameart.png" /></NavLink>
                <NavLink className="px-2" to="/game-art/pitrush"><img src="/GameArt/cover-ptrush.jpg" /></NavLink>
                <NavLink className="px-2" to="/game-art/okjo"><img src="/GameArt/Okjo_thumbnail-768x768.jpg" /></NavLink>
            </InfiniteCarousel> 
        </div>
    );
}

export default GameArt;