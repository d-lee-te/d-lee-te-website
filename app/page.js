import DesktopComponent from "@/components/Desktop/DesktopComponent";
import MobileComponent from "@/components/Mobile/MobileComponent";
import ParticleBackground from "@/components/ParticleBackground";

export default async function Home() {
  
  return (
      <div>

        <ParticleBackground className="fixed inset-0 w-full h-full -z-0"/>

        <div className="lg:hidden">
          <MobileComponent/>
        </div>

        <div className="hidden lg:inline-block">
          <DesktopComponent/>
        </div>
        
      </div>
  );
}
