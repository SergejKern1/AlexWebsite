import {Container, 
  // Row, Col, Form, Button, 
  Image
} from "react-bootstrap";
import ImageRow from "components/ImageRow";

import {Title, Subtitle, SectionTitle, Spacing} from "util/class-utils.tsx";
// import { loremIpsumText } from "util/loremIpsum";
import { lazyPlaceholder } from "util/lazy.ts";

const Okjo: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <div style={lazyPlaceholder(1500, 352)}>
        <Image fluid src="/GameArt/Okjo/header-childrenofokjo.png" style={{width: '100%'}} loading="lazy"/>
      </div>

      <Container className="mw-800px">
        <Title>Okjo</Title>
        <Subtitle>Mindsprout</Subtitle>
      </Container>

      <Container className="mw-600px">
        <p className="tx-2col-g75">
          You start on the surface world at a campfire. Your first tasks are to collect items like wood, 
          stones and mushrooms to be able to craft tools and move on to build your camp. 
          While exploring your surroundings you find dungeons which lead into the underground world of 
          temples with traps and various obstacles to overcome.
          <br/>
          <br/>
          Together with two friends I started the game development in 2020 and we worked on it for around 1 year. 
          It is currently paused it due to personal reasons. But it is still in the back of my mind.
          <br/>
          <br/>
          My part was art direction and concept art, the other artist did the charakter design and animation part, 
          my husband did the coding and game design.
        </p>
      </Container>
      <Container className="mw-600px">
        <ImageRow
          rowItems={[
            {src:"/GameArt/Okjo/bamboo.PNG"},
            {src:"/GameArt/Okjo/bandage_PLACEHOLDER.png"},
            {src:"/GameArt/Okjo/bed.png"},
            {src:"/GameArt/Okjo/leaf.PNG"},
          ]}
        />
      </Container>

      <SectionTitle> Flora of the surface world </SectionTitle>      
      <ImageRow padding={4} rowItems={[
          {src:"/GameArt/Okjo/colorExplorationOrange.jpg"},
          {src:"/GameArt/Okjo/flora-fauna-02.png"},
        ]}
      />
      <ImageRow padding={4} rowItems={[
          {src:"/GameArt/Okjo/effect-traps-01.png"},
        ]}
      />
      <Image fluid src="/GameArt/Okjo/effect-traps-01.png" loading="lazy"/>
      
      <ImageRow padding={4} rowItems={[
          {src:"/GameArt/Okjo/bienenstock-concept.png"},
          {src:"/GameArt/Okjo/bienstock-sculpt.png"},
          {src:"/GameArt/Okjo/bienstock-ingame.png"},
        ]}
      />

      <ImageRow padding={4} rowItems={[
          {src:"/GameArt/Okjo/bamboo-ingame.png"},
          {src:"/GameArt/Okjo/bamboo-model.png"},
          {src:"/GameArt/Okjo/bamboosprout-model.png"},
        ]}
      />
      <ImageRow padding={4} rowItems={[
          {src:"/GameArt/Okjo/berry-model.gif"},
          {src:"/GameArt/Okjo/berry-ingame.png"},
        ]}
      />
      <SectionTitle> Environment Dungeons and Temples </SectionTitle>      

      <Container className="mw-600px">
        <p className="tx-2col-g75">
          To reach the treasure the player has to overcome obstacles and solve puzzles. 
          Here are some maya inspired dungeon walls and some play testing.
        </p>
      </Container>
      
      <ImageRow padding={4} rowItems={[
          {src:"/GameArt/Okjo/Environent-01.jpg"},
          {src:"/GameArt/Okjo/Environent-02.jpg"},
        ]}
      />
      <ImageRow padding={4} rowItems={[
          {src:"/GameArt/Okjo/Environent-03.jpg"},
          {src:"/GameArt/Okjo/Environent-04.jpg"},
        ]}
      />

      <Image fluid src="/GameArt/Okjo/tempeldoors-1536x490.png" loading="lazy"/>
      <Spacing top={10}/>
      <Image fluid src="/GameArt/Okjo/templewalls-1536x490.png" loading="lazy"/>
      <div style={{padding: '4px'}}>
        <ImageRow padding={4} rowItems={[
            {src:"/GameArt/Okjo/gif-01.gif"},
            {src:"/GameArt/Okjo/gif-02.gif"},
          ]}
        />
      </div>
      <div style={{padding: '4px'}}>
        <ImageRow padding={4} rowItems={[
            {src:"/GameArt/Okjo/tempelKonzept01.png"},
            {src:"/GameArt/Okjo/tempelKonzept02.png"},
          ]}
        />
      </div>

      <SectionTitle> User Interface </SectionTitle>      
    
      <Container className="mw-600px">
        <p className="tx-2col-g75">
          For the crafting system we came up with a User interface that splits into anquick access radial menu and 
          overlays at the fireplace and objects, as well as a detailed drafting menu inside the later crafting stations.
        </p>
      </Container>

      <Container className="mw-800px">
        <video className='img-fluid' autoPlay loop={true} muted={true}>
          <source src={"/GameArt/Okjo/UI-slide-building.mp4" } type="video/webm" /> Your browser does not support the video tag.
        </video>
        <video className='img-fluid' autoPlay loop={true} muted={true}>
          <source src={"/GameArt/Okjo/UI-slider-radial-menu.mp4" } type="video/webm" /> Your browser does not support the video tag.
        </video>
        <video className='img-fluid' autoPlay loop={true} muted={true}>
          <source src={"/GameArt/Okjo/UI-slider-storage.mp4" } type="video/webm" /> Your browser does not support the video tag.
        </video>
      </Container>

      <SectionTitle> Prop Design </SectionTitle>  


      <Image fluid src="/GameArt/Okjo/chest-scaled.jpg" loading="lazy"/>
      <Image fluid src="/GameArt/Okjo/props_chart-1536x1152.png" loading="lazy"/>
      <SectionTitle> Enemy and Creature Designs </SectionTitle>  
      <Container className="mw-600px">
        <p className="tx-2col-g75">
          On the worldmap the player encounters many different species, some creatures can give meat or materials other want to make you their meal. 
        </p>
      </Container>

      <div style={{margin: '4px'}}>
        <ImageRow padding={4} rowItems={[
            {src:"/GameArt/Okjo/tadpole01.jpg"},
            {src:"/GameArt/Okjo/tadpole02.jpg"},
          ]}
        />
      </div>
      <div style={{margin: '4px'}}>
        <ImageRow padding={4} rowItems={[
            {src:"/GameArt/Okjo/tadpole03.jpg"},
            {src:"/GameArt/Okjo/tadpole04.jpg"},
          ]}
        />
      </div>
      <div style={{margin: '4px'}}>
        <ImageRow padding={4} rowItems={[
            {src:"/GameArt/Okjo/creature01.png"},
            {src:"/GameArt/Okjo/creature02.png"},
          ]}
        />
      </div>
      <div style={{margin: '4px'}}>
        <ImageRow padding={4} rowItems={[
            {src:"/GameArt/Okjo/wurm-1536x416.png"},
          ]}
        />
      </div>
      <div style={{margin: '4px'}}>
        <ImageRow padding={4} rowItems={[
            {src:"/GameArt/Okjo/enemie-slider-01.png"},
            {src:"/GameArt/Okjo/enemie-slider-02.png"},
          ]}
        />
      </div>
      <div style={{margin: '4px'}}>
        <ImageRow padding={4} rowItems={[
            {src:"/GameArt/Okjo/enemie-slider-04.png"},
            {src:"/GameArt/Okjo/enemie-slider-05.png"},
          ]}
        />
      </div>
      <div style={{margin: '4px'}}>
        <ImageRow padding={4} rowItems={[
            {src:"/GameArt/Okjo/eggs.png"},
          ]}
        />
      </div>
      <Container className="mw-600px">
        <p className="tx-2col-g75">
          One idea we had during the development process was that the player was supposed to find people 
          in the wild to join the community  and get into relationships with each other to expand the tribe. 
          So you had to carry eggs and later on a child on your back and protect it from enemies till it is grown up. 
          (like yoshi carries baby mario ^^)
        </p>
      </Container>

      <Image fluid src="/GameArt/Okjo/eggs-backpack.png" loading="lazy"/>
      <div style={{margin: '4px'}}>
        <ImageRow padding={4} rowItems={[
            {src:"/GameArt/Okjo/baby-model.png"},
            {src:"/GameArt/Okjo/creepybaby.png"},
          ]}
        />
      </div>
    </div>
  );
}
export default Okjo;