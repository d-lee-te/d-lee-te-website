import ParticleBackground from "@/components/ParticleBackground";
import Header from "@/components/Header";
import Navi from "@/components/Navi";

export default function Home() {
  return (
    <body>
      <ParticleBackground className="fixed inset-0 w-full h-full -z-0"/>
      <main className="relative">
      
      <div className="flex justify-center items-center h-screen -z-10">
        <div className='flex flex-col gap-3'>
          <Header className/>
          <Navi/>
        </div>
      </div>
    </main>
    </body>
    
  );
}
