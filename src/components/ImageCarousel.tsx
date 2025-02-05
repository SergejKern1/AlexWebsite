import { useState, useEffect } from 'react';
import {Image} from "react-bootstrap";
import clsx from 'clsx';
import "css/image-carousel.scss";

export interface ImageData {
  src: string; 
  alt?: string;
  isVideo?: boolean;
}
export enum ArrowPosition{
  Inside,
  Outside
}
interface ImageCarouselProps {
  id: string;
  className?: string;
  imgs: ImageData[];
  previewCount?: number;
  arrowPosition?: ArrowPosition;
  height?: number;
  activeIndex?: number;
  onSelect?: (index: number) => void;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ id, className, imgs, 
  height = 400, previewCount = 2, arrowPosition = ArrowPosition.Outside, 
  activeIndex = 0, onSelect }) => {
  const [currentIndex, setCurrentIndex] = useState(activeIndex);
  
  useEffect(() => {
    setCurrentIndex(activeIndex);
  }, [activeIndex]);

  const preIdx = (i: number) => (currentIndex + imgs.length - i) % imgs.length;
  const nextIdx = (i: number) => (currentIndex + i) % imgs.length;
  const handlePrev = () => {
    const newIndex = preIdx(1);
    setCurrentIndex(newIndex);
    onSelect?.(newIndex);
  };

  const handleNext = () => {
    const newIndex = nextIdx(1);
    setCurrentIndex(newIndex);
    onSelect?.(newIndex);
  };
  const onIndicatorClick = (newIndex:number) => {
    setCurrentIndex(newIndex);
    onSelect?.(newIndex);
  };
  const arrowPos = arrowPosition === ArrowPosition.Inside 
  ? {'--arrow-position': "20px" } as React.CSSProperties
  : {'--arrow-position': "-50px" } as React.CSSProperties;

  return (
    <div id={id} className={clsx("ic-carousel-container", className)} style={{'--height': height+"px" } as React.CSSProperties}>
      <div className="ic-carousel-track-container" style={{'--height': height+"px" } as React.CSSProperties}>
        <div className="ic-carousel-track" style={{'--height': height+"px" } as React.CSSProperties}>
          {imgs.map((img, index) => {
              // console.log("index preIdx(1)", index, preIdx(1));
              
              const activityClass = clsx(
                  index === currentIndex && 'active',
                  previewCount > 0 && index === preIdx(1) && 'pre-1',
                  previewCount > 0 && index === nextIdx(1) && 'next-1',
                  previewCount > 1 && index === preIdx(2) && 'pre-2',
                  previewCount > 1 && index === nextIdx(2) && 'next-2',
                  'ic-carousel-item'
              );
              return (
                  <div key={index} className={activityClass} >
                      { img.isVideo && 
                        <video className="ic-carousel-image" style={{'--max-height': height+"px" } as React.CSSProperties} 
                          autoPlay loop={true} muted={true}>
                          <source src={img.src} type="video/webm" /> Your browser does not support the video tag.
                        </video>
                      }
                      { !img.isVideo && 
                        <img src={img.src} alt={img.alt} className="ic-carousel-image" style={{'--max-height': height+"px" } as React.CSSProperties} />
                      }
                  </div>
              )})
          }
        </div>
      </div>

      <div className="ic-carousel-button prev" onClick={handlePrev} style={arrowPos}>
        <Image src="/icons/arrow-left.svg" />
      </div>
      <div className="ic-carousel-button next" onClick={handleNext} style={arrowPos}>
        <Image src="/icons/arrow-right.svg" />
      </div>

      <div className="ic-carousel-indicators">
        <div className="ic-indicators-container">
          {imgs.map((_, index) => (
            <button key={index}
              className={`ic-indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => onIndicatorClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;