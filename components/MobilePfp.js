import Image from "next/image";

export default function MobilePfp() {
    return(
        <Image
            src='/dleete.jpg'
            height={200}
            width={200}
            alt="Pfp"
            className='rounded-full aspect-square object-cover border-2 border-white'
        />
    );
}