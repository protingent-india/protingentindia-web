"use client"
import React from 'react'
import { ExpertCard } from '@/components';
import { talkToExpertData } from '@/utils/constants';

// -----------------------------------------------------------

const TalkToExpert = () => {
    return (
        <div className='w-full flex' >
            <div
                className='w-[43%] py-32 !bg-cover !bg-no-repeat'
                style={{ background: "url(/img/talkToExperBg.png)" }}
            >
                <div className='py-16 w-full h-full flex flex-col text-[64px] font-extrabold text-white text-center justify-center items-center' >
                    <p>
                        PROTINGENT INDIA
                    </p>
                    <p>
                        360°
                        <br />
                        Solution
                    </p>
                </div>
            </div>
            <div className='w-3/5 bg-bg-powder-blue flex items-center justify-center relative' >
                <div className='absolute flex justify-center items-center gap-[30px] right-[100px] w-fit' >
                    {talkToExpertData?.map((el, index) => (
                        <ExpertCard
                            title={el?.title}
                            desc={el?.desc}
                            img={el?.img}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div >
    )
}

export default TalkToExpert;