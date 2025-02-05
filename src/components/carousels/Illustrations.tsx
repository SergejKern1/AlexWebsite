import { Link, NavLink } from "react-router-dom";
import InfiniteCarousel from "../InfiniteCarousel";

const Illustration : React.FC = () => {
    return (
        <div className="carousel-container-row"> 
            <InfiniteCarousel autoPlayVelocity={1} debugName="Illustration">
                <NavLink className="p-2" to="/illustration"><img src="/Illustrations/LotusFlower.jpeg" /></NavLink>
                <NavLink className="p-2" to="/illustration"><img src="/text/illustration.png" /></NavLink>
                <NavLink className="p-2" to="/illustration"><img src="/Illustrations/Handwaterfall.jpg" /></NavLink>
                <NavLink className="p-2" to="/illustration"><img src="/Illustrations/MysticDeer.jpg" /></NavLink>
                <NavLink className="p-2" to="/illustration"><img src="/Illustrations/TIGER-fluid.jpg" /></NavLink>
                <NavLink className="p-2" to="/illustration"><img src="/Illustrations/Water_native.jpg" /></NavLink>
            </InfiniteCarousel> 
        </div>
    );
}

export default Illustration;