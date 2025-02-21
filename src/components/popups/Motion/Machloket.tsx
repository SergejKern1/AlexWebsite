import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";

import { Title, Subtitle, Spacing } from "util/class-utils.tsx";
import { lazyPlaceholder } from "util/lazy.ts";
import { loremIpsumText } from "util/loremIpsum.ts";

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
          <p className="mx-autoblock tx-2col-g75">
            {loremIpsumText}  
          </p>
        </div>
      </Container>

      <Container className="mw-600px">
        <Row>
          <Col xs={6}>
            <Image fluid src='/Motion/Machloket/JewsInterview-bg.jpg' />
          </Col>
          <Col xs={6}>
            <Image fluid src='/Motion/Machloket/all-illustrations.gif' />
          </Col>
        </Row>

        <ImageCarousel id="night-kitchen-carousel" previewCount={0} imgs={[
          {src: "/Motion/Machloket/Artikel-judenindeutschland-01.png"},
          {src: "/Motion/Machloket/Artikel-judenindeutschland-02.png"},
        ]} />

      </Container>

    </div>
  );
}

export default Machloket;
