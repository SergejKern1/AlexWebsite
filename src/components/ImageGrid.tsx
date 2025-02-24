import React from "react";
import Grid from "./Grid";
import ImageOverlay, {ImageLinkOverlayData} from "./ImageOverlay";
import "../css/image-overlay.scss";

export interface ImageGridProps {
    colClass?: string;
    gridItems: ImageLinkOverlayData[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ colClass = '', gridItems}) => {
  return (
    <Grid containerClass=""
        elementClass={colClass}>
        {gridItems.map((gridItem, index) => (
            <div key={index} className={`w-100 ${gridItem.hoverTitle ? 'img-hover-container':''}`}>
                <ImageOverlay src = {gridItem.src} 
                  className={gridItem.className}
                  href={gridItem.href}
                  onClick={gridItem.onClick}
                  hoverTitle={gridItem.hoverTitle}
                  hoverSubtitle={gridItem.hoverSubtitle}
                  hoverText={gridItem.hoverText}
                  />
            </div>
        ))}
    </Grid>
  );
}

export default ImageGrid;