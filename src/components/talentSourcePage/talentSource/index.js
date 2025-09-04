'use client'
import Image from "next/image"
import { TalentDropDown } from "@/components"
import { talentSourcing } from "@/staticData"
import { aboutLeftSide, aboutRightSide, leftSideCircle } from "@/assest"

// ------------------------------------------------------

const TalentSource = () => {
    return (
        <section className='w-full z-20 bg-white relative' >
            <Image alt="" src={aboutLeftSide} height={'auto'} width={'auto'} className="absolute  h-[1%] lg:h-auto w-[10%] top-[0%] left-0 z-10" />
            <Image alt="" src={aboutRightSide} height={'auto'} width={'auto'} className="absolute h-[1%] lg:h-auto w-[10%] top-0 right-0 z-10" />
            <Image alt="" src={leftSideCircle} height={'auto'} width={'auto'} className="absolute h-[5%] lg:h-auto w-[10%] lg:w-auto top-[10%] left-0 z-10" />
            <div style={{ clipPath: 'polygon(38% 0, 100% 64%, 100% 100%, 0 100%, 0 57%)' }} className='absolute -top-16 w-full h-[5rem] bg-white' />
            <div className='w-full bg-white p-4 flex items-center flex-col ' >
                <p className='text-3xl text-primary-blue-color uppercase font-bold mb-10 text-center' >GLOBAL TALENT SOURCING | OUR CORE FUNCTIONS</p>
                <div className="w-full flex flex-col items-center gap-8" >
                    <TalentDropDown data={talentSourcing?.technicalSourcer} />
                    <TalentDropDown data={talentSourcing?.fullCycleRecruiter} />
                    <TalentDropDown data={talentSourcing?.BDE} />
                </div>
            </div>
        </section>
    )
}

export default TalentSource
