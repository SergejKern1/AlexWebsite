import React from "react";
import {Carousel} from "react-bootstrap";
import "./../css/image-carousel.scss";

export interface ImageData {
    src: string;
    alt?: string;
}
export interface ImageCarouselProps {
    id: string,
    imgs: ImageData[];

    activeIndex?:number,
    onSelect?: (eventKey: number, event: Record<string, unknown> | null) => void;
}

const ImageCarousel : React.FC<ImageCarouselProps> = ({id, imgs, activeIndex, onSelect}) => {
    return(
        <Carousel slide fade controls indicators id={id} className="carousel-dark"
            activeIndex={activeIndex} onSelect={onSelect}>
            {
                imgs.map((child, ) => (
                    <Carousel.Item className="w-100">
                        <img src={child.src} className="carousel-img d-block-mx-auto" alt={child.alt} />
                    </Carousel.Item>
                )) 
            }
        </Carousel>
    );
}

export default ImageCarousel;