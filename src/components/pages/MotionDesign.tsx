import { useState } from 'react';
import {Container, Row, Col, Button, Image} from "react-bootstrap";

import Grid from 'components/Grid';
import Popup from 'components/Popup';
import NightKitchen from 'components/popups/Motion/NightKitchen';
import Rätsel from 'components/popups/Motion/Rätsel';
import JunkChef from 'components/popups/Motion/JunkChef';
import Machloket from 'components/popups/Motion/Machloket';
import ImageRow from 'components/ImageRow';
import Meditation from 'components/popups/Motion/Meditation';

const enum Format {
    Landscape,
    Portrait,
}

interface HoverVideoProps {
    aspectRatio: number;
    videoSrc?: string;
    thumbSrc: string;
    onClick?: () => void;

    children?: React.ReactNode;
}

const HoverVideo: React.FC<HoverVideoProps> = ({ aspectRatio, videoSrc, thumbSrc, onClick, children }) => {
    const [hover, setHover] = useState(false);

    return (
        <div className='position-relative w-100' onClick={onClick} 
            onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
            style={{aspectRatio: aspectRatio, height:'100%'}} >
            { hover && videoSrc && (
                <video className='img-fluid' autoPlay loop={true} muted={true} style={{aspectRatio: aspectRatio}} >
                    <source src={videoSrc} type="video/webm" /> Your browser does not support the video tag.
                </video>
            )}
            { hover && children }
            { !hover && (<Image fluid src={thumbSrc} style={{aspectRatio: aspectRatio}} />)}
            { onClick && (<Image className="position-absolute" src={hover ? 'Mehr-dazu-hover.png' : 'mehr-dazu-inactive.png'}
            style={{width:"75px", bottom:"0px", right:"0px"}} />) }
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
  const landscapeSrc=()=>{
    if (format===Format.Landscape)
        return "/icons/landscape-active.svg";
    return "/icons/landscape.svg";
  }
  const portraitSrc=()=>{
    if (format===Format.Portrait)
        return "/icons/portrait-active.svg";
    return "/icons/portrait.svg";
  }
  const landscapeRatio = 1200/675;
  const portraitRatio = 675/1200;
  return (
    <div className="overflow-hidden">

        { activePopup && 
            <Popup onClose={() => setActivePopup(null)} >
                {activePopup === "night-kitchen" && <NightKitchen/>}
                {activePopup === "raetsel" && <Rätsel/>}
                {activePopup === "junk-chef" && <JunkChef/>}
                {activePopup === "machloket" && <Machloket/>}
                {activePopup === "meditation" && <Meditation/>}
            </Popup>
        }

        <div className="fl-j-center-al-i-center" style={{ color: "white" }} >
            <div
                onClick={() => setFormat(Format.Landscape)}
                style={{
                    width: "65px",
                    height: "55px",
                    display: "flex", // Enable flexbox
                    alignItems: "center", // Center vertically
                    justifyContent: "center", // Center horizontally
                }}
            >
                <img src={landscapeSrc()} />
            </div>
            <div
                onClick={() => setFormat(Format.Portrait)}
                style={{
                    width: "65px",
                    height: "55px",
                    display: "flex", // Enable flexbox
                    alignItems: "center", // Center vertically
                    justifyContent: "center", // Center horizontally
                }} >
                <img src={portraitSrc()} />
            </div>
        </div>

        <Grid containerClass={`m-2 ${getDisplayClass(Format.Landscape)}`} rowClass='row g-2' elementClass='col-12 col-lg-6'>
            <HoverVideo aspectRatio={landscapeRatio} videoSrc='/Motion/JunkLikeAChef-Intro.mp4' thumbSrc='/Motion/thumbnails/burger-02.jpg' onClick={()=>setActivePopup("junk-chef")} />
            <HoverVideo aspectRatio={landscapeRatio} videoSrc='/Motion/7vW-Intro.webm' thumbSrc='/Motion/thumbnails/thumb-hottakesservedcold.jpg' />
            <HoverVideo aspectRatio={landscapeRatio} videoSrc='/Motion/Cosmi-PortalGun-ingame-small.mp4' thumbSrc='/Motion/thumbnails/thumb-cosmi-ingame.jpg' />
            <HoverVideo aspectRatio={landscapeRatio} videoSrc='/Motion/ET-Karrieremenü-small.mp4' thumbSrc='/Motion/thumbnails/thumb-karrieremenu.jpg' />
            <HoverVideo aspectRatio={landscapeRatio} videoSrc='/Motion/IG-ADP-Intro.mp4' thumbSrc='/Motion/thumbnails/thumb-ingame-intro.jpg' />
            <HoverVideo aspectRatio={landscapeRatio} videoSrc='/Motion/IngameOutro.webm' thumbSrc='/Motion/thumbnails/thumb-ingame-intro.jpg' />
            <HoverVideo aspectRatio={landscapeRatio} videoSrc='/Motion/nightkitschen.webm' thumbSrc='/Motion/thumbnails/thumb-nightkitschh.jpg' onClick={()=>setActivePopup("night-kitchen")} />
            <HoverVideo aspectRatio={landscapeRatio} videoSrc='/Motion/Breathing Meditation ｜ 3 rounds ｜ Guda Drum.mp4' 
                thumbSrc='/Motion/thumbnails/thumb-meditation.jpg'
                onClick={()=>setActivePopup("meditation")} />
            <HoverVideo aspectRatio={landscapeRatio} thumbSrc='/Motion/thumbnails/thumb-taichi.jpg'>
                {/**added boxes to video, so it is in same format */}
                <div className='fl-j-center-al-i-center h-100'>
                    <div style={{background:'#B69F74', height:'100%', width:'16%'}} />
                    <div style={{background:'#B69F74', height:'100%', width:'68%'}}>
                        <video className='img-fluid' autoPlay loop={true} muted={true} >
                            <source src="/Motion/TaiChi.mp4" type="video/webm" /> Your browser does not support the video tag.
                        </video>
                    </div>
                    <div style={{background:'#B69F74', height:'100%', width:'16%'}} />
                </div>
            </HoverVideo>
        </Grid>

        <Grid containerClass={`m-2 ${getDisplayClass(Format.Portrait)}`} rowClass='row g-2' elementClass='col-6 col-md-4 col-lg-3'>
            <HoverVideo aspectRatio={portraitRatio} videoSrc='/Motion/Machloket-Intro_1.mp4' thumbSrc='/Motion/thumbnails/thumb-machloket.jpg' 
                onClick={()=>setActivePopup("machloket")} />
            <HoverVideo aspectRatio={portraitRatio} videoSrc='/Motion/animedetektei.mp4' thumbSrc='/Motion/thumbnails/thumb-animedetektei.jpg' />
            <HoverVideo aspectRatio={portraitRatio} videoSrc='/Motion/foodpairing-small.mp4' thumbSrc='/Motion/thumbnails/thumb-foodparing.jpg' />
            <HoverVideo aspectRatio={portraitRatio} videoSrc='/Motion/ganzunggar.mp4' thumbSrc='/Motion/thumbnails/thumb-ganzundgar.jpg' />
            <HoverVideo aspectRatio={portraitRatio} videoSrc='/Motion/gutdassdufragst.mp4' thumbSrc='/Motion/thumbnails/thumb-gutdassdufragst.jpg' />
            <HoverVideo aspectRatio={portraitRatio} videoSrc='/Motion/DafuerWirstDuBezahlt-mobile.mp4' thumbSrc='/Motion/thumbnails/thumb-dafürwirstdubezahlt.jpg' />
            <HoverVideo aspectRatio={portraitRatio} videoSrc='/Motion/trash.mp4' thumbSrc='/Motion/thumbnails/thumb-drtrash.jpg' />
            <HoverVideo aspectRatio={portraitRatio} videoSrc='/Motion/Raetsel-Video-Sound-9-16-Folge17.mp4' thumbSrc='/Motion/thumbnails/thumb-drtrash.jpg' 
                onClick={()=>setActivePopup("raetsel")} />
            <HoverVideo aspectRatio={portraitRatio} videoSrc='/Motion/BF-QMOT-Intro-normal.mp4' thumbSrc='/Motion/thumbnails/thumb-quotemeonthat.jpg' />
            <HoverVideo aspectRatio={portraitRatio} videoSrc='/Motion/bzzenwithbuzzfeed.mp4' thumbSrc='/Motion/thumbnails/thumb-buzzenmitbuzzfeed.jpg' />
            <HoverVideo aspectRatio={portraitRatio} videoSrc='/Motion/whatwasthat.mp4' thumbSrc='/Motion/thumbnails/thumb-whatwasthat.jpg' />
            <HoverVideo aspectRatio={portraitRatio} videoSrc='/Motion/whatyouneed.mp4' thumbSrc='/Motion/thumbnails/thumb-whatyouneedfor.jpg' />
            <HoverVideo aspectRatio={portraitRatio} videoSrc='/Motion/worsttimeever.mp4' thumbSrc='/Motion/thumbnails/thumb-worsttimeever.jpg' />
            <HoverVideo aspectRatio={portraitRatio} videoSrc='/Motion/zeigmal.mp4' thumbSrc='/Motion/thumbnails/thumb-zeigmal.jpg' />
            <HoverVideo aspectRatio={portraitRatio} videoSrc='/Motion/ConfidentlyWrong-intro.mp4' thumbSrc='/Motion/thumbnails/confidently-wrong.png' />
        </Grid>
    </div>
  );
}

export default MotionDesign;
