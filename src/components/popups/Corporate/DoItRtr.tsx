import {Container, Row, Col, Button, Image} from "react-bootstrap";

import {Title, Subtitle, Spacing} from "util/class-utils.tsx";
import ImageCarousel from "components/ImageCarousel.tsx";

const DoItRtr: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Container className="mw-800px">
        <Image fluid className="w-100" src="/CorporateDesign/DoItRtr/RetroSound_header.png" />
        <Spacing top={50}/>
        <Title>Do the msc & sfx</Title>
        <Subtitle>Modotool</Subtitle>
        {/* <Row>
            <Col xs={6}>
              <Image fluid className="d-block mx-auto" src="/CorporateDesign/DoItRtr/msc-logo.png" loading="lazy" />
            </Col>
            <Col xs={6}>
              <Image fluid className="d-block mx-auto" src="/CorporateDesign/DoItRtr/sfx-logo.png" loading="lazy" />
            </Col>
        </Row> */}

        <Image fluid className="w-100 top-50" src="/CorporateDesign/DoItRtr/rogue-swordslasher.png" loading="lazy" />
      </Container>
      <Container className="mw-600px">

        <Spacing top={50}/>
        When two gaming nerds come together and have the idea for a unity plugin sth like this will manifest itself. My husband did the coding part and I provided him with icons for the tool itself and the overall design, logo design, marketing part and video editing.
      </Container>
      <Spacing top={50}/>

      <div style={{backgroundImage: "url(/CorporateDesign/DoItRtr/DoTheMusic_banner_slice.png)"}}>
        <div className="mx-auto" style={{maxWidth: "924px"}}>
          <iframe width="924" height="519" src="https://www.youtube.com/embed/in8aIZ_S7d4" title="Do It Retro - Music and SFX - Unity Asset" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
      
      <Container className="mw-600px">
        <Spacing top={50}>
          <p>
            Create Retro Sounds and Music fast, easy and intuitively.
            Ideal for Retro-games, Game-Jams, Game-Prototypes and Indie Developers.
            Inspired by Retro-engines like pico-8 and pixelbox.
          </p>
          <p>
            Do the SFX:
            You can just draw the pitch of the sound with one of the given wave-shapes or create your own custom shape with AnimationCurves.
            Polish your sounds with some cool pitch and volume modulator-effects.
          </p>
        </Spacing>
      </Container>

      <Container className="mw-800px">
        <ImageCarousel id="do-the-sfx-carousel" imgs={[
            {src:"/CorporateDesign/DoItRtr/DoTheSFXMusic_twitter_gamejam_01.webp", alt:""},
            {src:"/CorporateDesign/DoItRtr/DoTheSFXMusic_twitter_gamejam_02.webp", alt:""},
            {src:"/CorporateDesign/DoItRtr/DoTheSFXMusic_twitter_gamejam_03.webp", alt:""},
        ]}/>
      
        {/* <Image fluid className="top-50 d-block mx-auto" src="/CorporateDesign/DoItRtr/program-screenshot.png" loading="lazy" /> */}
      </Container>

      <Spacing top={100} />

      <Container className="mw-800px">
        <Image fluid className="w-100" src="/CorporateDesign/DoItRtr/DoTheArt_header.png" />
        <Spacing top={50}/>
        <Title>Do the Art</Title>
        <Subtitle>Modotool</Subtitle>
      </Container>
      <Spacing top={50} />
      <Container className="mw-600px">
        <p>
          Do The Art ist ein Unity 3D Engine plugin welches es möglich macht direkt in der Engine Pixel Grafiken und Animationen zu erstellen und direkt mit Code zu versehen.
        </p>
        <p>
          Der Trailer ist auch wieder in Zusammenarbeit mit dem Developer entstanden, Storyboarding und Gestaltung waren dabei mein Schwerpunkt. 
        </p>
      </Container>
      <Spacing top={50} />

      <div style={{backgroundImage: "url(/CorporateDesign/DoItRtr/DoTheart_background_banner.png)"}}>
        <div className="mx-auto" style={{maxWidth: "1000px"}}>
          <iframe width="1000" height="563" src="https://www.youtube.com/embed/ZBG2TApFlQw" title="Do It Retro - Art - Unity Asset" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
      
      <Container className="mw-800px">
        <Image fluid className="w-100 top-50" src="/CorporateDesign/DoItRtr/PixelItems-1536x169.png" loading="lazy" />
        <Spacing top={50} />

        <ImageCarousel id="do-the-art-carousel" imgs={[
            {src:"/CorporateDesign/DoItRtr/DoTheArt_instagram_screen_items.png", alt:""},
            {src:"/CorporateDesign/DoItRtr/DoTheArt_instagram_screen_palette.png", alt:""},
            {src:"/CorporateDesign/DoItRtr/DoTheArt_instagram_screen_tools.png", alt:""},
            {src:"/CorporateDesign/DoItRtr/DoTheArt_instagram_unity.png", alt:""},
        ]}/>
      </Container>

      <Spacing top={50} />

    </div>
  );
}

export default DoItRtr;
