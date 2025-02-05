import {Container, 
    Row, Col, Button, 
    Image} from "react-bootstrap";

import { lazyPlaceholder } from "util/lazy.ts";
import {Title, Subtitle, SectionTitle, Spacing} from "util/class-utils.tsx";
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
            <p className="tx-2col-g15">
            Power, Compassion und Joy. Das ist es womit ich die Künstlerin Elayn verbinde. Es
            war mir ein inneres Blumenpflücken mit ihr zusammen an ihrem Album und
            Corporate Design zu arbeiten. Ihr Thema ist es zurück zu ihren Wurzeln zu finden,
            die Verbindung mit Mutter Natur spielt dabei eine wichtige Rolle und natürlich auch
            die Verbindung zu sich selbst.
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
            <div className="m-5" >
                <Image fluid className="mx-autoblock" src="/CorporateDesign/elayn/Elayn-Album01.png" loading="lazy" />
            </div>
            {/* <div className="mx-autoblock m-5"  style={{width: "750px", height:"425px", position: "relative"}}>
                <Image fluid style={{width: "400px", position: "absolute", right: "0", top:"0"}}
                    src="/CorporateDesign/elayn/CD.png" loading="lazy"/>
                <Image fluid style={{width: "400px", position: "absolute", left: "0", bottom:"0", transform: "rotate(-5deg)"}}
                    src="/CorporateDesign/elayn/Elayn_Cover_22Oct02_B.jpg" loading="lazy"/>
            </div> */}
        </Container>
        <Container>
            <Row>
                <Button className="mx-auto" variant="primary"
                    href="https://elayn4hearts.bandcamp.com/album/from-heart-to-heart" target="_blank" 
                    style={{width: "200px"}}>
                    To Album
                </Button>
            </Row>
        </Container>
        <Spacing top={50}/>
        <Container className="mw-600px">
            <p className="tx-2col-g15">
                Gemeinsam für ihre erstes Album From heart to heart waren wir unterwegs in den
                Hamburger Boberger Dünen für eine Foto Session. Als toddlerin ist sie viel
                unterwegs, gibt Wohnzimmerkonzerte und spielt auf Festivals ihre Songs und gibt
                zusätzlich Workshops, die Welt ist ihr zuhause und ihr Backpack ihr ständiger
                Begleiter.
            </p>
        </Container>
        <Spacing top={50}/>

        <Container className="mw-800px">
            <SectionTitle>
            Visitenkarte
            </SectionTitle>
        </Container>
        <Spacing top={50}/>

        <Container className="mw-600px">
            <div style={lazyPlaceholder(600, 402)}>
                <Image fluid src="/CorporateDesign/elayn/Visitenkarte-elayn-1.png" loading="lazy" />
            </div>
        </Container>
        {/* <div style={lazyPlaceholder(5249, 1640)}>
            <Image fluid src="/CorporateDesign/elayn/Visitenkarte-thumbnail.jpg" loading="lazy" />
        </div> */}
        <Spacing top={50}/>

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
