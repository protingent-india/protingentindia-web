"use client";
import Image from 'next/image';

// --------------------------------------------------------------

const Logo = ({
    className
}: {
    className?: string
}) => {
    return (
        <Image
            src={"/img/protingentLogo.png"}
            width={330}
            height={0}
            alt='Protingent Logo'
            className={`${className}`}
        />
    )
}

export default Logo;