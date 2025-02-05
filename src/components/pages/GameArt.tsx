import ImageGrid from '../ImageGrid';
import {ImageLinkOverlayData} from '../ImageOverlay';

const GameArt: React.FC = () => {
  const images:ImageLinkOverlayData[] = [
    {src: "/GameArt/cover-intothecold.png", href:"game-art/into-the-cold", hoverTitle: "Into the cold", hoverSubtitle:'Mooneye Studios'},
    {src: "/GameArt/cover-ptrush.jpg", href:"game-art/pitrush", hoverTitle: "Pitrush", hoverSubtitle: "The Tribe", hoverText: "Studentenprojekt HAW Hamburg"},
    {src: "/GameArt/Okjo_thumbnail-768x768.jpg", href:"game-art/okjo", hoverTitle: "Okjo", hoverSubtitle: "Mindsprout Games", hoverText: ""},
  ];
  return (
    <div>
      <ImageGrid colClass='col-4 p-0' gridItems={images}></ImageGrid>
    </div>
  );
}

export default GameArt;
