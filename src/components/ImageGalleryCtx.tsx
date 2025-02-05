import React, { useState } from 'react';
import { ImageData } from './ImageCarousel';

export interface GalleryCtx {
    allRows: ImageData[];

    showGallery: boolean;
    setShowGallery: React.Dispatch<React.SetStateAction<boolean>>;

    selectedIdx: number;
    setSelectedIdx: React.Dispatch<React.SetStateAction<number>>;

    setImage: (imageSrc: string) => void;
    closeGallery: () => void;
}

export function useGallery(allRows: ImageData[]) : GalleryCtx {
    const [showGallery, setShowGallery] = useState<boolean>(false);
    const [selectedIdx, setSelectedIdx] = useState<number>(-1);

    const setImage = (imageSrc: string) => {
        if (imageSrc === null)
            return;

        const idx = allRows.findIndex((item) => item.src === imageSrc);

        if (selectedIdx === idx)
            return;
        setSelectedIdx(idx);
        setShowGallery(idx >= 0);
    };

    const closeGallery = () => {
        setSelectedIdx(-1);
        setShowGallery(false);
    };
    return { allRows, 
        showGallery, setShowGallery, 
        selectedIdx, setSelectedIdx, 
        setImage, closeGallery };
}