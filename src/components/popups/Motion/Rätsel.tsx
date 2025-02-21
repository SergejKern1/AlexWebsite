import React from 'react';
import { Row, Col, Container, Image } from "react-bootstrap";

import { Title, Subtitle, Spacing } from "util/class-utils.tsx";
import { lazyPlaceholder } from "util/lazy.ts";
import { loremIpsumText } from "util/loremIpsum.ts";

import ImageCarousel from 'components/ImageCarousel.tsx';

const Rätsel: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <div style={lazyPlaceholder(1443, 304)}>
        <Image className='w-100' fluid src="/Motion/Rätsel/buzzfeed-header.png" loading="lazy"/>
      </div>
      <Spacing top={50} />

      <Container className="mw-600px">
        <Title> Rätselreihe </Title>
        <Subtitle> Buzzfeed de </Subtitle>
        <Spacing top={50} />

        <div className="fl-j-center-al-i-center mx-auto mw-600px">
          <p className="mx-autoblock tx-2col-g75">
            {loremIpsumText}  
          </p>
        </div>
        <div className='mx-auto' style={{maxWidth:'300px'}}>
          <Image fluid src="/Motion/Rätsel/Rätsel-1.png"/>
        </div>
        <ImageCarousel id="raetsel-carousel"
          imgs={[
            {src:"/Motion/Rätsel/Thumbnail-Rätsel-Folge04.jpg"},
            {src:"/Motion/Rätsel/Thumbnail-Rätsel-Folge20.jpg"},
            {src:"/Motion/Rätsel/Thumbnail-Rätsel-Folge24.jpg"},
            {src:"/Motion/Rätsel/Thumbnail-Rätsel-Folge29.jpg"},
          ]}
        />
        <Row>
          <Col xs={4}>{loremIpsumText}</Col>
          <Col xs={8}><Image fluid  src="/Motion/Rätsel/rätsel-website.png"/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Rätsel;
