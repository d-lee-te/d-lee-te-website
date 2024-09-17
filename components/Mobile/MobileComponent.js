import MobilePfp from "@/components/Mobile/MobilePfp";
import MobileTypewriter from "@/components/Mobile/MobileTypewriter";
import MobileNavi from "@/components/Mobile/MobileNavi";
import MobileBio from "@/components/Mobile/MobileBio";


export default function MobileComponent() {
    return (
        <div>
            
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
