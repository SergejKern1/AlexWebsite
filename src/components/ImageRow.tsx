import React, {useState, useEffect, useRef} from "react";

export interface ImageRowItem {
    src: string;
    width?: number;
    height?: number;
}
export interface ImageRowProps {
    rowItems: ImageRowItem[];
    padding?: number;
    onClick?: (src: string) => void;
    children?: React.ReactNode;
}

const ImageRow: React.FC<ImageRowProps> = ({ rowItems, padding=0, onClick, children }) => {
    const [imageWidths, setImageWidths] = useState<number[]>([]); // Store original image widths
    const [imageHeight, setImageHeight] = useState<number>(0); // Store original image widths
    const [scaledImageWidths, setScaledImageWidths] = useState<number[]>([]); // Store scaled image widths
    const [scaledImageHeight, setScaledImageHeight] = useState<number>(0); // Store original image widths

    const containerRef = useRef<HTMLDivElement | null>(null); // Reference to the container

    useEffect(() => {
        let tempHeight = 0;
        // Function to get the original image width
        const getImageWidth = (src: string, width?: number, height?: number) => {
            return new Promise<number>((resolve) => {

                function resolveFunc(w:number, h:number){
                    let ratio = 1;
                    if (tempHeight === 0)
                    {
                        tempHeight = h;
                        setImageHeight(h);
                    }
                    else if (tempHeight !== h)
                    {
                        ratio = tempHeight / h;
                        console.log(ratio);
                    }
                    resolve(w * ratio); // Resolve with the natural width of the image
                }

                if (width && height)
                {
                    resolveFunc(width, height);
                    return;
                }

                const img = new Image();
                img.onload = () => {
                    resolveFunc(img.width, img.height);
                }
                img.src = src; // Load the image to get its width
            });
        };

        const calculateImageWidths = async () => {
            const widths = await Promise.all(rowItems.map((item) => getImageWidth(item.src, item.width, item.height)));
            console.log('setImageWidths', widths);
            setImageWidths(widths); // Store original image widths
        };

        // Initial calculation of image widths
        calculateImageWidths();
    }, [imageHeight, rowItems]);

    useEffect(() => {
        const handleResize = () => {
            if (!containerRef.current) 
                return;
        
            const containerWidth = containerRef.current.offsetWidth;
            const totalOriginalWidth = imageWidths.reduce((acc, width) => acc + width, 0) + (imageWidths.length-1) * padding;
            const scaleFactor = (containerWidth) / totalOriginalWidth;
            console.log('scaleFactor', scaleFactor);

            const newScaledWidths = imageWidths.map((width) => width * scaleFactor);
            setScaledImageWidths(newScaledWidths); // Store the scaled image widths
            setScaledImageHeight(imageHeight * scaleFactor);
        };

        // Recalculate on window resize
        window.addEventListener("resize", handleResize);
        handleResize(); // Initial calculation

        return () => {
        window.removeEventListener("resize", handleResize);
        };
    }, [imageHeight, imageWidths, padding]);

    const childrenArray = children ? React.Children.toArray(children) : null;
    const imgClassName = "img-fluid w-100";
    return (
      <div ref={containerRef} className="image-row-container fl-nowrap" style={{gap: padding+'px'}}>
        {childrenArray ? childrenArray.map((child, index) => (
            <div key={index}
            style={{ width: scaledImageWidths[index] || "auto", height: scaledImageHeight || "auto" }} // Apply scaled width
            > {child} </div>
        )) :
        rowItems.map((gridItem, index) => (
            <div key={index}
                style={{ width: scaledImageWidths[index] || "auto", height: scaledImageHeight || "auto"}} // Apply scaled width
            >
            <img className={imgClassName}
                src={gridItem.src}
                alt={`Image ${index + 1}`}
                onClick={() => onClick && onClick(gridItem.src)}
                style={{ objectFit: 'cover' }} // Apply scaled width
            />
            </div>
        ))}
      </div>
    );
  };

export default ImageRow;