"use client"
import Image from 'next/image';

// -----------------------------------------------------

const IndustryCard = ({
    img,
    title
}: {
    img?: string,
    title?: string
}) => {
    return (
        <div className='flex flex-col gap-2 justify-between items-center min-h-[255px]' >
            <Image
                src={img || ""}
                height={200}
                width={200}
                alt=''
            />
            <p className='text-[28px] text-primary' >{title}</p>
        </div>
    )
}

export default IndustryCard;