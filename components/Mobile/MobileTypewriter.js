import { Typewriter } from "nextjs-simple-typewriter";

export default function MobileTypewriter() {
    return(
        <div className='text-4xl font-robotoMono text-neutral-900 font-bold font-outline-1'>
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
    );
}