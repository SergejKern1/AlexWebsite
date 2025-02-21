import {Container, Row, Col, Button, Image} from "react-bootstrap";
import { lazyPlaceholder } from "util/lazy.ts";
import { loremIpsumText } from "util/loremIpsum.ts";
import {Title, Subtitle, Spacing} from "util/class-utils.tsx";

const Flyer: React.FC = () => {  
  return (
    <div className="overflow-hidden">
        <div style={lazyPlaceholder(1456, 320)}> { /* img-height / width x 100 */ } 
          <Image className="w-100" src="/CorporateDesign/Flyer/header.png" loading="lazy" />
        </div>
        <Container className="mw-800px">
          <Title>Flyer</Title>
          <Subtitle>Jin Shin Jyutsu</Subtitle>
        </Container>
        <Spacing top={20} />
        <Container className="mw-600px">
          {loremIpsumText}
        </Container>
        <Spacing top={20} />
        <Container fluid className="mw-800px">
          <Row>
              <Col xs={6}>
                <Image fluid className="w-100" src="/CorporateDesign/Flyer/mockup_front-1536x1106.png" loading="lazy" />
                <Image fluid className="w-100" src="/CorporateDesign/Flyer/flyer_inside-2048x1475.png" loading="lazy" />
              </Col>
              <Col xs={6}>
                <Image fluid className="w-100" src="/CorporateDesign/Flyer/speechBubbles.png" loading="lazy" />
              </Col>
          </Row>       
        </Container>
    </div>
  );
}

export default Flyer;
