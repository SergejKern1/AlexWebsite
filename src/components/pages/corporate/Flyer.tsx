import {Container, Row, Col, Button, Image} from "react-bootstrap";

import { loremIpsumText } from "../../../util/loremIpsum";
import {Title, Subtitle} from "../../../util/class-utils.tsx";

const Flyer: React.FC = () => {
  const lazyPlaceholder = (width: number, height: number) => ({
    minWidth: `${(height / width) * 100}vw`,
  });
  
  return (
    <div>
        <div style={lazyPlaceholder(1456, 320)}> { /* img-height / width x 100 */ } 
          <Image className="w-100" src="/CorporateDesign/Flyer/header.png" loading="lazy" />
        </div>
        <Container>
          <Title>Flyer</Title>
          <Subtitle>Jin Shin Jyutsu</Subtitle>
          {loremIpsumText}
        </Container>
        <Container fluid>
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
