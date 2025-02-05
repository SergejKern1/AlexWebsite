import React from "react";
import {Image} from "react-bootstrap";
import clsx from 'clsx';

export interface ImageLinkOverlayData {
    id?:string;
    className?:string;
    src: string, href?: string, 
    onClick?: () => void,
    hoverTitle?: string;
    hoverSubtitle?: string;
    hoverText?: string;
    style?: React.CSSProperties;
}

const ImageOverlay: React.FC<ImageLinkOverlayData> = ({ id, className, style, src, href, onClick, hoverTitle, hoverSubtitle, hoverText, ...rest}) => {
    const imgInner = () => {
        return (
            <div className={className}>
                <Image fluid src={src} alt={`Image ${hoverTitle?hoverTitle:src}`} 
                    className="w-100 p-0" />
                {hoverTitle && (
                <div className='overlay fl-col-j-center-al-i-center'>
                    <div><h1 className="img-ovrly-hov-title">{hoverTitle}</h1></div>
                    <div><h3 className="img-ovrly-hov-subtitle">{hoverSubtitle}</h3></div>
                    <div className="img-ovrly-hov-txt">{hoverText}</div>
                </div>
                )}
            </div>
            );
    }
    return (
        <div id={id} className={clsx("img-hover-container", className)} onClick={onClick} style={style} {...rest}>
            {href && ( <a href={href}> {imgInner()} </a> )}
            {!href && (imgInner())}
        </div>
    );
}

export default ImageOverlay;