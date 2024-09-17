import Image from "next/image";
import { IoDocumentText } from "react-icons/io5";

export default function Navi() {
    return(
        <div className='flex justify-center items-center w-screen gap-20'>
            <div>
                <a href="https://github.com/d-lee-te" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" 
                        height={50}
                        width={50}
                        alt="githubIcon" 
                        className='rounded-full aspect-square object-cover'
                    />
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/d-lee-te/" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" 
                        height={50}
                        width={50}
                        alt="linkedinIcon"
                        className='rounded-full aspect-square object-cover object-left'
                    />
                </a>
            </div>
            <div>
                <a href='/resume.pdf' target="_blank" rel="noopener noreferrer">
                <IoDocumentText className='w-12 h-12 rounded-full aspect-square object-cover'/>
                </a>
            </div>
        </div>
    );
}