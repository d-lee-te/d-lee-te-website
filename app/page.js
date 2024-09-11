import ParticleBackground from "@/components/ParticleBackground";
import Header from "@/components/Header";
import Navi from "@/components/Navi";

export default function Home() {
  return (
    <body>
      <ParticleBackground className="fixed inset-0 w-full h-full -z-0"/>
      <main className="relative">
        <div className="flex justify-center h-screen -z-10">
          <div className='flex flex-col gap-4'>
            <div className='mt-20'>
              <Header/>
            </div>
            <hr className='border-2 w-3/6 rounded-lg mx-auto'/>
            <div className=''>
              <Navi/>
              <hr className='border-2 w-2/6 rounded-lg mx-auto opacity-15 mt-32'/>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}
