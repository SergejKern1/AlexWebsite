import {Container, Row, Col, Image} from "react-bootstrap";
import ImageRow from "components/ImageRow";

import {Title, Subtitle, Spacing} from "util/class-utils.tsx";
// import { loremIpsumText } from "util/loremIpsum";
import { lazyPlaceholder } from "util/lazy.ts";

const Pitrush: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <div style={lazyPlaceholder(1600, 650)}>
        <Image fluid src="/GameArt/Pitrush/Pitrush_header.jpg" style={{width: '100%'}} loading="lazy"/>
      </div>
      <Container className="mw-800px">
        <Title>Pitrush</Title>
        <Subtitle>The Tribe (HAW)</Subtitle>
      </Container>

      <Container className="mw-800px">
        <div style={{padding:'2px'}}>
          <Image fluid src="/GameArt/Pitrush/pitrush-logo.png" loading="lazy"/>
        </div>
      </Container>
      <Container className="mw-600px">
        <p className="tx-2col-g75">
          In 2020 I joined a Game Development Team at the <b>HAW Hamburg</b>. 
          The Game was going to be an <b className="col-primary">cooperative couch-coop arena fighter </b>
          heavily inspired by cyber punk and chinese art and architecture. 
          As the art director I helped the team to develop an overall style 
          for the game and initiated some ideas for the gameplay as well.
        </p>
      </Container>
      <Container className="mw-800px">
        <iframe 
          width="800" height="450" src="https://www.youtube.com/embed/sEW-jFQ3fCo" 
          title="Pit Rush Gameplay Co-Op update (0.0.4.0)" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </Container>
      <ImageRow rowItems={[
          {src: "/GameArt/Pitrush/0sCqdz.gif"},
          {src: "/GameArt/Pitrush/D6AIL3.gif"},
          {src: "/GameArt/Pitrush/gEA0So.gif"},
          {src: "/GameArt/Pitrush/LdtOlQ.gif"},
        ]}
      />
      <Container className="mw-600px">
        <p className="tx-2col-g75">
          Because of the top down perspective and the fast and effect overloaded gameplay, 
          it was important for the character to be <b>visible all the time</b>. 
          I gave him a big Head with colorful hair and a massive sword to achieve this goal. 
          A friend of mine modelled and rigged the Character and I did the animations in blender.
        </p>
      </Container>
      <Container className="mw-600px">
        <ImageRow rowItems={[
          {src: "/GameArt/Pitrush/female_character.png"},
          {src: "/GameArt/Pitrush/male_hero.png"},
        ]}/>
      </Container>

      <Spacing top={50}/>
      <ImageRow rowItems={[
        {src: "/GameArt/Pitrush/alexandra-schilhart-screenshot-166.jpg"},
        {src: "/GameArt/Pitrush/alexandra-schilhart-screenshot-168.jpg"},
      ]}/>

      <Spacing top={20}/>

      <Container className="mw-600px">
        <video className='img-fluid' autoPlay loop={true} muted={true}>
          <source src={"/GameArt/Pitrush/JiangShiReel.m4v" } type="video/webm" /> Your browser does not support the video tag.
        </video>
      </Container>

      <Container className="mw-600px">
        <p className="tx-2col-g75">
          The first enemy design was inspired by chinese Jiangshi 
          (Zombies) with their iconic spell on their forehead. 
          To fit the game I transformed him into a rolling robot with laser arms, 
          which attack the player in a swift motion.
        </p>
      </Container>

      <Image fluid src="/GameArt/Pitrush/Arena_tiles-1536x624.png" loading="lazy"/>
    
      <Container className="mw-600px">
        <p className="tx-2col-g75">
          The team came up with the idea of a transforming and <b>floating arena</b>
          in which the player is constantly on the move and has to jump over 
          obstacles and fight enemies to win the price money at the end.
        </p>
      </Container>

      <Image fluid src="/GameArt/Pitrush/alexandra-schilhart-buildings-200104-1536x738.jpg" loading="lazy"/>

      <Container className="mw-600px">
        <p className="tx-2col-g75">
          First idea for the character selection screen.
        </p>
      </Container>
    </div>
  );
}
export default Pitrush;