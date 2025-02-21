import {Container, 
    // Row, Col, Button, 
    Image} from "react-bootstrap";

import { lazyPlaceholder } from "util/lazy.ts";
import {Title, Subtitle, SectionTitle, Spacing} from "util/class-utils.tsx";
import { loremIpsumText } from "util/loremIpsum";
import InfiniteCarousel from "components/InfiniteCarousel";

const FromHeartToHeart: React.FC = () => {
  return (
    <div id="from-heart-to-heart">
        <div style={lazyPlaceholder(975, 180)}>
            <Image fluid src="/CorporateDesign/elayn/Banner_Bandcamp.jpg" style={{width: '100%'}} loading="lazy"/>
        </div>
        <Spacing top={50}/>
        <Container className="mw-800px">
            <Title>From Heart to Heart</Title>
            <Subtitle>Elayn</Subtitle>
        </Container>
        <Container className="mw-600px">
            <p className="tx-2col-g75">
                {loremIpsumText}
            </p>
            <div className="mt-5" style={{height: '142px'}}>
                <Image className="mx-autoblock" src="/CorporateDesign/elayn/LOGO_01_black.png" loading="lazy" />
            </div>
        </Container>
        <Spacing top={50}/>

        <Container className="mw-800px">
            <SectionTitle>
            From Heart to Heart
            </SectionTitle>
            <div className="mx-autoblock m-5"  style={{width: "750px", height:"425px", position: "relative"}}>
                <Image fluid style={{width: "400px", position: "absolute", right: "0", top:"0"}}
                    src="/CorporateDesign/elayn/CD.png" loading="lazy"/>
                <Image fluid style={{width: "400px", position: "absolute", left: "0", bottom:"0", transform: "rotate(-5deg)"}}
                    src="/CorporateDesign/elayn/Elayn_Cover_22Oct02_B.jpg" loading="lazy"/>
            </div>
            <SectionTitle>
            Visitenkarte
            </SectionTitle>
        </Container>
        <Spacing top={20}/>

        <div style={lazyPlaceholder(5249, 1640)}>
            <Image fluid
                        src="/CorporateDesign/elayn/Visitenkarte-thumbnail.jpg" loading="lazy" />
        </div>
        <Spacing top={15}/>

        <div className="carousel-container-row"> 
            <InfiniteCarousel autoPlayVelocity={0.5}>
                <img className="px-2" src="/CorporateDesign/elayn/BirchHain_UkuOnHead.jpg" loading="lazy" />
                <img className="px-2" src="/CorporateDesign/elayn/Dunes_Drum_slide.jpg" loading="lazy" />
                <img className="px-2" src="/CorporateDesign/elayn/Heide_Instruments_Angel.jpg" loading="lazy" />
                <img className="px-2" src="/CorporateDesign/elayn/Heide_singing_02.jpg" loading="lazy" />
                <img className="px-2" src="/CorporateDesign/elayn/Street_TreeTrunk_RaisingArms.jpg" loading="lazy" />
                <img className="px-2" src="/CorporateDesign/elayn/ZreebarkHealing.jpg" loading="lazy" />
            </InfiniteCarousel>
        </div>
        <Spacing top={15}/>

    </div>
  );
}

export default FromHeartToHeart;
