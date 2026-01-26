import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for Intersection Observer
 * Used for lazy loading and deferred rendering
 * @param {Object} options - Intersection Observer options
 * @returns {Array} [ref, isIntersecting]
 */
export const useIntersectionObserver = (options = {}) => {
    const elementRef = useRef(null);
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasIntersected, setHasIntersected] = useState(false);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const defaultOptions = {
            root: null,
            rootMargin: '100px',
            threshold: 0.1,
            ...options
        };

        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);

            // Once it has intersected, keep it loaded
            if (entry.isIntersecting && !hasIntersected) {
                setHasIntersected(true);
            }
        }, defaultOptions);

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [options.root, options.rootMargin, options.threshold, hasIntersected]);

    return [elementRef, isIntersecting || hasIntersected];
};
