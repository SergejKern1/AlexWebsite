import ImageCarousel from "../../ImageCarousel";
// import SlickCarousel from "../../SlickCarousel";
import {Container, Row, Col, Button, Image} from "react-bootstrap";
import {Title, Subtitle} from "../../../util/class-utils.tsx";

const Ippen: React.FC = () => {
  return (
    <div className="pink overflow-hidden">
        <Image fluid className="w-100" src="/CorporateDesign/Ippen/ippen-header.jpg"/>

        <Container>
          <Title>Corporate Design</Title>
          <Subtitle>Ippen Media</Subtitle>
        </Container>

        <div className="def-block-800">
          <p className="col-primary">
            'We need more young people who want to work for us with the skills to create young and fresh video and social media content for the young generations.'
          </p>
          <p>
            That was the vision I was given by Ippen Media, news publishing house that united multiple german newspapers under one roof (merkur.de, frankfurter rundschau.de, tz.de deichstube...)
          </p>
          <p>
            From that on I started to develop a new Logo and broke out of the conventional with a mix of scribbled letters and bold type. Because they own multiple online news portals I copied the font multiple times and layered them behind like a stack of newspapers.
          </p>
        </div>

        <Container>
          <Image fluid className='d-block mx-auto mt-5' src="/CorporateDesign/Ippen/ippen-logo.png" />
          Linkedin Post Designs
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
          <Image fluid className='def-block-800' src="/CorporateDesign/Ippen/icons-A.png" />
        </Container>

        <div className="def-block-800">
          <p>
          These Job advertisements for ingame, tasty and buzzfeed helped to gain more attention and Ippen.Media Sales was able to build a whole inhouse production with young and skilled people to create more Video content in 2024.
          </p>
        </div>

        <ImageCarousel id="stepstone-carousel" imgs={[{src: "/CorporateDesign/Ippen/stepstone ippen/Stepstone_IPPEN_brands.png", alt: ""}, 
          {src: "/CorporateDesign/Ippen/stepstone ippen/Stepstone_IPPEN_Portale.png", alt: ""},
          {src: "/CorporateDesign/Ippen/stepstone ippen/Stepstone_IPPEN_WerWirSind.png", alt: ""},
          {src: "/CorporateDesign/Ippen/stepstone ippen/Stepstone_IPPEN_YoungAudience_Game.jpg", alt: ""},
          {src: "/CorporateDesign/Ippen/stepstone ippen/Stepstone_IPPEN_YoungAudience_Kochen.jpg", alt: ""},
          {src: "/CorporateDesign/Ippen/stepstone ippen/Stepstone_IPPEN_YoungAudience_Lifestyle.jpg", alt: ""},
          ]} />

        <div className="def-block-800">
          <p>
            Over the course of 2023 the Sales Team needed a fresh and unique template for their <span className="col-primary">presentations </span> to reach customers.
          </p>
          <p>
            To make an everlasting impression we decided to go with neon colors that popped very well on a dark background. During the process of creating unique campaigns for each customer the design also developed further on the way.
          </p>
          <p>
            I really appreciated the help of my colleague to push and refine the design ever more. Here are some examples from different customers.
          </p>
        </div>

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

        <Container>
          <Image fluid className='def-block-800' src="/CorporateDesign/Ippen/icons-B.png" />

          <Row>
            <Col xs={6}>
              <div className="def-block-800">
                <p>
                  I supervised the design of the sales website to effectively showcase their products and attract a broader audience of potential partners and customers.
                </p>
                <Button variant="primary">Zur Website</Button>
              </div>
            </Col>
            <Col xs={6}>
              <Image fluid className='d-block-mx-auto mt-5' src="/CorporateDesign/Ippen/sales-site.png" />
            </Col>
          </Row>
          
        </Container>
        <div className="def-block-800">
          <p>
          Together with my close design colleague we created a visual brand book for the guidelines of the design. The right handling of the logo, to the colors, the fonts and their use in the outside communication.
          </p>
        </div>
        
        <a href="/CorporateDesign/Ippen/visal brand book/IPPENMEDIA-VISUAL-BRAND-BOOK.pdf" target="blank">
        <Image fluid
          className='w-50 d-block-mx-auto mt-5'
          src="/CorporateDesign/Ippen/visal brand book/cover.jpg" />
        </a>
    </div>
  );
}

export default Ippen;
