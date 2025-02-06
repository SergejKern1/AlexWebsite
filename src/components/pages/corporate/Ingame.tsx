import {Container, Row, Col, Button, Image} from "react-bootstrap";
import { Title, Subtitle, Spacing } from "../../../util/class-utils.tsx";
import { loremIpsumText } from "../../../util/loremIpsum";

const Ingame: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <div style={{minHeight: '18.45vw'}}> { /* img-height / width x 100 */ } 
          <Image fluid src="/CorporateDesign/Ingame/ingame-header.png" style={{width: '100%'}} loading="lazy"/>
      </div>
      <Container>
        <Title> Corporate Design </Title>
        <Subtitle> Ingame </Subtitle>
        <div className="fl-j-center-al-i-center">
          <p className="d-block-mx-auto mw-800">
            Ingame is a gaming and streaming news portal and production studio of social <br/>
            media video content. 
            2 years and 4 months I worked with them and except for <br/>
            the logo changed everything visual on that way. <br/>
          </p>
        </div>
        <Spacing top={15} />
        <Row>
            <Col xs={12}>
              <Image fluid className="d-block-mx-auto mw-800" 
                src="/CorporateDesign/Ingame/ingame-briefbogen-visitenkarte.png" loading="lazy" />
            </Col>
        </Row>
        <Spacing top={15} />
        <Title> Stellenanzeigen </Title>
        <Spacing top={30} />
        <div className="fl-j-center-al-i-center">
          <p className="d-block-mx-auto">
            As I joined ingame we were around 15 people, working in a small studio. <br/>
            After we put those <span className="col-primary"><b>job advertisements</b></span> on social media
            and across our plattforms <br/>
            and stepstone the team grew in 2024 up to 40 people. Especially young people <br/>
            who wanted to work in the <b>video production</b> and <b>social media</b> world <br/>
            brought awesome skills and joined the workforce. <br/>
          </p>
        </div>
        <Spacing top={15} />
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
        
        <Spacing top={30} />
        <Title> Spotify Playlist </Title>
        <Spacing top={30} />

        <Row>
          <Col xs={6}>
            <Image fluid src="/CorporateDesign/Ingame/InagmeSounds-green.png" />
          </Col>
          <Col xs={6}>
            <Image fluid src="/CorporateDesign/Ingame/InagmeSounds-notes.png" />
          </Col>
        </Row>
        <Button variant="primary"> Zur Website </Button>

        <Title> Merch </Title>
        <Title> Cosmi </Title>
        <Title> Adventskalender </Title>

      </Container>
    </div>
  );
}

export default Ingame;
