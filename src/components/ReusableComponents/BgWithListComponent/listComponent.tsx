import Icon from '@/components/icon';
import Image from 'next/image';
import React from 'react'

// ---------------------------------------------------------   

const ListComponent = ({
    title,
    desc,
    firstIndex
}: {
    title?: string,
    desc?: string,
    firstIndex?: boolean
}) => {
    return (
        <div className={`flex items-center gap-4 ${!firstIndex ? "border-t border-white pt-8" : ""}`}>
            <div className='h-[70px] min-w-[70px]'>
                <Image
                    src={"/settings.svg"}
                    height={70}
                    width={70}
                    alt=''
                />
            </div>
            <div className='text-2xl'>
                <p className='text-bg-parrot-green font-extrabold'>
                    {title}
                </p>
                <p className='text-white'>
                    {desc}
                </p>
            </div>
        </div>
    )
}

export default ListComponent;