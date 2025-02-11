import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Title, Subtitle, SectionTitle, Spacing } from "../../../util/class-utils.tsx";
import ImageCarousel from "../../ImageCarousel.tsx";
import { loremIpsumText } from "../../../util/loremIpsum";
import { NavLink } from "react-router-dom";
import ImageRow from "../../ImageRow.tsx";

const Ingame: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <div style={{minHeight: '18.45vw'}}> { /* img-height / width x 100 */ } 
          <Image fluid src="/CorporateDesign/Ingame/ingame-header.png" style={{width: '100%'}} loading="lazy"/>
      </div>
      <Container className="mw-800">
        <Title> Ingame </Title>
        <Subtitle> Gaming & <br/>Streaming News </Subtitle>
        <Spacing top={100} />
        <div className="fl-j-center-al-i-center mx-auto mw-600">
          <p className="d-block-mx-auto" style={{padding:'15px', columns:'2', columnGap:'75px'}}>
            Ingame ist ein Gaming- und Streaming-News-Portal sowie ein Produktionsstudio für soziale Medien und Videoinhalte.
            Ich habe dort 2 Jahre und 4 Monate gearbeitet und auf diesem Weg – abgesehen vom Logo – alles Visuelle verändert.
          </p>
        </div>
        <Spacing top={15} />
        <Row >
            <Col xs={12} className="position-relative">
              <Image className="lt-xy-center z-0 w-50" src="/CorporateDesign/Ingame/splash-x-01-pink.png" />
              <Image fluid className="position-relative d-block-mx-auto z-1 mw-600" 
                src="/CorporateDesign/Ingame/ingame-briefbogen-visitenkarte.png" loading="lazy" />
            </Col>
        </Row>
      </Container>
      <Spacing top={75} />
      <Container className="mw-800">
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

        <div className="fl-j-center-al-i-center mx-auto mw-600">
          <p className="d-block-mx-auto" style={{padding:'15px', columns:'2', columnGap:'75px'}}>
            Als ich bei Ingame anfing, waren wir etwa 15 Leute, die in einem kleinen Studio arbeiteten. Nachdem wir die Stellenanzeigen in den sozialen Medien, auf unseren Plattformen und über StepStone veröffentlicht hatten, wuchs das Team im Jahr 2024 auf 40 Personen an. Besonders junge Talente, die in der Videoproduktion und Social-Media-Welt arbeiten wollten, brachten großartige Fähigkeiten mit und verstärkten das Team.
          </p>
        </div>
      </Container>
      <Spacing top={25} />
      <Container className="mw-800">
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

        <div className="fl-j-center-al-i-center mx-auto mw-600">
          <p className="d-block-mx-auto" style={{padding:'15px', columns:'2', columnGap:'75px'}}>
            Für die Ingame-Google-Slides-Vorlagen verfolgte ich einen ähnlichen Ansatz wie bei den <NavLink to="/corporate-design/ippen">Ippen.Media-Designs</NavLink>: ein dunkler Hintergrund, damit die Elemente hervorstechen, sowie moderne, auffällige Farben, die ins Auge springen. Ein kleiner Auszug aus dem Kurzporträt, das Kunden und Partnern präsentiert wurde, ist unten zu sehen.
          </p>
        </div>
      </Container>
      <Spacing top={25} />
      <Container className="mw-800">
        <SectionTitle id="cosmi"> Cosmi </SectionTitle>
        <ImageCarousel id="cosmi-slider-carousel" imgs={[
          {src:"/CorporateDesign/Ingame/cosmi/cosmi-slider-01.png"},
          {src:"/CorporateDesign/Ingame/cosmi/cosmi-slider-02.png"},
          {src:"/CorporateDesign/Ingame/cosmi/cosmi-slider-03.png"},
          {src:"/CorporateDesign/Ingame/cosmi/cosmi-slider-04.png"},
          {src:"/CorporateDesign/Ingame/cosmi/cosmi-slider-05.png"},
        ]} />

        <div className="fl-j-center-al-i-center mx-auto mw-600">
          <p className="d-block-mx-auto" style={{padding:'15px', columns:'2', columnGap:'75px'}}>
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
        {src:"/CorporateDesign/Ingame/cosmi/pokal-slider-02.png"},
        {src:"/CorporateDesign/Ingame/cosmi/pokal-slider-01.png"},
        {src:"/CorporateDesign/Ingame/cosmi/pokal-slider-03.png"},
      ]}/>
      
      <Container className="mw-800">
        <ImageCarousel id="cosmi-concept-carousel" previewCount={0} imgs={[
          {src:"/CorporateDesign/Ingame/cosmi/propad-slider-01.png"},
          {src:"/CorporateDesign/Ingame/cosmi/propad-slider-02.png"},
          {src:"/CorporateDesign/Ingame/cosmi/propad-slider03.JPG"},
          {src:"/CorporateDesign/Ingame/cosmi/propad-slider-04.jpg"},
        ]} />
      </Container>

      <video className='img-fluid' controls src="/CorporateDesign/Ingame/cosmi/Cosmi-PortalGun-ingame.mp4" />    
      <Container className="mw-800">
        <SectionTitle id="cosmi"> T-shirts </SectionTitle>

        <Row>
          <Col xs={6}>
            <Image fluid src="/CorporateDesign/Ingame/merch/tshirt-slider-3/tshirt-02.jpg" />
          </Col>
          <Col xs={6} style={{padding:'85px'}}>
            Außerdem entwarf ich eine Reihe individueller T-Shirt-Designs, bei denen ich Markenelemente mit frischen, auffälligen Ästhetik kombinierte. 
          </Col>
        </Row>
        
        <Row>
          <Col xs={6}>
            <Image fluid src="/CorporateDesign/Ingame/merch/tshirt-slider-3/tshirt-03.jpg" />
          </Col>
          <Col xs={6}>
            <Image fluid src="/CorporateDesign/Ingame/merch/tshirt-slider-3/tshirt-01.jpg" />
          </Col>
        </Row>

        <Row>
          <Col xs={6} style={{padding:'85px'}}>
            Diese Projekte ermöglichten es mir, meine Fähigkeiten weiterzuentwickeln und einen persönlichen Touch in die visuelle Präsenz der Marke einzubringen, wodurch ihre Gesamtwirkung weiter verbessert wurde.
          </Col>
          <Col xs={6}>
            <Image fluid src="/CorporateDesign/Ingame/merch/tshirt-slider-3/ingame-shirt-01.png" />
          </Col>
        </Row>
      </Container>

      <Container className="mw-800">
        <SectionTitle id="podcast"> Podcast </SectionTitle>

        <div className="fl-j-center-al-i-center mx-auto mw-600">
          <Image fluid src="/CorporateDesign/Ingame/Hottakesservedcold-logo.png" style={{width:'333px'}} />
        </div>
      </Container>

      <div className="fl-j-center-al-i-center mx-auto">
        <iframe className="d-block-mx-auto" width="800" height="450" src="https://www.youtube.com/embed/wp_fTCjZtkc" title="Warum DIESE 4 Games zurückkommen MÜSSEN" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
      </div>
      <div className="fl-j-center-al-i-center mx-auto mw-600">
        <p className="d-block-mx-auto" style={{padding:'15px', columns:'2', columnGap:'75px'}}>
          Hot takes served cold war eines der ersten Podcast Formate an dem ich mitgearbeitet habe. Ausgestrahlt wurded das Langformat auf YouTube und eine Kurzversion jeder Folge auf Tiktok.
        </p>
      </div>

      <Container className="mw-800">
        <ImageRow rowItems={[
          {src:"/CorporateDesign/Ingame/hottakesservedcold-spotify-thumbnail.jpg"},
          {src:"/CorporateDesign/Ingame/hottakesservedcold-thumbnail-youtube.jpg"},
        ]}/>
      </Container>
      <Spacing top={50} />

      <Container className="mw-800">
        <SectionTitle id="ingame-news-app"> Ingame News App </SectionTitle>
        <Spacing top={30} />
        <Image className="d-block-mx-auto" fluid src="/CorporateDesign/Ingame/app/ingame-appicon.png" style={{width: '150px'}} />
        <Spacing top={30} />

        <div className="fl-j-center-al-i-center mx-auto mw-600">
          <p className="d-block-mx-auto" style={{padding:'15px', columns:'2', columnGap:'75px'}}>
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

      <div style={{minHeight: '18.45vw'}}> { /* img-height / width x 100 */ } 
          <Image fluid src="/CorporateDesign/Ingame/adventskalender/ING-Banner-Youtube-header-Christmas-small.png" style={{width: '100%'}} loading="lazy"/>
      </div>
      <Container className="mw-800">
        <Image className="d-block-mx-auto" fluid src="/CorporateDesign/Ingame/adventskalender/HeaderAdventskalender2023-11.png" />

        <div className="fl-j-center-al-i-center mx-auto mw-600">
          <p className="d-block-mx-auto" style={{padding:'15px', columns:'2', columnGap:'75px'}}>
            {loremIpsumText}
          </p>
        </div>

        <Image className="d-block-mx-auto" fluid src="/CorporateDesign/Ingame/adventskalender/santa-rudolf-logo.jpg" />
        <Spacing top={50} />

        <ImageCarousel id="ingame-news-app" imgs={[
          {src:"/CorporateDesign/Ingame/adventskalender/Adventskalender2023_Preis_Tag06.jpg"},
          {src:"/CorporateDesign/Ingame/adventskalender/Adventskalender2023_Prize-Tag11.jpg"},
          {src:"/CorporateDesign/Ingame/adventskalender/Adventskalender2023_Prize-Tag22.jpg"},
        ]}/>

        <div className="fl-j-center-al-i-center mx-auto mw-600">
          <p className="d-block-mx-auto" style={{padding:'15px', columns:'2', columnGap:'75px'}}>
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

      <div className="fl-j-center-al-i-center mx-auto">
        <Image fluid src="/CorporateDesign/Ingame/adventskalender/skizze.png" />
      </div>

      <Container className="mw-800">
        <SectionTitle> Spotify Playlist </SectionTitle>
        <Spacing top={30} />

        <Row>
          <Col xs={6}>
            <Image fluid src="/CorporateDesign/Ingame/InagmeSounds-green.png" />
          </Col>
          <Col xs={6}>
            <Image fluid src="/CorporateDesign/Ingame/InagmeSounds-notes.png" />
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
