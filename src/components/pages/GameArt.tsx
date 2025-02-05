import { useState } from 'react';

import ImageGrid from 'components/ImageGrid';
import {ImageLinkOverlayData} from 'components/ImageOverlay';
import Popup from 'components/Popup';
import IntoTheCold from '../popups/GameArt/IntoTheCold';
import Pitrush from '../popups/GameArt/Pitrush';
import Okjo from '../popups/GameArt/Okjo';

const GameArt: React.FC = () => {
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const images:ImageLinkOverlayData[] = [
    {src: "/GameArt/cover-intothecold.png", 
      className: "w-100",
      href:"#into-the-cold", 
      onClick: ()=> setActivePopup('into-the-cold'),
      hoverTitle: "Into the cold", hoverSubtitle:'Mooneye Studios'},

    {src: "/GameArt/cover-ptrush.jpg", 
      href:"#pitrush", 
      onClick: ()=> setActivePopup('pitrush'),
      hoverTitle: "Pitrush", hoverSubtitle: "The Tribe", hoverText: "Studentenprojekt HAW Hamburg"},
    {src: "/GameArt/Okjo_thumbnail-768x768.jpg", 
      onClick: ()=> setActivePopup('okjo'),
      href:"#okjo", 
      hoverTitle: "Okjo", hoverSubtitle: "Mindsprout Games", hoverText: ""},
  ];
  return (
    <div className="overflow-hidden">      
      { activePopup && 
        <Popup onClose={() => setActivePopup(null)} >
          {activePopup === "into-the-cold" && <IntoTheCold/>}
          {activePopup === "pitrush" && <Pitrush/>}
          {activePopup === "okjo" && <Okjo/>}
        </Popup>
      }

      <ImageGrid colClass='col-4 p-0' gridItems={images}></ImageGrid>
    </div>
  );
}

export default GameArt;
