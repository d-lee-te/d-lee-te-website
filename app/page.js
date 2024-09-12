import ParticleBackground from "@/components/ParticleBackground";
import Header from "@/components/Header";
import Navi from "@/components/Navi";
import Bio from "@/components/Bio";

export default async function Home() {
  return (
    <div>
      <ParticleBackground className="fixed inset-0 w-full h-full -z-0"/>
      <main className="relative">
        <div className="-z-10">
        <div className='flex flex-col gap-4 max-w-screen max-h-screen h-screen'>
          <Header className=''/>
          <hr className='border-2 w-3/6 rounded-lg mx-auto'/>
          <Navi className=''/>
          <hr className='border-2 w-2/6 rounded-lg mx-auto opacity-15'/>
          <Bio className='mt-28 '/>
        </div>
        </div>
      </main>
    </div>
  );
}