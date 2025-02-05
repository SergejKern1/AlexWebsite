import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import ImageRow from "../ImageRow";
import ImageCarousel from '../ImageCarousel.tsx';

const Sketchbook: React.FC = () => {
  const [showGallery, setShowGallery] = useState<boolean>(false); 
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const row01 = [ {src: "/Sketchbook/ahoiii.jpg"},  ];
  const row02 = [ 
    {src: "/Sketchbook/feldberg-haus.jpg"},
    {src: "/Sketchbook/werkstatt.jpg"},  
  ];
  const row03 = [ 
    {src: "/Sketchbook/kleine-bucht.jpg"},
    {src: "/Sketchbook/3-birken-am-see.jpg"},  
  ];
  const row04 = [ 
    {src: "/Sketchbook/marburg-rathaus.jpg"},
    {src: "/Sketchbook/mariabistdus.jpg"},  
  ];
  const row05 = [ 
    {src: "/Sketchbook/menschen I.jpg"},
    {src: "/Sketchbook/skulptur-skizze.jpg"},  
  ];
  const row06 = [ 
    {src: "/Sketchbook/auf-ins-kühle-nass.jpg"},
    {src: "/Sketchbook/brunnen-hamburg.jpg"},  
  ];
  const row07 = [ {src: "/Sketchbook/worpswede-aufdemKanal.jpg"},  ];
  const row08 = [ 
    {src: "/Sketchbook/javea-flowers.jpg"},
    {src: "/Sketchbook/javea-spain01.jpg"},  
    {src: "/Sketchbook/srand-javea.jpg"},  
  ];
  const row09 = [ {src: "/Sketchbook/cala-blanca-javea.jpg"},  ];
  const row10 = [ 
    {src: "/Sketchbook/auf-ins-kühle-nass.jpg"},
    {src: "/Sketchbook/gemütlich.jpg"},  
  ];
  const row11 = [ {src: "/Sketchbook/kohpangan.jpg"},  ];
  const allRows = row01.concat(row02, row03, row04, row05, row06, row07, row08, row09, row10, row11);
  
  const setImage = (imageSrc:string)=>{
    if (imageSrc === null)
      return;

    const idx = allRows.findIndex((item) => item.src === imageSrc);
    if (selectedIdx === idx) 
      return;
    setSelectedIdx(idx);
    setShowGallery(idx >= 0);
  };

  return (
    <div>
        {showGallery ? (
          <div className='gallery-overlay' >
              <ImageCarousel id="Sketchbook" imgs={allRows} 
                activeIndex={selectedIdx} onSelect={setSelectedIdx} />
            <Button onClick={() => setShowGallery(false)}>Close</Button>
          </div>) 
          : null}
        <ImageRow rowItems={row01} onClick={setImage} /> 
        <ImageRow rowItems={row02} onClick={setImage} /> 
        <ImageRow rowItems={row03} onClick={setImage}  /> 
        <ImageRow rowItems={row04} onClick={setImage}  /> 
        <ImageRow rowItems={row05} onClick={setImage}  /> 
        <ImageRow rowItems={row06} onClick={setImage}  /> 
        <ImageRow rowItems={row07} onClick={setImage}  /> 
        <ImageRow rowItems={row08} onClick={setImage}  /> 
        <ImageRow rowItems={row09} onClick={setImage}  /> 
        <ImageRow rowItems={row10} onClick={setImage}  /> 
        <ImageRow rowItems={row11} onClick={setImage}  /> 
    </div>
  );
}

export default Sketchbook;
