import ParticleBackground from "@/components/ParticleBackground";
import Header from "@/components/Header";
import Navi from "@/components/Navi";
import Bio from "@/components/Bio";
import MobilePfp from "@/components/MobilePfp";
import MobileTypewriter from "@/components/MobileTypewriter";
import MobileNavi from "@/components/MobileNavi";
import MobileBio from "@/components/MobileBio";


export default function MobileComponent({ recentMusic }) {
    return (
        <div>
            <ParticleBackground className="fixed inset-0 w-full h-full -z-0"/>
            <main className="relative">
                <div className="-z-10">
                    <div className='flex flex-col items-center max-w-screen max-h-screen h-screen mt-10'>
                        <div className='flex flex-col items-center gap-3'>
                            <MobilePfp/>
                            <MobileTypewriter/>
                            <MobileBio/>
                        </div>
                    </div>
                    <MobileNavi/>
                </div>
            </main>
        </div>
    );
}
