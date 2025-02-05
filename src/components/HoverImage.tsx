import { useState } from "react";
import { Image } from "react-bootstrap";

interface HoverImageProps {
    id?: string;
    className?: string;

    defaultSrc: string;
    hoverSrc: string;
    alt?: string;

    style?: React.CSSProperties;

}

const HoverImage: React.FC<HoverImageProps> = ({ id, className, defaultSrc, hoverSrc, alt, style, ...rest }) => {
    const [src, setSrc] = useState(defaultSrc);

    return (
        <Image fluid
            id={id}
            className={className}
            src={src}
            alt={alt}
            onMouseEnter={() => setSrc(hoverSrc)}
            onMouseLeave={() => setSrc(defaultSrc)}
            style={{ 
                transition: "0.3s ease-in-out",
                ...style
             }} // Optional smooth transition
            {...rest}
        />
    );
}

export default HoverImage;