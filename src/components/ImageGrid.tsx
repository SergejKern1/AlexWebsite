import React from "react";
import Grid from "./Grid";
import ImageOverlay, {ImageLinkOverlayData} from "./ImageOverlay";

export interface ImageGridProps {
    colClass?: string;
    gridItems: ImageLinkOverlayData[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ colClass = '', gridItems}) => {
  return (
    <Grid containerClass=""
        elementClass={colClass}>
        {gridItems.map((gridItem, ) => (
            <div className={`w-100 ${gridItem.hoverTitle ? 'img-hover-container':''}`}>
                <ImageOverlay src = {gridItem.src}
                  href={gridItem.href}
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