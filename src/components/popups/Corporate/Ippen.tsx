import {Container, Row, Col, Button, Image} from "react-bootstrap";
import {Title, Subtitle, Spacing, SectionTitle} from "util/class-utils.tsx";

import ImageCarousel, { ArrowPosition } from "components/ImageCarousel.tsx";
import ImageOverlay from "components/ImageOverlay";

const Ippen: React.FC = () => {
  return (
    <div className="pink overflow-hidden">
        <Image fluid className="w-100" src="/CorporateDesign/Ippen/ippen-header.jpg"/>
        <Spacing top={50}/>

        <Container className="mw-800px">
          <Title id='ippen'>Corporate Design</Title>
          <Subtitle>Ippen Media</Subtitle>
        </Container>
        <Spacing top={50}/>

        <Container className="mw-600px">
          <p className="col-primary">
            "Wir brauchen mehr junge Menschen, die mit den richtigen Fähigkeiten frisches Video- und
            Social-Media-Content für die junge Generation erstellen wollen."
          </p>
          <div className="tx-2col-g15">
            <p>
              Das war die Vision, die mir von <b>Ippen.Media</b> mitgegeben wurde – einem Verlagshaus, das
              mehrere deutsche Nachrichtenportale unter einem Dach vereint (darunter merkur.de, fr.de,
              tz.de, deichstube.de).
            </p>
            <p>
              Auf dieser Grundlage begann ich, ein neues Logo zu entwickeln, das aus den Konventionen
              ausbricht. Ich kombinierte handgezeichnete, skizzenhafte Buchstaben mit einer markanten,
              kräftigen Typografie. Da Ippen.Media zahlreiche Online-Newsportale betreibt, überlagerte ich
              die Schrift mehrfach, ähnlich wie ein Stapel übereinanderliegender Zeitungen, um die Vielfalt
              und Dynamik des Unternehmens visuell widerzuspiegeln.
            </p>
          </div>
        </Container>

        <Container className="mw-600px">
          <Image fluid className='d-block mx-auto mt-5' src="/CorporateDesign/Ippen/ippen-logo.png" />
          <SectionTitle>Linkedin Post Designs</SectionTitle>
          <Spacing top={20}/>

          <ImageCarousel id="ippen-linkedin-designs-carousel" imgs={[
              {src: "/CorporateDesign/Ippen/IPPEN-LinkedIn-IIllustration.png"},
              {src: "/CorporateDesign/Ippen/IPPEN-LinkedIn-Wir-sind-online-01.png"},
              {src: "/CorporateDesign/Ippen/Ippen-M-gaming-zitat.png"},
              {src: "/CorporateDesign/Ippen/Ippen-M-zitat.png"},
            ]}
          />

          <Spacing top={50}/>
          <Image fluid className='mx-autoblock-600px' src="/CorporateDesign/Ippen/icons-A.png" />
          <Spacing top={50}/>

        </Container>

        <Spacing top={20} />
        <Container className="mw-600px">
          <p className="tx-2col-g15">
            Diese Stellenanzeigen für <b>Ingame, Tasty und BuzzFeed</b> halfen dabei, mehr Aufmerksamkeit zu
            gewinnen. Dadurch konnte <b>Ippen.Media Sales</b> eine vollständige Inhouse-Produktion mit
            jungen, talentierten Kreativen aufbauen, die 2024 verstärkt Video-Content produzieren.
          </p>
        </Container>
        <Spacing top={50} />

        <ImageCarousel id="stepstone-carousel" arrowPosition={ArrowPosition.Inside}
          imgs={[{src: "/CorporateDesign/Ippen/stepstone ippen/Stepstone_IPPEN_brands.png", alt: ""}, 
          {src: "/CorporateDesign/Ippen/stepstone ippen/Stepstone_IPPEN_Portale.png", alt: ""},
          {src: "/CorporateDesign/Ippen/stepstone ippen/Stepstone_IPPEN_WerWirSind.png", alt: ""},
          {src: "/CorporateDesign/Ippen/stepstone ippen/Stepstone_IPPEN_YoungAudience_Game.jpg", alt: ""},
          {src: "/CorporateDesign/Ippen/stepstone ippen/Stepstone_IPPEN_YoungAudience_Kochen.jpg", alt: ""},
          {src: "/CorporateDesign/Ippen/stepstone ippen/Stepstone_IPPEN_YoungAudience_Lifestyle.jpg", alt: ""},
          ]} />

        <Spacing top={50} />
        <Container className="mw-600px tx-2col-g15">
          <p>
            Im Laufe des Jahres 2023 benötigte das&nbsp;Sales-Team eine frische und einzigartige Vorlage für
            ihre Präsentationen, um Kunden zu überzeugen.
          </p>
          <p>
            Um einen bleibenden Eindruck zu hinterlassen, entschieden wir uns für <b>auffällige Neonfarben
            auf dunklem Hintergrund,</b> die besonders gut zur Geltung kommen. Während der Entwicklung
            individueller Kampagnen für verschiedene Kunden entwickelte sich das Design stetig weiter.
          </p>
          <p>
            Ich schätzte die Unterstützung meines Kollegen sehr, der geholfen hat, das Design weiter zu
            verfeinern und auf das nächste Level zu heben. Hier sind einige Beispiele aus unterschiedlichen
            Kundenprojekten.
          </p>
        </Container>

        <Spacing top={50} />
        <Container className="mw-800px">
          <ImageCarousel id="presentationen-carousel" imgs={[{src: "/CorporateDesign/Ippen/presentationen ippen/01-cover.jpg", alt: ""},
            {src: "/CorporateDesign/Ippen/presentationen ippen/10.jpg", alt: ""},  
            {src: "/CorporateDesign/Ippen/presentationen ippen/12.jpg", alt: ""},  
            {src: "/CorporateDesign/Ippen/presentationen ippen/17.jpg", alt: ""},  
            {src: "/CorporateDesign/Ippen/presentationen ippen/rossmann05.jpg", alt: ""},  
            {src: "/CorporateDesign/Ippen/presentationen ippen/rossmann09.jpg", alt: ""},  
            {src: "/CorporateDesign/Ippen/presentationen ippen/rossmann13.jpg", alt: ""},  
            {src: "/CorporateDesign/Ippen/presentationen ippen/rossmann14.jpg", alt: ""},  
            {src: "/CorporateDesign/Ippen/presentationen ippen/rossmann15.jpg", alt: ""},  
            ]} />
        </Container>

        <Spacing top={50} />

        <Container className="mw-600px">
          <Image fluid className='mx-autoblock-600px' src="/CorporateDesign/Ippen/icons-B.png" />
          <Spacing top={50} />

          <Row>
            <p className="tx-2col-g15">
              Ich habe das Design der Verkaufswebsite betreut, um die Produkte effektiv zu präsentieren
              und eine breitere Zielgruppe potenzieller Partner und Kunden anzusprechen.
            </p>

          </Row>
          <Row style={{overflowY: 'scroll', scrollbarWidth:'thin', height:'400px'}}>
            <Image className='mx-autoblock' src="/CorporateDesign/Ippen/sales-site.png" style={{ width:'100%', height:'auto'}} />
          </Row>
          <Spacing top={50} />
          <Row>
            <Button className="mx-auto" variant="primary"
              href="https://sales.ippen.media/" target="_blank" 
              style={{width: "200px"}}>
              Hier gehts zur Website
            </Button>
          </Row>
        </Container>
        <Spacing top={50} />

        <Container className="mw-600px">
          <p className="tx-2col-g15">
            Zusammen mit meinem engen Designkollegen haben wir ein visuelles Brand Book erstellt, das
            die Richtlinien für das Design festlegt. Es umfasst den richtigen Umgang mit dem Logo, die
            Farbauswahl, die Schriftarten und deren Anwendung in der externen Kommunikation.
          </p>
        </Container>
        <Spacing top={50}/>

        <Container className="mw-600px">
          <a href="/CorporateDesign/Ippen/visal brand book/IPPENMEDIA-VISUAL-BRAND-BOOK.pdf" target="blank">
            <ImageOverlay
              src="/CorporateDesign/Ippen/visal brand book/cover.jpg"
              hoverSubtitle="Visual Brand Book"
              hoverText="PDF"
              hoverTitle="IPPEN MEDIA"/>
          </a>
        </Container>

        <Spacing top={50}/>

    </div>
  );
}

export default Ippen;
