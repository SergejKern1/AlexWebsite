import { useState, useEffect } from 'react';
import {Image} from "react-bootstrap";
import clsx from 'clsx';
import "./../css/image-carousel.scss";

interface ImageCarouselProps {
  imgs: { src: string; alt: string }[];
  activeIndex?: number;
  onSelect?: (index: number) => void;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ imgs, activeIndex = 0, onSelect }) => {
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

  return (
    <div className="ic-carousel-container">
      <div className="ic-carousel-track">
        {imgs.map((img, index) => {
            console.log("index preIdx(1)", index, preIdx(1));
            
            const activityClass = clsx(
                index === currentIndex && 'active',
                index === preIdx(1) && 'pre-1',
                index === nextIdx(1) && 'next-1',
                index === preIdx(2) && 'pre-2',
                index === nextIdx(2) && 'next-2',
                'ic-carousel-item'
            );
            return (
                <div key={index} className={activityClass} >
                    <img src={img.src} alt={img.alt} className="ic-carousel-image" />
                </div>
            )})
        }
      </div>

      <div className="ic-carousel-button prev" onClick={handlePrev}>
        <Image src="/icons/arrow-left.svg" />
      </div>
      <div className="ic-carousel-button next" onClick={handleNext}>
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