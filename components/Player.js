"use client"

import { useState } from 'react';
import Image from 'next/image';

const Player= ({ imageUrl, profileUrl, songName, artistName }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      {/* Container for image and stats */}
      <div
        className={`absolute transition-transform duration-300 ease-in-out ${
          isHovered ? 'transform -translate-x-16' : 'transform translate-x-0'
        }`}
      >
        <div
          className="w-40 h-40 rounded-full overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src='/dleete.jpg'
            alt="Profile Picture"
            width={160}
            height={160}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Spotify Stats Display */}
      <div
        className={`transition-opacity duration-300 ease-in-out ${
          isHovered ? 'opacity-100' : 'opacity-0'
        } absolute top-0 left-44 bg-white p-4 rounded-lg shadow-lg`}
      >
        <a href={profileUrl} target="_blank" rel="noopener noreferrer">
          <h3 className="text-lg font-semibold">{songName}</h3>
          <p className="text-sm text-gray-600">{artistName}</p>
        </a>
      </div>
    </div>
  );
};

export default Player;
