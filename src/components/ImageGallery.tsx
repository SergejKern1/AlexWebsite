import React, { useEffect, useState } from 'react';
import ImageCarousel from './ImageCarousel';
import {GalleryCtx} from './ImageGalleryCtx.tsx';
import { Spacing } from 'util/class-utils.tsx';

interface ImageGalleryData{
    ctx : GalleryCtx;
} 
const ImageGallery : React.FC<ImageGalleryData> = ({ctx}) => {
    const useViewportHeight = () => {
        const [height, setHeight] = useState(window.innerHeight);
        useEffect(() => {
          const handleResize = () => setHeight(window.innerHeight);
          
          window.addEventListener("resize", handleResize);
          return () => window.removeEventListener("resize", handleResize);
        }, []);
      
        return height;
    };
    const viewportHeight = useViewportHeight();

    return (
        <div>
            {ctx.showGallery ? (
                <div className='gallery-overlay'>
                    <div className='gallery-close-bg z-0' onClick={ctx.closeGallery} />
                    <Spacing top={20} />
                    <ImageCarousel id="Sketchbook" className="z-1" imgs={ctx.allRows} height={viewportHeight - 200}
                        activeIndex={ctx.selectedIdx} onSelect={ctx.setSelectedIdx} />
                    <div className='l-x-center z-3' style={{ bottom: '50px' }}
                        onClick={ctx.closeGallery}>
                        <img src="/close.png" style={{ width: '50px' }} />
                    </div>
                </div>)
                : null}
        </div>
    );
}

export default ImageGallery;