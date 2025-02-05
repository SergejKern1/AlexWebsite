import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import { SectionTitle, Spacing } from "util/class-utils.tsx";

import ImageCarousel from "components/ImageCarousel.tsx";

const Portrait : React.FC = () => {
  return (
    <Container className="mw-800px">
      <SectionTitle> Portrait </SectionTitle>
      <ImageCarousel id="ingame-portrait-carousel" imgs={[
        {src:"/CorporateDesign/Ingame/portrait/ingame-portrait-01.jpg"},
        {src:"/CorporateDesign/Ingame/portrait/ingame-portrait-02.jpg"},
        {src:"/CorporateDesign/Ingame/portrait/ingame-portrait-03.jpg"},
        {src:"/CorporateDesign/Ingame/portrait/ingame-portrait-04.jpg"},
        {src:"/CorporateDesign/Ingame/portrait/ingame-portrait-05.jpg"},
        {src:"/CorporateDesign/Ingame/portrait/ingame-portrait-06.jpg"},
        {src:"/CorporateDesign/Ingame/portrait/ingame-portrait-07.jpg"},
        {src:"/CorporateDesign/Ingame/portrait/ingame-portrait-08.jpg"},
      ]} />
      <Spacing top={50} />
      <div className="fl-j-center-al-i-center mx-auto mw-600px">
        <p className="mx-autoblock tx-2col-g15">
          Für die Ingame-Google-Slides-Vorlagen verfolgte ich einen ähnlichen Ansatz wie bei den <NavLink to="/corporate-design/ippen">Ippen.Media-Designs</NavLink>: ein dunkler Hintergrund, damit die Elemente hervorstechen, sowie moderne, auffällige Farben, die ins Auge springen. Ein kleiner Auszug aus dem Kurzporträt, das Kunden und Partnern präsentiert wurde, ist unten zu sehen.
        </p>
      </div>
    </Container>
  );
}

export default Portrait;
