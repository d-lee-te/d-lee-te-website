import Pfp from "@/components/Pfp";
import { Typewriter } from "nextjs-simple-typewriter";


export default function Header() {
    return(
        <div className='flex flex-col items-center justify-items-center text-6xl gap-4'>
            <div>
                <Pfp/>
            </div>
            <div>
                <Typewriter
                words={["test", "testing", "testing the test", "test test "]}
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