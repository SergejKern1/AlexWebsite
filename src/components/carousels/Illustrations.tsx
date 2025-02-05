import { NavLink } from "react-router-dom";
import InfiniteCarousel from "components/InfiniteCarousel";

const Illustration : React.FC = () => {
    return (
        <div className="carousel-container-row"> 
            <InfiniteCarousel autoPlayVelocity={1} debugName="Illustration">
                <NavLink className="px-2" to="/illustration"><img src="/Illustrations/LotusFlower.jpeg" /></NavLink>
                <NavLink className="px-2" to="/illustration"><img src="/text/illustration.png" /></NavLink>
                <NavLink className="px-2" to="/illustration"><img src="/Illustrations/Handwaterfall.jpg" /></NavLink>
                <NavLink className="px-2" to="/illustration"><img src="/Illustrations/MysticDeer.jpg" /></NavLink>
                <NavLink className="px-2" to="/illustration"><img src="/Illustrations/TIGER-fluid.jpg" /></NavLink>
                <NavLink className="px-2" to="/illustration"><img src="/Illustrations/Water_native.png" /></NavLink>
            </InfiniteCarousel> 
        </div>
    );
}

export default Illustration;