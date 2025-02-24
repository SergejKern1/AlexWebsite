import {Container, 
  // Row, Col, Form, Button, 
  Image
} from "react-bootstrap";
import ImageRow from "components/ImageRow";
import {Title, Subtitle, SectionTitle, Spacing} from "util/class-utils.tsx";
// import { loremIpsumText } from "util/loremIpsum";
import { lazyPlaceholder } from "util/lazy.ts";

const IntoTheCold: React.FC = () => {
  return (
    <div className="overflow-hidden">
        <div style={lazyPlaceholder(1500, 337)}>
            <Image fluid src="/GameArt/IntoTheCold/header-intothecold.jpg" style={{width: '100%'}} loading="lazy"/>
        </div>
        <Spacing top={50}/>
        <Container className="mw-800px">
          <Title>Into The Cold</Title>
          <Subtitle>Mooneye Studios</Subtitle>
        </Container>
        <Container className="mw-600px">
          <p className="tx-2col-g75">
            Concepts for a adventure narrative game in which you follow a boy named Sam and his dog Ellie in the north of canada in the 19th century. Stranded there after his ship got into a storm the two of them have to survive the cold and find the next human dwelling to reach safety.
          </p>
        </Container>
        <Spacing top={50}/>
        <Container className="mw-800px">
          <div style={{padding:'2px'}}>
            <Image fluid
              src="/GameArt/IntoTheCold/SamExpressions.jpg" loading="lazy"/>
          </div>

          <ImageRow padding={2} rowItems={[
              {src: "/GameArt/IntoTheCold/samcolorvriation.jpg"},
              {src: "/GameArt/IntoTheCold/SamUmiak.jpg"},
            ]}
          />
          <ImageRow padding={2} rowItems={[
              {src: "/GameArt/IntoTheCold/IntoTheCold_1.png"},
              {src: "/GameArt/IntoTheCold/IntoTheCold_2.png"},
              {src: "/GameArt/IntoTheCold/IntoTheCold_3.png"},
            ]}
          />
        </Container>
        <Container className="mw-600px">
          <p className="tx-2col-g75">
            Because he stranded in the territory of the Inuit Sam had to collect things on the way to keep warm, that is why his outfit is a matchup out of all kinds of things.
            After the concepts were finalized, I sculpted the model in ZBush for Sam and Ellie.
          </p>
        </Container>
        <Spacing top={50} />
        <Container className="mw-800px">
          <video className='img-fluid' autoPlay loop={true} muted={true}>
            <source src={"/GameArt/IntoTheCold/Ellie-msculpt01.mov" } type="video/webm" /> Your browser does not support the video tag.
          </video>
          <video className='img-fluid' autoPlay loop={true} muted={true}>
            <source src={"/GameArt/IntoTheCold/Sam-sculpt.mov" } type="video/webm" /> Your browser does not support the video tag.
          </video>
        </Container>
        <Container className="mw-600px">
          <p className="tx-2col-g75">
            I really love to design Characters and for the first time I had to do the concepts 
            for the environment as well. The challenge was to bring in some variety into the 
            white landscape with its snow and ice as far as the eyes can see. 
            Important was to create some unique formation so that the player would 
            have something to remember.
          </p>
        </Container>
        <Container className="mw-800px">
          <div style={{padding:'2px'}}>
            <Image fluid
              src="/GameArt/IntoTheCold/Icestructure.jpg" loading="lazy"/>
          </div>

          <ImageRow padding={2} rowItems={[
              {src: "/GameArt/IntoTheCold/iceandclouds.jpg"},
              {src: "/GameArt/IntoTheCold/IceBahn.jpg"},
            ]}
          />
          <ImageRow padding={2} rowItems={[
              {src: "/GameArt/IntoTheCold/Sledgepiste.jpg"},
              {src: "/GameArt/IntoTheCold/WaterfallCanyon.jpg"},
              {src: "/GameArt/IntoTheCold/WhalesUnderneath.jpg"},
            ]}
          />
          <ImageRow padding={2} rowItems={[
              // {src: "/"},
              // {src: "/"},
              {src: "/GameArt/IntoTheCold/BlueGlacier.jpg"},
            ]}
          />
        </Container>

        <Container className="mw-600px">
          <p className="tx-2col-g75">
            The most important items on the way was a good bag and a raft to cross the cold waters.
            Some other props was old chests and hips flasks and lanterns.
          </p>
        </Container>

        <Container className="mw-800px">
          <ImageRow padding={2} rowItems={[
              {src: "/GameArt/IntoTheCold/boxes.jpg"},
              {src: "/GameArt/IntoTheCold/DittyBag.jpg"},
            ]}
          />
          <ImageRow padding={2} rowItems={[
              {src: "/GameArt/IntoTheCold/flasks.jpg"},
              {src: "/GameArt/IntoTheCold/Kanus.jpg"},
            ]}
          />
        </Container>
        <Spacing top={50}/>

    </div>
  );
}
export default IntoTheCold;