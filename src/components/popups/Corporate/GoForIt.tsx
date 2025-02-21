import {Container, Row, Col, Button, Image} from "react-bootstrap";

import ImageCarousel, {ImageData} from "components/ImageCarousel.tsx";
import { Title, Subtitle } from "util/class-utils.tsx";
import { loremIpsumText } from "util/loremIpsum.ts";

const GoForIt: React.FC = () => {
    const images : ImageData[] = [
        {src: "/CorporateDesign/GoForIt/goforit-mobile01.png", alt: ""}, 
        {src: "/CorporateDesign/GoForIt/goforit-mobile02.png", alt: ""}, 
        {src: "/CorporateDesign/GoForIt/goforit-mobile03.png", alt: ""}, 
        {src: "/CorporateDesign/GoForIt/goforit-mobile04.png", alt: ""}, 
    ]
  return (
    <div className="overflow-hidden">
        <Image className="w-100 overflow-hidden" fluid src="/CorporateDesign/GoForIt/goforit_banner.png" />
        <Container>
            <Image fluid className='mx-autoblock' src="/CorporateDesign/GoForIt/GoCatch_icons.png" />

            <div className="mx-autoblock-800px">
                <Title>Go for it - walk and win</Title>
                <Subtitle>Go for it</Subtitle>
                <p> {loremIpsumText} </p>
            </div>
            <div className="mt-5">
                <ImageCarousel id="GoForIt-carousel" imgs={images} />
            </div>
            <Image fluid className='mx-autoblock mt-5' src="/CorporateDesign/GoForIt/go-app-icons.png" />

        </Container>
        <Container>
            <Row className="mx-auto-al-i-center">
                <Col xs={12} md={6} lg={8}>
                    <div className="m-4"> Go for It walk&win war als eine Mobile Applikation angedacht, in der User in Echtzeit auf der Weltkarte plazierte Coupons sammeln und auf einem online Marktplatz verkaufen können. 
                        Durch das Sammeln von allen Teilfragmenten erhält der User die Möglichkeit in einem teilnehmenden Store seine Gutscheine in eine Ware umzutauschen.
                        <br /> <br />
                        Ich habe dem kleinen Startup bei der Visualisierung ihrer App und dazugehörigen Grafiken geholfen. Durch Analyse des bestehenden User Interface habe ich dann eine intuitive User Experience entwickelt um User leicht und schnell durch die App leiten zu können.
                        <br /> <br />
                        Das Projekt wurde leider wegen finanzieller Probleme abgebrochen.</div>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Image fluid className='p-2' src="/CorporateDesign/GoForIt/TechStack_Graphic_1901.png"  />
                </Col>
            </Row>
        </Container>
        {/* <img className="w-100" src="/CorporateDesign/GoForIt/goforit-photo.png" /> */}
        {/* <img className="w-100" src="/CorporateDesign/GoForIt/iconlanguage-goforit.png" /> */}
        <Container>
            <Row>
                <Col xs={6}>
                    <Image fluid src="/CorporateDesign/GoForIt/Centralized Workaround_Graphic.png"  />
                </Col>
                <Col xs={6}>
                    <Image fluid src="/CorporateDesign/GoForIt/GoForIt_techStack_Graphic.png"  />
                </Col>
            </Row>
        </Container>
        <Container>
            <Row>
                <Col>
                    <Image fluid className='d-block p-5' src="/CorporateDesign/GoForIt/avatar_designs.png"  />
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default GoForIt;
