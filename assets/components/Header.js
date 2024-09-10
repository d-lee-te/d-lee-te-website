import Pfp from "@/assets/components/Pfp";
import { Typewriter } from "nextjs-simple-typewriter";


export default function Header() {
    return(
        <div className='flex flex-col items-center justify-items-center text-8xl'>
            <div>
                <Pfp/>
            </div>

            <div className="5xl">
                <Typewriter
                words={["test", "testing", "testing the test", "test test"]}
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