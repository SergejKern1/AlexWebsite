import React from 'react';
import { Container, Image } from "react-bootstrap";

import { Title, Subtitle, Spacing } from "util/class-utils.tsx";
import { lazyPlaceholder } from "util/lazy.ts";
import { loremIpsumText } from "util/loremIpsum.ts";

import ImageCarousel from 'components/ImageCarousel.tsx';

const NightKitchen: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <div style={lazyPlaceholder(1445, 387)}>
        <Image className='w-100' fluid src="/Motion/NightKitchen/nightkitschh-header.jpg" loading="lazy"/>
      </div>
      <Container className="mw-600px">
        <Title> Night Kitschhhn </Title>
        <Subtitle> Einfach tasty </Subtitle>
        <Spacing top={100} />

        <div className="fl-j-center-al-i-center mx-auto mw-600px">
          <p className="mx-autoblock tx-2col-g75">
            {loremIpsumText}  
          </p>
        </div>
      </Container>
      <Container className="mw-600px">
        <ImageCarousel id="night-kitchen-carousel" imgs={[
          {src: "Motion/NightKitchen/storyboard00.webp"},
          {src: "Motion/NightKitchen/storyboard01.png"},
          {src: "Motion/NightKitchen/storyboard02.png"},
          {src: "Motion/NightKitchen/storyboard03.png"},
          {src: "Motion/NightKitchen/storyboard04.png"},
        ]} />
        <Spacing top={25} />

        <Image fluid src="Motion/NightKitchen/nightkitschh-thumbnail.png" />
        <Spacing top={50} />
        <video className='img-fluid' controls src="/CorporateDesign/Ingame/cosmi/Cosmi-PortalGun-ingame.mp4" />    
        <Spacing top={25} />

      </Container>

    </div>
  );
}

export default NightKitchen;
