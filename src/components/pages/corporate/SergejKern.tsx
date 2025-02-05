import {Container, Row, Col, Button, Image} from "react-bootstrap";
import {Title, Subtitle} from "../../../util/class-utils.tsx";
import { loremIpsumText } from "../../../util/loremIpsum";
import ImageCarousel from "../../ImageCarousel.tsx";

const SergejKern: React.FC = () => {
  return (
    <div>
        <Container>
          <Title>Corporate Design & Website</Title>
          <Subtitle>Sergej Kern</Subtitle>
        </Container>
        <Container>
          <Image className="d-block-mx-auto" src="/CorporateDesign/SergejKern/LOGO_300px.png" />
          <Row>
            {loremIpsumText}
          </Row>

          <Image fluid className="d-block-mx-auto" src="/CorporateDesign/SergejKern/sergej-visitenkarte.png" />
          <Image fluid className="d-block-mx-auto" src="/CorporateDesign/SergejKern/sergej-icons.png" />

          <Row>
            {loremIpsumText}
          </Row>
        </Container>
        <ImageCarousel id="sergej-kern-carousel" imgs={[
          {src:"/CorporateDesign/SergejKern/sergej-website01.png", alt:""},
          {src:"/CorporateDesign/SergejKern/sergej-website02.png", alt:""},
          {src:"/CorporateDesign/SergejKern/sergej-website03.png", alt:""},
          {src:"/CorporateDesign/SergejKern/sergej-website04.png", alt:""},
          {src:"/CorporateDesign/SergejKern/sergej-website05.png", alt:""},
          {src:"/CorporateDesign/SergejKern/sergej-website06.png", alt:""},
        ]} />
    </div>
  );
}

export default SergejKern;
