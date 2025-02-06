import ImageGrid from '../ImageGrid';
import {ImageLinkOverlayData} from '../ImageOverlay';

const CorporateDesign: React.FC = () => {
    const images:ImageLinkOverlayData[] = [
        {src: "CorporateDesign/cover-elayn-01.jpg", href:"corporate-design/elayn#from-heart-to-heart", hoverTitle: "From heart to heart", hoverSubtitle:"elayn", hoverText: "Logo, Cover, Social Media, Visitenkarte"},
        {src: "CorporateDesign/cover-elayn-02.jpg", href:"corporate-design/elayn#hay-hurray", hoverTitle: "Hay Hurray", hoverSubtitle:"elayn", hoverText: "Cover"},
        
        {src: "CorporateDesign/cover-ippen.jpg", href:"corporate-design/ippen#1", hoverTitle: "Ippen.Media", hoverSubtitle:"", hoverText: "Logo, Visitenkarte, Website, Templates"},
        {src: "CorporateDesign/cover-ingame.jpg", href:"corporate-design/ingame#1", hoverTitle: "ingame", hoverSubtitle:"", hoverText: "Visitenkarte, Templates, App Screenshots"},
       
        {src: "CorporateDesign/cover-adventskalender.png", href:"corporate-design/ingame#2", hoverTitle: "Adventskalender", hoverSubtitle:"ingame", hoverText: ""},
        
        {src: "CorporateDesign/cover-cosmi.jpg", href:"corporate-design/ingame#3", hoverTitle: "Maskottchen", hoverSubtitle:"ingame", hoverText: "Character Design, Merch"},
        {src: "CorporateDesign/cover-ingame-merch.jpg", href:"corporate-design/ingame#4", hoverTitle: "Merch", hoverSubtitle:"ingame", hoverText: "T-shirt, Pro-Pads"},
        {src: "CorporateDesign/cover-sergejkern.jpg", href:"corporate-design/sergej-kern", hoverTitle: "Sergej Kern", hoverSubtitle:"", hoverText: "Logo, Visitenkarte, Webdesign"},
        
        {src: "CorporateDesign/cover-Do-it-rtr.jpg", href:"corporate-design/do-it-rtr", hoverTitle: "Do It Retro", hoverSubtitle:"modotool", hoverText: "Logo, Social Media"},
        {src: "CorporateDesign/cover-goforit.jpg", href:"corporate-design/go-for-it", hoverTitle: "Go for It", hoverSubtitle:"Royal Media", hoverText: "User Interface, User Experience, Grafiken"},
        // {src: "CorporateDesign/us-wahl.png", href:"corporate-design/us-wahl", hoverTitle: "US Wahl", hoverSubtitle:"Merkur.de", hoverText: "Logo, Ads"},
        {src: "CorporateDesign/cover-flyer.jpg", href:"corporate-design/cover-flyer", hoverTitle: "Flyer", hoverSubtitle:"Handkunstwerk", hoverText: "Jin Shin Jyutsu"},
      ];
  return (
    <div className="overflow-hidden">
      <ImageGrid colClass='col-4 p-0' gridItems={images}></ImageGrid>
    </div>
  );
}

export default CorporateDesign;
