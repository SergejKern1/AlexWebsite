import { useState } from 'react';
import {Container, Row, Col, Button, Image} from "react-bootstrap";

import Grid from '../Grid';

import LandscapeIcon from '../svg/Landscape';
import PortraitIcon from '../svg/Portrait';

const enum Format {
    Landscape,
    Portrait,
}

const MotionDesign: React.FC = () => {
  const [format, setFormat] = useState(Format.Portrait);
  
  const getDisplayClass=(expected: Format)=>{
    if (format===expected)
        return "d-block";
    else return "d-none";
  }
  const getColor=(expected: Format)=>{
    const rootStyle = getComputedStyle(document.documentElement);
    if (format===expected)
        return rootStyle.getPropertyValue('--primary').trim();
    else return "#000000";
  }

  return (
    <div>
        <div className="fl-j-center-al-i-center" style={{ color: "white" }} >
            <div
                className={`btn btn-light`}
                onClick={() => setFormat(Format.Landscape)}
                style={{
                    width: "65px",
                    height: "55px",
                    display: "flex", // Enable flexbox
                    alignItems: "center", // Center vertically
                    justifyContent: "center", // Center horizontally
                }}
            >
                {LandscapeIcon(getColor(Format.Landscape), "40px", "4")}
            </div>
            <div
                className={`btn btn-light`}
                onClick={() => setFormat(Format.Portrait)}
                style={{
                    width: "65px",
                    height: "55px",
                    display: "flex", // Enable flexbox
                    alignItems: "center", // Center vertically
                    justifyContent: "center", // Center horizontally
                }} >
                {PortraitIcon(getColor(Format.Portrait), "40px", "4")}
            </div>
        </div>

        <Grid containerClass={`m-2 ${getDisplayClass(Format.Landscape)}`} rowClass='row g-2' elementClass='col-12 col-lg-6'>
            <video className='img-fluid' autoPlay loop={true} muted={true}>
                <source src="/Motion/JunkLikeAChef-Intro.mp4" type="video/webm" /> Your browser does not support the video tag.
            </video>
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
            <video className='img-fluid' autoPlay loop={true} muted={true}>
                <source src="/Motion/nightkitschen.webm" type="video/webm" /> Your browser does not support the video tag.
            </video>
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
            <video className='img-fluid' autoPlay loop={true} muted={true}>
                <source src="/Motion/Machloket-Intro_1.mp4" type="video/webm" /> Your browser does not support the video tag.
            </video>
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
            <video className='img-fluid' autoPlay loop={true} muted={true}>
                <source src="/Motion/Raetsel-Video-Sound-9-16-Folge17.mp4" type="video/webm" /> Your browser does not support the video tag.
            </video>
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