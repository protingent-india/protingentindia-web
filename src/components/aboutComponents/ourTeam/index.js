'use client'
import { HarryCard, LeenaCard, SachinCard } from '@/components'
import { OurTeamData } from '@/staticData';

// ----------------------------------------------------------------

const OurTeam = () => {
    return (
        <div id="our-team" className='w-full flex flex-col items-center p-4 sm:p-8 !pt-12' >
            <p className='text-3xl uppercase font-bold text-primary-blue-color' >OUR TEAM</p>
            <div className='w-3/4 max-w-[400px] flex items-center justify-center gap-2 mt-4 mb-12' >
                <span className='w-[85%] h-[4px] bg-primary-blue-color' ></span>
                <span className='w-[10%] h-[4px] bg-primary-bg-color' ></span>
                <span className='w-[5%] h-[4px] bg-primary-blue-color' ></span>
            </div>
            <div className='sm:p-12 flex flex-col justify-center items-center gap-16 lg:gap-32 3xl:gap-40' >
                <HarryCard data={OurTeamData?.harry} />
                <LeenaCard data={OurTeamData?.leena} />
                <SachinCard data={OurTeamData?.sachin} />
            </div>
            <div className='w-full xl:max-w-[1000px] 2xl:max-w-[1300px] flex flex-col lg:flex-row justify-start relative gap-2' >
                <div className='w-full lg:w-fit rounded-lg overflow-hidden' >
                    <iframe
                        width="1000"
                        height="500"
                        className='!max-w-[100%] h-[200px] sm:h-[300px] lg:h-[500px] lg:w-[800px] 2xl:w-[1000px]'
                        src="https://www.youtube.com/embed/g9_oXo9j86M?si=AUYVEfBnm1i0jExh"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>
                <div className='lg:absolute top-[30%] right-0 w-full sm:w-fit h-fit font-semibold  bg-primary-green-color rounded-lg p-4 sm:p-6' >
                    <p className='uppercase text-primary-blue-color text-3xl sm:text-4xl leading-[3.5rem]' >PROTINGENT&apos;S <br /> ACCOLADES <br /> AND <br /> ACCOMPLISHMENTS</p>
                </div>
            </div>
        </div >
    )
}

export default OurTeam;