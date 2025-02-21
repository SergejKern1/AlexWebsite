import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";

import { Title, Subtitle, Spacing } from "util/class-utils.tsx";
import { lazyPlaceholder } from "util/lazy.ts";
import { loremIpsumText } from "util/loremIpsum.ts";

import ImageCarousel from 'components/ImageCarousel.tsx';

const JunkChef: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Spacing top={50} />
      <Container className="mw-600px">
        <Title> Junk like a chef </Title>
        <Subtitle> Einfach tasty </Subtitle>
        <Spacing top={50} />

        <div className="fl-j-center-al-i-center mx-auto mw-600px">
          <p className="mx-autoblock" style={{padding:'15px'}}>
            {loremIpsumText}  
          </p>
        </div>
      </Container>

      <Container className="mw-600px">
        <div className='mx-auto'>
          <Image fluid src='/Motion/JunkChef/sketch01.png' />
        </div>
        <ImageCarousel id="night-kitchen-carousel" previewCount={1} imgs={[
          {src: "/Motion/JunkChef/JLAC-blender1.png"},
          {src: "/Motion/JunkChef/JLAC-blender2.png"},
          {src: "/Motion/JunkChef/JLAC-blender3.png"},
        ]} />
        <Spacing top={25} />

        <video className='img-fluid' autoPlay loop={true} muted={true}>
            <source src="/Motion/JunkLikeAChef-Intro.mp4" type="video/webm" /> Your browser does not support the video tag.
        </video>

      </Container>

    </div>
  );
}

export default JunkChef;
