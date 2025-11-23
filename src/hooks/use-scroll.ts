'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook to track scroll position
 * Useful for navbar styling and scroll-based animations
 */
export function useScroll(threshold: number = 50) {
    const [scrolled, setScrolled] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
            setScrolled(position > threshold);
        };

        // Initial check
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [threshold]);

    return { scrolled, scrollPosition };
}
