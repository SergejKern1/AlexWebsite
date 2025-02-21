import { NavLink } from "react-router-dom";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

import { lazyPlaceholder } from "util/lazy.ts";
import { Title, Subtitle, SectionTitle, Spacing } from "util/class-utils.tsx";
import { loremIpsumText } from "util/loremIpsum.ts";

import ImageCarousel from "components/ImageCarousel.tsx";
import ImageRow from "components/ImageRow.tsx";

const Ingame: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <div style={lazyPlaceholder(1400, 185)}>
        <Image fluid className="w-100" src="/CorporateDesign/Ingame/ingame-header.png" loading="lazy"/>
      </div>
      <Container className="mw-800px">
        <Title id="ingame"> Ingame </Title>
        <Subtitle> Gaming & <br/>Streaming News </Subtitle>
      </Container>
      <Container className="mw-600px p-0">
        <Spacing top={100} />
        <div className="fl-j-center-al-i-center mx-auto">
          <p className="mx-autoblock tx-2col-g75">
            Ingame ist ein Gaming- und Streaming-News-Portal sowie ein Produktionsstudio für soziale Medien und Videoinhalte.
            Ich habe dort 2 Jahre und 4 Monate gearbeitet und auf diesem Weg – abgesehen vom Logo – alles Visuelle verändert.
          </p>
        </div>
        <Spacing top={15} />
        <div className="position-relative">
          <Image className="lt-xy-center z-0 w-50" src="/CorporateDesign/Ingame/splash-x-01-pink.png" />
          <div style={lazyPlaceholder({width: 1201, height: 801})}>
            <Image fluid className="position-relative mx-autoblock z-1" 
              src="/CorporateDesign/Ingame/ingame-briefbogen-visitenkarte.png" loading="lazy" />
          </div>
        </div>
      </Container>
      <Spacing top={75} />
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
          <p className="mx-autoblock tx-2col-g75">
            Als ich bei Ingame anfing, waren wir etwa 15 Leute, die in einem kleinen Studio arbeiteten. Nachdem wir die Stellenanzeigen in den sozialen Medien, auf unseren Plattformen und über StepStone veröffentlicht hatten, wuchs das Team im Jahr 2024 auf 40 Personen an. Besonders junge Talente, die in der Videoproduktion und Social-Media-Welt arbeiten wollten, brachten großartige Fähigkeiten mit und verstärkten das Team.
          </p>
        </div>
      </Container>
      <Spacing top={25} />
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

        <div className="fl-j-center-al-i-center mx-auto mw-600px">
          <p className="mx-autoblock tx-2col-g75">
            Für die Ingame-Google-Slides-Vorlagen verfolgte ich einen ähnlichen Ansatz wie bei den <NavLink to="/corporate-design/ippen">Ippen.Media-Designs</NavLink>: ein dunkler Hintergrund, damit die Elemente hervorstechen, sowie moderne, auffällige Farben, die ins Auge springen. Ein kleiner Auszug aus dem Kurzporträt, das Kunden und Partnern präsentiert wurde, ist unten zu sehen.
          </p>
        </div>
      </Container>
      <Spacing top={25} />
      <Container className="mw-800px">
        <SectionTitle id="cosmi"> Cosmi </SectionTitle>
        <ImageCarousel id="cosmi-slider-carousel" imgs={[
          {src:"/CorporateDesign/Ingame/cosmi/cosmi-slider-01.png"},
          {src:"/CorporateDesign/Ingame/cosmi/cosmi-slider-02.png"},
          {src:"/CorporateDesign/Ingame/cosmi/cosmi-slider-03.png"},
          {src:"/CorporateDesign/Ingame/cosmi/cosmi-slider-04.png"},
          {src:"/CorporateDesign/Ingame/cosmi/cosmi-slider-05.png"},
        ]} />

        <div className="fl-j-center-al-i-center mx-auto mw-600px">
          <p className="mx-autoblock tx-2col-g75">
            Zusätzlich zu meinen täglichen Grafikdesign-Aufgaben hatte ich die Möglichkeit, eigene kreative Projekte zu initiieren und umzusetzen. 
            Einer meiner wichtigsten Beiträge war die Gestaltung eines Maskottchens, das zu einem wiedererkennbaren Symbol der Marke wurde und dazu beitrug, 
            deren Identität zu stärken und eine Verbindung zum Publikum herzustellen.
          </p>
        </div>
        <ImageCarousel id="cosmi-concept-carousel" previewCount={0} imgs={[
          {src:"/CorporateDesign/Ingame/cosmi/concept-01.jpg"},
          {src:"/CorporateDesign/Ingame/cosmi/concept-02.png"}
        ]} />
      </Container>
      <Spacing top={15} />
      <ImageRow rowItems={[
        {src:"/CorporateDesign/Ingame/cosmi/pokal-slider-02.png", width: 1080, height: 1920},
        {src:"/CorporateDesign/Ingame/cosmi/pokal-slider-01.png", width: 2108, height: 3046},
        {src:"/CorporateDesign/Ingame/cosmi/pokal-slider-03.png", width: 1080, height: 1920},
      ]}/>
      
      <Container className="mw-800px">
        <ImageCarousel id="cosmi-concept-carousel" previewCount={0} imgs={[
          {src:"/CorporateDesign/Ingame/cosmi/propad-slider-01.png"},
          {src:"/CorporateDesign/Ingame/cosmi/propad-slider-02.png"},
          {src:"/CorporateDesign/Ingame/cosmi/propad-slider03.JPG"},
          {src:"/CorporateDesign/Ingame/cosmi/propad-slider-04.jpg"},
        ]} />
      </Container>

      <video className='img-fluid' controls src="/CorporateDesign/Ingame/cosmi/Cosmi-PortalGun-ingame.mp4" />    
      <Container className="mw-800px">
        <SectionTitle id="t-shirts"> T-shirts </SectionTitle>

        <Row>
          <Col xs={6} style={lazyPlaceholder({width:4500, height:4512})}>
            <Image fluid src="/CorporateDesign/Ingame/merch/tshirt-slider-3/tshirt-02.jpg" />
          </Col>
          <Col xs={6} style={{padding:'85px'}}>
            Außerdem entwarf ich eine Reihe individueller T-Shirt-Designs, bei denen ich Markenelemente mit frischen, auffälligen Ästhetik kombinierte. 
          </Col>
        </Row>
        
        <Row>
          <Col xs={6} style={lazyPlaceholder({width:4500, height:4512})}>
            <Image fluid src="/CorporateDesign/Ingame/merch/tshirt-slider-3/tshirt-03.jpg" />
          </Col>
          <Col xs={6} style={lazyPlaceholder({width:4500, height:4512})}>
            <Image fluid src="/CorporateDesign/Ingame/merch/tshirt-slider-3/tshirt-01.jpg" />
          </Col>
        </Row>

        <Row>
          <Col xs={6} style={{padding:'85px'}}>
            Diese Projekte ermöglichten es mir, meine Fähigkeiten weiterzuentwickeln und einen persönlichen Touch in die visuelle Präsenz der Marke einzubringen, wodurch ihre Gesamtwirkung weiter verbessert wurde.
          </Col>
          <Col xs={6} style={lazyPlaceholder({width:583, height:553})}>
            <Image fluid src="/CorporateDesign/Ingame/merch/tshirt-slider-3/ingame-shirt-01.png" />
          </Col>
        </Row>
      </Container>

      <Container className="mw-800px">
        <SectionTitle id="podcast"> Podcast </SectionTitle>

        <div className="fl-j-center-al-i-center mx-auto mw-600px" style={{...lazyPlaceholder({width:333, height:253}), maxWidth:'333px'}}>
          <Image fluid src="/CorporateDesign/Ingame/Hottakesservedcold-logo.png" style={{width:'333px'}} />
        </div>
      </Container>

      <div className="fl-j-center-al-i-center mx-auto">
        <iframe className="mx-autoblock" width="800" height="450" src="https://www.youtube.com/embed/wp_fTCjZtkc" title="Warum DIESE 4 Games zurückkommen MÜSSEN" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
      </div>
      <div className="fl-j-center-al-i-center mx-auto mw-600px">
        <p className="mx-autoblock tx-2col-g75">
          Hot takes served cold war eines der ersten Podcast Formate an dem ich mitgearbeitet habe. Ausgestrahlt wurded das Langformat auf YouTube und eine Kurzversion jeder Folge auf Tiktok.
        </p>
      </div>

      <Container className="mw-800px">
        <ImageRow rowItems={[
          {src:"/CorporateDesign/Ingame/hottakesservedcold-spotify-thumbnail.jpg", width: 1024, height: 1024},
          {src:"/CorporateDesign/Ingame/hottakesservedcold-thumbnail-youtube.jpg", width: 1280, height: 720},
        ]}/>
      </Container>
      <Spacing top={50} />

      <Container className="mw-800px">
        <SectionTitle id="ingame-news-app"> Ingame News App </SectionTitle>
        <Spacing top={30} />
        <div className="mx-autoblock" style={{...lazyPlaceholder({width: 305, height: 304}), maxWidth: '150px'}}>
          <Image fluid src="/CorporateDesign/Ingame/app/ingame-appicon.png" style={{width: '150px'}} />
        </div>
        <Spacing top={30} />

        <div className="fl-j-center-al-i-center mx-auto mw-600px">
          <p className="mx-autoblock tx-2col-g75">
            {loremIpsumText}
          </p>
        </div>

        <ImageCarousel id="ingame-news-app" previewCount={1} imgs={[
          {src:"/CorporateDesign/Ingame/app/ING-APP-Creative-1200x628-01.jpg"},
          {src:"/CorporateDesign/Ingame/app/ING-APP-Creative-1200x628-02.jpg"},
          {src:"/CorporateDesign/Ingame/app/ING-APP-Creative-1200x628-03.jpg"},
          {src:"/CorporateDesign/Ingame/app/ING-APP-Creative-1200x628-04.jpg"},
          {src:"/CorporateDesign/Ingame/app/ING-APP-Creative-1200x628-05.jpg"},
        ]}/>
        <ImageCarousel id="ingame-news-app" imgs={[
          {src:"/CorporateDesign/Ingame/app/ING-App-Screenshot-Android-01.jpg"},
          {src:"/CorporateDesign/Ingame/app/ING-App-Screenshot-Android-02.jpg"},
          {src:"/CorporateDesign/Ingame/app/ING-App-Screenshot-Android-03.jpg"},
          {src:"/CorporateDesign/Ingame/app/ING-App-Screenshot-Android-04.jpg"},
          {src:"/CorporateDesign/Ingame/app/ING-App-Screenshot-Android-05.jpg"},
          {src:"/CorporateDesign/Ingame/app/ING-App-Screenshot-Android-06.jpg"},
        ]}/>
      </Container>
      <Spacing top={150} />

      <div style={lazyPlaceholder(5000, 660)}>
        <Image fluid src="/CorporateDesign/Ingame/adventskalender/ING-Banner-Youtube-header-Christmas-small.png" style={{width: '100%'}} loading="lazy"/>
      </div>
      <Spacing top={20} />
      <Container className="mw-800px">
        <SectionTitle id="adventskalender"> Adventskalender </SectionTitle>
        <Spacing top={30} />

        <div style={lazyPlaceholder({ width: 792, height: 350})}>
          <Image className="mx-autoblock" fluid src="/CorporateDesign/Ingame/adventskalender/HeaderAdventskalender2023-11.png" />
        </div>

        <div className="fl-j-center-al-i-center mx-auto mw-600px">
          <p className="mx-autoblock tx-2col-g75">
            {loremIpsumText}
          </p>
        </div>

        <div style={lazyPlaceholder({ width: 2179, height: 960})}>
          <Image className="mx-autoblock" fluid src="/CorporateDesign/Ingame/adventskalender/santa-rudolf-logo.jpg" />
        </div>

        <Spacing top={50} />

        <ImageCarousel id="ingame-news-app" imgs={[
          {src:"/CorporateDesign/Ingame/adventskalender/Adventskalender2023_Preis_Tag06.jpg"},
          {src:"/CorporateDesign/Ingame/adventskalender/Adventskalender2023_Prize-Tag11.jpg"},
          {src:"/CorporateDesign/Ingame/adventskalender/Adventskalender2023_Prize-Tag22.jpg"},
        ]}/>

        <div className="fl-j-center-al-i-center mx-auto mw-600px">
          <p className="mx-autoblock tx-2col-g75">
            {loremIpsumText}
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
      <Spacing top={50} />

      <Container className="mw-800px">
        <SectionTitle> Spotify Playlist </SectionTitle>
        <Spacing top={30} />

        <Row>
          <Col xs={6}>
            <div style={lazyPlaceholder({ width: 2000, height: 2000})}> 
              <Image fluid src="/CorporateDesign/Ingame/InagmeSounds-green.png" />
            </div>
          </Col>
          <Col xs={6}>
            <div style={lazyPlaceholder({ width: 2000, height: 2000})}> 
              <Image fluid src="/CorporateDesign/Ingame/InagmeSounds-notes.png" />
            </div>
          </Col>
        </Row>
        <Spacing top={30} />

        <div className="fl-j-center-al-i-center mx-auto">
          <Button variant="primary"> Zur Website </Button>
        </div>

      </Container>
    </div>
  );
}

export default Ingame;
