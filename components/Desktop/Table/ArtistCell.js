'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function ArtistCell({ artists, isPaused }) {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [animationDef, setAnimationDef] = useState(null);

  const containerRef = useRef(null);
  const textRef = useRef(null);
  const controls = useAnimation();
  
  const artistLinks = artists.map((artist, index) => (
    <span key={artist.id}>
      <a href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="text-white hover:text-slate-500 transition-colors duration-200">
        {artist.name}
      </a>
      {index < artists.length - 1 && ', '}
    </span>
  ));


  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;

    if (container && text) {
      const isTextOverflowing = text.scrollWidth > container.clientWidth;
      setIsOverflowing(isTextOverflowing);

      if (isTextOverflowing) {
        const scrollDistance = text.scrollWidth - container.clientWidth;

        const animationDef = {
          x: [0, -scrollDistance, 0],
          transition: {
            x: {
              duration: (scrollDistance / 50) * 2,
              ease: 'linear',
              times: [0, 0.5, 1],
            },
            delay: 1,
            repeat: Infinity,
            repeatDelay: 1,
          },
        };

        setAnimationDef(animationDef);

        if (!isPaused) {
          controls.start(animationDef);
        }
      } else {
        controls.set({ x: 0 });
      }
    }
  }, [artists, controls, isPaused]);


  useEffect(() => {
    if (isPaused) {
      controls.stop();
    } else if (animationDef) {
      controls.start(animationDef);
    }
  }, [isPaused, controls, animationDef]);


  return (
    <td className="px-4 py-2 border-t-2 border-gray-800"
    style={{
      width: '180px',
      maxWidth: '180px',
      overflow: 'hidden',
    }}>

      <div
      ref={containerRef}
      style={{
        width: '180px',
        maxWidth: '180px',
        overflow: 'hidden',
      }}>

        <motion.div
        ref={textRef}
        animate={controls}
        style={{
          whiteSpace: 'nowrap',
          display: 'inline-block',
        }}>

          {artistLinks}

        </motion.div>
      </div>
    </td>
  );
}
