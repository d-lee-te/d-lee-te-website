import { Typewriter } from "nextjs-simple-typewriter";
import Player from "@/components/Desktop/Player";


export default function Header({ recentMusic }) {
    return(
        <div className='flex flex-col items-center justify-center gap-1 mt-12 font-medium'>

            <div>
                <Player/>
            </div>

            <div className='text-7xl font-robotoMono text-neutral-900 font-bold font-outline-1'>
                <Typewriter
                words={['David Lee', 'David-Lee', 'dleete', 'd-lee-te']}
                startFrom='empty'

                typeSpeed={130}
                deleteSpeed={130}
                delaySpeed={3500}

                cursor
                cursorBlinking={true}
                
                loop={0}
                />
            </div>
        </div>
    );
}