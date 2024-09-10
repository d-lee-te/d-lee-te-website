import Image from "next/image";

export default function Navi() {
    console.log("bark");
    return(
        <div className='flex justify-center items-center w-screen border-2 border-gray-700'>
            <div>
                <Image
                    src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" 
                    height={50}
                    width={50}
                    alt="githubIcon" 
                    className=''
                />
            </div>
            <div>
                <Image
                    src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" 
                    height={50}
                    width={50}
                    alt="linkedinIcon"
                    className=''
                />
            </div>
            <div>
                <Image
                    src='/documenticon.svg'
                    height={50}
                    width={50}
                    alt="resumepdf"
                    className=''
                />
            </div>
        </div>
    );
}