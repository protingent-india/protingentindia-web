import React from 'react'
import { CommonHeading, Divider, ProductivityCard } from '@/components';
import { ProductivityCardData } from '@/utils/constants';

// --------------------------------------------------------------

const WorkForceProductivity = () => {
    return (
        <div className='w-full flex flex-col gap-16' >
            <CommonHeading
                title="Struggling to Optimize Your Workforce Productivity?"
                desc="Many businesses overspend, under-deliver, or lose project efficiency. Protingent India bridges this gap with scalable, cost-effective, and accountable FTE solutions that give you a competitive edge without the overhead."
            />
            <div className='w-full flex justify-center items-center' >
                <div className='grid grid-cols-2 gap-2 w-full' >
                    {ProductivityCardData?.map((el, index) => (
                        <ProductivityCard
                            title={el.title}
                            desc={el.desc}
                            img={el.img}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WorkForceProductivity;