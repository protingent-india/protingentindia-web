"use client"
import Image from 'next/image';
import React from 'react'

// --------------------------------------------------------------

const ProductivityCard = ({
    title,
    img,
    desc
}: {
    title: string,
    img: string,
    desc: string
}) => {
    return (
        <div className='w-full min-h-[300px] max-w-[948px] flex' >
            <div className='w-2/5 h-full ' >
                <Image
                    src={img}
                    width={3000}
                    height={0}
                    alt=''
                    className='!h-full '
                />
            </div>
            <div className='w-3/5 flex justify-center items-center p-4 bg-bg-powder-blue' >
                <div className='w-4/5 flex flex-col gap-4' >
                    <p className='text-2xl font-bold text-primary px-4' >
                        {title}
                    </p>
                    <p className=' text-primary px-4 text-justify' >
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductivityCard;