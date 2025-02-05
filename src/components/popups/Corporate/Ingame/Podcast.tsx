import { Container, Image } from "react-bootstrap";

import { lazyPlaceholder } from "util/lazy.ts";
import { SectionTitle, Spacing } from "util/class-utils.tsx";

import ImageRow from "components/ImageRow.tsx";

const Podcast: React.FC = () => {
  return (
    <div>
      <Container className="mw-800px">
        <SectionTitle id="podcast"> Podcast </SectionTitle>

        <div className="fl-j-center-al-i-center mx-auto mw-600px" style={{...lazyPlaceholder({width:333, height:253}), maxWidth:'333px'}}>
          <Image fluid src="/CorporateDesign/Ingame/Hottakesservedcold-logo.png" style={{width:'333px'}} />
        </div>
      </Container>
      <Spacing top={50} />

      <div className="fl-j-center-al-i-center mx-auto">
        <iframe className="mx-autoblock" width="800" height="450" src="https://www.youtube.com/embed/wp_fTCjZtkc" title="Warum DIESE 4 Games zurückkommen MÜSSEN" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
      </div>
      <Spacing top={50} />

      <div className="fl-j-center-al-i-center mx-auto mw-600px">
        <p className="mx-autoblock tx-2col-g15">
          Hot takes served cold war eines der ersten Podcast Formate an dem ich mitgearbeitet habe. Ausgestrahlt wurded das Langformat auf YouTube und eine Kurzversion jeder Folge auf Tiktok.
        </p>
      </div>
      <Spacing top={50} />

      <Container className="mw-800px">
        <ImageRow padding={5} rowItems={[
          {src:"/CorporateDesign/Ingame/hottakesservedcold-spotify-thumbnail.jpg", width: 1024, height: 1024},
          {src:"/CorporateDesign/Ingame/hottakesservedcold-thumbnail-youtube.jpg", width: 1280, height: 720},
        ]}/>
      </Container>
      <Spacing top={50} />
    </div>
  );
}

export default Podcast;
