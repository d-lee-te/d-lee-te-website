import Image from "next/image";
import { IoDocumentText } from "react-icons/io5";

export default function MobileNavi() {
    return(
        <div className='fixed bottom-0 left-0 w-full bg-opacity-20 bg-neutral-900 text-white p-2 flex justify-center items-center'>
            <div className='flex space-x-12'>
                <a href="https://github.com/d-lee-te" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" 
                        height={40}
                        width={40}
                        alt="githubIcon" 
                        className='rounded-full aspect-square object-cover'
                    />
                </a>
                <a href="https://www.linkedin.com/in/d-lee-te/" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" 
                        height={40}
                        width={40}
                        alt="linkedinIcon"
                        className='rounded-full aspect-square object-cover object-left'
                    />
                </a>
                <a href='/resume.pdf' target="_blank" rel="noopener noreferrer">
                    <IoDocumentText className='w-10 h-10 rounded-full aspect-square object-cover'/>
                </a>
            </div>
        </div>

    );
}