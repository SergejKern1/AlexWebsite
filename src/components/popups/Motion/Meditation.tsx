import React from 'react';
import { Row, Col, Container, Image } from "react-bootstrap";

import { Title, Subtitle, Spacing } from "util/class-utils.tsx";
import { lazyPlaceholder } from "util/lazy.ts";

import ImageCarousel from 'components/ImageCarousel.tsx';
import { loremIpsumText } from 'util/loremIpsum';

const Meditation: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <div style={lazyPlaceholder(1449, 289)}>
        <Image className='w-100' fluid src="/Motion/Meditation/meditation-header.jpg" loading="lazy"/>
      </div>
      <Spacing top={50} />

      <Container className="mw-800px">
        <Title> Breathing Meditation </Title>
        <Subtitle> Eigenes Projekt </Subtitle>
      </Container>
      <Container className="mw-600px">

        <Spacing top={50} />

        <div className="fl-j-center-al-i-center mx-auto mw-600px">
          <p className="mx-autoblock tx-2col-g15">
            {loremIpsumText}
          </p>
        </div>
        <Spacing top={20} />

        <ImageCarousel id="meditation-carousel" previewCount={0} imgs={[
          {src: "/Motion/Meditation/meditation-storyboard-01.jpg"},
          {src: "/Motion/Meditation/meditation-storyboard-02.jpg"},
          {src: "/Motion/Meditation/meditation-storyboard-03.jpg"},
          {src: "/Motion/Meditation/meditation-storyboard-04.jpg"},
          {src: "/Motion/Meditation/meditation-storyboard-05.jpg"},
          {src: "/Motion/Meditation/meditation-storyboard-06.jpg"},
        ]}/>
        
        <Spacing top={50} />
      </Container>

      <Container className="mw-600px">
        <Row>
          <Col>{loremIpsumText}</Col>
          <Col><Image fluid src="/Motion/Meditation/meditation-rig.png"/></Col>
        </Row>
      </Container>
      <Spacing top={50} />

    </div>
  );
}

export default Meditation;
