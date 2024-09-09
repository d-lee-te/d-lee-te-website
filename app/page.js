import Image from "next/image";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <body>
      <ParticleBackground className="fixed inset-0 w-full h-full -z-50"/>
      <main className="relative">
      
      <div className='flex flex-col -z-0'>
        <text>test</text>
        <text>test</text>
      </div>
    </main>
    </body>
    
  );
}
