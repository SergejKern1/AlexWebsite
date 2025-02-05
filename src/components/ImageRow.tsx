import React, {useState, useEffect, useRef} from "react";

export interface ImageRowItem {
    src: string;
}
export interface ImageRowProps {
    rowItems: ImageRowItem[];
    onClick?: (src: string) => void;
    children?: React.ReactNode;
}

const ImageRow: React.FC<ImageRowProps> = ({ rowItems, onClick, children }) => {
    const [imageWidths, setImageWidths] = useState<number[]>([]); // Store original image widths
    const [imageHeight, setImageHeight] = useState<number>(0); // Store original image widths
    const [scaledImageWidths, setScaledImageWidths] = useState<number[]>([]); // Store scaled image widths
    const [scaledImageHeight, setScaledImageHeight] = useState<number>(0); // Store original image widths

    const containerRef = useRef<HTMLDivElement | null>(null); // Reference to the container

    useEffect(() => {
        let tempHeight = 0;
        // Function to get the original image width
        const getImageWidth = (src: string) => {
            return new Promise<number>((resolve) => {
                const img = new Image();
                img.onload = () => {
                    let ratio = 1;
                    if (tempHeight === 0)
                    {
                        tempHeight = img.height;
                        setImageHeight(img.height);
                    }
                    else if (tempHeight !== img.height)
                    {
                        ratio = tempHeight / img.height;
                        console.log(ratio);
                    }
                    resolve(img.width * ratio); // Resolve with the natural width of the image
                }
                img.src = src; // Load the image to get its width
            });
        };

        const calculateImageWidths = async () => {
            const widths = await Promise.all(rowItems.map((item) => getImageWidth(item.src)));
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
            const totalOriginalWidth = imageWidths.reduce((acc, width) => acc + width, 0);
            const scaleFactor = containerWidth / totalOriginalWidth;
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
    }, [imageHeight, imageWidths]);

    const childrenArray = children ? React.Children.toArray(children) : null;
    
    return (
      <div ref={containerRef} className="image-row-container fl-nowrap">
        {childrenArray ? childrenArray.map((child, index) => (
            <div key={index}
            style={{ width: scaledImageWidths[index] || "auto", height: scaledImageHeight || "auto" }} // Apply scaled width
            > {child} </div>
        )) :
        rowItems.map((gridItem, index) => (
            <img key={index}
              src={gridItem.src}
              alt={`Image ${index + 1}`}
              style={{ width: scaledImageWidths[index] || "auto", height: scaledImageHeight || "auto" }} // Apply scaled width
              onClick={() => onClick && onClick(gridItem.src)}
            />
        ))}
      </div>
    );
  };

export default ImageRow;