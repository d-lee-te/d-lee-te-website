import Image from "next/image";

export default function Navi() {
    return(
        <div className='flex justify-center items-center w-screen gap-20'>
            <div>
                <Image
                    src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" 
                    height={50}
                    width={50}
                    alt="githubIcon" 
                    className='rounded-full aspect-square object-cover'
                />
            </div>
            <div>
                <Image
                    src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" 
                    height={50}
                    width={50}
                    alt="linkedinIcon"
                    className='rounded-full aspect-square object-cover object-left'
                />
            </div>
            <div>
                <Image
                    src='/documenticon.svg'
                    height={50}
                    width={50}
                    alt="resumepdf"
                    className='rounded-full aspect-square object-cover'
                />
            </div>
        </div>
    );
}