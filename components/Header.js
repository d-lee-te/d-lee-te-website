import Pfp from "@/components/Pfp";
import { Typewriter } from "nextjs-simple-typewriter";


export default function Header() {
    return(
        <div className='flex flex-col items-center justify-items-center'>
            <Pfp/>
            <div className="text-6xl">
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