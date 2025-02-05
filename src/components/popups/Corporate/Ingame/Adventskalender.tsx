import { Container, Image } from "react-bootstrap";

import { lazyPlaceholder } from "util/lazy.ts";
import { SectionTitle, Spacing } from "util/class-utils.tsx";

import ImageCarousel from "components/ImageCarousel.tsx";

const Adventskalender : React.FC = () => {
  return (
    <div>
      <div style={lazyPlaceholder(5000, 660)}>
        <Image fluid src="/CorporateDesign/Ingame/adventskalender/ING-Banner-Youtube-header-Christmas-small.png" style={{width: '100%'}} loading="lazy"/>
      </div>
      <Spacing top={20} />
      <Container className="mw-800px">
        <SectionTitle id="adventskalender"> Adventskalender </SectionTitle>
      </Container>
      <Container className="mw-600px">
        <Spacing top={50} />

        <div style={lazyPlaceholder({ width: 792, height: 350})}>
          <Image className="mx-autoblock" fluid src="/CorporateDesign/Ingame/adventskalender/HeaderAdventskalender2023-11.png" />
        </div>
        <Spacing top={50} />

        <div className="fl-j-center-al-i-center mx-auto mw-600px">
          <p className="mx-autoblock tx-2col-g15">
            Pünktlich zur Weihnachtszeit verlost ingame Geschenke an seine Community. Dafür lag es an
            mir ein neues Design für den Digitalen Adventskalender zu gestalten. Für das Logo wechselten
            sich Santa und Rudolf beim verlosen der Preise ab. Für jeden Preis gab es zusätzlich eine
            Social Media anzeige.
          </p>
        </div>
        <Spacing top={50} />

        <div style={lazyPlaceholder({ width: 2179, height: 960})}>
          <Image className="mx-autoblock" fluid src="/CorporateDesign/Ingame/adventskalender/santa-rudolf-logo.jpg" />
        </div>

        <Spacing top={50} />

        <ImageCarousel id="ingame-tuerchen" height={600} imgs={[
          {src:"/CorporateDesign/Ingame/adventskalender/Adventskalender2023_Preis_Tag06.jpg"},
          {src:"/CorporateDesign/Ingame/adventskalender/Adventskalender2023_Prize-Tag11.jpg"},
          {src:"/CorporateDesign/Ingame/adventskalender/Adventskalender2023_Prize-Tag22.jpg"},
        ]}/>
        <Spacing top={50} />

        <div className="fl-j-center-al-i-center mx-auto mw-600px">
          <p className="mx-autoblock">
            So sah das fertige Produkt im Browser aus mit der typischen Türchenseite, dem Gewinnspiel
            und Partnern von ingame.
          </p>
        </div>

        <ImageCarousel id="ingame-news-app" imgs={[
          {src:"/CorporateDesign/Ingame/adventskalender/ingame-advent-slider-01.png"},
          {src:"/CorporateDesign/Ingame/adventskalender/ingame-advent-slider-02.png"},
          {src:"/CorporateDesign/Ingame/adventskalender/ingame-advent-slider-03.png"},
          {src:"/CorporateDesign/Ingame/adventskalender/ingame-advent-slider-04.png"}
        ]}/>
      </Container>
      <Spacing top={50} />

      <div className="fl-j-center-al-i-center mx-auto" style={lazyPlaceholder({ width: 1223, height: 688})}>
        <Image fluid src="/CorporateDesign/Ingame/adventskalender/skizze.png" />
      </div>
    </div>
  );
}

export default Adventskalender;
