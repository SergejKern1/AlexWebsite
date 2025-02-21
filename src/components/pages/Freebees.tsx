import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Title, Subtitle, SectionTitle, Spacing } from "util/class-utils";
import ImageRow from "components/ImageRow";

const Freebees: React.FC = () => {
const freebeeImgs = [
  {  src: "freebees/dungiverse-boy.jpg",  alt: ""},
  {  src: "freebees/FlowingApe-ausmalen.jpg",  alt: ""},
];

  return (
    <div className="overflow-hidden">
      <Container className="mw-800px">
        <Title>Freebees</Title>
        <SectionTitle>Ausmalbilder zum Downloaden</SectionTitle>
      </Container>
      <Spacing top={20}/>
      <ImageRow rowItems={freebeeImgs}>
        <div className="position-relative">
          <Image fluid src="freebees/dungiverse-boy.jpg" />
          <a
            href="freebees/dungiverse-boy.jpg"
            download="dungiverse-boy.jpg"
            className="freebee-dwnld-btn">
              Download
          </a>
        </div>
        <div className="position-relative">
          <Image fluid src="freebees/FlowingApe-ausmalen.jpg" />
          <a
            href="freebees/FlowingApe-ausmalen.jpg"
            download="FlowingApe-ausmalen.jpg"
            className="freebee-dwnld-btn">
              Download
          </a>
        </div>
      </ImageRow>
    </div>
  );
}

export default Freebees;
