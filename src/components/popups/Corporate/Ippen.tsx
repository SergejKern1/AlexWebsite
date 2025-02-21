import {Container, Row, Col, Button, Image} from "react-bootstrap";
import {Title, Subtitle, Spacing, SectionTitle} from "util/class-utils.tsx";

import ImageCarousel from "components/ImageCarousel.tsx";

const Ippen: React.FC = () => {
  return (
    <div className="pink overflow-hidden">
        <Image fluid className="w-100" src="/CorporateDesign/Ippen/ippen-header.jpg"/>

        <Container className="mw-800px">
          <Title id='ippen'>Corporate Design</Title>
          <Subtitle>Ippen Media</Subtitle>
        </Container>

        <Container className="mw-600px">
          <p className="col-primary">
            'We need more young people who want to work for us with the skills to create young and fresh video and social media content for the young generations.'
          </p>
          <p>
            That was the vision I was given by Ippen Media, news publishing house that united multiple german newspapers under one roof (merkur.de, frankfurter rundschau.de, tz.de deichstube...)
          </p>
          <p>
            From that on I started to develop a new Logo and broke out of the conventional with a mix of scribbled letters and bold type. Because they own multiple online news portals I copied the font multiple times and layered them behind like a stack of newspapers.
          </p>
        </Container>

        <Container className="mw-800px">
          <Image fluid className='d-block mx-auto mt-5' src="/CorporateDesign/Ippen/ippen-logo.png" />
          <SectionTitle>Linkedin Post Designs</SectionTitle>
          <Row>
            <Col xs={3}>
              <Image fluid src="/CorporateDesign/Ippen/IPPEN-LinkedIn-IIllustration.png" />
            </Col>
            <Col xs={3}>
              <Image fluid src="/CorporateDesign/Ippen/IPPEN-LinkedIn-Wir-sind-online-01.png" />
            </Col>
            <Col xs={3}>
              <Image fluid src="/CorporateDesign/Ippen/Ippen-M-gaming-zitat.png" />
            </Col>
            <Col xs={3}>
              <Image fluid src="/CorporateDesign/Ippen/Ippen-M-zitat.png" />
            </Col>
          </Row>
          <Image fluid className='mx-autoblock-800px' src="/CorporateDesign/Ippen/icons-A.png" />
        </Container>

        <Spacing top={20} />
        <Container className="mw-600px">
          <p>
          These Job advertisements for ingame, tasty and buzzfeed helped to gain more attention and Ippen.Media Sales was able to build a whole inhouse production with young and skilled people to create more Video content in 2024.
          </p>
        </Container>

        <ImageCarousel id="stepstone-carousel" imgs={[{src: "/CorporateDesign/Ippen/stepstone ippen/Stepstone_IPPEN_brands.png", alt: ""}, 
          {src: "/CorporateDesign/Ippen/stepstone ippen/Stepstone_IPPEN_Portale.png", alt: ""},
          {src: "/CorporateDesign/Ippen/stepstone ippen/Stepstone_IPPEN_WerWirSind.png", alt: ""},
          {src: "/CorporateDesign/Ippen/stepstone ippen/Stepstone_IPPEN_YoungAudience_Game.jpg", alt: ""},
          {src: "/CorporateDesign/Ippen/stepstone ippen/Stepstone_IPPEN_YoungAudience_Kochen.jpg", alt: ""},
          {src: "/CorporateDesign/Ippen/stepstone ippen/Stepstone_IPPEN_YoungAudience_Lifestyle.jpg", alt: ""},
          ]} />

        <Spacing top={20} />
        <Container className="mw-600px">
          <p>
            Over the course of 2023 the Sales Team needed a fresh and unique template for their <span className="col-primary">presentations </span> to reach customers.
          </p>
          <p>
            To make an everlasting impression we decided to go with neon colors that popped very well on a dark background. During the process of creating unique campaigns for each customer the design also developed further on the way.
          </p>
          <p>
            I really appreciated the help of my colleague to push and refine the design ever more. Here are some examples from different customers.
          </p>
        </Container>

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

        <Container className="mw-800px">
          <Image fluid className='mx-autoblock-800px' src="/CorporateDesign/Ippen/icons-B.png" />
          <Row className="fl-j-center-al-i-center">
            <Col xs={8}>
              <div className="mx-autoblock-800px pe-5">
                <p>
                  I supervised the design of the sales website to effectively showcase their products and attract a broader audience of potential partners and customers.
                </p>
                <Button variant="primary">Zur Website</Button>
              </div>
            </Col>
            <Col xs={4}>
              <Image fluid className='mx-autoblock mt-5' src="/CorporateDesign/Ippen/sales-site.png" />
            </Col>
          </Row>
        </Container>
        <Spacing top={50} />

        <Container className="mx-autoblock-800px">
          <p>
          Together with my close design colleague we created a visual brand book for the guidelines of the design. The right handling of the logo, to the colors, the fonts and their use in the outside communication.
          </p>
        </Container>
        
        <a href="/CorporateDesign/Ippen/visal brand book/IPPENMEDIA-VISUAL-BRAND-BOOK.pdf" target="blank">
          <Image fluid
            className='w-50 mx-autoblock mt-5'
            src="/CorporateDesign/Ippen/visal brand book/cover.jpg" />
        </a>
        <Spacing top={20} />

    </div>
  );
}

export default Ippen;
