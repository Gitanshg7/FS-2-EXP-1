import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../../utils/useIntersectionObserver';
import './LazyImage.css';

const LazyImage = ({ src, alt, className = '', style = {} }) => {
    const [imageSrc, setImageSrc] = useState(null);
    const [imageRef, isVisible] = useIntersectionObserver({
        rootMargin: '200px',
        threshold: 0.01
    });
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (isVisible && !imageSrc) {
            setImageSrc(src);
        }
    }, [isVisible, src, imageSrc]);

    const handleImageLoad = () => {
        setIsLoaded(true);
    };

    return (
        <div ref={imageRef} className={`lazy-image-container ${className}`} style={style}>
            {!isLoaded && <div className="lazy-image-placeholder" />}
            {imageSrc && (
                <img
                    src={imageSrc}
                    alt={alt}
                    className={`lazy-image ${isLoaded ? 'loaded' : ''}`}
                    onLoad={handleImageLoad}
                />
            )}
        </div>
    );
};

export default LazyImage;
