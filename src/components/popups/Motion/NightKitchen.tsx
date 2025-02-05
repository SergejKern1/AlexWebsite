import React from 'react';
import { Container, Image } from "react-bootstrap";

import { Title, Subtitle, Spacing } from "util/class-utils.tsx";
import { lazyPlaceholder } from "util/lazy.ts";

import ImageCarousel from 'components/ImageCarousel.tsx';

const NightKitchen: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <div style={lazyPlaceholder(1445, 387)}>
        <Image className='w-100' fluid src="/Motion/NightKitchen/nightkitschh-header.jpg" loading="lazy"/>
      </div>
      <Spacing top={50}/>

      <Container className="mw-600px">
        <Title> Night Kitschhhn </Title>
        <Subtitle> Einfach tasty </Subtitle>
        <Spacing top={100} />

        <div className="fl-j-center-al-i-center mx-auto mw-600px">
          <p className="mx-autoblock tx-2col-g15">
            Du kommst von einer geilen Party nach Hause und hast noch Bock auf einen Mitternachtssnack? Aber psst… gaaaaanz leise… damit du deine Mitbewohner nicht weckst! 
            So sah unter anderem ein Briefing für ein Tasty Format aus. Daraufhin entwarf ich erste Skizzen, Look and Feel sowie ein Storyboard für die spätere Animation.
            Nach weiterer Absprache geht es dann ans Animieren und Erstellen eines Thumbnails am Ende des Reise.
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

        <Image fluid src="/Motion/NightKitchen/nightkitschh-thumbnail.png" />
        <Spacing top={50} />
        <video className='img-fluid' controls autoPlay muted src="/Motion/NightKitchen/nightkitschh-makingof.mp4" />    
        <Spacing top={25} />

      </Container>

    </div>
  );
}

export default NightKitchen;
