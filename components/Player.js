"use client";

import { useState, useEffect } from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from 'next/image';

export default function Player({ recentMusic }) {
    const [isHovered, setIsHovered] = useState(false);
    const [recentSongs, setRecentSongs] = useState([]);
    const profileUrl = 'https://stats.fm/flarusnova';

    useEffect(() => {
        const sortedSongs = recentMusic.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        const topSongs = sortedSongs.slice(0, 5);
        setRecentSongs(topSongs);
      }, [recentMusic]);
    return(
        <div className="relative flex justify-center items-center w-96 h-96 text-7xl font-robotoMono" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>

            
            {/* Image container */}
            <div
            className={`
                absolute 
                animate-circle
                repeat-infinite
                ${isHovered ?
                     'animate-leftSlidePfp' : 'animate-rightSlidePfp'}
            `}>
                <div className="relative w-fit h-fit rounded-full overflow-hidden">
                    <Image
                      src='/dleete.jpg'
                      alt="Profile Picture"
                      width={200}
                      height={200}
                      className="rounded-full aspect-square object-cover border-8 border-white"
                    />
                    {isHovered && (
                      <a href={profileUrl} target="_blank" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl">
                        <FaExternalLinkAlt className="opacity-100 w-20 h-20"/>
                      </a>
                    )}
                </div>
            </div>

            {/* Table container */}
            <div className={`
            absolute 
            bg-transparent
            text-lg
            mt-16
            rounded-lg 
            shadow-lg 
            w-80
            top-0 
            right-0 
            border-l-8 
          border-gray-900
            ${isHovered ? 
                'animate-rightSlideTable' : 'animate-leftSlideTable'} 
            `}>
                <table className="w-auto ">
                  <thead>
                    <tr>
                      <th className="text-left px-4 py-1 border-b-4 border-gray-800">Recently Listened Songs</th>
                    </tr>
                  </thead>
                  <tbody>
                   {recentSongs.map((song) => (
                       <tr key={song._id}>
                         <td className='px-4 py-2 border-t-2 rounded-md border-gray-800'>
                           <a href={song.songUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-slate-500 transition-colors duration-25">
                             {song.songName}
                           </a>
                         </td>
                       </tr>
                    ))}
                  </tbody>
                </table>
            </div>
        </div>
    );
}