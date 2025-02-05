import { Container, 
  Row, Col, Button, 
  Image } from "react-bootstrap";

import { lazyPlaceholder } from "util/lazy.ts";
import { Title, Subtitle, Spacing } from "util/class-utils.tsx";

const HayHurray: React.FC = () => {
  return (
    <div id="hay-hurray">
      <div style={lazyPlaceholder(1600, 500)}>
        <Image fluid className='mt-1' src="/CorporateDesign/elayn/elayn-header.jpg" style={{ width: '100%' }} loading="lazy" />
      </div>
      <Spacing top={50}/>
      
      <Container className="mw-800px">
        <Title>Hay Hurray</Title>
        <Subtitle>Elayn</Subtitle>
      </Container>
      <Container className="mw-600px">
        <p className="tx-2col-g15">
          Auch für das zweite Album Jay Hurray kam Elayn für das Design auf mich zu. Dieses
          mal sollte die CD aufklappbar sein und mehr Artworks zeigen. Diesmal fokussierten
          wir uns besonders auf den Verwurzeln Aspekt und die Verbindung mit Mutter Natur.
        </p>
      </Container>
      <Spacing top={50}/>
      <Container>
          <Row>
              <Button className="mx-auto" variant="primary"
                  href="https://elayn4hearts.bandcamp.com/album/jay-hooray-2" target="_blank" 
                  style={{width: "200px"}}>
                  To Album
              </Button>
          </Row>
      </Container>
      <Spacing top={50}/>
      <Image fluid src="/CorporateDesign/elayn/elayncover-front-back.jpg" style={{ width: '100%' }} loading="lazy" />
    </div>
  );
}

export default HayHurray;
