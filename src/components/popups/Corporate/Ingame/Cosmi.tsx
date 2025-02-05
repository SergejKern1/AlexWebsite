import { Container } from "react-bootstrap";

import { SectionTitle, Spacing } from "util/class-utils.tsx";

import ImageCarousel from "components/ImageCarousel.tsx";
import ImageRow from "components/ImageRow.tsx";

const Cosmi: React.FC = () => {
  return (
    <div>
      <Container className="mw-800px">
        <SectionTitle id="cosmi"> Cosmi </SectionTitle>
        <ImageCarousel id="cosmi-slider-carousel" previewCount={0} imgs={[
          {src:"/CorporateDesign/Ingame/cosmi/cosmi-slider-01.png"},
          {src:"/CorporateDesign/Ingame/cosmi/cosmi-slider-02.png"},
          {src:"/CorporateDesign/Ingame/cosmi/cosmi-slider-03.png"},
          {src:"/CorporateDesign/Ingame/cosmi/cosmi-slider-04.png"},
          {src:"/CorporateDesign/Ingame/cosmi/cosmi-slider-05.png"},
        ]} />
      <Spacing top={50} />

        <div className="fl-j-center-al-i-center mx-auto mw-600px">
          <p className="mx-autoblock tx-2col-g15">
            Zusätzlich zu meinen täglichen Grafikdesign-Aufgaben hatte ich die Möglichkeit, eigene kreative Projekte zu initiieren und umzusetzen. 
            Einer meiner wichtigsten Beiträge war die Gestaltung eines Maskottchens, das zu einem wiedererkennbaren Symbol der Marke wurde und dazu beitrug, 
            deren Identität zu stärken und eine Verbindung zum Publikum herzustellen.
          </p>
        </div>
        <Spacing top={50} />

        <ImageCarousel id="cosmi-concept-carousel" previewCount={0} imgs={[
          {src:"/CorporateDesign/Ingame/cosmi/concept-01.jpg"},
          {src:"/CorporateDesign/Ingame/cosmi/concept-02.png"}
        ]} />
      </Container>
      <Spacing top={50} />
      <ImageRow rowItems={[
        {src:"/CorporateDesign/Ingame/cosmi/pokal-slider-02.png", width: 1080, height: 1920},
        {src:"/CorporateDesign/Ingame/cosmi/pokal-slider-01.png", width: 2108, height: 3046},
        {src:"/CorporateDesign/Ingame/cosmi/pokal-slider-03.png", width: 1080, height: 1920},
      ]}/>
            <Spacing top={50} />

      <Container className="mw-800px">
        <ImageCarousel id="cosmi-concept-carousel" previewCount={0} imgs={[
          {src:"/CorporateDesign/Ingame/cosmi/propad-slider-01.png"},
          {src:"/CorporateDesign/Ingame/cosmi/propad-slider-02.png"},
          {src:"/CorporateDesign/Ingame/cosmi/propad-slider03.JPG"},
          {src:"/CorporateDesign/Ingame/cosmi/propad-slider-04.jpg"},
        ]} />
      </Container>
      <Spacing top={50} />

      <video className='img-fluid' controls src="/CorporateDesign/Ingame/cosmi/Cosmi-PortalGun-ingame.mp4" />    
      <Spacing top={50} />

    </div>
  );
}

export default Cosmi;
