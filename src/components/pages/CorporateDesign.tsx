import { useState } from 'react';

import ImageGrid from 'components/ImageGrid';
import {ImageLinkOverlayData} from 'components/ImageOverlay';
import Popup from 'components/Popup';
import Elayn from 'components/popups/Corporate/Elayn';
import Ippen from 'components/popups/Corporate/Ippen';
import Ingame from 'components/popups/Corporate/Ingame';
import SergejKern from 'components/popups/Corporate/SergejKern';
import DoItRtr from 'components/popups/Corporate/DoItRtr';
import GoForIt from 'components/popups/Corporate/GoForIt';
import Flyer from 'components/popups/Corporate/Flyer';

const CorporateDesign: React.FC = () => {
    const [activePopup, setActivePopup] = useState<string | null>(null);
  
    const images:ImageLinkOverlayData[] = [
        {src: "CorporateDesign/cover-elayn-01.jpg", 
          href:"#from-heart-to-heart", 
          onClick: ()=> setActivePopup('elayn#from-heart-to-heart'),
          hoverTitle: "From heart to heart", hoverSubtitle:"elayn", hoverText: "Logo, Cover, Social Media, Visitenkarte"},
        
        {src: "CorporateDesign/cover-elayn-02.jpg", 
          href:"#hay-hurray", 
          onClick: ()=> setActivePopup('elayn#hay-hurray'),
          hoverTitle: "Hay Hurray", hoverSubtitle:"elayn", hoverText: "Cover"},
        
        {src: "CorporateDesign/cover-ippen.jpg", 
          href:"#ippen", 
          onClick: ()=> setActivePopup('ippen'),
          hoverTitle: "Ippen.Media", hoverSubtitle:"", hoverText: "Logo, Visitenkarte, Website, Templates"},
          
        {src: "CorporateDesign/cover-ingame.jpg", 
          href:"#ingame", 
          onClick: ()=> setActivePopup('ingame#ingame'),
          hoverTitle: "ingame", hoverSubtitle:"", hoverText: "Visitenkarte, Templates, App Screenshots"},
       
        {src: "CorporateDesign/cover-adventskalender.png", 
          href:"#adventskalender", 
          onClick: ()=> setActivePopup('ingame#adventskalender'),
          hoverTitle: "Adventskalender", hoverSubtitle:"ingame", hoverText: ""},
        
        {src: "CorporateDesign/cover-cosmi.jpg", 
          href:"#cosmi", 
          onClick: ()=> setActivePopup('ingame#cosmi'),
          hoverTitle: "Maskottchen", hoverSubtitle:"ingame", hoverText: "Character Design, Merch"},

        {src: "CorporateDesign/cover-ingame-merch.jpg", 
          href:"#t-shirts", 
          onClick: ()=> setActivePopup('ingame#t-shirts'),
          hoverTitle: "Merch", hoverSubtitle:"ingame", hoverText: "T-shirt, Pro-Pads"},

        {src: "CorporateDesign/cover-sergejkern.jpg", 
          href:"#sergej-kern", 
          onClick: ()=> setActivePopup('sergej-kern'),
          hoverTitle: "Sergej Kern", hoverSubtitle:"", hoverText: "Logo, Visitenkarte, Webdesign"},
        
        {src: "CorporateDesign/cover-Do-it-rtr.jpg", 
          href:"#do-it-rtr", 
          onClick: ()=> setActivePopup('do-it-rtr'),
          hoverTitle: "Do It Retro", hoverSubtitle:"modotool", hoverText: "Logo, Social Media"},

        {src: "CorporateDesign/cover-goforit.jpg", 
          href:"#go-for-it", 
          onClick: ()=> setActivePopup('go-for-it'),
          hoverTitle: "Go for It", hoverSubtitle:"Royal Media", hoverText: "User Interface, User Experience, Grafiken"},
        
        // {src: "CorporateDesign/us-wahl.png", href:"corporate-design/us-wahl", hoverTitle: "US Wahl", hoverSubtitle:"Merkur.de", hoverText: "Logo, Ads"},
        {src: "CorporateDesign/cover-flyer.jpg", 
          href:"#cover-flyer", 
          onClick: ()=> setActivePopup('cover-flyer'),
          hoverTitle: "Flyer", hoverSubtitle:"Handkunstwerk", hoverText: "Jin Shin Jyutsu"},
      ];
  return (
    <div className="overflow-hidden">
      { activePopup && 
        <Popup onClose={() => setActivePopup(null)} >
          {activePopup.startsWith('elayn') && <Elayn/>}
          {activePopup === "ippen" && <Ippen/>}
          {activePopup.startsWith('ingame') && <Ingame/>}
          {activePopup === "sergej-kern" && <SergejKern/>}
          {activePopup === "do-it-rtr" && <DoItRtr/>}
          {activePopup === "go-for-it" && <GoForIt/>}
          {activePopup === "cover-flyer" && <Flyer/>}
        </Popup>
      }

      <ImageGrid colClass='col-4 p-0' gridItems={images}></ImageGrid>
    </div>
  );
}

export default CorporateDesign;
