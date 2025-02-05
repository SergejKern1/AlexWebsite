import {Container, Row, Col, Button, Image} from "react-bootstrap";
import { Title, Subtitle } from "../../../util/class-utils.tsx";
import { loremIpsumText } from "../../../util/loremIpsum";

const Ingame: React.FC = () => {
  return (
    <div>
        <Container>
          <Title>Corporate Design</Title>
          <Subtitle>Ingame</Subtitle>
          <Row>
              <Col xs={12} className="position-relative">
                <Image className="lt-xy-center z-0 w-50" 
                  src="/CorporateDesign/Ingame/splash-x-01-pink.png" />
                <Image fluid className="position-relative z-1 d-block-mx-auto" 
                  src="/CorporateDesign/Ingame/ingame-briefbogen-visitenkarte.png" loading="lazy" />
              </Col>
          </Row>
          {loremIpsumText}
          <h2>Social Media Posts</h2>
          <Row>
            <Col xs={3}>
              <Image fluid src="/CorporateDesign/Ingame/ING-instgram-story-pink.jpg" />
            </Col>
            <Col xs={3}>
              <Image fluid src="/CorporateDesign/Ingame/ING-tiktok-PINK-mitte-ANSICHT.jpg" />
            </Col>
            <Col xs={3}>
              <Image fluid src="/CorporateDesign/Ingame/ING-tiktok-PINK-oben-ANSICHT.jpg" />
            </Col>
            <Col xs={3}>
              <Image fluid src="/CorporateDesign/Ingame/ING-tiktok-PINK-unten-ANSICHT.jpg" />
            </Col>
          </Row>
          <h2>Stellenanzeigen</h2>
          {loremIpsumText}
          <Row>
            <Col xs={8}>
              <Image fluid src="/CorporateDesign/Ingame/Stellenanzeigen-TemplateC-SEO_CreativeCampaignLead.jpg" />
            </Col>
            <Col xs={4}>
              <Image fluid src="/CorporateDesign/Ingame/Stellenanzeigen-TemplateC-Social_WerksstudentSales.jpg" />
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <Image fluid src="/CorporateDesign/Ingame/Stellenanzeigen-TemplateB-Social_WerksstudentCampaigning.jpg" />
            </Col>
            <Col xs={8}>
              <Image fluid src="/CorporateDesign/Ingame/Stellenanzeigen-TemplateB-SEO_SocialVideoRedakteur.jpg" />
            </Col>
          </Row>
          <h2>Bürobeklebungen</h2>
          {loremIpsumText}
          <Image fluid src="/CorporateDesign/Ingame/Eingang.png" />
          <Image fluid src="/CorporateDesign/Ingame/Scheiben.png" />

          <h2>Spotify Playlist</h2>
          <Row>
            <Col xs={6}>
              <Image fluid src="/CorporateDesign/Ingame/InagmeSounds-green.png" />
            </Col>
            <Col xs={6}>
              <Image fluid src="/CorporateDesign/Ingame/InagmeSounds-notes.png" />
            </Col>
          </Row>
          <Button variant="primary">Zur Website</Button>
        </Container>
    </div>
  );
}

export default Ingame;
