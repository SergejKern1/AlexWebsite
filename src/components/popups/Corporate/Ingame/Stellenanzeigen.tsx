import { Container } from "react-bootstrap";
import { SectionTitle, Spacing } from "util/class-utils.tsx";
import ImageCarousel from "components/ImageCarousel.tsx";

const Stellenanzeigen: React.FC = () => {
  return (
    <Container className="mw-800px">
      <SectionTitle> Stellenanzeigen </SectionTitle>
      <ImageCarousel id="Stellenanzeigen-carousel" imgs={[
        {src:"/CorporateDesign/Ingame/Stellenanzeigen-imgs 1.jpg"},
        {src:"/CorporateDesign/Ingame/Stellenanzeigen-imgs 2.jpg"},
        {src:"/CorporateDesign/Ingame/Stellenanzeigen-imgs 3.jpg"},
        {src:"/CorporateDesign/Ingame/Stellenanzeigen-imgs 4.jpg"},
        {src:"/CorporateDesign/Ingame/Stellenanzeigen-imgs 5.jpg"},
        {src:"/CorporateDesign/Ingame/Stellenanzeigen-imgs 6.jpg"},
      ]} />
      <Spacing top={30} />

      <div className="fl-j-center-al-i-center mx-auto mw-600px">
        <p className="mx-autoblock tx-2col-g15">
          Als ich bei Ingame anfing, waren wir etwa 15 Leute, die in einem kleinen Studio arbeiteten. Nachdem wir die Stellenanzeigen in den sozialen Medien, auf unseren Plattformen und über StepStone veröffentlicht hatten, wuchs das Team im Jahr 2024 auf 40 Personen an. Besonders junge Talente, die in der Videoproduktion und Social-Media-Welt arbeiten wollten, brachten großartige Fähigkeiten mit und verstärkten das Team.
        </p>
      </div>
    </Container>
  );
}

export default Stellenanzeigen;
