import {Container, Row, Col, Button, Image} from "react-bootstrap";
import {Title, Subtitle, Spacing} from "util/class-utils.tsx";
import { loremIpsumText } from "util/loremIpsum.ts";
import ImageCarousel from "components/ImageCarousel.tsx";

const SergejKern: React.FC = () => {
  return (
    <div className="overflow-hidden">
        <Spacing top={20}/>
        <Container className="mw-800px">
          <Title>Corporate Design & Website</Title>
          <Subtitle>Sergej Kern</Subtitle>
        </Container>
        <Spacing top={20}/>
        <Container className="mw-600px">
          <Image className="mx-autoblock" src="/CorporateDesign/SergejKern/LOGO_300px.png" />
          <Spacing top={20}/>
          <Row>
            {loremIpsumText}
          </Row>
          <Spacing top={20}/>

          <Image fluid className="mx-autoblock" src="/CorporateDesign/SergejKern/sergej-visitenkarte.png" />
          <Spacing top={20}/>
          <Image fluid className="mx-autoblock" src="/CorporateDesign/SergejKern/sergej-icons.png" />
          <Spacing top={20}/>

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
        <Spacing top={20}/>
    </div>
  );
}

export default SergejKern;
