import React, {useState} from 'react';
import {Button} from "react-bootstrap";

import ImageRow from "components/ImageRow";
import {ImageData} from 'components/ImageCarousel.tsx';

import ImageGallery from 'components/ImageGallery';
import { useGallery } from 'components/ImageGalleryCtx';

const Sketchbook: React.FC = () => {

  const row01:ImageData[] = [ {src: "/Sketchbook/ahoiii.jpg"},  ];
  const row02:ImageData[] = [ 
    {src: "/Sketchbook/feldberg-haus.jpg"},
    {src: "/Sketchbook/werkstatt.jpg"},  
  ];
  const row03:ImageData[] = [ 
    {src: "/Sketchbook/kleine-bucht.jpg"},
    {src: "/Sketchbook/3-birken-am-see.jpg"},  
  ];
  const row04:ImageData[] = [ 
    {src: "/Sketchbook/marburg-rathaus.jpg"},
    {src: "/Sketchbook/mariabistdus.jpg"},  
  ];
  const row05:ImageData[] = [ 
    {src: "/Sketchbook/menschen I.jpg"},
    {src: "/Sketchbook/skulptur-skizze.jpg"},  
  ];
  const row06:ImageData[] = [ 
    {src: "/Sketchbook/auf-ins-kühle-nass.jpg"},
    {src: "/Sketchbook/brunnen-hamburg.jpg"},  
  ];
  const row07:ImageData[] = [ {src: "/Sketchbook/worpswede-aufdemKanal.jpg"},  ];
  const row08:ImageData[] = [ 
    {src: "/Sketchbook/javea-flowers.jpg"},
    {src: "/Sketchbook/javea-spain01.jpg"},  
    {src: "/Sketchbook/srand-javea.jpg"},  
  ];
  const row09:ImageData[] = [ {src: "/Sketchbook/cala-blanca-javea.jpg"},  ];
  const row10:ImageData[] = [ 
    {src: "/Sketchbook/auf-ins-kühle-nass.jpg"},
    {src: "/Sketchbook/gemütlich.jpg"},  
  ];
  const row11:ImageData[] = [ {src: "/Sketchbook/kohpangan.jpg"},  ];
  const allRows = row01.concat(row02, row03, row04, row05, row06, row07, row08, row09, row10, row11);
  const galleryCtx = useGallery(allRows);
  const setImage = (imageSrc:string) => galleryCtx.setImage(imageSrc);

  return (
    <div className="overflow-hidden">
        <ImageGallery ctx={galleryCtx} />

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
