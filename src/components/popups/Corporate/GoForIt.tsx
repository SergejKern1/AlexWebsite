import {Container, Row, Col, Button, Image} from "react-bootstrap";

import ImageCarousel, {ImageData} from "components/ImageCarousel.tsx";
import { Title, Subtitle, Spacing } from "util/class-utils.tsx";

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
        <Container className="mw-800px">
            <Image fluid className='mx-autoblock' src="/CorporateDesign/GoForIt/GoCatch_icons.png" />

            <div className="mx-autoblock-800px">
                <Title>Go for it - walk and win</Title>
                <Subtitle>Go for it</Subtitle>
            </div>
        </Container>
        
        <Container className="mw-600px">
            <div className="tx-2col-g15">
                <p> 
                    Go for It walk&win war als eine Mobile Applikation angedacht, in der User in Echtzeit auf der Weltkarte plazierte Coupons sammeln und auf einem online Marktplatz verkaufen können. 
                    Durch das Sammeln von allen Teilfragmenten erhält der User die Möglichkeit in einem teilnehmenden Store seine Gutscheine in eine Ware umzutauschen.
                    <br /> <br />
                    Ich habe dem kleinen Startup bei der Visualisierung ihrer App und dazugehörigen Grafiken geholfen. Durch Analyse des bestehenden User Interface habe ich dann eine intuitive User Experience entwickelt um User leicht und schnell durch die App leiten zu können.
                    <br /> <br />
                    Das Projekt wurde leider wegen finanzieller Probleme abgebrochen.
                </p>
            </div>
            <Spacing top={50}/>
            <div className="mt-5">
                <ImageCarousel id="GoForIt-carousel" imgs={images} />
            </div>
            <Image fluid className='mx-autoblock mt-5' src="/CorporateDesign/GoForIt/go-app-icons.png" />
        </Container>

        {/* <img className="w-100" src="/CorporateDesign/GoForIt/goforit-photo.png" /> */}
        {/* <img className="w-100" src="/CorporateDesign/GoForIt/iconlanguage-goforit.png" /> */}
        <Container className="mw-800px">
            <ImageCarousel id="GoForIt-carousel-2" previewCount={0} height={450} imgs={[
                    {src:"/CorporateDesign/GoForIt/Centralized Workaround_Graphic.png"},
                    {src:"/CorporateDesign/GoForIt/GoForIt_techStack_Graphic.png"},
                    {src:"/CorporateDesign/GoForIt/TechStack_Graphic_1901.png"},
                ]} 
            />
        </Container>
        <Container className="mw-800px">
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
