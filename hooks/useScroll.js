"use client";

import { useState, useEffect } from 'react';

export default function useScroll() {
    const [scrollAmount, setScrollAmount] = useState(0);

    useEffect(() => {
        const handleWheel = (event) => {
          setScrollAmount(prev => prev + event.deltaY);
        };
    
        window.addEventListener('wheel', handleWheel, { passive: true });
        return () => window.removeEventListener('wheel', handleWheel);
    }, []);

    if (scrollAmount > 1000) setScrollAmount(1000);
    if (scrollAmount < 0) setScrollAmount(0);

    return scrollAmount;
    
}