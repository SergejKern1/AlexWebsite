import {Container, 
  // Row, Col, Form, Button, 
  Image
} from "react-bootstrap";
import {Title, Subtitle, SectionTitle, Spacing} from "util/class-utils.tsx";
import { lazyPlaceholder } from "util/lazy.ts";
import ImageCarousel from "components/ImageCarousel";

const IntoTheCold: React.FC = () => {
  return (
    <div className="overflow-hidden">
        <div style={lazyPlaceholder(1500, 337)}>
            <Image fluid src="/GameArt/IntoTheCold/header-intothecold.jpg" style={{width: '100%'}} loading="lazy"/>
        </div>
        <Spacing top={50}/>
        <Container className="mw-800px">
          <Title>Into The Cold</Title>
          <Subtitle>Mooneye Studios</Subtitle>
        </Container>
        <Spacing top={50}/>

        <Container className="mw-600px">
          <p className="tx-2col-g15">
            Für ein halbes Jahr schloss ich mich dem Team von Mooneneye studios an, 
            die gerade ihren ersten Titel 'Lost ember' herausgebracht hatten und bereits an ihrem zweiten Titel begonnen hatten zu arbeiten.
            <br/><br/>
            Dieser sollte ebenfalls ein narratives adventure werden mit dem vorläufigen Arbeitstitel Intoleranz the cold`. Der Spieler begleitet den jungen Sam und seinem Hund Ellie bei seiner Reise im Norden Kanadas des 19. Jahrhundert. Nachdem ihr Schiff in einen Sturm geraten ist, stranden die beiden in der eisigen Wildnis. Nun müssen sie der Kälte trotzen, Nahrung und Unterschlupf finden und sich durch die unbarmherzige Natur kämpfen, um die nächste menschliche Siedlung zu erreichen und in Sicherheit zu gelangen.
          </p>
        </Container>
        <Spacing top={50}/>
        <Container className="mw-800px">
          <ImageCarousel id="into-the-cold-carousel1" previewCount={0} imgs={[
              {src:"/GameArt/IntoTheCold/SamExpressions.jpg"},
              {src:"/GameArt/IntoTheCold/samcolorvriation.jpg"},
              {src:"/GameArt/IntoTheCold/SamUmiak.jpg"},
              {src:"/GameArt/IntoTheCold/IntoTheCold_1.png"},
              {src:"/GameArt/IntoTheCold/IntoTheCold_2.png"},
              {src:"/GameArt/IntoTheCold/IntoTheCold_3.png"},
            ]}
          />

        </Container>
        <Spacing top={50}/>
        <Container className="mw-600px">
          <p className="tx-2col-g15">
            Ich liebe es, Charaktere zu entwerfen, und zum ersten Mal durfte ich auch die Konzepte für die Umgebung gestalten. Die Herausforderung bestand darin, Vielfalt in die endlose weiße Landschaft aus Schnee und Eis zu bringen. Dabei war es wichtig, einzigartige Formationen zu erschaffen, die dem Spieler Orientierung bieten und im Gedächtnis bleiben.
          </p>
        </Container>
        <Spacing top={50} />
        {/* TODO: Video slider */}
        <Container className="mw-800px">
          <ImageCarousel id="into-the-cold-video-carousel" previewCount={0} imgs={[
                {src:"/GameArt/IntoTheCold/Ellie-msculpt01.mov", isVideo: true},
                {src:"/GameArt/IntoTheCold/Sam-sculpt.mov", isVideo: true},
              ]}
            />
        </Container>
        <Spacing top={50} />

        <Container className="mw-600px">
          <p className="tx-2col-g15">
            Da ich mich auf Charaktere spezialisiert habe, stellten die Landschaftskonzepte für mich eine Herausforderung dar. Zunächst war es schwierig mit der eingeschränkten Farbpalette von Eis und Schnee zu arbeiten, aber mit etwas Recherche fand ich heraus, wie vielseitig die Farben in der Arktis doch sein können. Wenn die Sonne über dem Eismeer untergeht, wird sie in rosa-rotes Licht getaucht oder wenn Sonnenstrahlen durch gefrorene Eiswände scheinen, fangen sie an zu glitzern in allen erdenklichen Farben. Auch Formen können sehr vielseitig sein und zur Orientierung in der Eiswüste helfen.
          </p>
        </Container>
        
        <Container className="mw-800px">
          <ImageCarousel id="into-the-cold-carousel2" previewCount={0} imgs={[
                {src:"/GameArt/IntoTheCold/Icestructure.jpg"},
                {src:"/GameArt/IntoTheCold/iceandclouds.jpg"},
                {src:"/GameArt/IntoTheCold/IceBahn.jpg"},
                {src:"/GameArt/IntoTheCold/Sledgepiste.jpg"},
                {src:"/GameArt/IntoTheCold/WaterfallCanyon.jpg"},
                {src:"/GameArt/IntoTheCold/WhalesUnderneath.jpg"},
                {src:"/GameArt/IntoTheCold/BlueGlacier.jpg"},
              ]}
            />
          <Spacing top={50} />
        </Container>

        <Container className="mw-600px">
          <p className="tx-2col-g15">
            Die wichtigsten Gegenstände auf der Reise waren eine gute Tasche und ein Floß, um die eiskalten Gewässer zu überqueren. Weitere Requisiten waren alte Truhen, Flachmänner und Laternen, die zur Atmosphäre und zum Überleben beitrugen.
          </p>
        </Container>

        <Container className="mw-800px">
          <ImageCarousel id="into-the-cold-carousel3" previewCount={0} imgs={[
              {src:"/GameArt/IntoTheCold/boxes.jpg"},
              {src:"/GameArt/IntoTheCold/DittyBag.jpg"},
              {src:"/GameArt/IntoTheCold/flasks.jpg"},
              {src:"/GameArt/IntoTheCold/Kanus.jpg"},
            ]}
          />
        </Container>
        <Spacing top={50}/>

    </div>
  );
}
export default IntoTheCold;