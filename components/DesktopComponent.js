import ParticleBackground from "@/components/ParticleBackground";
import Header from "@/components/Header";
import Navi from "@/components/Navi";
import Bio from "@/components/Bio";


export default function DesktopComponent({ recentMusic }) {
    return (
        <div>
            <ParticleBackground className="fixed inset-0 w-full h-full -z-0"/>
            <main className="relative">
                <div className="-z-10">
                    <div className='flex flex-col items-center gap-3 max-w-screen max-h-screen h-screen'>
                        <Header recentMusic={recentMusic}/>
                        <hr className='border-2 w-3/6 rounded-lg mx-auto border-neutral-300'/>
                        <Navi className=''/>
                        <hr className='border-2 w-2/6 rounded-lg mx-auto border-neutral-800'/>
                        <Bio className='mt-28'/>
                    </div>
                </div>
            </main>
        </div>
    );
}
