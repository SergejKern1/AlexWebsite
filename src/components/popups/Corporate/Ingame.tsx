import { Container, Image } from "react-bootstrap";

import { lazyPlaceholder } from "util/lazy.ts";
import { Title, Subtitle, Spacing } from "util/class-utils.tsx";

import Stellenanzeigen from "./Ingame/Stellenanzeigen";
import Portrait from "./Ingame/Portrait";
import Cosmi from "./Ingame/Cosmi";
import Merch from "./Ingame/Merch";
import Podcast from "./Ingame/Podcast";
import NewsApp from "./Ingame/NewsApp";
import Adventskalender from "./Ingame/Adventskalender";
import SpotifyPlaylist from "./Ingame/SpotifyPlaylist";

const Ingame: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <div style={lazyPlaceholder(1400, 185)}>
        <Image fluid className="w-100" src="/CorporateDesign/Ingame/ingame-header.png" loading="lazy"/>
      </div>
      <Spacing top={50} />
      <Container className="mw-800px">
        <Title id="ingame"> Ingame </Title>
        <Subtitle> Gaming & <br/>Streaming News </Subtitle>
      </Container>
      <Container className="mw-600px p-0">
        <Spacing top={100} />
        <div className="fl-j-center-al-i-center mx-auto">
          <p className="mx-autoblock tx-2col-g15">
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
      <Stellenanzeigen />
      <Spacing top={25} />
      <Portrait />
      <Spacing top={25} />
      <Cosmi />
      <Spacing top={50} />
      <Merch />
      <Spacing top={50} />
      <Podcast />
      <NewsApp />
      <Spacing top={75} />
      <Adventskalender />
      <Spacing top={50} />
      <SpotifyPlaylist />
    </div>
  );
}

export default Ingame;
