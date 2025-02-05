import {Container, Row, Col, Button, Image} from "react-bootstrap";
import { lazyPlaceholder } from "util/lazy.ts";
import {Title, Subtitle, Spacing} from "util/class-utils.tsx";
import ImageRow from "components/ImageRow";

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
        <Spacing top={50} />
        <Container className="mw-600px">
          In unserer hektischen Welt fällt es oft schwer, zur Ruhe zu kommen und Körper sowie Geist in Einklang zu bringen. Genau hier setzt Saskia mit ihrer einfühlsamen Energiearbeit an. Ihre sanften Techniken helfen dabei, tiefsitzende Anspannungen zu lösen und ein Gefühl von Leichtigkeit und Wohlbefinden zu schaffen.
          Während meines ersten Praktikums hatte ich die besondere Gelegenheit, sie als meine erste Kundin zu begleiten. Ihre herzliche Art und ihre grounding Präsenz machten jede Begegnung besonders. Durch ihre Arbeit konnte ich selbst erfahren, wie sich innere Ruhe anfühlt – nach jeder Session fühlte ich mich vollkommen entspannt und bereit, mich wieder meinen Aufgaben zu widmen.
        </Container>
        <Spacing top={50} />
        
        <Container fluid className="mw-800px">
          <ImageRow rowItems={[
            {src:"", width:2048, height:3000},
            {src:"", width:539, height:1087},
          ]}>
            <div>
              <Image fluid className="w-100" src="/CorporateDesign/Flyer/mockup_front-1536x1106.png" loading="lazy" />
              <Image fluid className="w-100" src="/CorporateDesign/Flyer/flyer_inside-2048x1475.png" loading="lazy" />
            </div>
              <Image fluid className="w-100" src="/CorporateDesign/Flyer/speechBubbles.png" loading="lazy" />
          </ImageRow>   
        </Container>
    </div>
  );
}

export default Flyer;
