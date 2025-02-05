import {Container, 
  // Row, Col, Form, Button, 
  Image
} from "react-bootstrap";
import ImageRow from "components/ImageRow";

import {Title, Subtitle, SectionTitle, Spacing} from "util/class-utils.tsx";
import { lazyPlaceholder } from "util/lazy.ts";
import ImageCarousel, { ArrowPosition } from "components/ImageCarousel";

const Okjo: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <div style={lazyPlaceholder(1500, 352)}>
        <Image fluid src="/GameArt/Okjo/header-childrenofokjo.png" style={{width: '100%'}} loading="lazy"/>
      </div>
      <Spacing top={50}/>
      <Container className="mw-800px">
        <Title>Okjo</Title>
        <Subtitle>Mindsprout</Subtitle>
      </Container>
      <Spacing top={50}/>

      <Container className="mw-600px">
        <p className="tx-2col-g15">
          Du startest in der Oberwelt an einem Lagerfeuer. Deine ersten Aufgaben bestehen darin, Ressourcen wie Holz, Steine und Pilze zu sammeln, um Werkzeuge herzustellen und dein Lager auszubauen. Während du deine Umgebung erkundest, entdeckst du Dungeons, die in eine unterirdische Welt voller Tempel führen – mit Fallen und verschiedenen Hindernissen, die es zu überwinden gilt.
          <br/>
          <br/>
          Zusammen mit zwei Freunden begann ich 2020 mit der Entwicklung des Spiels. Wir arbeiteten etwa ein Jahr daran, bevor wir es aus persönlichen Gründen pausierten. Doch das Projekt ist immer noch in meinem Kopf präsent.
          <br/>
          <br/>
          Meine Aufgabe bestand in der künstlerischen Leitung und dem Konzeptdesign, während sich der zweite Künstler um Charakterdesign und Animationen kümmerte. Mein Mann übernahm das Coding und Game Design.
        </p>
      </Container>
      <Spacing top={50}/>

      <Container className="mw-600px">
        <ImageRow padding={40}
          rowItems={[
            {src:"/GameArt/Okjo/bamboo.PNG"},
            {src:"/GameArt/Okjo/bandage_PLACEHOLDER.png"},
            {src:"/GameArt/Okjo/bed.png"},
            {src:"/GameArt/Okjo/leaf.PNG"},
          ]}
        />
      </Container>
      <Spacing top={50}/>
      <Container className="mw-800px">
        <SectionTitle> Flora of the surface world </SectionTitle>    
      </Container>
  
      <Spacing top={20}/>

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
      <Spacing top={50}/>
      <Container className="mw-800px">
        <SectionTitle> Dungeons and Temples </SectionTitle>      
      </Container>
      <Spacing top={50}/>

      <Container className="mw-600px">
        <p className="tx-2col-g15">
          Um den Schatz zu erreichen, muss der Spieler Hindernisse überwinden und Rätsel lösen. Hier sind einige von den Maya inspirierten Dungeon-Wände sowie Eindrücke aus dem Playtesting.
        </p>
        <ImageCarousel id="okjo-dungeon-carousel" previewCount={0} height={350} imgs={[
          {src:"/GameArt/Okjo/Environent-01.jpg"},
          {src:"/GameArt/Okjo/Environent-02.jpg"},
          {src:"/GameArt/Okjo/Environent-03.jpg"},
          {src:"/GameArt/Okjo/Environent-04.jpg"},
        ]} />
      </Container>
      <Spacing top={50}/>
      {/* TODO: width auto */}
      <ImageCarousel id="okjo-dungeon-carousel" 
        previewCount={0} height={320} 
        arrowPosition={ArrowPosition.Inside} imgs={[
          {src:"/GameArt/Okjo/tempeldoors-1536x490.png"},
          {src:"/GameArt/Okjo/templewalls-1536x490.png"},
        ]} />
      <Spacing top={50}/>

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
      <Spacing top={50}/>
      <Container className="mw-800px">
        <SectionTitle> User Interface </SectionTitle>      
      </Container>
      <Spacing top={50}/>

      <Container className="mw-600px">
        <p className="tx-2col-g15">
          Für das Crafting-System haben wir eine Benutzeroberfläche entwickelt, die sich in ein Schnellzugriffs-Radialmenü und Overlays an Lagerfeuern und Objekten aufteilt. Zusätzlich gibt es ein detailliertes Crafting-Menü innerhalb der späteren Werkbänke.
        </p>
      </Container>
      <Spacing top={50}/>

      <Container className="mw-800px">
        <ImageCarousel id="okjo-ui-carousel" previewCount={0} imgs={[
          {src:"/GameArt/Okjo/UI-slide-building.mp4", isVideo: true},
          {src:"/GameArt/Okjo/UI-slider-radial-menu.mp4", isVideo: true},
          {src:"/GameArt/Okjo/UI-slider-storage.mp4", isVideo: true},
        ]} />
        
      </Container>
      <Spacing top={50}/>

      <Container className="mw-800px">
        <SectionTitle> Prop Design </SectionTitle>
      </Container>

      <Spacing top={50}/>

      <Image fluid src="/GameArt/Okjo/chest-scaled.jpg" loading="lazy"/>
      <Image fluid src="/GameArt/Okjo/props_chart-1536x1152.png" loading="lazy"/>
      <Spacing top={50}/>
      <Container className="mw-800px">
        <SectionTitle> Enemy and Creature Designs </SectionTitle>
      </Container>
      <Spacing top={50}/>

      <Container className="mw-600px">
        <p className="tx-2col-g15">
          Auf der Weltkarte begegnet der Spieler vielen verschiedenen Spezies. Manche Kreaturen liefern Fleisch oder Materialien, andere hingegen wollen dich selbst zum Abendessen machen.
        </p>
        <Spacing top={50}/>
        <ImageCarousel id="okjo-enemy-carousel" previewCount={0} height={300} imgs={[
          {src:"/GameArt/Okjo/tadpole01.jpg"},
          {src:"/GameArt/Okjo/tadpole02.jpg"},
          {src:"/GameArt/Okjo/tadpole03.jpg"},
          {src:"/GameArt/Okjo/tadpole04.jpg"},
        ]} />
      </Container>
      <Spacing top={50}/>

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
      <Spacing top={50}/>

      <Container className="mw-600px">
        <p className="tx-2col-g15">
          Eine Idee, die wir während der Entwicklung hatten, war, dass der Spieler Menschen in der Wildnis finden konnte, die sich der Gemeinschaft anschließen. Sie konnten Beziehungen zueinander aufbauen, um den Stamm zu erweitern. Dabei musste man Eier und später ein Kind auf dem Rücken tragen und es vor Feinden schützen, bis es erwachsen war – ähnlich wie Yoshi Baby Mario trägt. 😊
        </p>
      </Container>
      <Spacing top={50}/>

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