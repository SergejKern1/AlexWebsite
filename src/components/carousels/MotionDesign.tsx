import { Link, NavLink } from "react-router-dom";
import InfiniteCarousel from "../InfiniteCarousel";

const MotionDesign : React.FC = () => {
    return (
        <div className="carousel-container-row"> 
            <InfiniteCarousel autoPlayVelocity={-1} debugName="MotionDesign">
                <div className="w1057xh600">
                    <video className='img-fluid w1057xh600' autoPlay loop={true} muted={true}>
                        <source src="/Motion/schilhartREEL2024-small.mp4" type="video/webm" /> Your browser does not support the video tag.
                    </video>
                </div>
                <NavLink className="p-2" to="/motion-design"><img src="text/motiondesign.png" /></NavLink>
                <div className="w338xh600">
                    <video className='img-fluid w338xh600' autoPlay loop={true} muted={true}>
                        <source src="/Motion/Schilhart-Reel-mobile-small.mp4" type="video/webm" /> Your browser does not support the video tag.
                    </video>
                </div>

                <div className="w1057xh600">
                    <video className='img-fluid w1057xh600' autoPlay loop={true} muted={true}>
                        <source src="/Motion/ET-Karrieremenü-small.mp4" type="video/webm" /> Your browser does not support the video tag.
                    </video>
                </div>
                <div className="w338xh600">
                    <video className='img-fluid w338xh600' autoPlay loop={true} muted={true}>
                        <source src="/Motion/Machloket-Intro_1.mp4" type="video/webm" /> Your browser does not support the video tag.
                    </video>
                </div>
            </InfiniteCarousel> 
        </div>
    );
}

export default MotionDesign;