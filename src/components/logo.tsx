"use client";
import Image from 'next/image';

// --------------------------------------------------------------

const Logo = ({
    className
}: {
    className?: string
}) => {
    return (
        <div className={`${className} flex items-center`}>
            <Image
                src={"/img/protingentLogo.png"}
                width={330}
                height={44}
                alt='Protingent Logo'
                className="object-contain w-auto"
                priority
                style={{ height: 'inherit', maxHeight: '100%' }}
            />
        </div>
    )
}

export default Logo;