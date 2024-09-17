'use client';

import { useState, useEffect } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
import SongRow from './Table/SongRow';

export default function Player() {
  const [isHovered, setIsHovered] = useState(false);
  const [recentSongs, setRecentSongs] = useState([]);

  const profileUrl = 'https://stats.fm/flarusnova';


  useEffect(() => {
    async function fetchRecentSongs() {
      try {
        const response = await fetch('/api/spotify');
        const data = await response.json();

        if (data.error) {
          console.error('Error fetching Spotify data:', data.error);
          return;
        }

        const recentTracks = data.recentTracks;

        const sortedSongs = recentTracks.sort(
          (a, b) => new Date(b.played_at) - new Date(a.played_at)
        );

        const topSongs = sortedSongs.slice(0, 5);

        setRecentSongs(topSongs);
      } catch (error) {
        console.error('Failed to fetch recent songs:', error);
      }
    }

    fetchRecentSongs();
  }, []);


  return (
    <div
      className="relative flex justify-center items-center w-96 h-96 text-7xl font-robotoMono"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div
        className={`
          absolute
          animate-circle
          repeat-infinite
          ${isHovered ? 'animate-leftSlidePfp' : 'animate-rightSlidePfp'}
      `}>
        <div className="relative w-fit h-fit rounded-full overflow-hidden">

          <Image
            src="/dleete.jpg"
            alt="Profile Picture"
            width={500}
            height={500}
            className="rounded-full aspect-square object-cover border-8 border-white"
          />
          
          {isHovered && (
            <a href={profileUrl} target="_blank" rel="noopener noreferrer" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl">
              <FaExternalLinkAlt className="opacity-100 w-20 h-20" />
            </a>
          )}
        </div>
      </div>

      {/* Table container */}
      <div
        className={`
          absolute
          bg-transparent
          text-lg
          mt-16
          rounded-lg
          shadow-lg
          top-0
          right-0
          border-l-8
          border-gray-900
          ${isHovered ? 'animate-rightSlideTable' : 'animate-leftSlideTable'}
        `}
        style={{ width: '400px' }}
      >
        <table className="w-full table-fixed">

          <thead>
            <tr>
              <th className="text-left px-4 py-1 border-b-4 border-gray-800" style={{ width: '200px' }}>
                Song
              </th>
              <th className="text-left px-4 py-1 border-b-4 border-gray-800" style={{ width: '180px' }}>
                Artist
              </th>
            </tr>
          </thead>


          <tbody>
            {recentSongs.map((song, index) => (
              <SongRow key={index} song={song} isPaused={!isHovered} />
            ))}
          </tbody>
          
        </table>
      </div>
    </div>
  );
}
