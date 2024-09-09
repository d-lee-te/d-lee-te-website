import Image from "next/image";

export default function Pfp() {
    return(
        <Image
            src='/dleete.jpg'
            height={500}
            width={500}
            alt="Pfp"
            className='rounded-full aspect-square object-cover border-8 border-white'
        />
    );
}