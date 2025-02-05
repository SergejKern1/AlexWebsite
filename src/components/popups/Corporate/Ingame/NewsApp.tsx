import { Container, Image } from "react-bootstrap";

import { lazyPlaceholder } from "util/lazy.ts";
import { SectionTitle, Spacing } from "util/class-utils.tsx";

import ImageCarousel from "components/ImageCarousel.tsx";

const NewsApp: React.FC = () => {
  return (
    <Container className="mw-800px">
      <SectionTitle id="ingame-news-app"> Ingame News App </SectionTitle>
      <Spacing top={30} />
      <div className="mx-autoblock" style={{...lazyPlaceholder({width: 305, height: 304}), maxWidth: '150px'}}>
        <Image fluid src="/CorporateDesign/Ingame/app/ingame-appicon.png" style={{width: '150px'}} />
      </div>
      <Spacing top={50} />

      <div className="fl-j-center-al-i-center mx-auto mw-600px">
        <p className="mx-autoblock tx-2col-g15">
          Die ingame-App ist sowohl im App Store als auch im Google Play Store für Gaming- und
          Streaming-Enthusiasten verfügbar, die stehst über die neuestes News informiert bleiben
          möchten. Ich war verantwortlich für das App Icon habe die Advertising Screenshots erstellt und
          Werbeanzeigen entwickelt, die auf allen Ippen Media Newsportalen geschaltet wurden.
        </p>
      </div>
      <Spacing top={20} />
      <ImageCarousel id="ingame-news-app" imgs={[
        {src:"/CorporateDesign/Ingame/app/ING-App-Screenshot-Android-01.jpg"},
        {src:"/CorporateDesign/Ingame/app/ING-App-Screenshot-Android-02.jpg"},
        {src:"/CorporateDesign/Ingame/app/ING-App-Screenshot-Android-03.jpg"},
        {src:"/CorporateDesign/Ingame/app/ING-App-Screenshot-Android-04.jpg"},
        {src:"/CorporateDesign/Ingame/app/ING-App-Screenshot-Android-05.jpg"},
        {src:"/CorporateDesign/Ingame/app/ING-App-Screenshot-Android-06.jpg"},
      ]}/>
      <Spacing top={20} />
      <ImageCarousel id="ingame-news-app" previewCount={1} imgs={[
        {src:"/CorporateDesign/Ingame/app/ING-APP-Creative-1200x628-01.jpg"},
        {src:"/CorporateDesign/Ingame/app/ING-APP-Creative-1200x628-02.jpg"},
        {src:"/CorporateDesign/Ingame/app/ING-APP-Creative-1200x628-03.jpg"},
        {src:"/CorporateDesign/Ingame/app/ING-APP-Creative-1200x628-04.jpg"},
        {src:"/CorporateDesign/Ingame/app/ING-APP-Creative-1200x628-05.jpg"},
      ]}/>
    </Container>
  );
}

export default NewsApp;
