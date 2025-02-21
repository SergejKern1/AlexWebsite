import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import ImageRow from "components/ImageRow";
import ImageCarousel from 'components/ImageCarousel.tsx';

import ImageGallery from 'components/ImageGallery';
import { useGallery } from 'components/ImageGalleryCtx';

const Illustration: React.FC = () => {
    const row01 = [
      {src: "Illustrations/LotusFlower.jpeg"},
      {src: "Illustrations/TIGER-fluid.jpg"},
      {src: "Illustrations/Handwaterfall.jpg"},
    ];
    const row02 = [
      {src: "Illustrations/JaneGoodall-square.png"},
      {src: "Illustrations/sadhu-square.png"},
    ];
    const row03 = [
      {src: "Illustrations/MysticDeer.jpg"},
      {src: "Illustrations/Water_native.png"},
    ];
    const row04 = [
      {src: "Illustrations/structure01.png"},
      {src: "Illustrations/small_island.png"},
      {src: "Illustrations/structure02.png"},
    ];
    const row05 = [
      {src: "Illustrations/buddhasKöstlichkeiten.png"},
      {src: "Illustrations/Lauchsuppe.png"},
    ];
    const row06 = [
      {src: "Illustrations/socialMediaAddiction.jpg"},
      {src: "Illustrations/spiritfox.jpg"},
      {src: "Illustrations/sergej.png"},
    ];
    const row07 = [
      {src: "Illustrations/Tanuki.png"},
      {src: "Illustrations/FlowingApe-outline.png"},
    ];
    const row08 = [
      {src: "Illustrations/shiva.png"},
      {src: "Illustrations/FaceSwap.png"},
      {src: "Illustrations/shakti.png"},
    ];
    const row09 = [
      {src: "Illustrations/littledemons-fish.jpg"},
      {src: "Illustrations/littledemons-02.jpg"},
    ];

  const allRows = row01.concat(row02, row03, row04, row05, row06, row07, row08, row09);
  const galleryCtx = useGallery(allRows);
  const setImage = (imageSrc:string) => galleryCtx.setImage(imageSrc);

  return (
    <div className="overflow-hidden">
      <ImageGallery ctx={galleryCtx} />

      <ImageRow rowItems={row01} onClick={setImage}></ImageRow>
      <ImageRow rowItems={row02} onClick={setImage}></ImageRow>
      <ImageRow rowItems={row03} onClick={setImage}></ImageRow>
      <ImageRow rowItems={row04} onClick={setImage}></ImageRow>
      <ImageRow rowItems={row05} onClick={setImage}></ImageRow>
      <ImageRow rowItems={row06} onClick={setImage}></ImageRow>
      <ImageRow rowItems={row07} onClick={setImage}></ImageRow>
      <ImageRow rowItems={row08} onClick={setImage}></ImageRow>
      <ImageRow rowItems={row09} onClick={setImage}></ImageRow>
    </div>
  );
}

export default Illustration;