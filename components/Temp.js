"use client";

import { useState } from 'react';
import Image from 'next/image';
// import { FaShareAlt } from 'react-icons/fa'; // Share icon from react-icons

const Player = ({ profileUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  const songData = [
    { id: 1, song: 'Song 1', time: '3:15' },
    { id: 2, song: 'Song 2', time: '4:00' },
    { id: 3, song: 'Song 3', time: '2:45' },
    { id: 4, song: 'Song 4', time: '5:10' },
    { id: 5, song: 'Song 5', time: '3:50' },
  ];

  return (
    <div
      className="relative w-500 h-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div
        className={`absolute transition-transform duration-300 ease-in-out ${
          isHovered ? 'transform -translate-x-24 rotate-360 opacity-50' : 'transform translate-x-0 rotate-0 opacity-100'
        }`}
      >
        <div className="relative w-40 h-40 rounded-full overflow-hidden">
          <Image
            src='/dleete.jpg'
            alt="Profile Picture"
            width={450}
            height={450}
            className="object-cover w-full h-full"
          />
          {isHovered && (
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl"
            >
              {/* <FaShareAlt /> */}
            </a>
          )}
        </div>
      </div>

      {/* Table container */}
      <div
        className={`absolute top-0 right-0 transition-transform duration-300 ease-in-out ${
          isHovered ? 'transform translate-x-0' : 'transform translate-x-full'
        } bg-white p-4 rounded-lg shadow-lg w-60`}
      >
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Song</th>
              <th className="text-left">Time</th>
            </tr>
          </thead>
          <tbody>
            {songData.map((song) => (
              <tr key={song.id}>
                <td>{song.song}</td>
                <td>{song.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Player;
