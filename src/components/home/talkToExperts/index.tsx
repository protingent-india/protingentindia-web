"use client"
import React from 'react'
import { ExpertCard } from '@/components';
import { talkToExpertData } from '@/utils/constants';

// -----------------------------------------------------------

const TalkToExpert = () => {
    return (
        <div className='w-full flex flex-col xl:flex-row overflow-hidden' >
            <div
                className='w-full xl:w-[43%] h-[400px] xl:h-auto py-44 !bg-cover !bg-no-repeat !bg-center'
                style={{ background: "url(/img/talkToExperBg.png)" }}
            >
                <div className='py-16 w-full h-full flex flex-col font-extrabold text-white text-center justify-center items-center gap-2 [&>p]:leading-[75px]' >
                    <p className='text-4xl 3xl:text-5xl max-w-[80%] leading-[]' >
                        Empowering Businesses, Connecting the World
                    </p>
                </div>
            </div>
            <div className='w-full xl:w-3/5 bg-bg-powder-blue flex items-center justify-center relative p-2 lap:!py-16' >
                <div className='xl:absolute flex flex-col lg:flex-row justify-center items-center gap-[25px] 3xl:gap-[30px] right-4 3xl:right-[80px] w-fit py-4' >
                    {talkToExpertData?.map((el, index) => (
                        <ExpertCard
                            title={el?.title}
                            desc={el?.desc}
                            img={el?.img}
                            key={index}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </div >
    )
}

export default TalkToExpert;