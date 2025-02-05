import { Container, Row, Col, Image } from "react-bootstrap";

import { lazyPlaceholder } from "util/lazy.ts";
import { SectionTitle } from "util/class-utils.tsx";

const Merch : React.FC = () => {
  return (
    <Container className="mw-800px">
      <SectionTitle id="t-shirts"> T-shirts </SectionTitle>

      <Row>
        <Col xs={6} style={lazyPlaceholder({width:4500, height:4512})}>
          <Image fluid src="/CorporateDesign/Ingame/merch/tshirt-slider-3/tshirt-02.jpg" />
        </Col>
        <Col xs={6} style={{padding:'85px'}}>
          Außerdem entwarf ich eine Reihe individueller T-Shirt-Designs, bei denen ich Markenelemente mit frischen, auffälligen Ästhetik kombinierte. 
        </Col>
      </Row>
      
      <Row>
        <Col xs={6} style={lazyPlaceholder({width:4500, height:4512})}>
          <Image fluid src="/CorporateDesign/Ingame/merch/tshirt-slider-3/tshirt-03.jpg" />
        </Col>
        <Col xs={6} style={lazyPlaceholder({width:4500, height:4512})}>
          <Image fluid src="/CorporateDesign/Ingame/merch/tshirt-slider-3/tshirt-01.jpg" />
        </Col>
      </Row>

      <Row>
        <Col xs={6} style={{padding:'85px'}}>
          Diese Projekte ermöglichten es mir, meine Fähigkeiten weiterzuentwickeln und einen persönlichen Touch in die visuelle Präsenz der Marke einzubringen, wodurch ihre Gesamtwirkung weiter verbessert wurde.
        </Col>
        <Col xs={6} style={lazyPlaceholder({width:583, height:553})}>
          <Image fluid src="/CorporateDesign/Ingame/merch/tshirt-slider-3/ingame-shirt-01.png" />
        </Col>
      </Row>
    </Container>
  );
}

export default Merch;
