import { Container, 
  // Row, Col, Button, 
  Image } from "react-bootstrap";

import { lazyPlaceholder } from "util/lazy.ts";
import { Title, Subtitle } from "util/class-utils.tsx";
import { loremIpsumText } from "util/loremIpsum";

const HayHurray: React.FC = () => {
  return (
    <div id="hay-hurray">
      <div style={lazyPlaceholder(1600, 500)}>
        <Image fluid className='mt-1' src="/CorporateDesign/elayn/elayn-header.jpg" style={{ width: '100%' }} loading="lazy" />
      </div>
      <Container className="mw-800px">
        <Title>Hay Hurray</Title>
        <Subtitle>Elayn</Subtitle>
      </Container>
      <Container className="mw-600px">
        <p className="tx-2col-g75">
          {loremIpsumText}
        </p>
      </Container>
      <Image fluid src="/CorporateDesign/elayn/elayncover-front-back.jpg" style={{ width: '100%' }} loading="lazy" />
    </div>
  );
}

export default HayHurray;
