import { useState } from 'react';
import {Image} from "react-bootstrap";

import Grid from 'components/Grid';
import Popup from 'components/Popup';
import NightKitchen from 'components/popups/Motion/NightKitchen';
import Rätsel from 'components/popups/Motion/Rätsel';
import JunkChef from 'components/popups/Motion/JunkChef';
import Machloket from 'components/popups/Motion/Machloket';

const enum Format {
    Landscape,
    Portrait,
}

interface HoverVideoProps {
    onClick: () => void;
    videoSrc: string;
}

const HoverVideo: React.FC<HoverVideoProps> = ({ onClick, videoSrc }) => {
    const [hover, setHover] = useState(false);

    return (
        <div className='position-relative' onClick={onClick} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} >
            <video className='img-fluid' autoPlay loop={true} muted={true}>
                <source src={videoSrc} type="video/webm" /> Your browser does not support the video tag.
            </video>
            <Image className="position-absolute" src={hover ? 'Mehr-dazu-hover.png' : 'mehr-dazu-inactive.png'}
            style={{width:"75px", bottom:"5px", right:"-2px"}} />
        </div>
    );
}

const MotionDesign: React.FC = () => {
  const [format, setFormat] = useState(Format.Portrait);
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const getDisplayClass=(expected: Format)=>{
    if (format===expected)
        return "d-block";
    else return "d-none";
  }
  const getBtnStyleClass=(expected: Format)=>{
    if (format===expected)
        return "btn btn-primary";
    else return "btn btn-light";
  }
  const landscapeSrc=()=>{
    if (format===Format.Landscape)
        return "/icons/landscape-icn-active.svg";
    return "/icons/landscape-icn-inactive.svg";
  }
  const portraitSrc=()=>{
    if (format===Format.Portrait)
        return "/icons/portrait-icn-active.svg";
    return "/icons/portrait-icn-inactive.svg";
  }

  return (
    <div className="overflow-hidden">

        { activePopup && 
            <Popup onClose={() => setActivePopup(null)} >
                {activePopup === "night-kitchen" && <NightKitchen/>}
                {activePopup === "raetsel" && <Rätsel/>}
                {activePopup === "junk-chef" && <JunkChef/>}
                {activePopup === "machloket" && <Machloket/>}
            </Popup>
        }

        <div className="fl-j-center-al-i-center" style={{ color: "white" }} >
            <div
                className={getBtnStyleClass(Format.Landscape)}
                onClick={() => setFormat(Format.Landscape)}
                style={{
                    padding: "5px 7.5px",
                    maxWidth: "65px",
                    maxHeight: "55px",
                    display: "flex", // Enable flexbox
                    alignItems: "center", // Center vertically
                    justifyContent: "center", // Center horizontally
                }}
            >
                <Image fluid src={landscapeSrc()} style={{
                    width: "55px",
                    height: "45px",
                }} />
            </div>
            <div
                className={getBtnStyleClass(Format.Portrait)}
                onClick={() => setFormat(Format.Portrait)}
                style={{
                    padding: "5px 7.5px",
                    maxWidth: "65px",
                    maxHeight: "55px",
                    display: "flex", // Enable flexbox
                    alignItems: "center", // Center vertically
                    justifyContent: "center", // Center horizontally
                }} >
                <Image fluid src={portraitSrc()} style={{
                    width: "55px",
                    height: "45px",
                }} />
            </div>
        </div>

        <Grid containerClass={`m-2 ${getDisplayClass(Format.Landscape)}`} rowClass='row g-2' elementClass='col-12 col-lg-6'>
            <HoverVideo onClick={()=>setActivePopup("junk-chef")} videoSrc='/Motion/JunkLikeAChef-Intro.mp4' />
            <video className='img-fluid' autoPlay loop={true} muted={true}>
                <source src="/Motion/7vW-Intro.webm" type="video/webm" /> Your browser does not support the video tag.
            </video>
            <video className='img-fluid' autoPlay loop={true} muted={true}>
                <source src="/Motion/Cosmi-PortalGun-ingame-small.mp4" type="video/webm" /> Your browser does not support the video tag.
            </video>
            <video className='img-fluid' autoPlay loop={true} muted={true}>
                <source src="/Motion/ET-Karrieremenü-small.mp4" type="video/webm" /> Your browser does not support the video tag.
            </video>
            <video className='img-fluid' autoPlay loop={true} muted={true}>
                <source src="/Motion/IG-ADP-Intro.mp4" type="video/webm" /> Your browser does not support the video tag.
            </video>
            <video className='img-fluid' autoPlay loop={true} muted={true}>
                <source src="/Motion/IngameOutro.webm" type="video/webm" /> Your browser does not support the video tag.
            </video>
            <HoverVideo onClick={()=>setActivePopup("night-kitchen")} videoSrc='/Motion/nightkitschen.webm' />
            <video className='img-fluid' autoPlay loop={true} muted={true}>
                <source src="/Motion/Breathing Meditation ｜ 3 rounds ｜ Guda Drum.mp4" type="video/webm" /> Your browser does not support the video tag.
            </video>
            {/**added boxes to video, so it is in same format */}
            <div className='fl-j-center-al-i-center h-100'>
                <div style={{background:'#B69F74', height:'100%', width:'15%'}} />
                <div style={{background:'#B69F74', height:'100%', width:'70%'}}>
                    <video className='img-fluid' autoPlay loop={true} muted={true} >
                        <source src="/Motion/TaiChi.mp4" type="video/webm" /> Your browser does not support the video tag.
                    </video>
                </div>
                <div style={{background:'#B69F74', height:'100%', width:'15%'}} />
            </div>

        </Grid>

        <Grid containerClass={`m-2 ${getDisplayClass(Format.Portrait)}`} rowClass='row g-2' elementClass='col-6 col-md-4 col-lg-3'>
            <HoverVideo onClick={()=>setActivePopup("machloket")} videoSrc='/Motion/Machloket-Intro_1.mp4' />
            <video className='img-fluid' autoPlay loop={true} muted={true}>
                <source src="/Motion/animedetektei.mp4" type="video/webm" /> Your browser does not support the video tag.
            </video>
            <video className='img-fluid' autoPlay loop={true} muted={true}>
                <source src="/Motion/foodpairing-small.mp4" type="video/webm" /> Your browser does not support the video tag.
            </video>
            <video className='img-fluid' autoPlay loop={true} muted={true}>
                <source src="/Motion/ganzunggar.mp4" type="video/webm" /> Your browser does not support the video tag.
            </video>
            <video className='img-fluid' autoPlay loop={true} muted={true}>
                <source src="/Motion/gutdassdufragst.mp4" type="video/webm" /> Your browser does not support the video tag.
            </video>
            <video className='img-fluid' autoPlay loop={true} muted={true}>
                <source src="/Motion/DafuerWirstDuBezahlt-mobile.mp4" type="video/webm" /> Your browser does not support the video tag.
            </video>
            <video className='img-fluid' autoPlay loop={true} muted={true}>
                <source src="/Motion/trash.mp4" type="video/webm" /> Your browser does not support the video tag.
            </video>
            <HoverVideo onClick={()=>setActivePopup("raetsel")} videoSrc='/Motion/Raetsel-Video-Sound-9-16-Folge17.mp4' />
            <video className='img-fluid' autoPlay loop={true} muted={true}>
                <source src="/Motion/BF-QMOT-Intro-normal.mp4" type="video/webm" /> Your browser does not support the video tag.
            </video>
            <video className='img-fluid' autoPlay loop={true} muted={true}>
                <source src="/Motion/bzzenwithbuzzfeed.mp4" type="video/webm" /> Your browser does not support the video tag.
            </video>
            <video className='img-fluid' autoPlay loop={true} muted={true}>
                <source src="/Motion/whatwasthat.mp4" type="video/webm" /> Your browser does not support the video tag.
            </video>
            <video className='img-fluid' autoPlay loop={true} muted={true}>
                <source src="/Motion/whatyouneed.mp4" type="video/webm" /> Your browser does not support the video tag.
            </video>
            <video className='img-fluid' autoPlay loop={true} muted={true}>
                <source src="/Motion/worsttimeever.mp4" type="video/webm" /> Your browser does not support the video tag.
            </video>
            <video className='img-fluid' autoPlay loop={true} muted={true}>
                <source src="/Motion/zeigmal.mp4" type="video/webm" /> Your browser does not support the video tag.
            </video>
        </Grid>
    </div>
  );
}

export default MotionDesign;