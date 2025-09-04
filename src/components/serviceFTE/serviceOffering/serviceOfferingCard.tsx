import React from 'react'

const ServiceOfferingCard = ({
    title,
    desc,
    img
}: {
    title: string,
    desc: string,
    img: string
}) => {
    return (
        <div
            style={{
                background: `url(${img})`,
            }}
            className='w-[90%] max-w-[568px] min-h-[568px] bg-center bg-no-repeat rounded-[5px] overflow-hidden hover:scale-3d'
        >
            <div
                style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%)"
                }}
                className='w-full bg-primary/90 flex flex-col items-center text-center gap-3 px-18 py-8 pb-14'
            >
                <p className='text-2xl text-white font-bold'>
                    {title}
                </p>
                <p className='text-white'>
                    {desc}
                </p>
            </div>
        </div>
    )
}

export default ServiceOfferingCard;