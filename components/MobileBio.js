"use client"

export default function MobileBio() {

  return (
      <div className='flex flex-col items-center w-5/6'>
        <div
          className="flex flex-col gap-2 bg-neutral-900 text-white border-1 border-gray-950 bg-opacity-70 rounded-2xl h-5/5 overflow-hidden  pt-1 px-3">

          <p className = "font-bold text-medium text-center font-robotoMono">Hi, I&apos;m David!</p>
          <hr/>
          <p className = "text-xs text-center">
          🎓 I&apos;m a graduate from Georgia Tech with a B.S. in CS, and I graduated with specializations (aka threads 🧵) in Devices and Intelligence<br/><br/>
          I love building and learning things!<br/><br/>
          Below are links to my relevant work socials!<br/><br/>
          </p>
          </div>
        </div>
  );
}
