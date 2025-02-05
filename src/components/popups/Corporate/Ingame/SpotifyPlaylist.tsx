import { Container, Row, Col, Button, Image } from "react-bootstrap";

import { lazyPlaceholder } from "util/lazy.ts";
import { SectionTitle, Spacing } from "util/class-utils.tsx";

const SpotifyPlaylist: React.FC = () => {
  return (
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

      {/* <div className="fl-j-center-al-i-center mx-auto">
        <Button variant="primary"> Zur Website </Button>
      </div> */}
      <Spacing top={50} />

    </Container>
  );
}

export default SpotifyPlaylist;
