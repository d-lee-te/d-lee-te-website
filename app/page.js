import ParticleBackground from "@/components/ParticleBackground";
import Header from "@/components/Header";

export default function Home() {
  return (
    <body>
      <ParticleBackground className="fixed inset-0 w-full h-full -z-50"/>
      <main className="relative">
      
      <div className="flex items-center justify-center h-screen">
        <div className='flex flex-col -z-0'>
          <Header/>
        </div>
      </div>
    </main>
    </body>
    
  );
}
