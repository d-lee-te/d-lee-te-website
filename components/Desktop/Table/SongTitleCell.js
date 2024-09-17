'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function SongTitleCell({ song, isPaused }) {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [animationDefinition, setAnimationDefinition] = useState(null);

  const containerRef = useRef(null);
  const textRef = useRef(null);
  const controls = useAnimation();


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

        setAnimationDefinition(animationDef);

        if (!isPaused) {
          controls.start(animationDef);
        }
      } else {
        controls.set({ x: 0 });
      }
    }
  }, [song.track.name, controls, isPaused]);


  useEffect(() => {
    if (isPaused) {
      controls.stop();
    } else if (animationDefinition) {
      controls.start(animationDefinition);
    }
  }, [isPaused, controls, animationDefinition]);


  return (
    <td
    className="px-4 py-2 border-t-2 border-gray-800"
    style={{
      width: '200px',
      maxWidth: '200px',
      overflow: 'hidden',
    }}>

      <div
      ref={containerRef}
      style={{
        width: '200px',
        maxWidth: '200px',
        overflow: 'hidden',
      }}>

        <motion.div
        ref={textRef}
        animate={controls}
        style={{
          whiteSpace: 'nowrap',
          display: 'inline-block',
        }}>

          <a href={song.track.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="text-white hover:text-slate-500 transition-colors duration-200">
            {song.track.name}
          </a>
        </motion.div>
      </div>
    </td>
  );
}
