import {Container, Row, Col, Button, Image} from "react-bootstrap";
import {Title, Subtitle, Spacing} from "util/class-utils.tsx";
import ImageCarousel from "components/ImageCarousel.tsx";

const SergejKern: React.FC = () => {
  return (
    <div className="overflow-hidden">
        <Spacing top={50}/>
        <Container className="mw-800px">
          <Title>Corporate Design & Website</Title>
          <Subtitle>Sergej Kern</Subtitle>
        </Container>
        <Spacing top={50}/>
        <Container className="mw-600px">
          <Image className="mx-autoblock" src="/CorporateDesign/SergejKern/LOGO_300px.png" />
          <Spacing top={50}/>
          <p className="tx-2col-g15">
          Für seine Selbstständigkeit half ich dem Game Developer und Programmierer bei der Entwicklung seines Corporate Designs. 
          Für das Logo inspirierten uns typische Icons, die in der Programmierung verwendet werden. Diese gaben auch dem Briefbogen und der Visitenkarte einen feinen touch.
          </p>
          <Spacing top={50}/>

          <Image fluid className="mx-autoblock" src="/CorporateDesign/SergejKern/sergej-visitenkarte.png" />
          <Spacing top={20}/>
          <Image fluid className="mx-autoblock" src="/CorporateDesign/SergejKern/sergej-icons.png" />
          <Spacing top={50}/>

          <p className="tx-2col-g15">
          Für das Design der Website überlegten wir uns gemeinsam Strategien die Projekte hervorzuheben. Vor allem die Codebase hinter dem fertigen Produkt sichtbar zu machen war uns wichtig und so kamen wir auf die Idee, einen Teil davon ausklappbar darzustellen. 
          </p>
        </Container>
        <Spacing top={50}/>
        
        <Container className="mw-800px">
          <ImageCarousel id="sergej-kern-carousel" imgs={[
            {src:"/CorporateDesign/SergejKern/sergej-website01.png", alt:""},
            {src:"/CorporateDesign/SergejKern/sergej-website02.png", alt:""},
            {src:"/CorporateDesign/SergejKern/sergej-website03.png", alt:""},
            {src:"/CorporateDesign/SergejKern/sergej-website04.png", alt:""},
            {src:"/CorporateDesign/SergejKern/sergej-website05.png", alt:""},
            {src:"/CorporateDesign/SergejKern/sergej-website06.png", alt:""},
          ]} />
        </Container>
        <Spacing top={20}/>
    </div>
  );
}

export default SergejKern;
