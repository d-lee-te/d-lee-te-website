"use client"

import useScroll from '@/hooks/useScroll';
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

export default function Bio() {

  const scrollAmount = useScroll();  

  const opacity = Math.max(scrollAmount / 300, 0);
  const scale = Math.max(scrollAmount, 0);
  const arrowOpacity = 1 - opacity;

  return (
      <div className='flex flex-col items-center w-4/6'>
        <div className='flex flex-row items-center ml-20'>
          <FaChevronDown className='absolute' style={{opacity: arrowOpacity}}/>
          <p className='ml-14 text-sm font-bold' style={{opacity: arrowOpacity}}>Scroll!</p>
        </div>
        <div
          className="flex flex-col gap-4 bg-neutral-900 text-white border-1 border-gray-950 bg-opacity-70 rounded-2xl max-h-64 overflow-hidden p-8 pt-4 px-12"
          style={{
            height: `${scale}px`,
            opacity,
            transition: 'all 0.1s ease-out',
          }}
        >

          <p className = "font-bold text-2xl text-center font-robotoMono">Hi, I&apos;m David!</p>
          <p className = "text-center">
          🎓 I&apos;m a graduate from Georgia Tech with a B.S. in CS and this is my personal page!<br/>
          Specifically, I graduated with specializations (aka threads 🧵) in Devices and Intelligence, and I love building and learning things!<br/><br/>
          Here&apos;s some of the stuff I&apos;ve worked on!
          </p>

          <hr/>
          <div className='flex justify-center items-center gap-20'>
            <div>
              <a href="https://meep.dpvb.dev/" target="_blank" rel="noopener noreferrer">
                  <Image
                      src="/chromameep.gif" 
                      height={50}
                      width={50}
                      alt="githubIcon" 
                      className='rounded-full aspect-square object-cover'
                  />
              </a>
            </div>
          </div>
        </div>
      </div>
  );
}
