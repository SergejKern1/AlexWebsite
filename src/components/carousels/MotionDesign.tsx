import { NavLink } from "react-router-dom";
import InfiniteCarousel from "components/InfiniteCarousel";

const MotionDesign : React.FC = () => {
    return (
        <div className="carousel-container-row"> 
            <InfiniteCarousel autoPlayVelocity={-1} debugName="MotionDesign">
                <div className="px-2 w1057xh600">
                    <video className='img-fluid w1057xh600' autoPlay loop={true} muted={true}>
                        <source src="/Motion/schilhartREEL2024-small.mp4" type="video/webm" /> Your browser does not support the video tag.
                    </video>
                </div>
                <NavLink className="px-2" to="/motion-design"><img src="text/motiondesign.png" /></NavLink>
                <div className="px-2 w338xh600">
                    <video className='img-fluid w338xh600' autoPlay loop={true} muted={true}>
                        <source src="/Motion/Schilhart-Reel-mobile-small.mp4" type="video/webm" /> Your browser does not support the video tag.
                    </video>
                </div>

                <div className="px-2 w1057xh600">
                    <video className='img-fluid w1057xh600' autoPlay loop={true} muted={true}>
                        <source src="/Motion/ET-Karrieremenü-small.mp4" type="video/webm" /> Your browser does not support the video tag.
                    </video>
                </div>
                <div className="px-2 w338xh600">
                    <video className='img-fluid w338xh600' autoPlay loop={true} muted={true}>
                        <source src="/Motion/Machloket-Intro_1.mp4" type="video/webm" /> Your browser does not support the video tag.
                    </video>
                </div>
            </InfiniteCarousel> 
        </div>
    );
}

export default MotionDesign;