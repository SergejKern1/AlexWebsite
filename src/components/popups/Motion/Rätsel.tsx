import React from 'react';
import { Row, Col, Container, Image } from "react-bootstrap";

import { Title, Subtitle, Spacing } from "util/class-utils.tsx";
import { lazyPlaceholder } from "util/lazy.ts";

import ImageCarousel from 'components/ImageCarousel.tsx';

const Rätsel: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <div style={lazyPlaceholder(1443, 304)}>
        <Image className='w-100' fluid src="/Motion/Rätsel/buzzfeed-header.png" loading="lazy"/>
      </div>
      <Spacing top={50} />

      <Container className="mw-800px">
        <Title> Rätselreihe </Title>
        <Subtitle> Buzzfeed de </Subtitle>
      </Container>
      <Container className="mw-600px">

        <Spacing top={50} />

        <div className="fl-j-center-al-i-center mx-auto mw-600px">
          <p className="mx-autoblock tx-2col-g15">
            Ein bunter Strauß an 50 verschiedenen Mathe- Logik- und Bilderrätsel sind in der
            Zusammenarbeit mit Buzzfeed Deutschland entstanden. Besonders die Farben und Icon-
            Sprache der Marke wollte ich in dieser Videoreihe hervorheben.
          </p>
        </div>
        <Spacing top={20} />
        {/* TODO: Video slider */}
        <ImageCarousel id="raetsel-carousel" previewCount={0} imgs={[
          {src: "/Motion/Rätsel-9-16-Folge42.mp4", isVideo: true},
          {src: "/Motion/Raetsel-Video-Sound-9-16-Folge17.mp4", isVideo: true},
          {src: "/Motion/Raetsel-Video-Sound-9-16-Folge20.mp4", isVideo: true},
        ]}/>
        
        <Spacing top={20} />

        <ImageCarousel id="raetsel-carousel"
          imgs={[
            {src:"/Motion/Rätsel/Thumbnail-Rätsel-Folge04.jpg"},
            {src:"/Motion/Rätsel/Thumbnail-Rätsel-Folge20.jpg"},
            {src:"/Motion/Rätsel/Thumbnail-Rätsel-Folge24.jpg"},
            {src:"/Motion/Rätsel/Thumbnail-Rätsel-Folge29.jpg"},
          ]}
        />
        <Spacing top={50} />
      </Container>
      <Container className="mw-600px">
        <div className="fl-j-center-al-i-center mx-auto mw-600px">
          <p className="mx-autoblock">
          So wurde das Video auf der Artikel Seite von Buzzfeed Deutschland eingebunden und verlinkt
          auf die Sozialen Kanäle.
          </p>
        </div>
        <Image fluid  src="/Motion/Rätsel/rätsel-website.png"/>
      </Container>
      <Spacing top={50} />

    </div>
  );
}

export default Rätsel;
