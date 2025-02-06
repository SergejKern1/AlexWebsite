import {Container, Row, Col, Button, Image} from "react-bootstrap";

import {Title, Subtitle} from "../../../util/class-utils.tsx";
import { loremIpsumText } from "../../../util/loremIpsum";
import InfiniteCarousel from "../../InfiniteCarousel";

const Elayn: React.FC = () => {
  return (
    <div className="overflow-hidden">
        <div id="from-heart-to-heart">
            <div style={{minHeight: '18.45vw'}}> { /* img-height / width x 100 */ } 
                <Image fluid src="/CorporateDesign/elayn/Banner_Bandcamp.jpg" style={{width: '100%'}} loading="lazy"/>
            </div>
            <Container>
                <Title>From Heart to Heart</Title>
                <Subtitle>Elayn</Subtitle>
                {loremIpsumText}
                <div className="mt-5" style={{height: '142px'}}>
                    <Image className="d-block-mx-auto" src="/CorporateDesign/elayn/LOGO_01_black.png" loading="lazy" />
                </div>
                <b>From Heart to Heart</b>
                <div className="d-block-mx-auto m-5"  style={{width: "750px", height:"425px", position: "relative"}}>
                    <Image fluid style={{width: "400px", position: "absolute", right: "0", top:"0"}}
                        src="/CorporateDesign/elayn/CD.png" loading="lazy"/>
                    <Image fluid style={{width: "400px", position: "absolute", left: "0", bottom:"0", transform: "rotate(-5deg)"}}
                        src="/CorporateDesign/elayn/Elayn_Cover_22Oct02_B.jpg" loading="lazy"/>
                </div>
                <b>Visitenkarte</b>
            </Container>
            <div style={{minHeight: '31.24vw'}}> { /* img-height / width x 100 */ } 
                <Image fluid
                            src="/CorporateDesign/elayn/Visitenkarte-thumbnail.jpg" loading="lazy" />
            </div>
            <div className="carousel-container-row"> 
                <InfiniteCarousel autoPlayVelocity={0.5}>
                    <img className="p-1" src="/CorporateDesign/elayn/BirchHain_UkuOnHead.jpg" loading="lazy" />
                    <img className="p-1" src="/CorporateDesign/elayn/Dunes_Drum_slide.jpg" loading="lazy" />
                    <img className="p-1" src="/CorporateDesign/elayn/Heide_Instruments_Angel.jpg" loading="lazy" />
                    <img className="p-1" src="/CorporateDesign/elayn/Heide_singing_02.jpg" loading="lazy" />
                    <img className="p-1" src="/CorporateDesign/elayn/Street_TreeTrunk_RaisingArms.jpg" loading="lazy" />
                    <img className="p-1" src="/CorporateDesign/elayn/ZreebarkHealing.jpg" loading="lazy" />
                </InfiniteCarousel>
            </div>
        </div>

        <div id="hay-hurray">
            <div style={{minHeight: '31.25vw'}}> { /* img-height / width x 100 */ } 
                <Image fluid className='mt-1' src="/CorporateDesign/elayn/elayn-header.jpg" style={{width: '100%'}} loading="lazy" />
            </div>
            <Container>
                <Title>Hay Hurray</Title>
                <Subtitle>Elayn</Subtitle>
                {loremIpsumText}
            </Container>
            <Image fluid src="/CorporateDesign/elayn/elayncover-front-back.jpg" style={{width: '100%'}} loading="lazy" />

        </div>
    </div>
  );
}

export default Elayn;
