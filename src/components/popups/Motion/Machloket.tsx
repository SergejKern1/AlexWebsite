import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";

import { Title, Subtitle, Spacing } from "util/class-utils.tsx";
import { lazyPlaceholder } from "util/lazy.ts";

import ImageCarousel from 'components/ImageCarousel.tsx';

const Machloket: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Spacing top={50} />

      <Container className="mw-600px">
        <Title> Machloket </Title>
        <Subtitle> Voloprojekt </Subtitle>
        <Spacing top={50} />

        <div className="fl-j-center-al-i-center mx-auto mw-600px">
          <p className="mx-autoblock tx-2col-g15">
            Für ihre Abschlussarbeit zum Thema “Juden in Deutschland heute” erstellten Volontäre bei Ippen.Media eine Interview-Videoreihe. Ein Intro und Grafiken rundeten die Sache ab.
            Vor allem die Streitkultur die im Jüdischen Machloket genannt wird soll mit dem Austausch gefördert werden, denn um di eigenen Denkmuster zu hinterfragen braucht es diverse Meinungen und den Raum um darüber zu streiten. Das ist gerade in Zeiten von Social Media besonders wichtig und muss in Deutschland auch so bleiben.
          </p>
        </div>
      </Container>
      <Spacing top={20} />
      <Container className="mw-600px">
        <Row>
          <Col xs={6}>
            <Image fluid src='/Motion/Machloket/JewsInterview-bg.jpg' />
          </Col>
          <Col xs={6}>
            <Image fluid src='/Motion/Machloket/all-illustrations.gif' />
          </Col>
        </Row>
        <Spacing top={20} />

        <ImageCarousel id="night-kitchen-carousel" previewCount={0} height={1000} imgs={[
          {src: "/Motion/Machloket/Artikel-judenindeutschland-01.png"},
          {src: "/Motion/Machloket/Artikel-judenindeutschland-02.png"},
        ]} />
        <Spacing top={50}/>

      </Container>

    </div>
  );
}

export default Machloket;
