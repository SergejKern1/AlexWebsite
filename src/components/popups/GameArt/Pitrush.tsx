import {Container, Row, Col, Image, Button} from "react-bootstrap";
import ImageRow from "components/ImageRow";

import {Title, Subtitle, Spacing} from "util/class-utils.tsx";
import { lazyPlaceholder } from "util/lazy.ts";
import ImageCarousel from "components/ImageCarousel";

const Pitrush: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <div style={lazyPlaceholder(1600, 650)}>
        <Image fluid src="/GameArt/Pitrush/Pitrush_header.jpg" style={{width: '100%'}} loading="lazy"/>
      </div>
      <Spacing top={50}/>
      <Container className="mw-800px">
        <Title>Pitrush</Title>
        <Subtitle>The Tribe (HAW)</Subtitle>
      </Container>
      <Spacing top={50}/>

      {/* <Container className="mw-800px">
        <div style={{padding:'2px'}}>
          <Image fluid src="/GameArt/Pitrush/pitrush-logo.png" loading="lazy"/>
        </div>
      </Container> */}
      <Container className="mw-600px">
        <p className="tx-2col-g15">
          Im Jahr 2020 schloss ich mich einem Game-Development-Team an der HAW Hamburg an. Unser Spiel sollte ein kooperativer Couch-Coop-Arena-Fighter werden, stark inspiriert von Cyberpunk sowie chinesischer Kunst und Architektur. Als Art Director half ich dem Team, einen einheitlichen Stil für das Spiel zu entwickeln, und brachte einige Ideen für das Gameplay ein.
        </p>
      </Container>
      <Spacing top={50}/>

      <Container className="mw-800px">
        <iframe 
          width="800" height="450" src="https://www.youtube.com/embed/sEW-jFQ3fCo" 
          title="Pit Rush Gameplay Co-Op update (0.0.4.0)" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </Container>
      <Spacing top={50}/>

      <ImageRow padding={2} rowItems={[
          {src: "/GameArt/Pitrush/0sCqdz.gif"},
          {src: "/GameArt/Pitrush/D6AIL3.gif"},
          {src: "/GameArt/Pitrush/gEA0So.gif"},
          {src: "/GameArt/Pitrush/LdtOlQ.gif"},
        ]}
      />
      <Spacing top={50}/>

      <Container className="mw-600px">
        <p className="tx-2col-g15">
          Aufgrund der Top-Down-Perspektive und des schnellen, effektgeladenen Gameplays war es wichtig, dass der Charakter jederzeit gut sichtbar bleibt. Daher gaben wir ihm einen großen Kopf mit farbenfrohem Haar und ein massives Schwert, um ihn hervorzuheben. Ein Freund von mir übernahm das Modellieren und Rigging des Charakters, während ich die Animationen in Blender erstellte.
        </p>
      </Container>
      <Spacing top={50}/>

      <Container className="mw-600px">
        <ImageRow rowItems={[
          {src: "/GameArt/Pitrush/female_character.png"},
          {src: "/GameArt/Pitrush/male_hero.png"},
        ]}/>

        <Spacing top={50}/>
        <ImageCarousel id="pitrush-carousel" height={600} previewCount={0} imgs={[
          {src: "/GameArt/Pitrush/alexandra-schilhart-screenshot-166.jpg"},
          {src: "/GameArt/Pitrush/alexandra-schilhart-screenshot-168.jpg"},
          {src: "/GameArt/Pitrush/JiangShiReel.m4v", isVideo: true},
        ]}/>
      </Container>
      <Spacing top={20}/>

      <Container className="mw-600px">
        <p className="tx-2col-g15">
          Das erste Gegner-Design war von den chinesischen Jiangshi (Zombies) mit ihren ikonischen Bannzetteln auf der Stirn inspiriert. Um es besser ins Cyberpunk-Setting des Spiel ein zu betten, verwandelte ich den Gegner in einen rollenden Roboter mit Laser-Armen, der die Spieler mit schnellen Attacken angreift.
        </p>
      </Container>
      <Image fluid src="/GameArt/Pitrush/Turtle_Concept-1536x324.png" loading="lazy"/>

      <Spacing top={50}/>

      <Image fluid src="/GameArt/Pitrush/Arena_tiles-1536x624.png" loading="lazy"/>
      <Spacing top={50}/>

      <Container className="mw-600px">
        <p className="tx-2col-g15">
          Die Idee von einer sich ständig verändernden und schwebenden Arena entwickelte sich über die Zeit immer weiter und nahm Form an. Plattformen, Hindernisse und Gegner bewegen sich und werden immer ausgetauscht, sodass der Spieler immer angeregt wird, in Bewegung zu bleiben. Wenn er alle Gegner besiegt und den Parkour gemeistert hat, wartet auf ihn am Ende eine Truhe mit Preisgeld auf ihn und die Aussicht, aus den Slums nach oben aufsteigen zu können.
        </p>
        <Image className="mx-autoblock" fluid src="/GameArt/Pitrush/Schrein-toori.png" loading="lazy" style={{width:'250px'}}/>
        {/* <Image fluid src="/GameArt/Pitrush/Lampe.png" loading="lazy"/> */}
      </Container>

      <Spacing top={50}/>

      <Image fluid src="/GameArt/Pitrush/alexandra-schilhart-buildings-200104-1536x738.jpg" loading="lazy"/>
      <Spacing top={50}/>

      <Container className="mw-600px">
        <p>
          Erster Entwurf für den Charakterauswahl-Bildschirm.
        </p>
      </Container>
      <Container className="mw-800px">
        <ImageCarousel id="pitrush-carousel" previewCount={0} imgs={[
          {src: "/GameArt/Pitrush/selection-screen-01.png"},
          {src: "/GameArt/Pitrush/selection-screen-02.png"},
        ]}/>
      </Container>
      <Spacing top={50}/>

      <Container className="mw-600px">
        <div className="position-relative">
          <Image fluid src="/GameArt/Pitrush/chinchin_malefemal_bak.png" loading="lazy"/>
          <a href="https://the-tribe.itch.io/pitrush" target="_blank">
            <Image fluid src="/GameArt/Pitrush/badge.svg" loading="lazy" 
              style={{position:'absolute', width:'200px', top:'0%', left:'50%', transform: "translateX(-50%)"}}/>
          </a>
          
        </div>

      </Container>
    </div>
  );
}
export default Pitrush;