import React from 'react';
import ImageRow from "components/ImageRow";
import ImageGallery from 'components/ImageGallery';
import { useGallery } from 'components/ImageGalleryCtx';

const Illustration: React.FC = () => {
    const rowFlowy = [
      {src: "Illustrations/LotusFlower.jpg"},
      {src: "Illustrations/TIGER-fluid.jpg"},
      {src: "Illustrations/Handwaterfall.jpg"},
    ];
    
    const rowMantra = [
      {src: "Illustrations/mantrakarten/mantrakarte-eaglespirit.jpg"},
      {src: "Illustrations/mantrakarten/mantrakarte-fish.jpg"},
      {src: "Illustrations/mantrakarten/mantrakarte-river.jpg"},
    ];

    const rowVideo = [
      {src: "Illustrations/video/PaintingToilet.mp4", width: 1080, height: 1920},
      {src: "Illustrations/ingame_wall.jpg", width: 800, height: 600},
      {src: "Illustrations/video/ingame-painting.mp4", width: 1080, height: 1920},
    ];

    const rowSporttiere = [
      {src: "Illustrations/Sporttiere.jpg"},
    ];
    const rowCuteAnimals = [
      {src: "Illustrations/Patreon-Pakete-eichhörnchen.jpg"},
      {src: "Illustrations/Patreon-Pakete-gürteltier.jpg"},
      {src: "Illustrations/Patreon-Pakete-turtle.jpg"},
    ];
    const rowPortrait = [
      {src: "Illustrations/JaneGoodall-square.png"},
      {src: "Illustrations/sadhu-square.png"},
    ];
    const rowMystic = [
      {src: "Illustrations/MysticDeer.jpg"},
      {src: "Illustrations/Water_native.jpg"},
    ];
    const rowStructures = [
      {src: "Illustrations/structure01.png"},
      {src: "Illustrations/small_island.png"},
      {src: "Illustrations/structure02.png"},
    ];
    const rowFood = [
      {src: "Illustrations/buddhasKöstlichkeiten.png"},
      {src: "Illustrations/lauchsuppe.jpg"},
    ];
    const rowSocialSpiritImagination = [
      {src: "Illustrations/socialMediaAddiction.jpg"},
      {src: "Illustrations/spiritfox.jpg"},
      {src: "Illustrations/follow-your-imagination.png"},
    ];
    const rowAnimal = [
      {src: "Illustrations/Tanuki.png"},
      {src: "Illustrations/FlowingApe-outline.png"},
    ];
    const rowIndianGods = [
      {src: "Illustrations/shiva.png"},
      {src: "Illustrations/FaceSwap.png"},
      {src: "Illustrations/shakti.png"},
    ];
    const rowLittleDemons = [
      {src: "Illustrations/littledemons-fish.jpg"},
      {src: "Illustrations/littledemons-02.jpg"},
    ];

  const allRows = rowFlowy.concat(rowPortrait, rowMystic, rowStructures, rowFood, rowSocialSpiritImagination, rowAnimal, rowIndianGods, rowLittleDemons);
  const galleryCtx = useGallery(allRows);
  const setImage = (imageSrc:string) => galleryCtx.setImage(imageSrc);

  return (
    <div className="overflow-hidden">
      <ImageGallery ctx={galleryCtx} />

      <ImageRow rowItems={rowFlowy} onClick={setImage}></ImageRow>
      <ImageRow rowItems={rowMantra} onClick={setImage}></ImageRow>
      <ImageRow rowItems={rowVideo} onClick={setImage}>
        <video className='img-fluid' autoPlay loop={true} muted={true}>
          <source src="/Illustrations/video/PaintingToilet.mp4" type="video/webm" /> Your browser does not support the video tag.
        </video>
        <img className="img-fluid w-100"
              src="Illustrations/ingame_wall.jpg"
              alt="Image ingame_wall"
              style={{ objectFit: 'cover' }} // Apply scaled width
          />
        <video className='img-fluid' autoPlay loop={true} muted={true}>
          <source src="/Illustrations/video/ingame-painting.mp4" type="video/webm" /> Your browser does not support the video tag.
        </video>
      </ImageRow>
      <ImageRow rowItems={rowSporttiere} onClick={setImage}></ImageRow>
      <ImageRow rowItems={rowCuteAnimals} onClick={setImage}></ImageRow>
      <ImageRow rowItems={rowMystic} onClick={setImage}></ImageRow>
      <ImageRow rowItems={rowStructures} onClick={setImage}></ImageRow>
      <ImageRow rowItems={rowFood} onClick={setImage}></ImageRow>
      <ImageRow rowItems={rowSocialSpiritImagination} onClick={setImage}></ImageRow>
      <ImageRow rowItems={rowAnimal} onClick={setImage}></ImageRow>
      <ImageRow rowItems={rowIndianGods} onClick={setImage}></ImageRow>
      <ImageRow rowItems={rowLittleDemons} onClick={setImage}></ImageRow>
      <ImageRow rowItems={rowPortrait} onClick={setImage}></ImageRow>

    </div>
  );
}

export default Illustration;