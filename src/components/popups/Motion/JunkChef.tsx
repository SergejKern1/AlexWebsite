import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";

import { Title, Subtitle, Spacing } from "util/class-utils.tsx";
import { lazyPlaceholder } from "util/lazy.ts";

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
          <p className="mx-autoblock tx-2col-g15" style={{padding:'15px'}}>
            Wenn Spitzenköche auch mal ‘Bock’ auf Wiener Schnitzel und Bratwurst haben, gibt es trotzdem den ein oder anderen Trick bei der Zubereitung, um das Gericht aussehen zu lassen wie in einem 5-Sterne-Restaurant. Für dieses Format wurden Köche in die Einfach-Tasty-Küche eingeladen, um ihre Fähigkeiten anhand von ganz normalen Gerichten zu zeigen. Da es sich um ein Langformat handelt, sollte dafür natürlich auch wieder ein Intro am Anfang laufen. 
            Vorbereitet habe ich die Animationen in Blender, um sie später in After Effects zusammenzufügen.
          </p>
        </div>
      </Container>

      <Container className="mw-600px">
        {/* <div className='mx-auto'>
          <Image fluid src='/Motion/JunkChef/sketch01.png' />
        </div> */}
        <ImageCarousel id="night-kitchen-carousel" previewCount={1} imgs={[
          {src: "/Motion/JunkChef/JLAC-blender1.png"},
          {src: "/Motion/JunkChef/JLAC-blender2.png"},
          {src: "/Motion/JunkChef/JLAC-blender3.png"},
        ]} />
        <Spacing top={25} />

        <video className='img-fluid' autoPlay loop={true} muted={true}>
            <source src="/Motion/JunkLikeAChef-Intro.mp4" type="video/webm" /> Your browser does not support the video tag.
        </video>
        <Spacing top={50} />

      </Container>

    </div>
  );
}

export default JunkChef;
