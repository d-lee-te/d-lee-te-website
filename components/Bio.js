"use client"

import useScroll from '@/hooks/useScroll';

export default function Bio() {

  const scrollAmount = useScroll();  

  const opacity = Math.max(scrollAmount / 1000, 0);
  const scale = Math.max(scrollAmount / 2, 0);

  return (
      <div
        className="flex bg-red-500 text-white border-2 border-white"
        style={{
          height: `${scale}px`,
          opacity,
          transition: 'all 0.1s ease-out',
        }}
      >
        {console.log(scrollAmount)}
        text
      </div>
  );
}
